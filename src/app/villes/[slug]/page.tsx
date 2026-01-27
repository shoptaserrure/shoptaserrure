import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocation, LOCATIONS as allLocations, type Location } from "@/lib/seo/locations";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Phone, CheckCircle2, Clock, ShieldCheck, HelpCircle, DoorOpen, Euro, MapPin, MessageSquare } from "lucide-react";

type Props = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shopta-serrure.fr";

export async function generateStaticParams() {
  return allLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const location = getLocation(slug);

  if (!location) return {};

  const title = `Serrurier ${location.name} (${location.dept}) – Intervention rapide 24/7 | Shopta Serrure`;
  const description = `Besoin d'un serrurier à ${location.name} ? Intervention en 30 min à ${location.name} et en Île-de-France pour porte claquée, serrure bloquée ou urgence 24h/7j. Devis gratuit.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/villes/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/villes/${slug}`,
      siteName: "Shopta Serrure",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_2.png",
          width: 1200,
          height: 630,
          alt: `Serrurier ${location.name} - Shopta Serrure`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_2.png"],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  const getIntro = (loc: Location) => {
    const variant = loc.introVariant || "a";
    if (variant === "b") {
      return `Une urgence serrurerie à ${loc.name} ? Notre équipe de serruriers qualifiés intervient rapidement pour tout dépannage : ouverture de porte, changement de cylindre ou sécurisation après sinistre. Spécialistes du dépannage à domicile, nous couvrons l'ensemble des quartiers de ${loc.name} sans boutique physique pour vous garantir les meilleurs délais.`;
    }
    if (variant === "c") {
      return `Besoin d'un dépannage rapide à ${loc.name} ? Spécialistes de l'ouverture fine et du remplacement de serrure, nous nous déplaçons 24h/24 pour sécuriser votre domicile ou commerce. En tant que dépanneurs de proximité à ${loc.name}, nous intervenons sans intermédiaire pour un service transparent et efficace.`;
    }
    return `Bloqué devant chez vous à ${loc.name} ? Que ce soit pour une porte claquée, une serrure grippée ou une tentative d'effraction, notre équipe est prête à intervenir immédiatement. Spécialistes du dépannage à domicile, nous couvrons l'ensemble des quartiers de ${loc.name} sans boutique physique pour vous garantir les meilleurs délais.`;
  };

  const services = [
    { name: "Ouverture de porte claquée", desc: "Technique de la radio pour une ouverture sans dommage." },
    { name: "Remplacement de serrure", desc: "Pose de cylindres haute sécurité toutes marques." },
    { name: "Clés cassées ou perdues", desc: "Extraction de clé et changement de barillet immédiat." },
    { name: "Sécurisation après effraction", desc: "Fermeture provisoire et renforcement de porte." },
    { name: "Installation de Smart Lock", desc: "Modernisez votre accès avec des serrures connectées." },
  ];

  const faqs = [
    {
      q: `Quel est le délai d'intervention d'un serrurier à ${location.name} ?`,
      a: `Nous intervenons en moyenne sous 30 minutes à ${location.name} pour toutes vos urgences de serrurerie, 24h/24 et 7j/7.`,
    },
    {
      q: `Quel est le prix pour une ouverture de porte à ${location.name} ?`,
      a: `Nos tarifs sont transparents. Un devis est systématiquement annoncé par téléphone et validé avant toute intervention à ${location.name}.`,
    },
    {
      q: `Proposez-vous des interventions le week-end à ${location.name} ?`,
      a: `Oui, notre équipe de serruriers est disponible tous les jours, y compris les dimanches et jours fériés, pour tout dépannage à ${location.name}.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const faqJson = JSON.stringify(faqJsonLd).replace(/<\/script/gi, "<\\/script");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-6">
              Serrurier {location.name} — Dépannage 24h/24 7j/7
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Expert en serrurerie à {location.name} ({location.dept}). Nous intervenons en moins de 30 minutes pour sécuriser votre domicile ou ouvrir votre porte. Service professionnel, rapide et sans surprise.
            </p>
            <a 
              href="tel:0620546693"
              className="inline-flex items-center gap-3 bg-[#E30613] text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform"
            >
              <Phone fill="currentColor" />
              06 20 54 66 93
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Votre serrurier de proximité à {location.name}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{getIntro(location)}</p>
                <p>
                  Nous travaillons avec les plus grandes marques de serrurerie (Fichet, Picard, Bricard, Vachette) pour vous offrir une sécurité optimale. Chaque intervention à {location.name} fait l'objet d'un devis préalable gratuit et transparent.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="text-brand-green shrink-0" />
                  <div>
                    <span className="block font-bold text-brand-blue">30 min</span>
                    <span className="text-sm text-gray-500">Délai moyen</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-green shrink-0" />
                  <div>
                    <span className="block font-bold text-brand-blue">Agréé</span>
                    <span className="text-sm text-gray-500">Assurances</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Nos services à {location.name}</h3>
              <ul className="space-y-6">
                {services.map((service, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-brand-green shrink-0" />
                    <div>
                      <span className="block font-bold text-brand-blue">{service.name}</span>
                      <span className="text-sm text-gray-500">{service.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-blue mb-6">Services populaires</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                href="/#services" 
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-50 bg-gray-50/30 text-brand-blue font-bold hover:bg-gray-50 hover:border-brand-blue/10 transition-all text-center gap-3 group"
              >
                <DoorOpen className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
                <span>Ouverture de porte</span>
              </Link>
              <Link 
                href="/#tarifs" 
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-50 bg-gray-50/30 text-brand-blue font-bold hover:bg-gray-50 hover:border-brand-blue/10 transition-all text-center gap-3 group"
              >
                <Euro className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
                <span>Tarifs</span>
              </Link>
              <Link 
                href="/#contact" 
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-50 bg-gray-50/30 text-brand-blue font-bold hover:bg-gray-50 hover:border-brand-blue/10 transition-all text-center gap-3 group"
              >
                <MessageSquare className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </Link>
              <Link 
                href="/villes/paris" 
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-brand-green/20 bg-brand-green/5 text-brand-green font-bold hover:bg-brand-green/10 transition-all text-center gap-3 group"
              >
                <MapPin className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
                <span>Voir la zone Paris</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-brand-green" />
              FAQ Serrurier {location.name}
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-brand-blue mb-3">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Une urgence serrurerie à {location.name} ?</h2>
          <p className="text-xl text-blue-100 mb-10">Nos techniciens sont en route. Appelez-nous maintenant pour un dépannage immédiat.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0620546693"
              className="bg-brand-green hover:bg-brand-green/90 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-all"
            >
              Appeler le 06 20 54 66 93
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJson }}
      />

      <Footer />
    </main>
  );
}
