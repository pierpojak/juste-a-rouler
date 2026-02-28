"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Umbrella,
  FileCheck,
  Phone,
  CheckCircle,
  TrendingDown,
  Clock,
  ChevronDown,
  ArrowRight,
  Flame,
  Car,
  Scale,
  Wrench,
  Eye,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const vehicleTypes = [
  "Citadine",
  "SUV",
  "Berline",
  "Utilitaire",
  "Van",
  "Moto",
];
const usageTypes = ["Quotidien", "Professionnel", "Occasionnel"];
const coverageTypes = ["Tiers", "Tiers+", "Tous risques"];

const offers = [
  {
    name: "Essentiel",
    price: 29,
    highlight: false,
    coverages: [
      "Responsabilite civile",
      "Assistance 0 km",
      "Protection conducteur",
    ],
  },
  {
    name: "Confort",
    price: 45,
    highlight: true,
    coverages: [
      "Responsabilite civile",
      "Vol & incendie",
      "Bris de glace",
      "Assistance 0 km",
      "Protection conducteur",
    ],
  },
  {
    name: "Serenite",
    price: 62,
    highlight: false,
    coverages: [
      "Tous risques",
      "Vol & incendie",
      "Bris de glace",
      "Assistance 0 km",
      "Protection juridique",
      "Vehicule de remplacement",
    ],
  },
];

const switchSteps = [
  {
    step: "01",
    title: "Comparez",
    desc: "Renseignez vos infos, on vous presente les meilleures offres en 2 minutes.",
  },
  {
    step: "02",
    title: "On resilie pour vous",
    desc: "Pas de lettre recommandee, pas de demarches. On gere tout avec votre ancien assureur.",
  },
  {
    step: "03",
    title: "Nouvelle couverture active",
    desc: "Vous etes protege sans interruption. Carte verte envoyee instantanement.",
  },
];

const coverageDetails = [
  {
    icon: Car,
    title: "Responsabilite civile",
    desc: "Couvre les dommages causes aux tiers. Obligatoire pour tout vehicule.",
  },
  {
    icon: Eye,
    title: "Vol",
    desc: "Indemnisation en cas de vol ou de tentative de vol de votre vehicule.",
  },
  {
    icon: Flame,
    title: "Incendie",
    desc: "Protection contre les dommages causes par le feu, explosion ou foudre.",
  },
  {
    icon: Shield,
    title: "Bris de glace",
    desc: "Remplacement ou reparation du pare-brise, vitres laterales et lunette arriere.",
  },
  {
    icon: Wrench,
    title: "Assistance",
    desc: "Depannage et remorquage 24h/24, vehicule de remplacement si necessaire.",
  },
  {
    icon: Scale,
    title: "Protection juridique",
    desc: "Accompagnement en cas de litige lie a votre vehicule ou un accident.",
  },
];

const trustBadges = [
  { icon: Shield, label: "Courtier independant" },
  { icon: Umbrella, label: "Multi-partenaires" },
  { icon: TrendingDown, label: "Meilleur rapport qualite/prix" },
  { icon: FileCheck, label: "Zero paperasse" },
];

/* ------------------------------------------------------------------ */
/*  Reusable select component                                          */
/* ------------------------------------------------------------------ */
function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-jar-anthracite border border-white/10 rounded-xl px-4 py-3.5 pr-10 text-sm text-white font-medium focus:outline-none focus:border-jar-orange transition-colors cursor-pointer"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-jar-gray pointer-events-none" />
    </div>
  );
}

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function AssurancePage() {
  const [vehicleType, setVehicleType] = useState("");
  const [usage, setUsage] = useState("");
  const [coverage, setCoverage] = useState("");
  const [licenseYear, setLicenseYear] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-jar-black pt-24">
      {/* ============================================================ */}
      {/*  1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-jar-black">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-jar-orange/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/30 rounded-full px-5 py-2 mb-8">
              <Shield className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-semibold text-jar-orange">
                Courtage independant & transparent
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="text-white">Votre assurance auto,</span>
              <br />
              <span className="text-jar-orange">simplifiee.</span>
            </h1>

            <p className="text-lg sm:text-xl text-jar-gray-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Comparez les meilleures offres, changez d&apos;assureur sans
              effort et economisez vraiment. On s&apos;occupe de tout.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#comparateur"
                className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/20"
              >
                Comparer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#deja-assure"
                className="border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                Changer d&apos;assurance
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. VALUE PROPS                                               */}
      {/* ============================================================ */}
      <section className="bg-jar-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Clock,
                title: "Comparez en 2 minutes",
                desc: "Nos partenaires vous proposent leurs meilleures offres. Vous choisissez en toute clarte, sans pression.",
              },
              {
                icon: FileCheck,
                title: "Changez sans effort",
                desc: "On gere la resiliation de votre ancien contrat et la mise en place du nouveau. Vous ne faites rien.",
              },
              {
                icon: TrendingDown,
                title: "Economisez vraiment",
                desc: "En moyenne, nos clients economisent 180 euros par an en passant par nous. Sans sacrifier les garanties.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-jar-orange/10 rounded-xl flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-jar-orange" />
                </div>
                <h3 className="text-xl font-extrabold text-jar-black mb-2">
                  {card.title}
                </h3>
                <p className="text-jar-gray leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. INSURANCE COMPARATOR                                      */}
      {/* ============================================================ */}
      <section id="comparateur" className="bg-jar-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Obtenez vos <span className="text-jar-orange">devis</span> en
              quelques clics
            </h2>
            <p className="text-jar-gray-light max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous et decouvrez instantanement
              les offres adaptees a votre profil.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-3xl mx-auto bg-jar-anthracite rounded-2xl border border-white/10 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <FormSelect
                label="Type de vehicule"
                value={vehicleType}
                onChange={setVehicleType}
                options={vehicleTypes}
              />
              <FormSelect
                label="Usage"
                value={usage}
                onChange={setUsage}
                options={usageTypes}
              />
              <FormSelect
                label="Couverture souhaitee"
                value={coverage}
                onChange={setCoverage}
                options={coverageTypes}
              />
              <div className="relative">
                <input
                  type="number"
                  placeholder="Annee du permis (ex: 2018)"
                  value={licenseYear}
                  onChange={(e) => setLicenseYear(e.target.value)}
                  min="1950"
                  max="2026"
                  className="w-full bg-jar-anthracite border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white font-medium placeholder:text-jar-gray focus:outline-none focus:border-jar-orange transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-jar-orange text-jar-black font-extrabold py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-jar-orange/20 flex items-center justify-center gap-2"
            >
              Obtenir mes devis
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.form>

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 max-w-5xl mx-auto"
            >
              <p className="text-center text-jar-gray-light mb-8 text-sm">
                Voici les offres adaptees a votre profil. Prix indicatifs, devis
                personnalise sur rendez-vous.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offers.map((offer, i) => (
                  <motion.div
                    key={offer.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                      offer.highlight
                        ? "bg-jar-orange/5 border-jar-orange shadow-lg shadow-jar-orange/10"
                        : "bg-jar-anthracite border-white/10"
                    }`}
                  >
                    {offer.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-jar-orange text-jar-black text-xs font-bold px-4 py-1 rounded-full">
                        Recommande
                      </div>
                    )}

                    <h3
                      className={`text-xl font-extrabold mb-1 ${
                        offer.highlight ? "text-jar-orange" : "text-white"
                      }`}
                    >
                      {offer.name}
                    </h3>

                    <div className="flex items-end gap-1 mb-6">
                      <span className="text-4xl font-extrabold text-white">
                        {offer.price}
                      </span>
                      <span className="text-jar-gray-light text-sm mb-1">
                        euros/mois
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {offer.coverages.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-sm text-jar-gray-light"
                        >
                          <CheckCircle className="w-4 h-4 text-jar-orange shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block text-center font-bold py-3 rounded-xl transition-all duration-200 text-sm ${
                        offer.highlight
                          ? "bg-jar-orange text-jar-black hover:bg-jar-orange-hover"
                          : "border border-white/20 text-white hover:border-jar-orange hover:text-jar-orange"
                      }`}
                    >
                      Choisir cette offre
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. ALREADY INSURED                                           */}
      {/* ============================================================ */}
      <section id="deja-assure" className="bg-jar-anthracite py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Vous etes deja{" "}
              <span className="text-jar-orange">assure</span> ?
            </h2>
            <p className="text-jar-gray-light max-w-2xl mx-auto text-lg">
              Pas besoin de gerer la resiliation vous-meme. On s&apos;occupe de
              tout : de la comparaison a la mise en place de votre nouveau
              contrat. Aucune interruption de couverture.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-4xl mx-auto mb-12">
            {switchSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-jar-orange/10 border border-jar-orange/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-jar-orange font-extrabold text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-jar-gray-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Connecting arrows (desktop) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-jar-orange/20"
            >
              Changer d&apos;assurance
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. COVERAGE TYPES                                            */}
      {/* ============================================================ */}
      <section className="bg-jar-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ce que couvre votre{" "}
              <span className="text-jar-orange">assurance</span>
            </h2>
            <p className="text-jar-gray-light max-w-xl mx-auto">
              Un apercu clair des garanties principales. Pas de jargon, pas de
              surprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageDetails.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-jar-anthracite rounded-2xl border border-white/10 p-6 hover:border-jar-orange/30 transition-colors"
              >
                <div className="w-10 h-10 bg-jar-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-jar-orange" />
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. RDV / CONTACT                                             */}
      {/* ============================================================ */}
      <section className="bg-jar-anthracite py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-jar-orange/10 to-transparent border border-jar-orange/20 rounded-2xl p-8 sm:p-12 lg:p-16 text-center"
          >
            <div className="w-16 h-16 bg-jar-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-jar-orange" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Parlez a un conseiller{" "}
              <span className="text-jar-orange">assurance</span>
            </h2>
            <p className="text-jar-gray-light max-w-xl mx-auto mb-8 text-lg">
              Un expert independant vous aide a choisir la meilleure couverture
              pour votre vehicule. Gratuit et sans engagement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                06 00 00 00 00
              </a>
              <Link
                href="/contact"
                className="bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-jar-orange/20 flex items-center gap-2"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. TRUST                                                     */}
      {/* ============================================================ */}
      <section className="bg-jar-black py-14 sm:py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center gap-3 py-4"
              >
                <div className="w-12 h-12 bg-jar-orange/10 rounded-xl flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-jar-orange" />
                </div>
                <span className="text-sm font-bold text-white">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
