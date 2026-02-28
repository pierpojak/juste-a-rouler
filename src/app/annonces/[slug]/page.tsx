"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, Shield, Calendar, Gauge, Fuel, Settings, MapPin, Award,
  CheckCircle, Phone, FileText, CreditCard, ChevronRight, ChevronLeft,
} from "lucide-react";
import { getVehicleBySlug, labelColors, typeLabels } from "@/lib/vehicles";
import { cn } from "@/lib/utils";

export default function VehicleDetailPage() {
  const params = useParams();
  const vehicle = getVehicleBySlug(params.slug as string);
  const [activeImage, setActiveImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-jar-black pt-32 text-center">
        <p className="text-white text-xl">Véhicule non trouvé</p>
        <Link href="/annonces" className="text-jar-orange mt-4 inline-block">
          Retour aux annonces
        </Link>
      </div>
    );
  }

  const label = labelColors[vehicle.label];
  const type = typeLabels[vehicle.type];
  const hasMultipleImages = vehicle.images.length > 1;

  const goPrev = () => setActiveImage((i) => (i - 1 + vehicle.images.length) % vehicle.images.length);
  const goNext = () => setActiveImage((i) => (i + 1) % vehicle.images.length);

  return (
    <div className="min-h-screen bg-jar-offwhite pt-24">
      {/* Breadcrumb */}
      <div className="bg-jar-black border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/annonces"
            className="inline-flex items-center gap-2 text-sm text-jar-gray-light hover:text-jar-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux annonces
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Image + details */}
          <div className="lg:col-span-2 space-y-6">

            {/* Galerie principale */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {/* Image principale */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-jar-anthracite group">
                <Image
                  key={activeImage}
                  src={vehicle.images[activeImage]}
                  alt={`${vehicle.brand} ${vehicle.model} — photo ${activeImage + 1}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority={activeImage === 0}
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={cn("px-3 py-1.5 rounded-lg text-sm font-bold text-white", type.color)}>
                    {type.label}
                  </span>
                  <span className={cn("px-3 py-1.5 rounded-lg text-sm font-bold", label.bg, label.text)}>
                    Label {label.label}
                  </span>
                </div>

                {/* Compteur photos */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    {activeImage + 1} / {vehicle.images.length}
                  </div>
                )}

                {/* Flèches navigation */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Photo précédente"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Photo suivante"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Miniatures */}
              {hasMultipleImages && (
                <div className={cn(
                  "grid gap-2",
                  vehicle.images.length <= 4 ? "grid-cols-4" :
                  vehicle.images.length <= 5 ? "grid-cols-5" : "grid-cols-6"
                )}>
                  {vehicle.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "relative aspect-video rounded-xl overflow-hidden transition-all duration-200",
                        i === activeImage
                          ? "ring-2 ring-jar-orange ring-offset-2 ring-offset-jar-offwhite"
                          : "opacity-55 hover:opacity-90"
                      )}
                    >
                      <Image
                        src={img}
                        alt={`${vehicle.brand} ${vehicle.model} — miniature ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-jar-black mb-4">Description</h2>
              <p className="text-jar-gray leading-relaxed">{vehicle.description}</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vehicle.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 bg-jar-offwhite rounded-xl px-3 py-2.5">
                    <CheckCircle className="w-4 h-4 text-jar-orange flex-shrink-0" />
                    <span className="text-xs font-semibold text-jar-black">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-jar-black mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: Calendar, label: "Année", value: vehicle.year },
                  { icon: Gauge, label: "Kilométrage", value: `${vehicle.mileage.toLocaleString("fr-FR")} km` },
                  { icon: Fuel, label: "Énergie", value: vehicle.energy.charAt(0).toUpperCase() + vehicle.energy.slice(1) },
                  { icon: Settings, label: "Boîte", value: vehicle.gearbox.charAt(0).toUpperCase() + vehicle.gearbox.slice(1) },
                  { icon: Award, label: "Puissance", value: `${vehicle.power} ch` },
                  { icon: MapPin, label: "Localisation", value: vehicle.location.replace("Showroom ", "") },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-start gap-3 bg-jar-offwhite rounded-xl p-4">
                    <spec.icon className="w-5 h-5 text-jar-orange mt-0.5" />
                    <div>
                      <p className="text-xs text-jar-gray">{spec.label}</p>
                      <p className="text-sm font-bold text-jar-black">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rapport Vérité teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-jar-black rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-jar-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-jar-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Rapport Vérité disponible</h3>
                  <p className="text-jar-gray-light text-sm mb-3">
                    Ce véhicule a été inspecté sur {vehicle.inspectionScore > 90 ? "150+" : "120+"} points de contrôle.
                    Score d&apos;inspection : <span className="text-jar-orange font-bold">{vehicle.inspectionScore}/100</span>.
                  </p>
                  <Link
                    href="/label"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-jar-orange hover:text-jar-orange-hover transition-colors"
                  >
                    Voir le Rapport Vérité
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Sidebar */}
          <div className="space-y-6">
            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sticky top-36"
            >
              <h1 className="text-2xl font-extrabold text-jar-black leading-tight">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-sm text-jar-gray mt-1">{vehicle.version}</p>

              <div className="mt-6 bg-jar-offwhite rounded-xl p-5">
                <p className="text-4xl font-extrabold text-jar-black">
                  {vehicle.price.toLocaleString("fr-FR")} <span className="text-xl">€</span>
                </p>
                <p className="text-sm text-jar-orange font-bold mt-1">
                  ou dès {vehicle.monthlyPayment} € / mois
                </p>
                <p className="text-xs text-jar-gray mt-2">
                  Crédit sur 60 mois, sous réserve d&apos;acceptation.
                  Simulation personnalisée disponible.
                </p>
              </div>

              {vehicle.warrantyMonths > 0 && (
                <div className="mt-4 flex items-center gap-2 bg-jar-orange/10 rounded-xl px-4 py-3">
                  <Shield className="w-5 h-5 text-jar-orange" />
                  <span className="text-sm font-semibold text-jar-black">
                    Garantie {vehicle.warrantyMonths} mois incluse
                  </span>
                </div>
              )}

              <div className="mt-6 space-y-3">
                <a
                  href="tel:0800820820"
                  className="flex items-center justify-center gap-2 w-full bg-jar-orange text-jar-black font-bold py-3.5 rounded-xl hover:bg-jar-orange-hover transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Appeler — 0 800 820 820
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full border-2 border-jar-black text-jar-black font-bold py-3.5 rounded-xl hover:bg-jar-black hover:text-white transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Demander plus d&apos;infos
                </Link>
                <Link
                  href="/banque"
                  className="flex items-center justify-center gap-2 w-full border-2 border-jar-orange/30 text-jar-orange font-bold py-3.5 rounded-xl hover:bg-jar-orange/10 transition-all"
                >
                  <CreditCard className="w-5 h-5" />
                  Simuler mon financement
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                {[
                  "Véhicule labellisé & inspecté",
                  "Rapport Vérité avec QR code",
                  "Financement sur-mesure",
                  "Garantie mécanique incluse",
                  "Carte grise & démarches gérées",
                ].map((signal) => (
                  <div key={signal} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-jar-orange flex-shrink-0" />
                    <span className="text-xs text-jar-gray font-medium">{signal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
