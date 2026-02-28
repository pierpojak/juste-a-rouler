"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-jar-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/vehicules/range-rover-sport/main.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-jar-black via-jar-black/90 to-jar-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-jar-black via-transparent to-jar-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/30 rounded-full px-5 py-2 mb-8">
              <Shield className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-semibold text-jar-orange">
                Votre tiers de confiance automobile
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
              <span className="text-jar-orange">Juste</span>
              <span className="text-white"> à Rouler</span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl font-extrabold text-white/90 mb-6">
              Vous repartez, c&apos;est tout.
            </p>

            {/* Description */}
            <p className="text-lg text-jar-gray-light leading-relaxed mb-10 max-w-xl">
              Achat, vente, financement, assurance, entretien — tout est fait,
              tout est clair, tout est géré. Un seul interlocuteur, zéro friction.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/annonces"
                className="group bg-jar-orange text-jar-black font-extrabold px-8 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-jar-orange/20"
              >
                <Search className="w-5 h-5" />
                Voir les véhicules
              </Link>
              <Link
                href="/services"
                className="group border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200 flex items-center justify-center gap-2"
              >
                Découvrir nos services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-6 text-sm text-jar-gray-light"
          >
            {[
              "Véhicules labellisés & inspectés",
              "Rapport Vérité inclus",
              "Financement intégré",
              "Garantie mécanique",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-jar-orange rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-jar-orange rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
