import React from 'react';
import Image from 'next/image';
import { 
  DoorOpen, 
  Lock, 
  Key, 
  Settings, 
  Smartphone, 
  ChevronDown,
  Phone
} from 'lucide-react';

const servicesData = [
  {
    title: "Porte claquée",
    price: "49€ TTC",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_3.png",
    icon: DoorOpen,
    alt: "Porte claquée"
  },
  {
    title: "Serrure bloquée",
    price: "49€ TTC",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_4.png",
    icon: Lock,
    alt: "Serrure bloquée"
  },
  {
    title: "Clés cassées",
    price: "49€ TTC",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_5.png",
    icon: Key,
    alt: "Clés cassées"
  },
  {
    title: "Smart Lock",
    price: "49€ TTC",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_7.png",
    icon: Smartphone,
    alt: "Smart Lock"
  },
  {
    title: "Autres travaux",
    price: "Devis gratuit",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_6.png",
    icon: Settings,
    alt: "Autres travaux"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-[32px] md:text-[48px] font-extrabold text-[#003380] leading-[1.2] mb-4">
            Nos services de dépannage
          </h2>
          <p className="text-[#4B5563] text-[18px] font-medium leading-[1.6]">
            Cliquez sur une catégorie pour voir les détails et tarifs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col">
              <button className="group flex flex-col items-start rounded-2xl transition-all duration-300 border text-left w-full h-full overflow-hidden bg-white border-[#F3F4F6] text-[#003380] hover:border-[#003380]/30 shadow-sm focus:outline-none">
                {/* Card Image */}
                <div className="relative w-full h-48">
                  <Image 
                    src={service.image} 
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                  {/* Card Content */}
                  <div className="p-8 w-full flex flex-col items-start flex-grow">
                    {/* Category Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 bg-[#003380]/5 text-[#003380] group-hover:bg-[#003380]/10">
                      <service.icon className="h-7 w-7" />
                    </div>

                    {/* Title and Arrow */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="flex flex-col items-start">
                        <h3 className="text-[20px] font-bold leading-[1.4] text-[#003380]">
                          {service.title}
                        </h3>
                        <p className="text-[16px] font-bold text-[#22C55E] mt-1">
                          {service.price === "Devis gratuit" ? "Devis gratuit" : `à partir de ${service.price}`}
                        </p>
                      </div>
                      <ChevronDown className="h-6 w-6 text-[#003380] transition-transform duration-300 group-hover:translate-y-1" />
                    </div>
                  </div>
              </button>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}