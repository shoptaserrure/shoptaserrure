import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { LOCATIONS, slugify } from '@/lib/seo/locations';

const Footer = () => {
  const locationSlugs = new Set(LOCATIONS.map((l) => l.slug));

  const parisArrondissements = Array.from({ length: 20 }, (_, i) => ({
    name: `${i + 1}${i === 0 ? 'er' : 'e'} arrondissement`,
    slug: `paris-${i + 1}`
  }));

  const hautDeSeineCities = [
    'Antony', 'Asnières-sur-Seine', 'Bagneux', 'Biarritz', 'Boulogne-Billancourt', 'Châtenay-Malabry', 'Châtillon', 
    'Clamart', 'Clichy', 'Colombes', 'Courbevoie', 'Fontenay-aux-Roses', 'Gennevilliers', 'Issy-les-Moulineaux', 
    'Levallois-Perret', 'Malakoff', 'Meudon', 'Montrouge', 'Nanterre', 'Neuilly-sur-Seine', 'Puteaux', 
    'Rueil-Malmaison', 'Saint-Cloud', 'Sceaux', 'Suresnes', 'Vanves', 'Ville-d\'Avray', 'Villejuif', 'Villeneuve-la-Garenne'
  ];

  const valDOiseCities = [
    'Argenteuil', 'Arnouville', 'Auvers-sur-Oise', 'Beauchamp', 'Beaumont-sur-Oise', 'Bernes-sur-Oise', 'Bessancourt', 
    'Bezons', 'Boisemont', 'Bonneuil-en-France', 'Bouffémont', 'Bruyères-sur-Oise', 'Butry-sur-Oise', 'Cergy', 
    'Champagne-sur-Oise', 'Cormeilles-en-Parisis', 'Courdimanche', 'Deuil-la-Barre', 'Domont', 'Eaubonne', 'Écouen', 
    'Enghien-les-Bains', 'Ennery', 'Épiais-Rhus', 'Épinay-Champlâtreux', 'Éragny', 'Ermont', 'Ézanville', 'Fontenay-en-Parisis', 
    'Fosses', 'Franconville', 'Frépillon', 'Frouville', 'Garges-lès-Gonesse', 'Gonesse', 'Goussainville', 'Groslay', 
    'Herblay-sur-Seine', 'L\'Isle-Adam', 'Jouy-le-Moutier', 'Louvres', 'Marly-la-Ville', 'Montigny-lès-Cormeilles', 
    'Montmagny', 'Montmorency', 'Osny', 'Persan', 'Pierrelaye', 'Pontoise', 'Puiseux-Pontoise', 'Saint-Brice-sous-Forêt', 
    'Saint-Gratien', 'Saint-Leu-la-Forêt', 'Saint-Ouen-l\'Aumône', 'Saint-Prix', 'Sannois', 'Sarcelles', 'Soisy-sous-Montmorency', 
    'Taverny', 'Vauréal', 'Villiers-le-Bel'
  ];

  return (
    <footer className="bg-white pt-16 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top Footer: Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="relative block w-[160px] h-[50px]">
                <Image 
                  src="/logo-shopta-transparent.png"
                  alt="Shopta Serrure Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
            <p className="text-gray-500 text-[16px] leading-relaxed font-medium pr-4">
              Votre serrurier de confiance pour toutes vos urgences. Intervention rapide 24h/7j, expertise certifiée et tarifs transparents.
            </p>
          </div>

          {/* Menu Column */}
          <div>
            <h4 className="text-brand-blue font-bold text-[18px] mb-8">Menu</h4>
              <ul className="flex flex-col gap-4">
                {['Accueil', 'Dépannage', 'Tarifs', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={item === 'Accueil' ? '/' : `/#${item.toLowerCase()}`} className="text-brand-blue font-bold hover:text-brand-green transition-colors text-[16px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
          </div>

          {/* Urgences Column */}
          <div>
            <h4 className="text-brand-blue font-bold text-[18px] mb-8">Urgences</h4>
            <ul className="flex flex-col gap-4">
              {['Porte claquée', 'Serrure bloquée', 'Clés cassées', 'Changement de serrure', 'Smart Lock'].map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-brand-blue font-bold hover:text-brand-green transition-colors text-[16px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-6">
              <h4 className="text-brand-blue font-bold text-[18px] mb-2">Contact</h4>
              <p className="text-gray-600 text-[16px] leading-[1.6]">
                Intervention en 30 min dans tout Paris et Île-de-France.
              </p>
              <p className="text-brand-blue font-bold text-[16px]">
                shoptaserrure@gmail.com
              </p>
            </div>
        </div>

        {/* Middle Footer: Intervention Zones */}
        <div className="border-t border-gray-100 py-12">
          <h3 className="text-brand-blue font-extrabold text-[24px] mb-8">Zones d'interventions</h3>
          
          {/* Paris */}
          <div className="mb-10">
            <h5 className="text-brand-green font-bold mb-4">Paris (75)</h5>
            <div className="flex flex-wrap gap-2">
              <Link href="/villes/paris" className="bg-gray-50 text-brand-blue hover:text-brand-green px-4 py-2 rounded-full text-[14px] font-bold border border-gray-100 whitespace-nowrap transition-colors">
                Paris Global
              </Link>
              {parisArrondissements.map((arr) => (
                <Link key={arr.slug} href={`/villes/${arr.slug}`} className="bg-gray-50 text-gray-600 hover:text-brand-green px-4 py-2 rounded-full text-[14px] font-medium border border-gray-100 whitespace-nowrap transition-colors">
                  {arr.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Hauts-de-Seine */}
          <div className="mb-10">
            <h5 className="text-brand-green font-bold mb-4">Hauts-de-Seine (92)</h5>
            <div className="flex flex-wrap gap-2">
              {hautDeSeineCities.map((city) => {
                const slug = slugify(city);
                const isLink = locationSlugs.has(slug);
                const className = "px-4 py-2 rounded-full text-[14px] font-medium border border-gray-100 whitespace-nowrap transition-colors";
                if (isLink) {
                  return (
                    <Link key={city} href={`/villes/${slug}`} className={`${className} bg-gray-50 text-gray-600 hover:text-brand-green`}>
                      {city}
                    </Link>
                  );
                }
                return (
                  <span key={city} className={`${className} bg-gray-50 text-gray-400`}>
                    {city}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Val d'Oise */}
          <div className="mb-8">
            <h5 className="text-brand-green font-bold mb-4">Val d'Oise (95)</h5>
            <div className="flex flex-wrap gap-2">
              {valDOiseCities.map((city) => {
                const slug = slugify(city);
                const isLink = locationSlugs.has(slug);
                const className = "px-4 py-2 rounded-full text-[14px] font-medium border border-gray-100 whitespace-nowrap transition-colors";
                if (isLink) {
                  return (
                    <Link key={city} href={`/villes/${slug}`} className={`${className} bg-gray-50 text-gray-600 hover:text-brand-green`}>
                      {city}
                    </Link>
                  );
                }
                return (
                  <span key={city} className={`${className} bg-gray-50 text-gray-400`}>
                    {city}
                  </span>
                );
              })}
            </div>
          </div>
          
          <p className="text-gray-400 text-[14px] font-medium mt-6">
            Hors zone d'interventions : des frais supplémentaires peuvent s'appliquer.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[14px]">
            © 2026 Shopta Serrure. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8">
            <a href="/mentions-legales" className="text-gray-500 hover:text-brand-blue text-[14px] transition-colors">
              Mentions Légales
            </a>
            <a href="/politique-confidentialite" className="text-gray-500 hover:text-brand-blue text-[14px] transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Serrurier d’urgence à Paris et Île-de-France – Intervention 24h/24, 7j/7 – Devis gratuit par téléphone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
