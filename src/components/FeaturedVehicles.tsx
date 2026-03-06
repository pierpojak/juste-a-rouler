"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Car, Loader2 } from "lucide-react";
import { useVehicles } from "@/hooks/useVehicles";
import { VehicleCard } from "@/components/VehicleCard";

export function FeaturedVehicles() {
  const { vehicles, loading } = useVehicles();

  // Show 6 featured vehicles (les plus récents d'abord)
  const featured = vehicles
    .filter((v) => v.available)
    .sort((a, b) => b.year - a.year || b.price - a.price)
    .slice(0, 6);

  return (
    <section className="py-24 bg-jar-anthracite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
              Véhicules <span className="text-jar-orange">disponibles</span>
            </h2>
            <p className="text-jar-gray-light text-lg">
              Tous inspectés, labellisés, accompagnés de leur Rapport Vérité.
            </p>
          </div>
          <Link
            href="/annonces"
            className="group flex items-center gap-2 text-jar-orange font-bold hover:text-jar-orange-hover transition-colors shrink-0"
          >
            Voir toutes les annonces
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-jar-orange animate-spin mb-3" />
            <p className="text-jar-gray-light text-sm">Chargement des véhicules...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/annonces"
            className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-8 py-3.5 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all"
          >
            <Car className="w-5 h-5" />
            Voir {vehicles.filter((v) => v.available).length} véhicules disponibles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
