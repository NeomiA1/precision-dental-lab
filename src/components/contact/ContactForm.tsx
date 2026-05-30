"use client";

import { useState } from "react";

type FormFields = {
  name: string;
  clinic: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL: FormFields = {
  name: "",
  clinic: "",
  email: "",
  phone: "",
  message: "",
};

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-gray-400">
        {label}
        {required && <span className="ml-1 text-gray-300">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-gray-200 bg-white px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-300 transition-colors duration-200 focus:border-gray-900 focus:outline-none";

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL);

  const set = (key: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ── Extension point ──────────────────────────────────────────────────────
    // Connect one of the following when ready:
    //   • Email: POST to an email API route (Resend, SendGrid, etc.)
    //   • CRM:   POST to a CRM webhook (HubSpot, Salesforce, etc.)
    //   • Self-hosted: POST to /api/contact
    //
    // `fields` contains: { name, clinic, email, phone, message }
    // ─────────────────────────────────────────────────────────────────────────
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="flex flex-col gap-5">

        <Field label="Full Name" required>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={set("name")}
            placeholder="Dr. Jane Smith"
            autoComplete="name"
            required
            className={inputClass}
          />
        </Field>

        <Field label="Clinic Name" required>
          <input
            type="text"
            name="clinic"
            value={fields.clinic}
            onChange={set("clinic")}
            placeholder="South Florida Dental Group"
            autoComplete="organization"
            required
            className={inputClass}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email" required>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={set("email")}
              placeholder="dr.smith@clinic.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </Field>
          <Field label="Phone">
            <input
              type="tel"
              name="phone"
              value={fields.phone}
              onChange={set("phone")}
              placeholder="(555) 000-0000"
              autoComplete="tel"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Message" required>
          <textarea
            name="message"
            value={fields.message}
            onChange={set("message")}
            placeholder="Describe your case or inquiry…"
            rows={5}
            required
            className={`${inputClass} resize-none`}
          />
        </Field>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-full bg-gray-900 py-4 text-[13px] font-medium tracking-[0.03em] text-white transition-colors duration-200 hover:bg-gray-700"
          >
            Submit Inquiry
          </button>
          <p className="mt-3 text-center text-[11px] tracking-[0.03em] text-gray-400">
            We respond to all inquiries within one business day.
          </p>
        </div>

      </div>
    </form>
  );
}
