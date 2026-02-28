"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  QrCode,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const checkpoints = [
  "Historique complet vérifié",
  "Kilométrage certifié",
  "150+ points d'inspection",
  "État mécanique détaillé",
  "Points d'usure documentés",
  "QR code de traçabilité",
];

const levels = [
  {
    name: "Essentiel",
    description: "Inspection sans garantie",
    color: "border-jar-gray",
  },
  {
    name: "Garanti",
    description: "3 / 6 / 12 mois de garantie",
    color: "border-jar-orange",
    featured: true,
  },
  {
    name: "Sport",
    description: "Banc + contrôles spécifiques",
    color: "border-jar-gray",
  },
];

export function LabelSection() {
  return (
    <section className="py-24 bg-jar-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 rounded-full px-4 py-1.5 mb-6">
              <QrCode className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-bold text-jar-orange">
                Rapport Vérité
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-jar-black mb-6">
              Le Label{" "}
              <span className="text-jar-orange">Juste à Rouler</span>
            </h2>

            <p className="text-jar-gray text-lg leading-relaxed mb-8">
              Pas un simple autocollant. Un vrai standard de qualité qui
              inspecte, documente et certifie chaque véhicule. Le Rapport Vérité
              vous dit tout, sans filtre, avec un QR code de traçabilité unique.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {checkpoints.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-jar-orange flex-shrink-0" />
                  <span className="text-sm font-medium text-jar-black">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/label"
              className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-8 py-3.5 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200"
            >
              Découvrir le Label
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - niveaux label */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {levels.map((level) => (
              <div
                key={level.name}
                className={`relative rounded-2xl p-6 bg-white border-2 transition-all duration-300 ${
                  level.featured
                    ? "border-jar-orange shadow-lg shadow-jar-orange/10 scale-[1.02]"
                    : "border-gray-200 hover:border-jar-orange/30"
                }`}
              >
                {level.featured && (
                  <span className="absolute -top-3 left-6 bg-jar-orange text-jar-black text-xs font-bold px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-jar-black">
                      {level.name}
                    </h3>
                    <p className="text-jar-gray text-sm mt-1">
                      {level.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-jar-orange/10 rounded-xl flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-jar-orange" />
                  </div>
                </div>
              </div>
            ))}

            {/* Démo QR */}
            <div className="mt-4 bg-jar-black rounded-2xl p-8 text-center">
              <QrCode className="w-16 h-16 text-jar-orange mx-auto mb-4" />
              <p className="text-white font-bold text-lg mb-2">
                Rapport Vérité
              </p>
              <p className="text-jar-gray-light text-sm">
                Scannez le QR code sur le véhicule pour accéder à son rapport
                complet en temps réel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
