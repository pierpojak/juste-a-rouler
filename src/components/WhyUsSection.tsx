"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Banknote,
  Wrench,
  Clock,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Label qualité propriétaire",
    description:
      "Chaque véhicule est inspecté, documenté et certifié selon notre référentiel strict. Pas un simple autocollant — un vrai standard.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    description:
      "Le Rapport Vérité vous dit tout : historique, état mécanique, points d'usure, kilométrage vérifié. Zéro zone d'ombre.",
  },
  {
    icon: Banknote,
    title: "Prix juste",
    description:
      "Ni low-cost ni premium inaccessible. Le bon prix pour le bon véhicule, avec un financement adapté à votre situation.",
  },
  {
    icon: Wrench,
    title: "Tout est géré",
    description:
      "Carte grise, assurance, garantie, financement, livraison. Le pack Repars et Roule couvre tout. Vous signez, vous repartez.",
  },
  {
    icon: Clock,
    title: "Gain de temps massif",
    description:
      "Plus de semaines à chercher, comparer, douter. On fait le travail pour vous. Vous validez, c'est bouclé.",
  },
  {
    icon: ThumbsUp,
    title: "Suivi après-vente",
    description:
      "La relation ne s'arrête pas à la vente. JAR Care vous accompagne sur l'entretien, le SAV et les prochains véhicules.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-jar-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-jar-black mb-4">
              Pourquoi{" "}
              <span className="text-jar-orange">nous choisir</span>
            </h2>
            <p className="text-jar-gray text-lg max-w-2xl mx-auto">
              On ne vend pas des voitures. On simplifie tout le parcours.
              Bienvenue dans l&apos;univers Juste à Rouler.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-transparent hover:border-jar-orange/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-jar-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-jar-orange/20 transition-colors">
                <reason.icon className="w-6 h-6 text-jar-orange" />
              </div>
              <h3 className="text-xl font-bold text-jar-black mb-3">
                {reason.title}
              </h3>
              <p className="text-jar-gray text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
