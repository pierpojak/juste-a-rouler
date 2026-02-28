"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Gauge, Calendar, Fuel, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Vehicle } from "@/lib/vehicles";
import { labelColors, typeLabels } from "@/lib/vehicles";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const label = labelColors[vehicle.label];
  const type = typeLabels[vehicle.type];

  return (
    <Link
      href={`/annonces/${vehicle.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-jar-orange/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-jar-anthracite">
        <Image
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={cn("px-2.5 py-1 rounded-lg text-xs font-bold text-white", type.color)}>
            {type.label}
          </span>
          <span className={cn("px-2.5 py-1 rounded-lg text-xs font-bold", label.bg, label.text)}>
            {label.label}
          </span>
        </div>
        {/* Score */}
        <div className="absolute top-3 right-3 bg-jar-black/80 backdrop-blur-sm rounded-lg px-2.5 py-1 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-jar-orange" />
          <span className="text-xs font-bold text-white">{vehicle.inspectionScore}/100</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-jar-black group-hover:text-jar-orange transition-colors leading-tight">
          {vehicle.brand} {vehicle.model}
        </h3>
        <p className="text-xs text-jar-gray mt-0.5 truncate">{vehicle.version}</p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center gap-1.5 text-xs text-jar-gray">
            <Calendar className="w-3.5 h-3.5" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-jar-gray">
            <Gauge className="w-3.5 h-3.5" />
            <span>{vehicle.mileage.toLocaleString("fr-FR")} km</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-jar-gray">
            <Fuel className="w-3.5 h-3.5" />
            <span className="capitalize">{vehicle.energy}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-jar-gray">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{vehicle.location.replace("Showroom ", "")}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-end justify-between">
          <div>
            <p className="text-2xl font-extrabold text-jar-black">
              {vehicle.price.toLocaleString("fr-FR")} <span className="text-base">€</span>
            </p>
            <p className="text-xs text-jar-orange font-semibold">
              ou {vehicle.monthlyPayment} € / mois
            </p>
          </div>
          {vehicle.warrantyMonths > 0 && (
            <span className="text-xs bg-jar-orange/10 text-jar-orange font-semibold px-2.5 py-1 rounded-lg">
              Garantie {vehicle.warrantyMonths} mois
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
