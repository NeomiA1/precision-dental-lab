"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, CTA_LINK } from "@/lib/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const elevated = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        elevated
          ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Precision Prosthetics — home"
            className="flex items-baseline gap-1.5 text-[13px] uppercase tracking-[0.1em] text-gray-900 transition-opacity duration-300 hover:opacity-50"
          >
            <span className="font-medium">Precision</span>
            <span className="font-light text-gray-400">Prosthetics</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[13px] font-normal tracking-[0.02em] transition-colors duration-200 hover:text-gray-900 ${
                    active ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-5">
            <Link
              href={CTA_LINK.href}
              className="hidden md:inline-flex items-center rounded-full border border-gray-800 px-5 py-2 text-[12px] font-medium tracking-[0.05em] text-gray-900 transition-all duration-200 hover:bg-gray-900 hover:text-white"
            >
              {CTA_LINK.label}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={`block h-px w-[18px] bg-gray-800 transition-all duration-300 origin-center ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-[18px] bg-gray-800 transition-all duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-[18px] bg-gray-800 transition-all duration-300 origin-center ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white/96 backdrop-blur-md">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-6 pb-7 pt-2">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center border-b border-gray-50 py-4 text-[13px] font-normal tracking-[0.01em] transition-colors duration-200 hover:text-gray-900 ${
                    active ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-5">
              <Link
                href={CTA_LINK.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-[12px] font-medium tracking-[0.05em] text-white transition-colors duration-200 hover:bg-gray-700"
              >
                {CTA_LINK.label}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
