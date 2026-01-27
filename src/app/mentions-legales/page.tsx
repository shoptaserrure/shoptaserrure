import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 pb-24 md:pb-0">
      <Navbar />

      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-extrabold text-brand-blue mb-10">
            Mentions légales
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <h2 className="text-xl font-bold text-brand-blue">
              1. Présentation du site
            </h2>

            <p>
              Conformément à l’article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance
              dans l’économie numérique, il est précisé aux utilisateurs du site
              <strong> shopta-serrure.fr </strong>
              l’identité des différents intervenants.
            </p>

            <ul className="space-y-2">
              <li><strong>Propriétaire :</strong> Shopta Serrure – Paris, France</li>
              <li><strong>Responsable de publication :</strong> Shopta Serrure</li>
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            </ul>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}