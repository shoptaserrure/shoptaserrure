import Link from "next/link";
import { LOCATIONS } from "@/lib/seo/locations";

export default function InterventionZones() {
  const cities = LOCATIONS.slice(0, 20);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-brand-blue mb-8">
          Zones d’intervention rapides
        </h2>

        <div className="flex flex-wrap gap-3">
          {cities.map((loc) => (
            <Link
              key={loc.slug}
              href={`/villes/${loc.slug}`}
              className="px-4 py-2 rounded-full bg-gray-50 text-brand-blue hover:text-brand-green border border-gray-100 font-semibold text-sm"
            >
              Serrurier {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
