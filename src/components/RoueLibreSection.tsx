"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Compass, Sun, MapPin, ArrowRight } from "lucide-react";

export function RoueLibreSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-jar-anthracite via-jar-black to-jar-anthracite">
      {/* Subtle warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-jar-orange/5 via-transparent to-jar-orange/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 rounded-full px-4 py-1.5 mb-6">
              <Compass className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-bold text-jar-orange">
                Roue Libre by Juste à Rouler
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              L&apos;aventure commence{" "}
              <span className="text-jar-orange">ici</span>
            </h2>

            <p className="text-jar-gray-light text-lg leading-relaxed mb-8">
              Vans aménagés prêts-à-partir, location courte durée, gestion
              déléguée pour les propriétaires. Roue Libre, c&apos;est la liberté
              sur quatre roues — labellisée, financée, assurée.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              {[
                { icon: Sun, label: "Vans aménagés", sub: "Prêts-à-vivre" },
                {
                  icon: MapPin,
                  label: "Location",
                  sub: "3 à 21 jours",
                },
                {
                  icon: Compass,
                  label: "Gestion déléguée",
                  sub: "Votre van rapporte",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-jar-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-jar-orange" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-jar-gray-light text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/roue-libre"
              className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-8 py-3.5 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200"
            >
              Explorer Roue Libre
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-jar-orange/20 to-jar-orange/5 border border-jar-orange/20 flex items-center justify-center">
              <div className="text-center p-8">
                <Compass className="w-24 h-24 text-jar-orange mx-auto mb-6 opacity-80" />
                <p className="text-3xl font-extrabold text-white mb-2">
                  Roue Libre
                </p>
                <p className="text-jar-gray-light text-lg">
                  by Juste à Rouler
                </p>
                <div className="mt-6 inline-flex items-center gap-2 bg-jar-orange/10 rounded-full px-5 py-2">
                  <span className="text-sm font-semibold text-jar-orange">
                    Dès 89€ / jour
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
