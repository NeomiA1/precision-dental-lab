export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

export const CTA_LINK: NavLink = {
  label: "Contact Us",
  href: "/contact",
};
