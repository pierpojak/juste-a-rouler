"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Car, FileSearch, Shield, CreditCard, Wrench, Compass,
  CheckCircle, Users, TrendingUp, Repeat, Star, Heart,
} from "lucide-react";

const ecosystemSteps = [
  {
    icon: Car,
    title: "Vous vendez ?",
    subtitle: "Dépôt-vente & mandat",
    description: "Confiez votre véhicule. On gère les photos, l'annonce, les leads, les visites, la négociation, les papiers et le paiement sécurisé. Vous ne faites rien.",
    features: ["Photos professionnelles", "Annonces multi-plateformes", "Gestion des leads & visites", "Négociation & closing", "Paiement sécurisé", "Carte grise transférée"],
    cta: "Confier mon véhicule",
    href: "/contact",
  },
  {
    icon: Shield,
    title: "Vous achetez ?",
    subtitle: "Label qualité & Rapport Vérité",
    description: "Chaque véhicule est inspecté sur 150+ points, documenté et labellisé. Le Rapport Vérité vous dit tout — kilométrage, état, historique, conformité. Zéro zone d'ombre.",
    features: ["150+ points d'inspection", "Rapport Vérité avec QR code", "Kilométrage certifié", "Historique vérifié", "Garantie mécanique", "Livraison possible"],
    cta: "Voir nos véhicules",
    href: "/annonces",
  },
  {
    icon: CreditCard,
    title: "Vous financez ?",
    subtitle: "Banque & assurance intégrées",
    description: "Financement sur-mesure via courtage multi-partenaires. Assurance négociée. Tout se règle en une seule visite, pas trois semaines de paperasse.",
    features: ["Courtage multi-partenaires", "Simulation instantanée", "Assurance négociée", "Rachat de crédit", "Carte grise incluse", "Zéro frais cachés"],
    cta: "Simuler mon financement",
    href: "/banque",
  },
  {
    icon: Wrench,
    title: "Vous roulez ?",
    subtitle: "Sérénité & entretien",
    description: "La relation ne s'arrête pas à la vente. Abonnement entretien, suivi digital, priorité atelier, véhicule de prêt. On reste avec vous.",
    features: ["Abonnement dès 19€/mois", "Contrôles réguliers", "Priorité atelier", "Véhicule de prêt", "Réseau partenaires", "Historique digitalisé"],
    cta: "Découvrir Sérénité",
    href: "/serenite",
  },
];

const differences = [
  {
    bad: "Annonce entre particuliers",
    issue: "Aucune vérification, aucun recours, vous êtes seul.",
  },
  {
    bad: "Garage lambda",
    issue: "Pas de label, pas de rapport, pas de suivi. Une transaction, point.",
  },
  {
    bad: "Mandataire en ligne",
    issue: "Prix bas, mais aucune transparence sur l'état réel du véhicule.",
  },
  {
    bad: "Concession premium",
    issue: "Qualité de service, mais prix gonflés de 20 à 40%.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-jar-black pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-jar-orange/5 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-jar-orange/10 border border-jar-orange/20 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp className="w-4 h-4 text-jar-orange" />
              <span className="text-sm font-bold text-jar-orange">
                Écosystème complet
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              On ne vend pas des voitures.{" "}
              <span className="text-jar-orange">On simplifie tout le parcours.</span>
            </h1>
            <p className="text-xl text-jar-gray-light leading-relaxed mb-8">
              Juste à Rouler est un opérateur de confiance automobile. Vente, achat,
              financement, assurance, entretien, vans — chaque étape est gérée,
              fluide et transparente. Un seul interlocuteur. Zéro friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/annonces"
                className="group inline-flex items-center justify-center gap-2 bg-jar-orange text-jar-black font-extrabold px-8 py-4 rounded-xl hover:bg-jar-orange-hover hover:scale-[1.02] transition-all"
              >
                Voir les véhicules
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:border-jar-orange hover:text-jar-orange transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* La promesse */}
      <section className="py-20 bg-jar-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black mb-4">
              La promesse : <span className="text-jar-orange">vous repartez, c&apos;est tout.</span>
            </h2>
            <p className="text-jar-gray text-lg max-w-2xl mx-auto">
              Que vous vendiez, achetiez, financiez ou entreteniez — on prend en charge
              l&apos;intégralité du parcours pour que vous n&apos;ayez qu&apos;une chose à faire : rouler.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "500+", label: "Clients accompagnés" },
              { icon: FileSearch, value: "150+", label: "Points d'inspection" },
              { icon: Star, value: "4.9/5", label: "Note de satisfaction" },
              { icon: Repeat, value: "12j", label: "Délai moyen de vente" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm"
              >
                <stat.icon className="w-8 h-8 text-jar-orange mx-auto mb-3" />
                <p className="text-3xl font-extrabold text-jar-black">{stat.value}</p>
                <p className="text-sm text-jar-gray mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black mb-4">
              Un <span className="text-jar-orange">écosystème</span>, pas juste un garage
            </h2>
            <p className="text-jar-gray text-lg max-w-2xl mx-auto">
              Chaque brique s&apos;emboîte. Chaque service alimente le suivant. Le résultat :
              une expérience fluide de bout en bout.
            </p>
          </motion.div>

          <div className="space-y-8">
            {ecosystemSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-jar-offwhite rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-jar-orange rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-jar-black" />
                    </div>
                    <div>
                      <p className="text-sm text-jar-orange font-bold">{step.subtitle}</p>
                      <h3 className="text-2xl font-extrabold text-jar-black">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-jar-gray leading-relaxed mb-6">{step.description}</p>
                  <Link
                    href={step.href}
                    className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-6 py-3 rounded-xl hover:bg-jar-orange-hover transition-all text-sm"
                  >
                    {step.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {step.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5">
                      <CheckCircle className="w-4 h-4 text-jar-orange flex-shrink-0" />
                      <span className="text-xs font-semibold text-jar-black">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roue Libre teaser */}
      <section className="py-20 bg-jar-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jar-orange/5 via-transparent to-jar-orange/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Compass className="w-16 h-16 text-jar-orange mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Et pour les vans : <span className="text-jar-orange">Roue Libre</span>
            </h2>
            <p className="text-jar-gray-light text-lg mb-8">
              Vans aménagés, location courte durée, gestion déléguée, investissement.
              Un univers lifestyle complet, adossé à la rigueur Juste à Rouler.
            </p>
            <Link
              href="/roue-libre"
              className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-8 py-4 rounded-xl hover:bg-jar-orange-hover transition-all"
            >
              Découvrir Roue Libre
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why not the others */}
      <section className="py-20 bg-jar-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-jar-black mb-4">
              La différence avec <span className="text-jar-orange">les autres</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            {differences.map((d, i) => (
              <motion.div
                key={d.bad}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <p className="font-bold text-jar-black text-sm">{d.bad}</p>
                <p className="text-xs text-jar-gray mt-1">{d.issue}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-jar-black rounded-3xl p-8 md:p-10 max-w-4xl mx-auto text-center"
          >
            <Heart className="w-10 h-10 text-jar-orange mx-auto mb-4" />
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Juste à Rouler
            </h3>
            <p className="text-jar-gray-light max-w-lg mx-auto mb-6">
              Un tiers de confiance qui inspecte, labellise, finance, assure, entretient
              et vous accompagne. Pas un intermédiaire — un partenaire. La confiance professionnelle
              au prix juste.
            </p>
            <Link
              href="/annonces"
              className="group inline-flex items-center gap-2 bg-jar-orange text-jar-black font-extrabold px-8 py-4 rounded-xl hover:bg-jar-orange-hover transition-all"
            >
              Voir nos véhicules disponibles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
