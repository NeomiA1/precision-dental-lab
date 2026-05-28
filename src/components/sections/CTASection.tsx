import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-gray-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">

          {/* Eyebrow */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-6 shrink-0 bg-gray-700" />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
              Work With Us
            </span>
            <span className="h-px w-6 shrink-0 bg-gray-700" />
          </div>

          {/* Headline */}
          <h2 className="mb-6 text-[36px] font-light leading-[1.1] tracking-[-0.02em] text-white sm:text-[44px]">
            Ready to elevate
            <br />
            <span className="font-normal">your case results?</span>
          </h2>

          {/* Subtext */}
          <p className="mb-12 text-[15px] leading-[1.75] text-gray-400">
            Contact our team to discuss your case requirements.
            We partner with dental practices of all sizes across South Florida.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.03em] text-gray-900 transition-colors duration-200 hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-200"
            >
              {CONTACT.phoneFormatted}
            </a>
          </div>

          {/* Location */}
          <p className="mt-14 text-[11px] uppercase tracking-[0.14em] text-gray-600">
            {CONTACT.location}
          </p>

        </div>
      </div>
    </section>
  );
}
