export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  slug: string;
  imagePath: string;
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Full Arch Restorations",
    description:
      "Complete implant-supported arches engineered for long-term stability, natural occlusion, and refined aesthetics.",
    slug: "full-arch-restorations",
    imagePath: "/images/services/full-arch.jpg",
  },
  {
    number: "02",
    title: "Crowns & Bridges",
    description:
      "Individually crafted with precision-milled zirconia and feldspathic porcelain to match patient anatomy exactly.",
    slug: "crowns-bridges",
    imagePath: "/images/services/crowns-bridges.jpg",
  },
  {
    number: "03",
    title: "Implant Prosthetics",
    description:
      "Custom abutments and prosthetic components designed for seamless integration with all major implant systems.",
    slug: "implant-prosthetics",
    imagePath: "/images/services/implant-prosthetics.jpg",
  },
  {
    number: "04",
    title: "Digital CAD/CAM Design",
    description:
      "Advanced digital workflows from scan to delivery — faster turnaround, consistent results, fewer remakes.",
    slug: "digital-workflow",
    imagePath: "/images/services/digital-workflow.jpg",
  },
];
