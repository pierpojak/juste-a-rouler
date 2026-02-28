"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Shield, TrendingUp, Users } from "lucide-react";

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-jar-black pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              On ne voulait pas créer{" "}
              <span className="text-jar-orange">un garage de plus.</span>
            </h1>
            <p className="text-xl text-jar-gray-light leading-relaxed">
              On voulait créer l&apos;endroit où les gens n&apos;ont plus peur d&apos;acheter,
              plus envie de fuir quand ils vendent, et plus besoin de chercher ailleurs
              pour tout le reste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-jar-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black mb-6">
                Le problème qu&apos;on <span className="text-jar-orange">résout</span>
              </h2>
              <div className="space-y-4 text-jar-gray leading-relaxed">
                <p>
                  5,5 millions de véhicules d&apos;occasion changent de main chaque année
                  en France. Et pourtant, 60% des acheteurs déclarent avoir peur de se
                  faire arnaquer.
                </p>
                <p>
                  Les vendeurs particuliers perdent en moyenne 3 semaines à gérer des
                  visites, des négociations et des papiers. Les acheteurs passent des
                  nuits à douter.
                </p>
                <p>
                  Entre le particulier brut et la concession hors de prix, il n&apos;existait
                  rien. Pas de marque de confiance. Pas d&apos;interlocuteur unique. Pas de
                  parcours fluide.
                </p>
                <p className="font-bold text-jar-black">
                  Juste à Rouler est né pour combler exactement ce vide.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Target, label: "Mission", value: "Éliminer la méfiance automobile" },
                { icon: Eye, label: "Méthode", value: "Transparence radicale sur chaque véhicule" },
                { icon: Heart, label: "Promesse", value: "Vous repartez, c'est tout" },
                { icon: TrendingUp, label: "Ambition", value: "Devenir la référence de confiance VO" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 shadow-sm">
                  <item.icon className="w-8 h-8 text-jar-orange mb-3" />
                  <p className="text-xs text-jar-orange font-bold mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-jar-black">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black">
              Ce qu&apos;on <span className="text-jar-orange">défend</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Rigueur",
                text: "Chaque véhicule est inspecté sur 150+ points. Le label n'est pas un gadget marketing, c'est une preuve de méthode.",
              },
              {
                icon: Users,
                title: "Accessibilité",
                text: "Professionnel mais accessible. Pas de jargon, pas de blabla. On parle comme des gens normaux.",
              },
              {
                icon: Heart,
                title: "Accompagnement",
                text: "La relation ne s'arrête pas à la vente. Financement, assurance, entretien — on reste avec vous.",
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-jar-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-7 h-7 text-jar-orange" />
                </div>
                <h3 className="text-lg font-bold text-jar-black mb-2">{val.title}</h3>
                <p className="text-sm text-jar-gray leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-jar-black text-center">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Envie d&apos;en discuter ?
            </h2>
            <p className="text-jar-gray-light text-lg mb-8">
              Passez au showroom, appelez-nous, ou envoyez un message.
              On est là.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-extrabold px-8 py-4 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
