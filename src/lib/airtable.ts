import type { Vehicle, EnergyType, GearboxType, BodyType } from "./vehicles";

// ─── Config ───────────────────────────────────────────────────
const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN!;
const BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;
const TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME || "Véhicules";
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;

// ─── Types Airtable ───────────────────────────────────────────
interface AirtableAttachment {
  id: string;
  url: string;
  filename: string;
  width?: number;
  height?: number;
  thumbnails?: {
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    full: { url: string; width: number; height: number };
  };
}

interface AirtableFields {
  Marque?: string;
  "Modèle"?: string;
  Version?: string;
  "Année"?: number;
  Prix?: number;
  "Kilométrage"?: number;
  Energie?: string;
  "Boîte"?: string;
  Type?: string; // carrosserie dans votre table
  Puissance?: number;
  Critair?: number;
  Localisation?: string;
  Photos?: AirtableAttachment[];
  Description?: string | { state: string; value: string };
  "Points forts"?: string | { state: string; value: string };
  Garantie?: number;
  "Dsiponibilité"?: boolean; // typo dans la table (on gère)
  "Sélectionner"?: string; // statut
}

interface AirtableRecord {
  id: string;
  fields: AirtableFields;
  createdTime: string;
}

interface AirtableResponse {
  records: AirtableRecord[];
  offset?: string;
}

// ─── Helpers ──────────────────────────────────────────────────

/** Génère un slug URL-friendly à partir de marque + modèle + année */
function generateSlug(brand: string, model: string, year: number): string {
  return `${brand}-${model}-${year}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // supprime accents
    .replace(/[^a-z0-9]+/g, "-")     // remplace caractères spéciaux par -
    .replace(/(^-|-$)/g, "");         // supprime les - au début/fin
}

/** Calcul automatique de la mensualité (crédit 60 mois, ~35% d'apport) */
function calculateMonthlyPayment(price: number): number {
  return Math.round(price / 91.6);
}

/** Normalise en minuscule pour les types enum */
function normalizeEnergy(value?: string): EnergyType {
  if (!value) return "essence";
  const lower = value.toLowerCase().trim();
  const map: Record<string, EnergyType> = {
    essence: "essence",
    diesel: "diesel",
    hybride: "hybride",
    electrique: "electrique",
    "électrique": "electrique",
  };
  return map[lower] || "essence";
}

function normalizeGearbox(value?: string): GearboxType {
  if (!value) return "manuelle";
  const lower = value.toLowerCase().trim();
  return lower === "automatique" ? "automatique" : "manuelle";
}

function normalizeBody(value?: string): BodyType {
  if (!value) return "berline";
  const lower = value.toLowerCase().trim();
  const map: Record<string, BodyType> = {
    berline: "berline",
    suv: "suv",
    utilitaire: "utilitaire",
    van: "van",
    moto: "moto",
    citadine: "citadine",
    compacte: "compacte",
    break: "break",
  };
  return map[lower] || "berline";
}

// ─── Mapping Airtable → Vehicle ───────────────────────────────

/** Extrait le texte d'un champ Airtable (gère les champs AI / rich text) */
function extractText(field: unknown): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  // Champ AI Airtable : { state: "generated", value: "..." }
  if (typeof field === "object" && field !== null && "value" in field) {
    return String((field as { value: unknown }).value || "");
  }
  return String(field);
}

function mapRecordToVehicle(record: AirtableRecord): Vehicle | null {
  const f = record.fields;

  // Skip les enregistrements sans marque (lignes vides)
  if (!f.Marque) return null;

  const brand = f.Marque.trim();
  const model = (f["Modèle"] || "").trim();
  const year = f["Année"] || 2024;
  const price = f.Prix || 0;

  // Extraire les URLs des photos Airtable
  const photos = (f.Photos || []).map((att) => att.url);
  const firstPhoto = photos[0] || "/images/placeholder-car.jpg";

  // Points forts : texte multiligne → tableau (gère aussi les champs AI)
  const highlights = extractText(f["Points forts"])
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return {
    id: record.id,
    slug: generateSlug(brand, model, year),
    brand,
    model,
    version: (f.Version || "").trim(),
    year,
    price,
    monthlyPayment: calculateMonthlyPayment(price),
    mileage: f["Kilométrage"] || 0,
    energy: normalizeEnergy(f.Energie),
    gearbox: normalizeGearbox(f["Boîte"]),
    body: normalizeBody(f.Type),
    power: f.Puissance || 0,
    critair: f.Critair || 1,
    location: (f.Localisation || "Showroom Juste à Rouler").trim(),
    type: "stock", // en standby → valeur par défaut
    label: "garanti", // en standby → valeur par défaut
    image: firstPhoto,
    images: photos.length > 0 ? photos : [firstPhoto],
    description: extractText(f.Description).trim(),
    highlights,
    inspectionScore: 90, // en standby → valeur par défaut
    warrantyMonths: f.Garantie || 0,
    available: f["Dsiponibilité"] ?? true,
  };
}

// ─── API publique ─────────────────────────────────────────────

/** Fetch tous les véhicules publiés depuis Airtable */
export async function fetchVehiclesFromAirtable(): Promise<Vehicle[]> {
  try {
    const allRecords: AirtableRecord[] = [];
    let offset: string | undefined;

    // Pagination Airtable (max 100 par requête)
    do {
      const params = new URLSearchParams({
        filterByFormula: `AND({Sélectionner}="Publié")`,
        pageSize: "100",
      });
      if (offset) params.set("offset", offset);

      const response = await fetch(`${API_URL}?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        },
        cache: "no-store",
      });

      if (!response.ok) {
        console.error(`Airtable API error: ${response.status} ${response.statusText}`);
        return [];
      }

      const data: AirtableResponse = await response.json();
      allRecords.push(...data.records);
      offset = data.offset;
    } while (offset);

    return allRecords
      .map(mapRecordToVehicle)
      .filter((v): v is Vehicle => v !== null && v.price > 0);
  } catch (error) {
    console.error("Erreur Airtable:", error);
    return [];
  }
}

/** Fetch un véhicule par son slug */
export async function fetchVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
  const vehicles = await fetchVehiclesFromAirtable();
  return vehicles.find((v) => v.slug === slug);
}
