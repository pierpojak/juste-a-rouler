"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Prêt à repartir{" "}
            <span className="text-jar-orange">sereinement</span> ?
          </h2>
          <p className="text-jar-gray-light text-lg mb-10 max-w-2xl mx-auto">
            Que vous vendiez, achetiez, financiez ou louiez — on s&apos;occupe
            de tout. Contactez-nous et repartez l&apos;esprit tranquille.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group bg-jar-orange text-jar-black font-extrabold px-10 py-4 rounded-xl text-lg hover:bg-jar-orange-hover hover:scale-[1.03] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-jar-orange/20"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
  );
}
