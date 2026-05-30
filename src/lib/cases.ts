export type CaseCategory = "full-arch" | "crowns" | "implants" | "zirconia";

export type DentalCase = {
  id: string;
  title: string;
  type: string;
  category: CaseCategory;
  description: string;
  imagePath: string;
};

export const CASES: DentalCase[] = [
  {
    id: "01",
    title: "Full Arch Implant Restoration",
    type: "All-on-4 · Monolithic Zirconia",
    category: "full-arch",
    description:
      "Complete upper and lower arch reconstruction on four implants. High-strength monolithic zirconia selected for long-term durability and natural light transmission.",
    imagePath: "/images/cases/case-01.jpg",
  },
  {
    id: "02",
    title: "Full Arch Hybrid Prosthesis",
    type: "All-on-6 · Layered Zirconia",
    category: "full-arch",
    description:
      "Six-implant supported full arch with hand-layered zirconia for enhanced aesthetic depth and individualized shade characterization.",
    imagePath: "/images/cases/case-02.jpg",
  },
  {
    id: "03",
    title: "Anterior Aesthetic Veneers",
    type: "Veneers · IPS e.max",
    category: "crowns",
    description:
      "Six-unit anterior case demanding precise shade matching and natural translucency. Minimal-preparation design preserved maximum tooth structure.",
    imagePath: "/images/cases/case-03.jpg",
  },
  {
    id: "04",
    title: "Posterior Crown Reconstruction",
    type: "Crowns · High-Strength Zirconia · 4 Units",
    category: "crowns",
    description:
      "Four-unit posterior reconstruction in high-strength zirconia, providing long-term occlusal stability and minimal maintenance for a high-wear patient.",
    imagePath: "/images/cases/case-04.jpg",
  },
  {
    id: "05",
    title: "Posterior Implant Bridge",
    type: "Fixed Bridge · Screw-Retained",
    category: "implants",
    description:
      "Three-unit posterior bridge on titanium abutments, engineered for optimal occlusal loading and unobstructed hygienic access between pontic and tissue.",
    imagePath: "/images/cases/case-05.jpg",
  },
  {
    id: "06",
    title: "Single Implant Restoration",
    type: "Implant Crown · Custom Zirconia Abutment",
    category: "implants",
    description:
      "Single-unit implant crown with custom milled zirconia abutment, designed for a natural emergence profile and long-term peri-implant tissue health.",
    imagePath: "/images/cases/case-06.jpg",
  },
  {
    id: "07",
    title: "Full-Mouth Zirconia Reconstruction",
    type: "Full Mouth · High-Translucency Zirconia · 20 Units",
    category: "zirconia",
    description:
      "Complete full-mouth reconstruction across 20 units in high-translucency zirconia, balancing structural strength with natural optical depth.",
    imagePath: "/images/cases/case-07.jpg",
  },
  {
    id: "08",
    title: "Anterior Layered Zirconia Crowns",
    type: "Crowns · Layered Zirconia · 8 Units",
    category: "zirconia",
    description:
      "Eight anterior crowns with hand-applied porcelain layering for maximum translucency and individualized shade gradation across the smile zone.",
    imagePath: "/images/cases/case-08.jpg",
  },
];

export const CASE_CATEGORIES: { label: string; value: CaseCategory }[] = [
  { label: "Full Arch", value: "full-arch" },
  { label: "Crowns", value: "crowns" },
  { label: "Implants", value: "implants" },
  { label: "Zirconia", value: "zirconia" },
];
