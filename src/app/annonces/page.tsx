"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown, Car } from "lucide-react";
import { vehicles, getUniqueBrands } from "@/lib/vehicles";
import type { VehicleType, EnergyType, GearboxType, BodyType, LabelLevel } from "@/lib/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { cn } from "@/lib/utils";

const energyOptions: { value: EnergyType; label: string }[] = [
  { value: "essence", label: "Essence" },
  { value: "diesel", label: "Diesel" },
  { value: "hybride", label: "Hybride" },
  { value: "electrique", label: "Électrique" },
];

const gearboxOptions: { value: GearboxType; label: string }[] = [
  { value: "manuelle", label: "Manuelle" },
  { value: "automatique", label: "Automatique" },
];

const bodyOptions: { value: BodyType; label: string }[] = [
  { value: "citadine", label: "Citadine" },
  { value: "compacte", label: "Compacte" },
  { value: "berline", label: "Berline" },
  { value: "suv", label: "SUV" },
  { value: "van", label: "Van" },
  { value: "utilitaire", label: "Utilitaire" },
  { value: "moto", label: "Moto" },
];

const typeOptions: { value: VehicleType; label: string }[] = [
  { value: "stock", label: "En stock" },
  { value: "mandat", label: "Dépôt-vente" },
  { value: "budget", label: "Gamme Essentiel" },
];

const labelOptions: { value: LabelLevel; label: string }[] = [
  { value: "essentiel", label: "Essentiel" },
  { value: "garanti", label: "Garanti" },
  { value: "premium", label: "Premium" },
  { value: "sport", label: "Sport" },
];

const sortOptions = [
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "year-desc", label: "Plus récent" },
  { value: "mileage-asc", label: "Moins de km" },
];

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-jar-anthracite border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white font-medium focus:outline-none focus:border-jar-orange transition-colors cursor-pointer"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-jar-gray pointer-events-none" />
    </div>
  );
}

export default function AnnoncesPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [energy, setEnergy] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  const [labelFilter, setLabelFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("price-asc");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const brands = getUniqueBrands();

  const filtered = useMemo(() => {
    let result = vehicles.filter((v) => v.available);

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (v) =>
          v.brand.toLowerCase().includes(q) ||
          v.model.toLowerCase().includes(q) ||
          v.version.toLowerCase().includes(q)
      );
    }
    if (brand) result = result.filter((v) => v.brand === brand);
    if (energy) result = result.filter((v) => v.energy === energy);
    if (gearbox) result = result.filter((v) => v.gearbox === gearbox);
    if (body) result = result.filter((v) => v.body === body);
    if (type) result = result.filter((v) => v.type === type);
    if (labelFilter) result = result.filter((v) => v.label === labelFilter);
    if (maxPrice) result = result.filter((v) => v.price <= parseInt(maxPrice));

    // Sort
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "mileage-asc":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [search, brand, energy, gearbox, body, type, labelFilter, maxPrice, sort]);

  const activeFiltersCount = [brand, energy, gearbox, body, type, labelFilter, maxPrice].filter(Boolean).length;

  const clearFilters = () => {
    setBrand("");
    setEnergy("");
    setGearbox("");
    setBody("");
    setType("");
    setLabelFilter("");
    setMaxPrice("");
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-jar-black pt-24">
      {/* Hero header */}
      <div className="bg-jar-anthracite border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
              Nos <span className="text-jar-orange">véhicules</span>
            </h1>
            <p className="text-jar-gray-light text-lg max-w-2xl">
              Tous inspectés, labellisés, documentés. Chaque véhicule est accompagné
              de son Rapport Vérité. Zéro mauvaise surprise.
            </p>
          </motion.div>

          {/* Search bar */}
          <div className="mt-8 flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-jar-gray" />
              <input
                type="text"
                placeholder="Rechercher par marque, modèle, version..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-jar-black border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-jar-gray focus:outline-none focus:border-jar-orange transition-colors text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-jar-gray hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={cn(
                "flex items-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all",
                filtersOpen || activeFiltersCount > 0
                  ? "bg-jar-orange text-jar-black border-jar-orange"
                  : "bg-jar-black text-white border-white/10 hover:border-jar-orange"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtres
              {activeFiltersCount > 0 && (
                <span className="bg-jar-black text-jar-orange text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filters panel */}
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              <FilterSelect
                label="Marque"
                value={brand}
                onChange={setBrand}
                options={brands.map((b) => ({ value: b, label: b }))}
              />
              <FilterSelect
                label="Énergie"
                value={energy}
                onChange={setEnergy}
                options={energyOptions}
              />
              <FilterSelect
                label="Boîte"
                value={gearbox}
                onChange={setGearbox}
                options={gearboxOptions}
              />
              <FilterSelect
                label="Carrosserie"
                value={body}
                onChange={setBody}
                options={bodyOptions}
              />
              <FilterSelect
                label="Type d'offre"
                value={type}
                onChange={setType}
                options={typeOptions}
              />
              <FilterSelect
                label="Niveau label"
                value={labelFilter}
                onChange={setLabelFilter}
                options={labelOptions}
              />
              <div className="relative">
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full appearance-none bg-jar-anthracite border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white font-medium focus:outline-none focus:border-jar-orange transition-colors cursor-pointer"
                >
                  <option value="">Budget max</option>
                  <option value="15000">15 000 €</option>
                  <option value="20000">20 000 €</option>
                  <option value="30000">30 000 €</option>
                  <option value="40000">40 000 €</option>
                  <option value="50000">50 000 €</option>
                  <option value="75000">75 000 €</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-jar-gray pointer-events-none" />
              </div>
              <FilterSelect
                label="Trier par"
                value={sort}
                onChange={setSort}
                options={sortOptions}
              />
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-jar-orange hover:text-jar-orange-hover transition-colors"
                >
                  <X className="w-4 h-4" />
                  Tout effacer
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-jar-gray-light">
            <span className="text-white font-bold">{filtered.length}</span> véhicule{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
          </p>
          <div className="hidden md:flex items-center gap-2 text-xs text-jar-gray-light">
            <Car className="w-4 h-4 text-jar-orange" />
            Tous labellisés &bull; Rapport Vérité inclus
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Car className="w-16 h-16 text-jar-gray mx-auto mb-4" />
            <p className="text-xl font-bold text-white mb-2">
              Aucun véhicule trouvé
            </p>
            <p className="text-jar-gray-light mb-6">
              Essayez de modifier vos critères de recherche.
            </p>
            <button
              onClick={clearFilters}
              className="bg-jar-orange text-jar-black font-bold px-6 py-3 rounded-xl"
            >
              Effacer les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
