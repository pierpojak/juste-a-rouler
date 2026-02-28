"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-jar-offwhite pt-24">
      {/* Hero */}
      <section className="bg-jar-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Parlons de votre <span className="text-jar-orange">projet</span>
            </h1>
            <p className="text-jar-gray-light text-lg max-w-xl">
              Vente, achat, financement, assurance, entretien — quel que soit votre besoin,
              on est là pour en discuter.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-jar-orange mx-auto mb-4" />
                  <h2 className="text-2xl font-extrabold text-jar-black mb-2">
                    Message envoyé
                  </h2>
                  <p className="text-jar-gray">
                    On revient vers vous rapidement. Merci pour votre confiance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-jar-black mb-4">
                    Envoyez-nous un message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-jar-black mb-1.5">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-jar-orange transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-jar-black mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-jar-orange transition-colors"
                        placeholder="0 800 XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-jar-black mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-jar-orange transition-colors"
                      placeholder="votre@email.fr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-jar-black mb-1.5">
                      Sujet
                    </label>
                    <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-jar-orange transition-colors">
                      <option>Achat d&apos;un véhicule</option>
                      <option>Vendre mon véhicule (dépôt-vente)</option>
                      <option>Financement</option>
                      <option>Assurance</option>
                      <option>Entretien / Sérénité</option>
                      <option>Roue Libre (vans)</option>
                      <option>Autre demande</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-jar-black mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-jar-orange transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre besoin..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full bg-jar-orange text-jar-black font-bold py-3.5 rounded-xl hover:bg-jar-orange-hover transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-jar-black mb-4">Coordonnées</h3>
              <div className="space-y-4">
                <a href="tel:0800XXXX" className="flex items-center gap-3 text-sm text-jar-gray hover:text-jar-orange transition-colors">
                  <div className="w-10 h-10 bg-jar-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-jar-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-jar-black">0 800 XXXX</p>
                    <p className="text-xs text-jar-gray">Numéro gratuit</p>
                  </div>
                </a>
                <a href="mailto:contact@justearouler.fr" className="flex items-center gap-3 text-sm text-jar-gray hover:text-jar-orange transition-colors">
                  <div className="w-10 h-10 bg-jar-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-jar-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-jar-black">contact@justearouler.fr</p>
                    <p className="text-xs text-jar-gray">Réponse sous 24h</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-jar-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-jar-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-jar-black">Showroom Juste à Rouler</p>
                    <p className="text-xs text-jar-gray">1 rue de la communication, 59175 Templemars</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-jar-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-jar-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-jar-black">Lun - Sam : 9h - 19h</p>
                    <p className="text-xs text-jar-gray">Sur rendez-vous le dimanche</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-jar-black rounded-2xl p-6 text-center"
            >
              <p className="text-white font-bold mb-2">Besoin d&apos;une réponse rapide ?</p>
              <p className="text-jar-gray-light text-sm mb-4">
                Appelez directement, on décroche.
              </p>
              <a
                href="tel:0800XXXX"
                className="inline-flex items-center gap-2 bg-jar-orange text-jar-black font-bold px-6 py-3 rounded-xl hover:bg-jar-orange-hover transition-colors"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
