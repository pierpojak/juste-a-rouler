import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  vehicules: [
    { href: "/annonces", label: "Toutes les annonces" },
    { href: "/annonces?type=stock", label: "Véhicules en stock" },
    { href: "/annonces?type=mandat", label: "Dépôt-vente" },
    { href: "/label", label: "Label Qualité" },
  ],
  services: [
    { href: "/services", label: "Nos services" },
    { href: "/banque", label: "Banque & Financement" },
    { href: "/assurance", label: "Assurance" },
    { href: "/serenite", label: "Sérénité" },
  ],
  univers: [
    { href: "/roue-libre", label: "Roue Libre" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-jar-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Marque */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-jar-orange">Juste</span> à rouler
              </span>
            </div>
            <p className="text-jar-gray-light text-sm leading-relaxed mb-6 max-w-xs">
              Votre tiers de confiance automobile. Achat, vente, financement,
              assurance, entretien. Vous repartez, c&apos;est tout.
            </p>
            <div className="flex flex-col gap-3 text-sm text-jar-gray-light">
              <a
                href="tel:0800820820"
                className="flex items-center gap-2 hover:text-jar-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-jar-orange" />
                <span>0 800 820 820 <span className="text-jar-gray text-xs font-normal">— numéro gratuit</span></span>
              </a>
              <a
                href="mailto:contact@justearouler.fr"
                className="flex items-center gap-2 hover:text-jar-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-jar-orange" />
                contact@justearouler.fr
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-jar-orange mt-0.5" />
                <span>1 rue de la communication,<br />59175 Templemars</span>
              </div>
            </div>
          </div>

          {/* Véhicules */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-jar-orange mb-4">
              Véhicules
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.vehicules.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-jar-gray-light hover:text-jar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-jar-orange mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-jar-gray-light hover:text-jar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Univers */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-jar-orange mb-4">
              Univers
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.univers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-jar-gray-light hover:text-jar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-jar-gray">
            &copy; {new Date().getFullYear()} Juste à Rouler. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-jar-gray">
            <Link href="#" className="hover:text-jar-orange transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-jar-orange transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="hover:text-jar-orange transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
