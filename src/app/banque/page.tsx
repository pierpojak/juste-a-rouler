"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Banknote,
  Calculator,
  TrendingDown,
  Shield,
  Clock,
  CreditCard,
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  Handshake,
  PenLine,
} from "lucide-react";

/* ───────── animation helpers ───────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ───────── data ───────── */

const valueProps = [
  {
    icon: CreditCard,
    title: "Financement sur-mesure",
    description:
      "Nous construisons avec vous la solution de financement la plus adaptee a votre budget et a votre projet, grace a notre reseau de partenaires bancaires.",
    highlights: ["Taux negocies", "Aucun frais de dossier cache", "Reponse sous 48h"],
  },
  {
    icon: TrendingDown,
    title: "Rachat de credit",
    description:
      "Vous avez deja un credit en cours ? Nous analysons votre situation pour vous proposer un rachat a des conditions plus avantageuses.",
    highlights: ["Baisse de mensualites", "Simplification des credits", "Accompagnement complet"],
  },
  {
    icon: Banknote,
    title: "Reserve de tresorerie",
    description:
      "Conservez votre epargne et financez intelligemment votre vehicule. Une structuration financiere pensee pour votre tranquillite.",
    highlights: ["Tresorerie preservee", "Souplesse de remboursement", "Zero stress financier"],
  },
];

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Votre projet",
    description: "Vous nous partagez votre besoin, votre budget et vos contraintes. On ecoute avant de proposer.",
  },
  {
    icon: Calculator,
    number: "02",
    title: "Simulation",
    description: "Notre courtier interroge ses partenaires et vous presente les meilleures offres du marche.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Validation",
    description: "Vous choisissez l'offre qui vous convient. Aucune pression, aucun engagement avant votre accord.",
  },
  {
    icon: PenLine,
    number: "04",
    title: "Signature",
    description: "Signature electronique ou en agence, deblocage rapide des fonds. Vous repartez au volant.",
  },
];

const rachatBenefits = [
  "Reduction de vos mensualites actuelles",
  "Regroupement de plusieurs credits en un seul",
  "Taux renegocie grace a notre reseau partenaire",
  "Accompagnement personnalise de A a Z",
  "Aucun frais cache ni engagement premature",
  "Analyse gratuite de votre situation",
];

const tresoreriBenefits = [
  "Conservez votre capacite d'investissement",
  "Des mensualites calibrees sur votre rythme de vie",
  "Optimisation fiscale possible selon profil",
  "Liberte de remboursement anticipe",
];

const partners = [
  "BNP Paribas",
  "Cetelem",
  "Cofidis",
  "Franfinance",
  "CGI Finance",
  "CREDIPAR",
];

/* ═══════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════ */

export default function BanquePage() {
  /* ── simulator state ── */
  const [price, setPrice] = useState(20000);
  const [apport, setApport] = useState(3000);
  const [duration, setDuration] = useState(48);

  const monthlyPayment = ((price - apport) / duration) * 1.04;
  const totalCost = monthlyPayment * duration;
  const totalInterest = totalCost - (price - apport);

  /* ── format helpers ── */
  const fmt = (n: number) =>
    new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n);
  const fmtDecimal = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);

  return (
    <div className="min-h-screen bg-jar-black pt-24">
      {/* ═══════════════════════════════════
          1. HERO
          ═══════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-jar-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-jar-orange/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 text-jar-orange text-sm font-bold px-4 py-1.5 rounded-full mb-6"
            >
              <Banknote className="w-4 h-4" />
              Courtage multi-partenaires
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Facilitez votre achat.{" "}
              <span className="text-jar-orange">Structurez votre projet.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-jar-gray-light text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              Des solutions de financement intelligentes, negociees aupres de
              nos partenaires bancaires, pour que chaque projet automobile
              devienne accessible et serein.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#simulateur"
                className="group bg-jar-orange text-jar-black font-extrabold px-8 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-jar-orange/20"
              >
                <Calculator className="w-5 h-5" />
                Simuler mon financement
              </a>
              <a
                href="tel:+33600000000"
                className="flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Parler a un conseiller
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          2. VALUE PROPOSITIONS
          ═══════════════════════════════════ */}
      <section className="py-20 bg-jar-anthracite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Trois piliers pour{" "}
              <span className="text-jar-orange">votre projet</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Chaque situation est unique. Notre approche multi-partenaires nous
              permet de trouver la solution adaptee a la votre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group bg-jar-black rounded-2xl p-8 border border-white/5 hover:border-jar-orange/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-jar-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <prop.icon className="w-7 h-7 text-jar-black" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-jar-orange transition-colors">
                  {prop.title}
                </h3>
                <p className="text-jar-gray-light text-sm leading-relaxed mb-5">
                  {prop.description}
                </p>
                <ul className="space-y-2">
                  {prop.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-jar-orange shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          3. FINANCING SIMULATOR
          ═══════════════════════════════════ */}
      <section id="simulateur" className="py-20 bg-jar-black scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Simulez votre{" "}
              <span className="text-jar-orange">financement</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Obtenez une estimation instantanee de vos mensualites.
              Simulation indicative, sans engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-jar-anthracite rounded-3xl border border-white/10 overflow-hidden"
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: controls */}
              <div className="md:col-span-3 p-8 md:p-10 space-y-8">
                {/* Price slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-white">
                      Prix du vehicule
                    </label>
                    <span className="text-jar-orange font-extrabold text-lg">
                      {fmt(price)} &euro;
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={80000}
                    step={500}
                    value={price}
                    onChange={(e) => {
                      const newPrice = Number(e.target.value);
                      setPrice(newPrice);
                      if (apport >= newPrice) setApport(Math.max(0, newPrice - 1000));
                    }}
                    className="w-full h-2 bg-jar-black rounded-full appearance-none cursor-pointer accent-jar-orange [&::-webkit-slider-thumb]:bg-jar-orange [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/20"
                  />
                  <div className="flex justify-between text-xs text-jar-gray mt-1">
                    <span>5 000 &euro;</span>
                    <span>80 000 &euro;</span>
                  </div>
                </div>

                {/* Apport slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-bold text-white">
                      Apport personnel
                    </label>
                    <span className="text-jar-orange font-extrabold text-lg">
                      {fmt(apport)} &euro;
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={Math.max(0, price - 1000)}
                    step={500}
                    value={apport}
                    onChange={(e) => setApport(Number(e.target.value))}
                    className="w-full h-2 bg-jar-black rounded-full appearance-none cursor-pointer accent-jar-orange [&::-webkit-slider-thumb]:bg-jar-orange [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/20"
                  />
                  <div className="flex justify-between text-xs text-jar-gray mt-1">
                    <span>0 &euro;</span>
                    <span>{fmt(Math.max(0, price - 1000))} &euro;</span>
                  </div>
                </div>

                {/* Duration select */}
                <div>
                  <label className="block text-sm font-bold text-white mb-3">
                    Duree du financement
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[24, 36, 48, 60].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                          duration === d
                            ? "bg-jar-orange text-jar-black shadow-lg shadow-jar-orange/20"
                            : "bg-jar-black text-white border border-white/10 hover:border-jar-orange/50"
                        }`}
                      >
                        {d} mois
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: result */}
              <div className="md:col-span-2 bg-jar-black p-8 md:p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-white/10">
                <p className="text-sm font-semibold text-jar-gray-light mb-2">
                  Votre mensualite estimee
                </p>
                <div className="text-5xl md:text-6xl font-extrabold text-jar-orange mb-1">
                  {fmtDecimal(monthlyPayment)}
                  <span className="text-2xl text-jar-gray-light ml-1">&euro;</span>
                </div>
                <p className="text-xs text-jar-gray mb-6">/ mois</p>

                <div className="w-full space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-jar-gray-light">Montant finance</span>
                    <span className="text-white font-bold">
                      {fmt(price - apport)} &euro;
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-jar-gray-light">Cout total estime</span>
                    <span className="text-white font-bold">
                      {fmt(Math.round(totalCost))} &euro;
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-jar-gray-light">Interets estimes</span>
                    <span className="text-jar-orange font-bold">
                      {fmt(Math.round(totalInterest))} &euro;
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-jar-orange text-jar-black font-extrabold px-6 py-4 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-jar-orange/20"
                >
                  Obtenir ma simulation personnalisee
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <p className="text-[11px] text-jar-gray mt-4 leading-relaxed">
                  Simulation indicative. Taux et conditions definitifs
                  communiques apres etude de votre dossier.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          4. HOW IT WORKS
          ═══════════════════════════════════ */}
      <section className="py-20 bg-jar-anthracite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Comment ca{" "}
              <span className="text-jar-orange">fonctionne</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Un processus simple, transparent et rapide. De votre premier
              contact a la remise des cles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-jar-black rounded-2xl p-8 border border-white/5 hover:border-jar-orange/20 transition-all duration-300"
              >
                {/* Step number */}
                <span className="text-5xl font-extrabold text-white/5 absolute top-4 right-6">
                  {step.number}
                </span>
                <div className="w-12 h-12 bg-jar-orange/10 border border-jar-orange/20 rounded-xl flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-jar-orange" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-jar-gray-light leading-relaxed">
                  {step.description}
                </p>

                {/* connector line on large screens */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-jar-orange/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          5. RACHAT DE FINANCEMENT
          ═══════════════════════════════════ */}
      <section className="py-20 bg-jar-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 text-jar-orange text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                <TrendingDown className="w-4 h-4" />
                Rachat de financement
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Renegociez vos credits.{" "}
                <span className="text-jar-orange">Respirez.</span>
              </h2>
              <p className="text-jar-gray-light text-lg leading-relaxed mb-8">
                Vous avez un ou plusieurs credits en cours et vos mensualites
                pesent ? Notre equipe analyse votre situation et negocie aupres
                de nos partenaires pour obtenir des conditions plus
                avantageuses. Un seul objectif : alleger votre budget mensuel
                et simplifier votre gestion financiere.
              </p>

              <ul className="space-y-3">
                {rachatBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-jar-orange shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-jar-anthracite rounded-3xl p-10 border border-white/5"
            >
              <div className="space-y-6">
                {/* Stat block */}
                <div className="text-center pb-6 border-b border-white/10">
                  <p className="text-sm font-semibold text-jar-gray-light mb-1">
                    Economie moyenne constatee
                  </p>
                  <p className="text-5xl font-extrabold text-jar-orange">
                    -23%
                  </p>
                  <p className="text-sm text-jar-gray mt-1">
                    sur les mensualites
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-white">48h</p>
                    <p className="text-xs text-jar-gray-light mt-1">
                      Reponse de nos partenaires
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-white">0 &euro;</p>
                    <p className="text-xs text-jar-gray-light mt-1">
                      Frais d&apos;analyse initiale
                    </p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Clock className="w-8 h-8 text-jar-orange mx-auto mb-2" />
                  <p className="text-sm text-jar-gray-light">
                    Etude realisee sous 24 heures ouvrees
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          6. RESERVE DE TRESORERIE
          ═══════════════════════════════════ */}
      <section className="py-20 bg-jar-anthracite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Right content first on desktop (reversed) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-jar-black rounded-3xl p-10 border border-white/5 md:order-2"
            >
              <div className="space-y-5">
                <div className="w-16 h-16 bg-jar-orange/10 border border-jar-orange/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-jar-orange" />
                </div>
                <h3 className="text-xl font-extrabold text-white text-center">
                  Gardez le controle de votre tresorerie
                </h3>
                <p className="text-sm text-jar-gray-light text-center leading-relaxed">
                  Plutot que d&apos;immobiliser une somme importante dans
                  l&apos;achat d&apos;un vehicule, structurez votre
                  financement pour conserver votre capacite d&apos;action.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-jar-anthracite rounded-xl p-4 text-center">
                    <Banknote className="w-6 h-6 text-jar-orange mx-auto mb-2" />
                    <p className="text-xs font-bold text-white">Epargne preservee</p>
                  </div>
                  <div className="bg-jar-anthracite rounded-xl p-4 text-center">
                    <CreditCard className="w-6 h-6 text-jar-orange mx-auto mb-2" />
                    <p className="text-xs font-bold text-white">Mensualites maitrisees</p>
                  </div>
                  <div className="bg-jar-anthracite rounded-xl p-4 text-center">
                    <TrendingDown className="w-6 h-6 text-jar-orange mx-auto mb-2" />
                    <p className="text-xs font-bold text-white">Taux competitifs</p>
                  </div>
                  <div className="bg-jar-anthracite rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-jar-orange mx-auto mb-2" />
                    <p className="text-xs font-bold text-white">Souplesse totale</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 text-jar-orange text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                <Banknote className="w-4 h-4" />
                Reserve de tresorerie
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                Votre vehicule finance,{" "}
                <span className="text-jar-orange">votre epargne intacte.</span>
              </h2>
              <p className="text-jar-gray-light text-lg leading-relaxed mb-8">
                Payer un vehicule comptant, c&apos;est priver votre tresorerie
                d&apos;un capital qui peut travailler autrement. Notre approche
                consiste a structurer le financement de maniere a preserver
                votre capacite d&apos;investissement et votre confort
                financier au quotidien.
              </p>

              <ul className="space-y-3">
                {tresoreriBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <CheckCircle2 className="w-5 h-5 text-jar-orange shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          7. REASSURANCE / PARTNERS
          ═══════════════════════════════════ */}
      <section className="py-20 bg-jar-black border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Nos <span className="text-jar-orange">engagements</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Un accompagnement financier 100% transparent, adosse a des
              partenaires bancaires de premier plan.
            </p>
          </motion.div>

          {/* Reassurance badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Shield,
                title: "100% transparent",
                desc: "Aucun frais cache. Chaque ligne est expliquee et validee avec vous.",
              },
              {
                icon: Handshake,
                title: "Courtage multi-partenaires",
                desc: "Nous interrogeons plusieurs etablissements pour obtenir les meilleures conditions.",
              },
              {
                icon: Clock,
                title: "Rapide & simple",
                desc: "Une reponse de principe sous 48h. Signature electronique possible.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-jar-anthracite rounded-2xl p-8 border border-white/5 text-center"
              >
                <div className="w-14 h-14 bg-jar-orange/10 border border-jar-orange/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-jar-orange" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-jar-gray-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Partner logos placeholders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-center text-sm font-semibold text-jar-gray mb-8 uppercase tracking-wider">
              Nos partenaires financiers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="bg-jar-anthracite border border-white/5 rounded-xl px-6 py-4 text-sm font-bold text-jar-gray-light hover:text-white hover:border-jar-orange/20 transition-all duration-300"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          8. CTA / RDV
          ═══════════════════════════════════ */}
      <section className="relative py-24 bg-jar-anthracite overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jar-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Pret a structurer{" "}
              <span className="text-jar-orange">votre projet</span> ?
            </h2>
            <p className="text-jar-gray-light text-lg mb-10 max-w-2xl mx-auto">
              Nos conseillers financiers sont disponibles pour etudier votre
              situation et vous proposer la meilleure solution. Sans
              engagement, sans pression.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/20"
              >
                Prendre rendez-vous avec un conseiller
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                06 00 00 00 00
              </a>
            </div>

            <p className="text-sm text-jar-gray mt-8">
              Disponible du lundi au samedi &bull; Appel gratuit &bull; Sans
              engagement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
