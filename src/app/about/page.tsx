import type { Metadata } from "next";
import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CTASection from "@/components/sections/CTASection";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Precision Prosthetics is a full-service dental laboratory in Fort Lauderdale, Florida. Serving dental professionals with high-quality prosthetic restorations.",
  alternates: { canonical: "/about" },
};

const APPROACH = [
  {
    number: "01",
    title: "Precision Craftsmanship",
    description:
      "Every restoration is built to exact specifications using advanced digital scanning, design, and milling technology.",
  },
  {
    number: "02",
    title: "Fast Turnaround",
    description:
      "Streamlined production workflows ensure reliable delivery timelines your practice can schedule around.",
  },
  {
    number: "03",
    title: "Digital Workflow",
    description:
      "Fully integrated CAD/CAM systems from scan to final product — reducing errors and improving predictability.",
  },
  {
    number: "04",
    title: "Reliable Communication",
    description:
      "Dedicated case management with clear updates at every stage. No surprises, no delays, no guesswork.",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* ── Page hero ── */}
      <section className="bg-white pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <SectionEyebrow label="About the Lab" className="mb-6" />
            <h1 className="mb-5 text-[44px] font-light leading-[1.06] tracking-[-0.025em] text-gray-900 sm:text-[52px]">
              Fort Lauderdale
              <br />
              <span className="font-normal">dental laboratory.</span>
            </h1>
            <p className="max-w-md text-[15px] leading-[1.75] text-gray-500">
              Precision Prosthetics is a full-service dental laboratory serving
              dental professionals across South Florida with high-quality
              prosthetic restorations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-2 xl:gap-28">

            {/* Pull quote */}
            <div className="lg:sticky lg:top-28">
              <blockquote className="text-[26px] font-light leading-[1.45] tracking-[-0.015em] text-gray-800 sm:text-[30px]">
                &ldquo;We treat every case as if it were our own restoration — with
                uncompromising attention to precision, material quality, and
                fit.&rdquo;
              </blockquote>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-6">
              <p className="text-[15px] leading-[1.8] text-gray-500">
                Precision Prosthetics is a full-service dental laboratory based in{" "}
                {CONTACT.location}. We work exclusively with dental
                professionals, providing high-quality prosthetic solutions for
                practices that demand accuracy and consistency.
              </p>
              <p className="text-[15px] leading-[1.8] text-gray-500">
                From single-unit crowns to complex full-arch implant cases, our
                team combines advanced digital technology with the artisan
                craftsmanship that defines truly great dental restorations.
              </p>
              <p className="text-[15px] leading-[1.8] text-gray-500">
                Every case receives the same level of attention — because
                clinical outcomes depend on it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Our approach ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="mb-14 lg:mb-16">
            <SectionEyebrow label="Our Approach" />
            <h2 className="max-w-lg text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-[40px]">
              How we work,
              <br />
              <span className="font-normal">every case.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-gray-100 outline outline-1 outline-gray-100 sm:grid-cols-2">
            {APPROACH.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex flex-col gap-6 bg-white p-8 lg:p-9"
              >
                <span className="text-[11px] font-medium tracking-[0.1em] text-gray-300">
                  {number}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[15px] font-medium leading-snug tracking-[-0.005em] text-gray-900">
                    {title}
                  </h3>
                  <p className="text-[13px] leading-[1.8] text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Location strip ── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-6 border-t border-gray-100 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionEyebrow label="Location" className="mb-4" />
              <p className="text-[22px] font-light tracking-[-0.01em] text-gray-900">
                {CONTACT.city}, {CONTACT.stateFullName}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:text-right">
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-[15px] font-normal text-gray-900 transition-colors duration-200 hover:text-gray-600"
              >
                {CONTACT.phoneFormatted}
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-900 sm:justify-end"
              >
                Send a message
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
