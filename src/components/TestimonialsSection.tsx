"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Acheteuse — Peugeot 3008",
    text: "J'avais peur d'acheter une occasion. Le Rapport Vérité m'a convaincue en 5 minutes. Tout était clair, transparent. Et le financement bouclé dans la foulée. Top.",
    rating: 5,
  },
  {
    name: "Karim D.",
    role: "Vendeur — Audi Q5",
    text: "J'ai confié ma voiture en dépôt-vente. Vendue en 12 jours, zéro galère. Ils ont géré les visites, la négo, les papiers. Je n'ai rien fait.",
    rating: 5,
  },
  {
    name: "Julien & Marie",
    role: "Location van — Roue Libre",
    text: "On a loué un van pour 10 jours dans le sud. Impeccable, tout était prêt. Le check-in a duré 10 minutes. On recommence cet été !",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
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
              Ils nous font{" "}
              <span className="text-jar-orange">confiance</span>
            </h2>
            <p className="text-jar-gray text-lg max-w-2xl mx-auto">
              Ce que nos clients disent de leur expérience avec Juste à Rouler.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-jar-offwhite rounded-2xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-jar-orange/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-jar-orange text-jar-orange"
                  />
                ))}
              </div>

              <p className="text-jar-black text-sm leading-relaxed mb-6">
                &quot;{t.text}&quot;
              </p>

              <div>
                <p className="font-bold text-jar-black">{t.name}</p>
                <p className="text-xs text-jar-gray">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
