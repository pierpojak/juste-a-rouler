import { fetchVehiclesFromAirtable } from "@/lib/airtable";
import { vehicles as staticVehicles } from "@/lib/vehicles";
import VehicleDetailClient from "./VehicleDetailClient";

export async function generateStaticParams() {
  // Au build : on tente de récupérer les slugs depuis Airtable
  // Fallback sur les véhicules statiques si Airtable est inaccessible
  try {
    const airtableVehicles = await fetchVehiclesFromAirtable();
    if (airtableVehicles.length > 0) {
      return airtableVehicles.map((vehicle) => ({
        slug: vehicle.slug,
      }));
    }
  } catch {
    // Fallback silencieux
  }

  return staticVehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <VehicleDetailClient slug={slug} />;
}
