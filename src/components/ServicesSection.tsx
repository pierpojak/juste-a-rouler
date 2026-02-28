"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Car, FileSearch, CreditCard, Wrench, Compass, Shield, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Dépôt-vente & achat",
    description: "Vendez sans rien faire. Achetez en confiance. On gère tout de A à Z.",
    href: "/annonces",
  },
  {
    icon: FileSearch,
    title: "Label & Rapport Vérité",
    description: "150+ points inspectés, documentés, certifiés. Zéro zone d'ombre.",
    href: "/label",
  },
  {
    icon: CreditCard,
    title: "Banque",
    description: "Financement sur-mesure, courtage multi-partenaires. Tout en une visite.",
    href: "/banque",
  },
  {
    icon: Shield,
    title: "Assurance",
    description: "Comparez, changez, économisez. On s'occupe de la résiliation.",
    href: "/assurance",
  },
  {
    icon: Wrench,
    title: "Sérénité",
    description: "Abonnement entretien, suivi digital, priorité atelier. On reste avec vous.",
    href: "/serenite",
  },
  {
    icon: Compass,
    title: "Roue Libre",
    description: "Vans aménagés, location, gestion déléguée. L'aventure commence ici.",
    href: "/roue-libre",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-jar-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Un <span className="text-jar-orange">écosystème complet</span>
          </h2>
          <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
            Pas juste un garage. Un opérateur de confiance qui couvre chaque étape
            de votre vie automobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                className="group block bg-jar-anthracite rounded-2xl p-7 border border-white/5 hover:border-jar-orange/30 transition-all duration-300 h-full"
              >
                <div className="w-11 h-11 bg-jar-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5 text-jar-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-jar-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-jar-gray-light leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-jar-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  Découvrir
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-jar-orange font-bold hover:text-jar-orange-hover transition-colors"
          >
            Tout savoir sur nos services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
