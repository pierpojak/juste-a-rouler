"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  FileSearch,
  CheckCircle,
  QrCode,
  Eye,
  ClipboardCheck,
  Search,
  X,
  ArrowRight,
  Wrench,
  Car,
  Armchair,
  AlertTriangle,
  History,
  FileText,
  Camera,
  Gauge,
  Calendar,
  Star,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

const steps = [
  {
    num: "01",
    title: "Reception & Identification",
    desc: "Le vehicule est receptionne, identifie (VIN, plaque, carte grise) et enregistre dans notre systeme. Nous verifions la coherence des documents avant toute inspection.",
    icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Inspection 150+ points",
    desc: "Un technicien qualifie passe en revue plus de 150 points de controle couvrant mecanique, carrosserie, interieur, securite, historique et conformite.",
    icon: FileSearch,
  },
  {
    num: "03",
    title: "Documentation & Rapport Verite",
    desc: "Chaque constat est documente avec photos, mesures et commentaires. Le Rapport Verite est genere : un document transparent et accessible a tous.",
    icon: Eye,
  },
  {
    num: "04",
    title: "Labellisation & QR Code",
    desc: "Si le vehicule atteint le standard requis, il recoit le Label Juste a Rouler et un QR code unique permettant de consulter son rapport en temps reel.",
    icon: QrCode,
  },
];

const inspectionCategories = [
  {
    title: "Mecanique",
    icon: Wrench,
    points: ["Moteur & courroies", "Boite de vitesses", "Systeme de freinage", "Suspension & amortisseurs"],
  },
  {
    title: "Carrosserie",
    icon: Car,
    points: ["Etat de la peinture", "Chocs & rayures", "Corrosion & sous-bassement", "Alignement des ouvrants"],
  },
  {
    title: "Interieur",
    icon: Armchair,
    points: ["Sellerie & garnitures", "Electronique embarquee", "Climatisation & chauffage", "Compteur & tableau de bord"],
  },
  {
    title: "Securite",
    icon: Shield,
    points: ["Pneus & geometrie", "Eclairage complet", "Airbags & ceintures", "Systemes d'aide a la conduite"],
  },
  {
    title: "Historique",
    icon: History,
    points: ["Kilometrage certifie", "Carnet d'entretien", "Sinistres declares", "Nombre de proprietaires"],
  },
  {
    title: "Conformite",
    icon: FileText,
    points: ["Documents du vehicule", "Controle technique valide", "Carnet de bord complet", "Conformite administrative"],
  },
];

const labelLevels = [
  {
    name: "Essentiel",
    tagline: "Premier prix, inspection complete",
    description:
      "Inspection integrale des 150+ points sans garantie mecanique. Ideal pour les acheteurs avertis qui veulent un etat des lieux objectif avant achat. Le Rapport Verite est inclus.",
    features: [
      "Inspection 150+ points",
      "Rapport Verite complet",
      "QR code de tracabilite",
      "Photos documentees",
    ],
    price: "Inclus",
    color: "border-white/10",
    bg: "bg-jar-anthracite",
    featured: false,
  },
  {
    name: "Garanti",
    tagline: "Le plus populaire",
    description:
      "Tout le contenu Essentiel, plus une garantie mecanique de 3, 6 ou 12 mois couvrant moteur, boite et pont. La tranquillite d'esprit en standard.",
    features: [
      "Tout le niveau Essentiel",
      "Garantie mecanique 3/6/12 mois",
      "Couverture moteur, boite, pont",
      "Assistance en cas de panne",
    ],
    price: "Recommande",
    color: "border-jar-orange",
    bg: "bg-jar-anthracite",
    featured: true,
  },
  {
    name: "Sport",
    tagline: "Pour vehicules sportifs & performance",
    description:
      "Controles specifiques pour vehicules sportifs : passage au banc de puissance, verification turbo/compresseur, etat des trains roulants renforces, electronique moteur.",
    features: [
      "Tout le niveau Garanti",
      "Passage banc de puissance",
      "Controle turbo / compresseur",
      "Verification trains roulants sport",
    ],
    price: "Sur devis",
    color: "border-white/10",
    bg: "bg-jar-anthracite",
    featured: false,
  },
];

const demoReport = {
  code: "JAR-2025-08742",
  plaque: "FG-234-HK",
  vehicule: "Peugeot 308 GT Line 1.5 BlueHDi",
  annee: 2021,
  km: 47320,
  couleur: "Gris Artense",
  dateInspection: "14/02/2025",
  inspecteur: "Mehdi A.",
  label: "Garanti",
  garantie: "12 mois",
  score: 91,
  points: [
    { categorie: "Mecanique", etat: "Excellent", note: 95 },
    { categorie: "Carrosserie", etat: "Tres bon", note: 88 },
    { categorie: "Interieur", etat: "Excellent", note: 94 },
    { categorie: "Securite", etat: "Excellent", note: 96 },
    { categorie: "Historique", etat: "Conforme", note: 90 },
    { categorie: "Conformite", etat: "Conforme", note: 85 },
  ],
  remarques: [
    "Micro-rayure aile avant droite (documentee en photo)",
    "Plaquettes avant a 60% d'usure",
    "Pneus avant changes lors de la preparation",
  ],
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function LabelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [searchError, setSearchError] = useState("");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchError("Veuillez saisir un code de labellisation ou une plaque.");
      setShowReport(false);
      return;
    }
    setSearchError("");
    setShowReport(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen bg-jar-black">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-jar-orange/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-bold text-jar-orange">
                Processus rigoureux
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Label Qualite{" "}
              <span className="text-jar-orange">Juste a Rouler</span>
            </h1>

            <p className="text-lg sm:text-xl text-jar-gray-light leading-relaxed max-w-2xl">
              Un vehicule labellise, c&apos;est un vehicule inspecte sur plus de
              150 points, documente sans filtre et accompagne d&apos;un Rapport
              Verite accessible par QR code. Pas un argument commercial : une
              methode.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SEARCH BAR                                                   */}
      {/* ============================================================ */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-jar-anthracite border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-jar-orange/10 flex items-center justify-center">
                <FileSearch className="w-5 h-5 text-jar-orange" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  Verifier un vehicule labellise
                </h2>
                <p className="text-sm text-jar-gray-light">
                  Verifiez si un vehicule a deja ete labellise
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-jar-gray" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSearchError("");
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Code de labellisation ou plaque d'immatriculation"
                  className="w-full bg-jar-black border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-jar-gray focus:outline-none focus:border-jar-orange transition-colors text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setShowReport(false);
                      setSearchError("");
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-jar-gray hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="flex items-center justify-center gap-2 bg-jar-orange text-jar-black font-bold px-8 py-3.5 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200 text-sm shrink-0"
              >
                <Search className="w-4 h-4" />
                Rechercher
              </button>
            </div>

            {searchError && (
              <p className="mt-3 text-sm text-red-400">{searchError}</p>
            )}

            {/* Demo Report Card */}
            <AnimatePresence>
              {showReport && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 bg-jar-black border border-white/10 rounded-2xl overflow-hidden">
                    {/* Report Header */}
                    <div className="bg-gradient-to-r from-jar-orange/10 to-transparent border-b border-white/10 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <QrCode className="w-5 h-5 text-jar-orange" />
                            <span className="text-xs font-bold text-jar-orange uppercase tracking-wider">
                              Rapport Verite
                            </span>
                          </div>
                          <h3 className="text-xl font-extrabold text-white">
                            {demoReport.vehicule}
                          </h3>
                          <p className="text-sm text-jar-gray-light mt-1">
                            {demoReport.annee} &bull; {demoReport.km.toLocaleString("fr-FR")} km &bull; {demoReport.couleur}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full border-4 border-jar-orange flex items-center justify-center">
                              <span className="text-2xl font-extrabold text-jar-orange">
                                {demoReport.score}
                              </span>
                            </div>
                            <p className="text-xs text-jar-gray-light mt-1">Score global</p>
                          </div>
                          <div className="bg-jar-orange/10 border border-jar-orange/30 rounded-xl px-4 py-2 text-center">
                            <p className="text-xs text-jar-gray-light">Label</p>
                            <p className="text-sm font-extrabold text-jar-orange">
                              {demoReport.label}
                            </p>
                            <p className="text-xs text-jar-gray-light">
                              Garantie {demoReport.garantie}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Report Details */}
                    <div className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="bg-jar-anthracite rounded-xl p-3 text-center">
                          <p className="text-xs text-jar-gray-light">Code</p>
                          <p className="text-sm font-bold text-white">{demoReport.code}</p>
                        </div>
                        <div className="bg-jar-anthracite rounded-xl p-3 text-center">
                          <p className="text-xs text-jar-gray-light">Plaque</p>
                          <p className="text-sm font-bold text-white">{demoReport.plaque}</p>
                        </div>
                        <div className="bg-jar-anthracite rounded-xl p-3 text-center">
                          <p className="text-xs text-jar-gray-light">Inspection</p>
                          <p className="text-sm font-bold text-white">{demoReport.dateInspection}</p>
                        </div>
                        <div className="bg-jar-anthracite rounded-xl p-3 text-center">
                          <p className="text-xs text-jar-gray-light">Inspecteur</p>
                          <p className="text-sm font-bold text-white">{demoReport.inspecteur}</p>
                        </div>
                      </div>

                      {/* Scores by category */}
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                        Detail par categorie
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                        {demoReport.points.map((p) => (
                          <div
                            key={p.categorie}
                            className="flex items-center justify-between bg-jar-anthracite rounded-xl px-4 py-3"
                          >
                            <div>
                              <p className="text-sm font-semibold text-white">{p.categorie}</p>
                              <p className="text-xs text-jar-gray-light">{p.etat}</p>
                            </div>
                            <div
                              className={`text-lg font-extrabold ${
                                p.note >= 90
                                  ? "text-green-400"
                                  : p.note >= 75
                                  ? "text-jar-orange"
                                  : "text-red-400"
                              }`}
                            >
                              {p.note}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Remarques */}
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                        Remarques du technicien
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {demoReport.remarques.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-jar-orange shrink-0 mt-0.5" />
                            <span className="text-sm text-jar-gray-light">{r}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <p className="text-xs text-jar-gray">
                          Donnees de demonstration. En production, ces informations sont
                          extraites en temps reel.
                        </p>
                        <button
                          onClick={() => setShowReport(false)}
                          className="text-sm font-semibold text-jar-orange hover:text-jar-orange-hover transition-colors"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS - 4 STEPS                                      */}
      {/* ============================================================ */}
      <section className="py-24 bg-jar-anthracite border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Comment fonctionne la{" "}
              <span className="text-jar-orange">labellisation</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Un processus structure en 4 etapes, concu pour garantir rigueur et
              transparence a chaque vehicule inspecte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative bg-jar-black border border-white/5 rounded-2xl p-6 group hover:border-jar-orange/30 transition-all duration-300"
              >
                {/* Connector line on large screens */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-jar-orange/30" />
                )}

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-jar-orange/20">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-jar-orange/10 flex items-center justify-center group-hover:bg-jar-orange/20 transition-colors">
                    <step.icon className="w-5 h-5 text-jar-orange" />
                  </div>
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INSPECTION DETAILS GRID                                     */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 rounded-full px-4 py-1.5 mb-6">
              <ClipboardCheck className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-bold text-jar-orange">
                150+ points de controle
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ce que nous{" "}
              <span className="text-jar-orange">inspectons</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Six categories couvrant l&apos;integralite du vehicule. Rien
              n&apos;est laisse au hasard, rien n&apos;est omis du rapport.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-jar-anthracite border border-white/5 rounded-2xl p-6 hover:border-jar-orange/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-jar-orange/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-jar-orange" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {cat.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-jar-orange shrink-0" />
                      <span className="text-sm text-jar-gray-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LABEL LEVELS                                                */}
      {/* ============================================================ */}
      <section className="py-24 bg-jar-anthracite border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Trois niveaux de{" "}
              <span className="text-jar-orange">labellisation</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-2xl mx-auto">
              Chaque niveau correspond a un besoin precis. Tous incluent
              l&apos;inspection 150+ points et le Rapport Verite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labelLevels.map((level, i) => (
              <motion.div
                key={level.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-2xl border-2 p-8 transition-all duration-300 ${level.bg} ${level.color} ${
                  level.featured
                    ? "shadow-lg shadow-jar-orange/10 scale-[1.02] md:scale-105"
                    : "hover:border-jar-orange/30"
                }`}
              >
                {level.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-jar-orange text-jar-black text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider">
                    Le plus populaire
                  </span>
                )}

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-white">
                      {level.name}
                    </h3>
                    {level.name === "Essentiel" && (
                      <Star className="w-5 h-5 text-jar-gray" />
                    )}
                    {level.name === "Garanti" && (
                      <Shield className="w-5 h-5 text-jar-orange" />
                    )}
                    {level.name === "Sport" && (
                      <Zap className="w-5 h-5 text-jar-gray" />
                    )}
                  </div>
                  <p className="text-sm text-jar-orange font-semibold">
                    {level.tagline}
                  </p>
                </div>

                <p className="text-sm text-jar-gray-light leading-relaxed mb-6">
                  {level.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {level.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 ${
                          level.featured ? "text-jar-orange" : "text-jar-gray-light"
                        }`}
                      />
                      <span className="text-sm text-white">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-jar-gray-light text-center">
                    {level.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RAPPORT VERITE                                              */}
      {/* ============================================================ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-jar-orange/10 rounded-full px-4 py-1.5 mb-6">
                <Eye className="w-4 h-4 text-jar-orange" />
                <span className="text-sm font-bold text-jar-orange">
                  Transparence totale
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                Le{" "}
                <span className="text-jar-orange">Rapport Verite</span>
              </h2>

              <p className="text-jar-gray-light text-lg leading-relaxed mb-6">
                Le Rapport Verite n&apos;est pas un document marketing.
                C&apos;est un compte rendu factuel de l&apos;etat du vehicule au
                moment de l&apos;inspection, accessible a tout moment via le QR
                code appose sur le vehicule.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Camera, text: "Photos haute resolution de chaque zone inspectee" },
                  { icon: Gauge, text: "Kilometrage verifie et certifie" },
                  { icon: ClipboardCheck, text: "Etat detaille des 150+ points de controle" },
                  { icon: AlertTriangle, text: "Remarques et points d'attention documentes" },
                  { icon: Calendar, text: "Date d'inspection et validite du rapport" },
                  { icon: QrCode, text: "QR code unique pour consultation en temps reel" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-jar-orange/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-jar-orange" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-jar-anthracite border border-white/10 rounded-xl p-4">
                <p className="text-xs text-jar-gray-light leading-relaxed">
                  <span className="text-jar-orange font-bold">Bientot :</span>{" "}
                  Integration des APIs carVertical et Histovec pour enrichir
                  automatiquement le Rapport Verite avec l&apos;historique
                  complet du vehicule (sinistres, entretiens, changements de
                  proprietaire).
                </p>
              </div>
            </motion.div>

            {/* Right - Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-jar-anthracite border border-white/10 rounded-2xl overflow-hidden">
                {/* Mockup Header */}
                <div className="bg-jar-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-jar-orange" />
                    <span className="text-sm font-extrabold text-white">
                      Rapport Verite
                    </span>
                  </div>
                  <span className="text-xs text-jar-gray bg-jar-anthracite px-2 py-1 rounded">
                    JAR-2025-08742
                  </span>
                </div>

                {/* Mockup Body */}
                <div className="p-6 space-y-4">
                  {/* Vehicle info */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-14 bg-jar-black rounded-lg flex items-center justify-center">
                      <Car className="w-8 h-8 text-jar-gray" />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-white">
                        Peugeot 308 GT Line
                      </p>
                      <p className="text-xs text-jar-gray-light">
                        2021 &bull; 47 320 km &bull; Diesel
                      </p>
                    </div>
                  </div>

                  {/* Score bar */}
                  <div className="bg-jar-black rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-jar-gray-light uppercase tracking-wider">
                        Score global
                      </span>
                      <span className="text-lg font-extrabold text-jar-orange">
                        91/100
                      </span>
                    </div>
                    <div className="w-full h-2 bg-jar-anthracite rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-jar-orange to-jar-orange-light rounded-full"
                        style={{ width: "91%" }}
                      />
                    </div>
                  </div>

                  {/* Category mini-scores */}
                  <div className="grid grid-cols-3 gap-2">
                    {["Meca. 95", "Carro. 88", "Inter. 94", "Secu. 96", "Hist. 90", "Conf. 85"].map(
                      (label) => (
                        <div
                          key={label}
                          className="bg-jar-black rounded-lg px-3 py-2 text-center"
                        >
                          <span className="text-xs font-semibold text-jar-gray-light">
                            {label}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Photo placeholder */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="aspect-square bg-jar-black rounded-lg flex items-center justify-center"
                      >
                        <Camera className="w-5 h-5 text-jar-gray/40" />
                      </div>
                    ))}
                  </div>

                  {/* Remarques */}
                  <div className="bg-jar-black rounded-xl p-4">
                    <p className="text-xs font-bold text-white mb-2">
                      Remarques
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-jar-orange" />
                        <span className="text-xs text-jar-gray-light">
                          Micro-rayure aile AVD
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-jar-orange" />
                        <span className="text-xs text-jar-gray-light">
                          Plaquettes AV 60%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* QR */}
                  <div className="text-center pt-2">
                    <QrCode className="w-12 h-12 text-jar-orange/30 mx-auto" />
                    <p className="text-xs text-jar-gray mt-1">
                      Scannez pour consulter en temps reel
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA SECTION                                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-jar-anthracite border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-jar-orange/10 via-jar-anthracite to-jar-black border border-jar-orange/20 rounded-3xl p-8 sm:p-12 md:p-16 text-center"
          >
            <Shield className="w-12 h-12 text-jar-orange mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Faites labelliser votre vehicule
            </h2>
            <p className="text-jar-gray-light text-lg max-w-xl mx-auto mb-8">
              Vous vendez ou achetez un vehicule ? Le Label Juste a Rouler
              apporte la preuve objective de son etat. Prenez rendez-vous pour
              une inspection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-8 py-4 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/annonces"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:border-jar-orange/50 hover:text-jar-orange transition-all duration-200"
              >
                Consulter nos vehicules labellises
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
