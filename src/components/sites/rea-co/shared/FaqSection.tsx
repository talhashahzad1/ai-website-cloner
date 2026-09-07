"use client";

import { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  heading?: string;
}

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#dbe0e7]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-heading text-sm font-semibold text-[#07213a]">
          {faq.question}
        </span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={`h-3 w-3 shrink-0 text-[#435e6b] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-[#435e6b]">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
}: FaqSectionProps) {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
          {heading}
        </h2>
        <div className="mt-10">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
