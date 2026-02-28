"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Wrench,
  Calendar,
  Clock,
  Star,
  CheckCircle,
  Phone,
  ArrowRight,
  Users,
  ClipboardList,
  MonitorSmartphone,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const pillars = [
  {
    icon: Wrench,
    title: "Entretien simplifi\u00e9",
    desc: "Contr\u00f4les r\u00e9guliers planifi\u00e9s, rappels automatiques par SMS et email. Vous n\u2019avez rien \u00e0 retenir, on s\u2019en occupe.",
  },
  {
    icon: Star,
    title: "Priorit\u00e9 atelier",
    desc: "Passage prioritaire en atelier, v\u00e9hicule de pr\u00eat disponible. Votre mobilit\u00e9 n\u2019est jamais interrompue.",
  },
  {
    icon: ClipboardList,
    title: "Suivi personnalis\u00e9",
    desc: "Historique complet dans votre espace client : factures, interventions, prochaines \u00e9ch\u00e9ances. Tout est l\u00e0.",
  },
  {
    icon: Users,
    title: "R\u00e9seau de confiance",
    desc: "Partenaires s\u00e9lectionn\u00e9s et audit\u00e9s. Chaque prestataire partage nos exigences de qualit\u00e9 et de transparence.",
  },
];

const plans = [
  {
    name: "Essentiel",
    price: 19,
    featured: false,
    badge: null,
    features: [
      "Contr\u00f4le annuel complet",
      "\u201310\u00a0% sur pi\u00e8ces et main-d\u2019\u0153uvre",
      "Rappels entretien automatiques",
      "Assistance d\u00e9pannage 24h/24",
    ],
  },
  {
    name: "Confort",
    price: 29,
    featured: true,
    badge: "Le plus choisi",
    features: [
      "Tout Essentiel inclus",
      "Contr\u00f4le bi-annuel complet",
      "\u201320\u00a0% sur pi\u00e8ces et main-d\u2019\u0153uvre",
      "V\u00e9hicule de pr\u00eat garanti",
      "Priorit\u00e9 rendez-vous atelier",
    ],
  },
  {
    name: "Int\u00e9gral",
    price: 39,
    featured: false,
    badge: null,
    features: [
      "Tout Confort inclus",
      "Entretien courant inclus (vidange, filtres, freins)",
      "Contr\u00f4le technique offert",
      "SAV d\u00e9di\u00e9 avec interlocuteur unique",
    ],
  },
];

const steps = [
  {
    icon: MonitorSmartphone,
    num: "01",
    title: "Souscription en ligne ou en showroom",
    desc: "Choisissez votre formule en quelques clics ou directement chez nous.",
  },
  {
    icon: Calendar,
    num: "02",
    title: "Prise de RDV prioritaire",
    desc: "R\u00e9servez votre cr\u00e9neau en ligne. Les abonn\u00e9s passent en premier.",
  },
  {
    icon: Wrench,
    num: "03",
    title: "Intervention & suivi digital",
    desc: "Suivi en temps r\u00e9el de l\u2019intervention. Photos, devis, validation \u2014 tout depuis votre t\u00e9l\u00e9phone.",
  },
  {
    icon: Clock,
    num: "04",
    title: "Historique accessible 24/7",
    desc: "Factures, rapports, prochaines \u00e9ch\u00e9ances : tout est dans votre espace client, \u00e0 tout moment.",
  },
];

const interventionTypes = [
  "Entretien courant",
  "Contr\u00f4le technique",
  "Diagnostic",
  "Autre",
];

/* ──────────────────────────────────────────────
   Animation helpers
   ────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ──────────────────────────────────────────────
   Page component
   ────────────────────────────────────────────── */

export default function SerenitePage() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    vehicule: "",
    intervention: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend / API
    alert("Demande envoy\u00e9e ! Nous vous recontactons rapidement.");
    setForm({
      nom: "",
      telephone: "",
      vehicule: "",
      intervention: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-jar-black">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-jar-black">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-jar-orange/8 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/30 rounded-full px-5 py-2 mb-8">
              <Heart className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-semibold text-jar-orange">
                Accompagnement apr&egrave;s-vente
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              S&eacute;r&eacute;nit&eacute;.{" "}
              <span className="text-jar-orange">
                Parce qu&apos;on ne vous l&acirc;che pas
              </span>{" "}
              apr&egrave;s la vente.
            </h1>

            <p className="text-lg sm:text-xl text-jar-gray-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Entretien, suivi, accompagnement. Votre v&eacute;hicule est entre
              de bonnes mains, longtemps apr&egrave;s l&apos;achat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#formules"
                className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/20"
              >
                D&eacute;couvrir les formules
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#rdv"
                className="border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                Prendre rendez-vous
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── PROMISE PILLARS ─────────────── */}
      <section className="py-20 bg-jar-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black mb-4">
              Notre promesse :{" "}
              <span className="text-jar-orange">
                vous n&apos;&ecirc;tes jamais seul
              </span>
            </h2>
            <p className="text-jar-gray max-w-2xl mx-auto text-lg">
              Apr&egrave;s l&apos;achat, tout continue. Juste &agrave; Rouler
              reste &agrave; vos c&ocirc;t&eacute;s pour que chaque
              kilom&egrave;tre soit serein.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-jar-orange/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-jar-orange/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-jar-orange" />
                </div>
                <h3 className="text-lg font-bold text-jar-black mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-jar-gray leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SUBSCRIPTION PLANS ─────────────── */}
      <section id="formules" className="py-20 bg-jar-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Choisissez votre{" "}
              <span className="text-jar-orange">formule</span>
            </h2>
            <p className="text-jar-gray-light max-w-2xl mx-auto text-lg">
              Trois niveaux d&apos;accompagnement, un m&ecirc;me engagement :
              votre tranquillit&eacute; d&apos;esprit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.featured
                    ? "bg-jar-anthracite border-2 border-jar-orange shadow-lg shadow-jar-orange/10 scale-[1.03] md:scale-105"
                    : "bg-jar-anthracite border border-white/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-jar-orange text-jar-black text-xs font-extrabold px-4 py-1.5 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-jar-orange">
                      {plan.price}&euro;
                    </span>
                    <span className="text-jar-gray-light text-sm">/mois</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-jar-orange flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-jar-gray-light leading-snug">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#rdv"
                  className={`block text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                    plan.featured
                      ? "bg-jar-orange text-jar-black hover:bg-jar-orange-hover hover:scale-[1.02] shadow-lg shadow-jar-orange/20"
                      : "border-2 border-white/20 text-white hover:border-jar-orange hover:text-jar-orange"
                  }`}
                >
                  Souscrire
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section className="py-20 bg-jar-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black mb-4">
              Comment &ccedil;a{" "}
              <span className="text-jar-orange">fonctionne</span> ?
            </h2>
            <p className="text-jar-gray max-w-2xl mx-auto text-lg">
              Quatre &eacute;tapes simples pour une s&eacute;r&eacute;nit&eacute;
              totale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative text-center"
              >
                {/* Connector line (hidden on first and mobile) */}
                {i > 0 && (
                  <div className="hidden lg:block absolute top-8 -left-4 w-8 h-0.5 bg-jar-orange/30" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-jar-orange/10 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-7 h-7 text-jar-orange" />
                </div>
                <span className="text-xs font-extrabold text-jar-orange tracking-widest uppercase mb-2 block">
                  &Eacute;tape {s.num}
                </span>
                <h3 className="text-lg font-bold text-jar-black mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-jar-gray leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── APPOINTMENT FORM ─────────────── */}
      <section id="rdv" className="py-20 bg-jar-black">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/30 rounded-full px-5 py-2 mb-6">
              <Calendar className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-semibold text-jar-orange">
                Rendez-vous entretien
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Prendre{" "}
              <span className="text-jar-orange">rendez-vous entretien</span>
            </h2>
            <p className="text-jar-gray-light text-lg max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous, notre &eacute;quipe vous
              recontacte dans les 24h pour confirmer votre cr&eacute;neau.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-jar-anthracite border border-white/10 rounded-2xl p-8 space-y-5"
          >
            {/* Nom */}
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-semibold text-white mb-1.5"
              >
                Nom complet
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                value={form.nom}
                onChange={handleChange}
                placeholder="Jean Dupont"
                className="w-full bg-jar-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-jar-gray text-sm focus:outline-none focus:border-jar-orange transition-colors"
              />
            </div>

            {/* T\u00e9l\u00e9phone */}
            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-semibold text-white mb-1.5"
              >
                T&eacute;l&eacute;phone
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                value={form.telephone}
                onChange={handleChange}
                placeholder="06 12 34 56 78"
                className="w-full bg-jar-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-jar-gray text-sm focus:outline-none focus:border-jar-orange transition-colors"
              />
            </div>

            {/* V\u00e9hicule */}
            <div>
              <label
                htmlFor="vehicule"
                className="block text-sm font-semibold text-white mb-1.5"
              >
                V&eacute;hicule
              </label>
              <input
                id="vehicule"
                name="vehicule"
                type="text"
                required
                value={form.vehicule}
                onChange={handleChange}
                placeholder="Ex : Peugeot 308 2019"
                className="w-full bg-jar-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-jar-gray text-sm focus:outline-none focus:border-jar-orange transition-colors"
              />
            </div>

            {/* Type d&apos;intervention */}
            <div>
              <label
                htmlFor="intervention"
                className="block text-sm font-semibold text-white mb-1.5"
              >
                Type d&apos;intervention
              </label>
              <div className="relative">
                <select
                  id="intervention"
                  name="intervention"
                  required
                  value={form.intervention}
                  onChange={handleChange}
                  className="w-full appearance-none bg-jar-black border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-jar-orange transition-colors cursor-pointer"
                >
                  <option value="" disabled>
                    S&eacute;lectionnez une intervention
                  </option>
                  {interventionTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-jar-gray pointer-events-none rotate-90" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white mb-1.5"
              >
                Message{" "}
                <span className="text-jar-gray-light font-normal">
                  (optionnel)
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Pr&eacute;cisez votre besoin, kilom&eacute;trage, sympt&ocirc;mes..."
                className="w-full bg-jar-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-jar-gray text-sm focus:outline-none focus:border-jar-orange transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-jar-orange text-jar-black font-extrabold py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-jar-orange/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              R&eacute;server mon cr&eacute;neau
            </button>

            <p className="text-center text-sm text-jar-gray-light pt-2">
              Ou appelez-nous directement au{" "}
              <a
                href="tel:+33600000000"
                className="text-jar-orange font-semibold hover:text-jar-orange-hover transition-colors"
              >
                06 00 00 00 00
              </a>
            </p>
          </motion.form>
        </div>
      </section>

      {/* ─────────────── FINAL CTA ─────────────── */}
      <section className="relative py-24 bg-jar-black overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jar-orange/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-12 h-12 text-jar-orange mx-auto mb-6" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              La tranquillit&eacute; d&apos;esprit,{" "}
              <span className="text-jar-orange">
                &ccedil;a commence maintenant.
              </span>
            </h2>
            <p className="text-jar-gray-light text-lg mb-10 max-w-2xl mx-auto">
              Souscrivez &agrave; une formule S&eacute;r&eacute;nit&eacute; et
              roulez sans jamais vous soucier du reste. On est l&agrave;,
              longtemps apr&egrave;s la vente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#formules"
                className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/20"
              >
                Choisir ma formule
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl text-lg hover:border-jar-orange hover:text-jar-orange transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Appeler directement
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
