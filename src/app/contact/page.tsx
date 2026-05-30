import type { Metadata } from "next";
import { CONTACT, CONTACT_CHANNELS } from "@/lib/constants";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Precision Prosthetics Dental Lab in Fort Lauderdale, Florida. Submit a case inquiry or get in touch with our team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>

      {/* ── Page hero ── */}
      <section className="bg-white pb-12 pt-32 lg:pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionEyebrow label="Contact" className="mb-6" />
          <h1 className="text-[44px] font-light leading-[1.06] tracking-[-0.025em] text-gray-900 sm:text-[52px]">
            Contact the
            <br />
            <span className="font-normal">laboratory.</span>
          </h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.25fr] xl:gap-20">

            {/* ── Left: context + action channels ── */}
            <div className="flex flex-col gap-10">

              {/* Description */}
              <div className="flex flex-col gap-4 border-b border-gray-100 pb-10">
                <p className="text-[15px] leading-[1.8] text-gray-500">
                  We work exclusively with dental professionals.
                  Use the form or contact us directly to discuss
                  case requirements, materials, or turnaround timelines.
                </p>
                <p className="text-[13px] leading-[1.75] text-gray-400">
                  {CONTACT.location}
                </p>
              </div>

              {/* Action channels */}
              <div className="flex flex-col gap-3">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.1em] text-gray-400">
                  Reach Us
                </p>

                {CONTACT_CHANNELS.map((channel) =>
                  channel.available ? (
                    <a
                      key={channel.id}
                      href={channel.href!}
                      className="group flex items-center justify-between border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-px shrink-0 text-[10px] font-medium tracking-[0.1em] text-gray-300 transition-colors duration-200 group-hover:text-gray-500">
                          {channel.number}
                        </span>
                        <div>
                          <p className="text-[14px] font-medium leading-snug text-gray-900 transition-colors duration-200 group-hover:text-white">
                            {channel.label}
                          </p>
                          <p className="mt-0.5 text-[12px] text-gray-500 transition-colors duration-200 group-hover:text-gray-300">
                            {channel.value}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-gray-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white">
                        →
                      </span>
                    </a>
                  ) : (
                    <div
                      key={channel.id}
                      className="flex items-start gap-4 border border-gray-100 bg-white p-5"
                    >
                      <span className="mt-px shrink-0 text-[10px] font-medium tracking-[0.1em] text-gray-200">
                        {channel.number}
                      </span>
                      <div>
                        <p className="text-[14px] font-medium leading-snug text-gray-400">
                          {channel.label}
                        </p>
                        <p className="mt-0.5 text-[12px] text-gray-300">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

            </div>

            {/* ── Right: form ── */}
            <div className="border border-gray-100 bg-white p-8 lg:p-10">
              <div className="mb-8 border-b border-gray-100 pb-8">
                <SectionEyebrow label="Case Inquiry" className="mb-4" />
                <h2 className="text-[22px] font-light leading-snug tracking-[-0.01em] text-gray-900">
                  Tell us about your case.
                </h2>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Location footer strip ── */}
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] uppercase tracking-[0.12em] text-gray-400">
              Precision Prosthetics Dental Lab · {CONTACT.location}
            </p>
            <a
              href={`tel:${CONTACT.phoneE164}`}
              className="text-[12px] font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              {CONTACT.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
