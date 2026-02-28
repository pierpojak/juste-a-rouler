"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/annonces", label: "Annonces" },
  { href: "/services", label: "Services" },
  { href: "/label", label: "Label Qualité" },
  {
    href: "#",
    label: "Financer & Protéger",
    children: [
      { href: "/banque", label: "Banque", desc: "Financement & solutions d'achat" },
      { href: "/assurance", label: "Assurance", desc: "Comparer & changer facilement" },
    ],
  },
  { href: "/serenite", label: "Sérénité" },
  { href: "/roue-libre", label: "Roue Libre" },
];

const secondaryLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barre de navigation principale */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-jar-black/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-gradient-to-b from-jar-black/80 to-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/logo-jar.svg"
                alt="Juste à Rouler"
                className="h-10 w-auto"
              />
            </Link>

            {/* Nav desktop */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(link.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-white/80 hover:text-jar-orange transition-colors duration-200">
                      {link.label}
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", dropdownOpen === link.label && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-jar-anthracite border border-white/10 rounded-xl shadow-xl overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-3.5 hover:bg-jar-orange/10 transition-colors"
                            >
                              <span className="text-sm font-semibold text-white">{child.label}</span>
                              <span className="block text-xs text-jar-gray-light mt-0.5">{child.desc}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 group",
                      link.label === "Annonces"
                        ? "text-jar-orange hover:text-jar-orange-hover"
                        : "text-white/80 hover:text-jar-orange"
                    )}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-jar-orange transition-all duration-300 group-hover:w-3/4" />
                  </Link>
                )
              )}
            </nav>

            {/* CTA desktop */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href="tel:0800820820"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-jar-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-jar-orange" />
                <div className="hidden 2xl:flex flex-col leading-none">
                  <span className="font-bold text-white text-sm">0 800 820 820</span>
                  <span className="text-[10px] text-jar-gray mt-0.5">numéro gratuit</span>
                </div>
              </a>
              <Link
                href="/contact"
                className="bg-jar-orange text-jar-black font-bold px-5 py-2.5 rounded-lg hover:bg-jar-orange-hover hover:scale-[1.02] transition-all duration-200 text-sm"
              >
                Prendre RDV
              </Link>
            </div>

            {/* Burger mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-white"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden fixed inset-0 top-20 bg-jar-black z-40 overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="py-2">
                    <p className="text-xs uppercase tracking-wider text-jar-gray mb-3 px-4">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-lg font-bold text-white hover:text-jar-orange transition-colors"
                      >
                        {child.label}
                        <span className="block text-sm font-normal text-jar-gray-light">
                          {child.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 text-lg font-bold transition-colors",
                      link.label === "Annonces"
                        ? "text-jar-orange"
                        : "text-white hover:text-jar-orange"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-4 pt-4 border-t border-white/10">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-base font-semibold text-jar-gray-light hover:text-jar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Coordonnées mobile */}
              <div className="mt-4 pt-4 border-t border-white/10 px-4 space-y-3">
                <a href="tel:0800820820" className="flex items-center gap-3 text-white">
                  <Phone className="w-4 h-4 text-jar-orange" />
                  <div>
                    <p className="font-bold text-sm">0 800 820 820</p>
                    <p className="text-xs text-jar-gray">numéro gratuit</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-jar-gray-light">
                  <MapPin className="w-4 h-4 text-jar-orange mt-0.5" />
                  <p className="text-sm">1 rue de la communication,<br />59175 Templemars</p>
                </div>
              </div>

              <div className="mt-6 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-jar-orange text-jar-black font-bold px-6 py-3.5 rounded-xl text-lg"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
