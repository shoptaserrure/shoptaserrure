import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 pb-24 md:pb-0">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-4xl font-extrabold text-brand-blue mb-10">
            Politique de confidentialité
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Les informations transmises via le formulaire de contact (nom, téléphone, message)
              sont utilisées uniquement pour répondre aux demandes des utilisateurs.
            </p>

            <p>
              Aucune donnée personnelle n’est vendue, louée ou partagée à des tiers.
            </p>

            <p>
              Vous pouvez demander la suppression de vos données à tout moment en écrivant à :
              <strong> shoptaserrure@gmail.com</strong>
            </p>

            <h2 className="text-xl font-bold text-brand-blue pt-6">
              Cookies
            </h2>
            <p>
              Ce site n’a pas pour objectif d’effectuer du suivi publicitaire. En cas d’évolution,
              cette page sera mise à jour.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
