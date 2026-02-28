"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Sun,
  MapPin,
  Mountain,
  Tent,
  Calendar,
  TrendingUp,
  ArrowRight,
  Phone,
  Shield,
  Wrench,
  Smartphone,
  Star,
  Quote,
  CheckCircle,
  Users,
  ChevronRight,
} from "lucide-react";

/* ============================================================
   ROUE LIBRE BY JUSTE A ROULER  --  Lifestyle Van Sub-brand
   ============================================================ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

/* ---------- DATA ---------- */

const promiseBlocks = [
  {
    icon: Sun,
    title: "Vans aménagés prêts-à-partir",
    description:
      "Sourcés, équipés, labellisés, financés. Cuisine, couchage, douche, batterie autonome. Prêts à vivre, pas juste à rouler.",
  },
  {
    icon: Calendar,
    title: "Location courte durée",
    description:
      "De 3 à 21 jours, tarification tout compris, assurance incluse. Check-in en 10 minutes, remise des clés et c'est parti.",
  },
  {
    icon: TrendingUp,
    title: "Gestion déléguée",
    description:
      "Vous possédez un van ? Confiez-le nous. Location, entretien, assurance, nettoyage. Il rapporte pendant que vous ne l'utilisez pas.",
  },
];

const experiences = [
  {
    icon: MapPin,
    title: "Road trips recommandés",
    description: "Itinéraires sélectionnés, étapes testées, spots vérifiés. Partez serein.",
  },
  {
    icon: Users,
    title: "Partenaires de trajet",
    description: "Campings, spots nature, activités outdoor. Un réseau exclusif Roue Libre.",
  },
  {
    icon: Tent,
    title: "Équipement premium",
    description: "Cuisine complète, douche solaire, batterie lithium, auvent. Le confort partout.",
  },
  {
    icon: Shield,
    title: "Assurance & assistance incluses",
    description: "Couverture tous risques, assistance 24h/24, 0 franchise sur la route.",
  },
  {
    icon: Smartphone,
    title: "Check-in digital rapide",
    description: "État des lieux sur tablette, signature électronique. En 10 minutes, vous roulez.",
  },
  {
    icon: Wrench,
    title: "Entretien & nettoyage gérés",
    description: "Chaque van est inspecté, nettoyé, désinfecté entre chaque location. Impeccable.",
  },
];

const investmentSteps = [
  { step: "01", title: "Achat", description: "Choisissez votre van, neuf ou occasion. On vous guide sur les meilleurs modèles." },
  { step: "02", title: "Aménagement", description: "Notre réseau d'artisans aménage votre van selon le cahier des charges Roue Libre." },
  { step: "03", title: "Mise en location", description: "Le van rejoint la flotte Roue Libre : annonce, gestion, assurance, tout est géré." },
  { step: "04", title: "Revenus passifs", description: "Vous percevez les revenus locatifs. On gère tout, vous profitez." },
];

const vanCards = [
  {
    name: "California Explorer",
    type: "Volkswagen California T6.1",
    pricePerDay: 129,
    features: ["4 couchages", "Cuisine intégrée", "Toit relevable", "Douche extérieure"],
    available: true,
  },
  {
    name: "Horizon Libre",
    type: "Fiat Ducato L2H2 Aménagé",
    pricePerDay: 99,
    features: ["2 couchages", "Douche intérieure", "Panneau solaire", "Autonomie 3 jours"],
    available: true,
  },
  {
    name: "Nomade Premium",
    type: "Mercedes Sprinter 314",
    pricePerDay: 149,
    features: ["4 couchages", "Cuisine XL", "Chauffage diesel", "Auvent motorisé"],
    available: false,
  },
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function RoueLibrePage() {
  return (
    <div className="bg-jar-black">
      {/* ============================================================
          1. HERO
          ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/roue-libre-bg.png')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-jar-black/75" />
        {/* Warm gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-jar-orange/10 via-transparent to-jar-orange/5" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-jar-orange/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-jar-orange/6 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        {/* Compass visual element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
          <Compass className="w-[600px] h-[600px] text-jar-orange" strokeWidth={0.5} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/30 rounded-full px-5 py-2 mb-8">
              <Compass className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-bold text-jar-orange tracking-wide">
                Roue Libre by Juste à Rouler
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-4"
            >
              <span className="text-white">Roue </span>
              <span className="text-jar-orange">Libre</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl font-semibold text-white/60 mb-6"
            >
              by Juste à Rouler
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-4"
            >
              La route est à vous.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-jar-gray-light max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Vans aménagés, location, gestion déléguée. Partez l&apos;esprit libre.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#vans-disponibles"
                className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/25"
              >
                Explorer nos vans
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#investissement"
                className="border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                Investir dans un van
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-jar-orange rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          2. THE PROMISE
          ============================================================ */}
      <section className="py-24 bg-jar-offwhite relative overflow-hidden">
        {/* Subtle warm accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-jar-orange/5 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-jar-black mb-5">
                Pas juste un van.{" "}
                <span className="text-jar-orange">Une liberté clé en main.</span>
              </h2>
              <p className="text-jar-gray text-lg max-w-2xl mx-auto">
                Que vous rêviez de voyager, d&apos;investir ou simplement de changer
                d&apos;air, Roue Libre vous ouvre la route.
              </p>
            </motion.div>
          </div>

          {/* 3 big feature blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promiseBlocks.map((block, i) => (
              <motion.div
                key={block.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-8 border border-jar-black/5 hover:border-jar-orange/30 hover:shadow-xl hover:shadow-jar-orange/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-jar-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-jar-orange/20 transition-colors">
                  <block.icon className="w-7 h-7 text-jar-orange" />
                </div>
                <h3 className="text-xl font-extrabold text-jar-black mb-3">
                  {block.title}
                </h3>
                <p className="text-jar-gray text-sm leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. VAN EXPERIENCE
          ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-jar-anthracite via-jar-black to-jar-anthracite relative overflow-hidden">
        {/* Warm glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jar-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-jar-orange/5 rounded-full blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 rounded-full px-4 py-1.5 mb-6">
                <Mountain className="w-4 h-4 text-jar-orange" />
                <span className="text-sm font-bold text-jar-orange">
                  L&apos;expérience qui change tout
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
                L&apos;expérience{" "}
                <span className="text-jar-orange">Roue Libre</span>
              </h2>
              <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
                Bien plus qu&apos;une location. Un service complet pensé pour que
                chaque kilomètre soit un plaisir.
              </p>
            </motion.div>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-jar-orange/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-jar-orange/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <exp.icon className="w-6 h-6 text-jar-orange" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-jar-orange transition-colors">
                  {exp.title}
                </h3>
                <p className="text-jar-gray-light text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4. INVESTMENT
          ============================================================ */}
      <section id="investissement" className="py-24 bg-jar-offwhite relative overflow-hidden">
        {/* Warm accent */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-jar-orange/5 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 rounded-full px-4 py-1.5 mb-6">
                <TrendingUp className="w-4 h-4 text-jar-orange" />
                <span className="text-sm font-bold text-jar-orange">
                  Investissement van
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-jar-black mb-5">
                Investissez dans un van.{" "}
                <span className="text-jar-orange">On gère tout.</span>
              </h2>
              <p className="text-jar-gray text-lg max-w-3xl mx-auto">
                Achetez un van via Juste à Rouler, faites-le aménager, et
                intégrez-le à la flotte Roue Libre. Location, entretien,
                assurance, nettoyage : on s&apos;occupe de tout. Vous percevez les
                revenus.
              </p>
            </motion.div>
          </div>

          {/* Revenue simulation card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-jar-black to-jar-anthracite rounded-2xl p-8 sm:p-10 border border-jar-orange/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-jar-orange/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-jar-orange" />
                  Simulation de revenus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-extrabold text-jar-orange">15j</p>
                    <p className="text-sm text-jar-gray-light mt-1">loués par mois</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-extrabold text-jar-orange">120&euro;</p>
                    <p className="text-sm text-jar-gray-light mt-1">tarif journalier moyen</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-extrabold text-white">1 800&euro;</p>
                    <p className="text-sm text-jar-gray-light mt-1">revenus mensuels bruts</p>
                  </div>
                </div>
                <p className="text-xs text-jar-gray-light text-center">
                  Simulation indicative. Les revenus réels dépendent du taux d&apos;occupation, de la
                  saisonnalité et des charges. Détails sur demande.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {investmentSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative bg-white rounded-2xl p-7 border border-jar-black/5"
              >
                <span className="text-5xl font-extrabold text-jar-orange/15 absolute top-4 right-5">
                  {step.step}
                </span>
                <h4 className="text-lg font-extrabold text-jar-black mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-jar-gray leading-relaxed">
                  {step.description}
                </p>
                {i < investmentSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-jar-orange/40 z-10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-jar-orange/20"
            >
              Découvrir l&apos;investissement van
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          5. AVAILABLE VANS
          ============================================================ */}
      <section id="vans-disponibles" className="py-24 bg-gradient-to-br from-jar-black via-jar-anthracite to-jar-black relative overflow-hidden">
        {/* Warm ambiance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-jar-orange/5 rounded-full blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">
                Nos vans{" "}
                <span className="text-jar-orange">disponibles</span>
              </h2>
              <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
                Inspectés, aménagés, assurés. Choisissez votre compagnon de route.
              </p>
            </motion.div>
          </div>

          {/* Van cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {vanCards.map((van, i) => (
              <motion.div
                key={van.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-jar-orange/30 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-jar-orange/15 to-jar-orange/5 flex items-center justify-center">
                  <Compass className="w-20 h-20 text-jar-orange/40 group-hover:text-jar-orange/60 transition-colors" />
                  {!van.available && (
                    <div className="absolute top-3 right-3 bg-jar-black/80 text-jar-gray-light text-xs font-bold px-3 py-1 rounded-full">
                      Bientôt disponible
                    </div>
                  )}
                  {van.available && (
                    <div className="absolute top-3 right-3 bg-jar-orange text-jar-black text-xs font-bold px-3 py-1 rounded-full">
                      Disponible
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-jar-orange transition-colors">
                    {van.name}
                  </h3>
                  <p className="text-sm text-jar-gray-light mb-4">{van.type}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {van.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-jar-orange flex-shrink-0" />
                        <span className="text-sm text-jar-gray-light">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <span className="text-2xl font-extrabold text-jar-orange">
                        {van.pricePerDay}&euro;
                      </span>
                      <span className="text-sm text-jar-gray-light ml-1">/ jour</span>
                    </div>
                    {van.available && (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-sm font-bold text-jar-orange hover:text-jar-orange-hover transition-colors"
                      >
                        Réserver
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to annonces */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <Link
              href="/annonces"
              className="group inline-flex items-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-3.5 rounded-xl hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
            >
              Voir toutes nos annonces
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          6. TESTIMONIAL
          ============================================================ */}
      <section className="py-24 bg-jar-offwhite relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-jar-orange/5 rounded-full blur-[100px] -translate-y-1/2" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-jar-orange/20 mx-auto mb-6" />

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-jar-black leading-snug mb-8">
              &laquo; On a pris le van pour deux semaines sur la côte atlantique.
              Le check-in a duré dix minutes, tout était impeccable. On a dormi
              face à l&apos;océan, cuisiné au coucher du soleil. C&apos;est la
              première fois qu&apos;on est vraiment partis sans stress. On
              recommence cet été. &raquo;
            </blockquote>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="w-5 h-5 fill-jar-orange text-jar-orange"
                />
              ))}
            </div>

            <p className="font-extrabold text-jar-black text-lg">
              Claire & Antoine
            </p>
            <p className="text-sm text-jar-gray">
              Location van Roue Libre — California Explorer, 14 jours
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          7. FINAL CTA
          ============================================================ */}
      <section className="relative py-24 bg-jar-black overflow-hidden">
        {/* Warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-jar-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-jar-orange/8 rounded-full blur-[80px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-jar-orange/8 rounded-full blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeUp}>
              <Compass className="w-16 h-16 text-jar-orange mx-auto mb-6 opacity-80" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
            >
              Prêt à prendre{" "}
              <span className="text-jar-orange">la route</span> ?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-jar-gray-light text-lg mb-10 max-w-2xl mx-auto"
            >
              Location, investissement, road trip : quel que soit votre projet,
              l&apos;équipe Roue Libre est là pour vous accompagner. La route vous
              attend.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/25"
              >
                Louer un van
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:0800820820"
                className="flex items-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Appeler un conseiller
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
