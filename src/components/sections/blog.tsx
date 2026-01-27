import React from 'react';
import { BookOpen, ShieldCheck, Wrench, AlertTriangle, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Comment sécuriser votre porte d'entrée ?",
    excerpt: "Découvrez nos conseils d'experts pour renforcer la sécurité de votre domicile et prévenir les cambriolages efficacement.",
    category: "Sécurité",
    icon: ShieldCheck,
    date: "24 Janvier 2026",
    content: "La porte d'entrée est le premier point de passage des cambrioleurs. Pour la sécuriser, plusieurs options s'offrent à vous : l'installation d'une serrure multipoints certifiée A2P, la pose d'un blindage de porte ou encore l'ajout d'un entrebâilleur. Pensez également à vérifier l'état de vos gonds et de votre bâti."
  },
  {
    title: "Que faire en cas de clé cassée dans la serrure ?",
    excerpt: "Un moment de précipitation et la clé casse... Pas de panique ! Voici les bons réflexes à adopter avant d'appeler un pro.",
    category: "Urgences",
    icon: AlertTriangle,
    date: "20 Janvier 2026",
    content: "Si un morceau de clé reste coincé dans le barillet, n'essayez surtout pas de forcer avec une autre clé ou un tournevis, vous risqueriez d'endommager le mécanisme. Si le morceau dépasse, tentez d'utiliser une pince plate. Sinon, l'utilisation d'un extracteur de clé ou l'intervention d'un serrurier qualifié est nécessaire."
  },
  {
    title: "L'importance de l'entretien de vos serrures",
    excerpt: "Une serrure bien entretenue dure plus longtemps. Apprenez les gestes simples pour éviter les blocages inattendus.",
    category: "Entretien",
    icon: Wrench,
    date: "15 Janvier 2026",
    content: "La poussière et l'humidité sont les ennemis de vos cylindres. Un entretien annuel avec un lubrifiant non gras (type spray graphite) permet de conserver une fluidité de rotation. Évitez absolument l'huile de cuisine qui finit par encrasser et bloquer le mécanisme interne."
  },
  {
    title: "Comment choisir sa serrure haute sécurité ?",
    excerpt: "Serrure A2P, multipoints, connectée... On vous aide à décrypter les normes pour faire le meilleur choix pour votre budget.",
    category: "Conseils",
    icon: BookOpen,
    date: "10 Janvier 2026",
    content: "Le choix d'une serrure dépend de votre besoin de protection. La norme A2P (Assurance Prévention Protection) classe les serrures selon leur temps de résistance à l'effraction : 5, 10 ou 15 minutes. Pour une sécurité optimale, une serrure 3 ou 5 points est vivement recommandée pour les portes d'entrée."
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
            <h2 className="text-[32px] md:text-[48px] font-extrabold text-[#003380] leading-[1.2] mb-4">
              Le Mag Sécurité ShopTaSerrure – Conseils & Astuces pour Protéger Votre Foyer
            </h2>
          <p className="text-[#4B5563] text-[18px] font-medium leading-[1.6]">
            Conseils, actualités et guides pratiques pour votre sécurité au quotidien.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="group bg-[#F9FAFB] rounded-[24px] p-8 border border-[#F3F4F6] transition-all duration-300 hover:shadow-xl hover:border-[#003380]/10 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#003380]/5 text-[#003380] group-hover:bg-[#003380] group-hover:text-white transition-colors duration-300">
                  <post.icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-bold text-[#4B5563] bg-white px-4 py-2 rounded-full border border-[#E5E7EB]">
                  {post.date}
                </span>
              </div>
              
              <div className="mb-4">
                <span className="text-[#22C55E] font-bold text-sm tracking-wider uppercase mb-2 block">
                  {post.category}
                </span>
                <h3 className="text-[24px] font-extrabold text-[#003380] mb-4 leading-tight group-hover:text-[#22C55E] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[#4B5563] text-[17px] leading-[1.6] mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
                <div className="text-[#4B5563] text-[16px] italic mb-6">
                  {post.content}
                </div>
                <button className="flex items-center gap-2 text-[#003380] font-bold hover:text-[#22C55E] transition-colors duration-300">
                  Lire la suite <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
