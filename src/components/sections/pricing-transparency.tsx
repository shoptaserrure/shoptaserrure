import React from 'react';
import { Check, Phone, MessageCircle, Zap, Euro, ShieldCheck } from 'lucide-react';

const PricingTransparency = () => {
  return (
    <section id="tarifs" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-[32px] md:text-[48px] font-extrabold text-[#003380] leading-[1.2] mb-6">
              Des tarifs <span className="text-[#22c55e]">justes et transparents</span>
            </h2>
            <p className="text-[18px] md:text-[20px] text-[#4b5563] mb-8 leading-[1.6] font-medium max-w-2xl">
              Chez Shopta Serrure, nous croyons qu'une urgence ne doit pas être synonyme de mauvaise surprise. 
              C'est pourquoi nous nous engageons sur une politique de prix claire.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-[#003380] font-bold text-[18px]">
                <div className="bg-[#22c55e] rounded-full p-1 text-white shrink-0 shadow-sm">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                Devis gratuit et détaillé avant chaque intervention
              </li>
              <li className="flex items-center gap-3 text-[#003380] font-bold text-[18px]">
                <div className="bg-[#22c55e] rounded-full p-1 text-white shrink-0 shadow-sm">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                Déplacement offert en cas de travaux réalisés
              </li>
              <li className="flex items-center gap-3 text-[#003380] font-bold text-[18px]">
                <div className="bg-[#22c55e] rounded-full p-1 text-white shrink-0 shadow-sm">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                Agrément par les plus grandes compagnies d'assurances
              </li>
              <li className="flex items-center gap-3 text-[#003380] font-bold text-[18px]">
                <div className="bg-[#22c55e] rounded-full p-1 text-white shrink-0 shadow-sm">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                Matériel certifié et garanti
              </li>
            </ul>


          </div>

          {/* Right Cards Stack */}
          <div className="flex-1 w-full grid grid-cols-1 gap-6">
            {/* Rapid Intervention */}
            <div className="flex items-start gap-5 p-8 rounded-[24px] bg-[#f9fafb] border border-[#f3f4f6] hover:shadow-lg transition-standard group">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-[#22c55e] shrink-0 transition-standard group-hover:scale-110">
                <Zap fill="#22c55e" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[20px] font-extrabold text-[#003380] mb-2 leading-[1.4]">
                  Intervention Rapide
                </h3>
                <p className="text-[#4b5563] leading-[1.6] font-medium text-[16px]">
                  Nous intervenons chez vous en moins de 30 minutes pour toutes vos urgences.
                </p>
              </div>
            </div>

            {/* Total Transparency */}
            <div className="flex items-start gap-5 p-8 rounded-[24px] bg-[#f9fafb] border border-[#f3f4f6] hover:shadow-lg transition-standard group">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-[#22c55e] shrink-0 transition-standard group-hover:scale-110">
                <Euro className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-[20px] font-extrabold text-[#003380] mb-2 leading-[1.4]">
                  Transparence Totale
                </h3>
                <p className="text-[#4b5563] leading-[1.6] font-medium text-[16px]">
                  Aucun frais caché. Nos tarifs sont annoncés et validés par un devis avant intervention.
                </p>
              </div>
            </div>

            {/* Qualified Locksmith */}
            <div className="flex items-start gap-5 p-8 rounded-[24px] bg-[#f9fafb] border border-[#f3f4f6] hover:shadow-lg transition-standard group">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-[#22c55e] shrink-0 transition-standard group-hover:scale-110">
                <ShieldCheck className="w-8 h-8" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[20px] font-extrabold text-[#003380] mb-2 leading-[1.4]">
                  Serrurier Qualifié
                </h3>
                <p className="text-[#4b5563] leading-[1.6] font-medium text-[16px]">
                  Des experts serruriers formés pour garantir une sécurité maximale à votre domicile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;