"use client";

import { useState, useEffect } from "react";
import type { Vehicle } from "@/lib/vehicles";
import { vehicles as staticVehicles } from "@/lib/vehicles";
import { fetchVehiclesFromAirtable } from "@/lib/airtable";

/** Cache en mémoire pour éviter les requêtes multiples dans la même session */
let cachedVehicles: Vehicle[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60_000; // 1 minute

async function getVehicles(): Promise<Vehicle[]> {
  const now = Date.now();
  if (cachedVehicles && now - cacheTimestamp < CACHE_DURATION) {
    return cachedVehicles;
  }

  const vehicles = await fetchVehiclesFromAirtable();

  if (vehicles.length > 0) {
    cachedVehicles = vehicles;
    cacheTimestamp = now;
    return vehicles;
  }

  // Fallback sur les données statiques si Airtable est down
  return staticVehicles;
}

/** Hook pour récupérer tous les véhicules publiés */
export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(staticVehicles);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getVehicles()
      .then((data) => {
        if (!cancelled) {
          setVehicles(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("useVehicles error:", err);
          setError("Impossible de charger les véhicules");
          setVehicles(staticVehicles); // fallback
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { vehicles, loading, error };
}

/** Hook pour récupérer un véhicule par son slug */
export function useVehicle(slug: string) {
  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getVehicles()
      .then((data) => {
        if (!cancelled) {
          setVehicle(data.find((v) => v.slug === slug));
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          // Fallback sur les données statiques
          const staticVehicle = staticVehicles.find((v) => v.slug === slug);
          setVehicle(staticVehicle);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { vehicle, loading };
}
