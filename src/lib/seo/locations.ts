export type Location = {
  slug: string;
  name: string;
  dept: string;
  postalCodes?: string[];
  neighborhoods?: string[];
  isParisArr?: boolean;
  introVariant?: "a" | "b" | "c";
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const LOCATIONS: Location[] = [
  // Paris Global
  { slug: "paris", name: "Paris", dept: "75", introVariant: "a" },
  // Paris Arrondissements
  ...Array.from({ length: 20 }, (_, i) => ({
    slug: `paris-${i + 1}`,
    name: `${i + 1}${i === 0 ? 'er' : 'e'} arrondissement`,
    dept: "75",
    isParisArr: true,
    introVariant: (["a", "b", "c"][i % 3] as "a" | "b" | "c"),
  })),
  // 92 - Hauts-de-Seine
  { slug: "boulogne-billancourt", name: "Boulogne-Billancourt", dept: "92", introVariant: "a" },
  { slug: "nanterre", name: "Nanterre", dept: "92", introVariant: "a" },
  { slug: "courbevoie", name: "Courbevoie", dept: "92", introVariant: "a" },
  { slug: "asnieres-sur-seine", name: "Asnières-sur-Seine", dept: "92", introVariant: "a" },
  { slug: "levallois-perret", name: "Levallois-Perret", dept: "92", introVariant: "a" },
  { slug: "puteaux", name: "Puteaux", dept: "92", introVariant: "a" },
  { slug: "neuilly-sur-seine", name: "Neuilly-sur-Seine", dept: "92", introVariant: "a" },
  { slug: "issy-les-moulineaux", name: "Issy-les-Moulineaux", dept: "92", introVariant: "a" },
  { slug: "montrouge", name: "Montrouge", dept: "92", introVariant: "a" },
  { slug: "clamart", name: "Clamart", dept: "92", introVariant: "a" },
  // 95 - Val-d'Oise
  { slug: "argenteuil", name: "Argenteuil", dept: "95", introVariant: "a" },
  { slug: "cergy", name: "Cergy", dept: "95", introVariant: "a" },
  { slug: "sarcelles", name: "Sarcelles", dept: "95", introVariant: "a" },
  { slug: "franconville", name: "Franconville", dept: "95", introVariant: "a" },
  { slug: "herblay-sur-seine", name: "Herblay-sur-Seine", dept: "95", introVariant: "a" },
  { slug: "pontoise", name: "Pontoise", dept: "95", introVariant: "a" },
];

export function getLocation(slug: string): Location | null {
  return LOCATIONS.find((loc) => loc.slug === slug) || null;
}
