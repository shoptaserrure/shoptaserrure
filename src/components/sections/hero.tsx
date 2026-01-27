import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Availability Badge */}
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-5 py-2 text-sm font-semibold text-brand-green">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          Disponible 24h/24 et 7j/7
        </div>

        {/* Main Heading */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="mb-6 font-extrabold tracking-tight leading-[1.05] text-4xl md:text-6xl text-brand-blue drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
            Dépannage serrurerie rapide 24h/24 à Paris & Île-de-France
          </h1>
          <h2 className="sr-only">
            Serrurier urgence Paris, ouverture de porte, remplacement serrure, dépannage 24h/24 en Île-de-France
          </h2>
        </div>

        {/* Subtext */}
        <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-700">
          Intervention en moins de 30 minutes. Serruriers qualifiés, agréés assurances, tarifs clairs annoncés avant déplacement.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:0620546693"
            className="min-w-[190px] justify-center bg-red-600 text-white rounded-xl px-6 py-3 font-bold transition-transform hover:scale-105 flex items-center"
          >
            Appeler
          </a>
          <a
            href="https://wa.me/33620546693"
            className="min-w-[190px] justify-center border border-green-500 text-green-600 rounded-xl px-6 py-3 font-bold transition-transform hover:scale-105 flex items-center"
          >
            WhatsApp
          </a>
          <a
            href="/#services"
            className="min-w-[190px] justify-center border border-neutral-300 text-neutral-600 rounded-xl px-6 py-3 font-bold transition-transform hover:scale-105 flex items-center"
          >
            Nos services
          </a>
        </div>

        {/* Micro Trust Elements */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-700">
          <span>✓ Intervention 30 min</span>
          <span>✓ Devis gratuit</span>
          <span>✓ Agréé assurances</span>
        </div>

        <p className="mt-6 mx-auto max-w-2xl text-xs text-gray-600">
          Entreprise locale de serrurerie. Déplacement rapide dans tout Paris et Île-de-France. Devis annoncé avant intervention, aucune surprise.
        </p>
      </div>
    </section>
  );
}
