import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function AboutPreview() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-14 lg:grid-cols-2 xl:gap-28">

          {/* Left: Pull quote */}
          <div className="lg:sticky lg:top-28">
            <SectionEyebrow label="About the Lab" className="mb-8" />
            <blockquote className="text-[26px] font-light leading-[1.45] tracking-[-0.015em] text-gray-800 sm:text-[30px]">
              &ldquo;We treat every case as if it were our own restoration — with uncompromising attention to precision, material quality, and fit.&rdquo;
            </blockquote>
          </div>

          {/* Right: Body + CTA */}
          <div className="flex flex-col gap-6">
            <p className="text-[15px] leading-[1.8] text-gray-500">
              Precision Prosthetics is a full-service dental laboratory based in Fort Lauderdale, Florida. We work exclusively with dental professionals, providing high-quality prosthetic solutions for practices that demand accuracy and consistency.
            </p>
            <p className="text-[15px] leading-[1.8] text-gray-500">
              From single-unit crowns to complex full-arch implant cases, our team combines advanced digital technology with the artisan craftsmanship that defines truly great dental restorations.
            </p>
            <p className="text-[15px] leading-[1.8] text-gray-500">
              Every case receives the same level of attention — because clinical outcomes depend on it.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-900"
              >
                Learn More About Us
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
