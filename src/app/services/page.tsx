import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full arch restorations, crowns and bridges, implant prosthetics, and digital CAD/CAM design — precision dental laboratory services in Fort Lauderdale, Florida.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>

      {/* ── Page hero ── */}
      <section className="bg-white pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <SectionEyebrow label="Our Services" className="mb-6" />
            <h1 className="mb-5 text-[44px] font-light leading-[1.06] tracking-[-0.025em] text-gray-900 sm:text-[52px]">
              Dental laboratory
              <br />
              <span className="font-normal">services.</span>
            </h1>
            <p className="max-w-md text-[15px] leading-[1.75] text-gray-500">
              A focused range of restorative services for dental professionals
              who require precision, consistency, and fast turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="divide-y divide-gray-100">
            {SERVICES.map(({ number, title, description }) => (
              <div key={number} className="py-10 lg:py-14">
                <div className="grid gap-6 lg:grid-cols-[3rem_1fr_1fr] lg:gap-12">

                  {/* Number */}
                  <span className="text-[11px] font-medium tracking-[0.1em] text-gray-300 lg:pt-1">
                    {number}
                  </span>

                  {/* Title */}
                  <h2 className="text-[18px] font-medium leading-snug tracking-[-0.01em] text-gray-900 lg:text-[20px]">
                    {title}
                  </h2>

                  {/* Description */}
                  <p className="text-[14px] leading-[1.8] text-gray-500">
                    {description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process note ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 border-t border-gray-100 pt-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionEyebrow label="How It Works" className="mb-5" />
              <h2 className="text-[28px] font-light leading-[1.2] tracking-[-0.015em] text-gray-900 sm:text-[32px]">
                Simple process.
                <br />
                <span className="font-normal">Precise results.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { step: "01", text: "Send your case prescription and impressions or digital files." },
                { step: "02", text: "We confirm materials, specifications, and delivery timeline." },
                { step: "03", text: "Your restoration is fabricated and quality-checked." },
                { step: "04", text: "Delivered to your practice on schedule, ready to seat." },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-5 border-b border-gray-50 pb-5 last:border-b-0 last:pb-0">
                  <span className="shrink-0 text-[11px] font-medium tracking-[0.1em] text-gray-300">
                    {step}
                  </span>
                  <p className="text-[14px] leading-[1.75] text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
