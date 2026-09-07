import React from "react";
import Image from "next/image";
import Link from "next/link";

const checklistItems = [
  "Bank & Credit Card Reconciliations",
  "Accounts Payable & Receivable",
  "Accruals & Prepayments",
  "Management Fees & Owner Draws",
  "Financial Review & Reporting",
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 18 14"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 7.5 6.5 12 16 2"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07213a]">
      {/* Background image */}
      <Image
        src="/sites/rea-co/root-00000000/images/skyline-dusk.webp"
        alt=""
        fill
        unoptimized
        className="object-cover object-[center_35%]"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(7,33,58,0.94) 0%, rgba(7,33,58,0.82) 42%, rgba(7,33,58,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-28"
        style={{ background: "linear-gradient(to bottom, transparent, #07213A)" }}
        aria-hidden="true"
      />

      {/* Content grid */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-x-14 gap-y-12 px-5 pt-16 pb-24 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_minmax(0,440px)] lg:pt-24">
        {/* Left column — text */}
        <div>
          <h1 className="font-heading text-[clamp(2.5rem,5.2vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-balance text-white">
            Outsourced Real Estate Accounting
          </h1>

          {/* Teal swash underline */}
          <svg
            className="mt-2 block h-[10px] w-[min(340px,56%)] text-[#51cec8]"
            viewBox="0 0 340 10"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M2 7C60 2.5 120 6.5 178 4.5 236 2.5 296 5.5 338 4"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          <h2 className="mt-6 font-heading text-[1.3rem] font-semibold leading-snug text-[#51cec8] sm:text-[1.5rem]">
            You Handle the Management. Leave the Accounting to Us.
          </h2>

          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/85">
            We help property managers &amp; investors improve profit margins with
            scalable outsourced accounting: bookkeeping, tax, and lease
            compliance, inside the software you already use. Real estate
            accounting outsourcing done properly means outsourced property
            accounting that runs in your system, not a monthly export.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-5">
            <Link
              href="#get-started"
              className="inline-block rounded-full bg-[#20949d] px-[35.2px] py-4 text-[15.2px] font-semibold text-white shadow-[0_2px_4px_rgba(4,21,42,0.35),0_12px_26px_-10px_rgba(32,148,157,0.55)] transition-all duration-150 hover:bg-[#1a7a82]"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Software names row */}
          <p className="mt-12 max-w-xl text-[0.95rem] font-bold tracking-wide text-white/60">
            AppFolio &nbsp;·&nbsp; Yardi &nbsp;·&nbsp; Buildium &nbsp;·&nbsp;{" "}
            Rent Manager &nbsp;·&nbsp; Entrata &nbsp;·&nbsp; RealPage &nbsp;·&nbsp;{" "}
            QuickBooks &nbsp;·&nbsp; MRI
          </p>
        </div>

        {/* Right column — glass card (desktop only) */}
        <div
          className="hidden rounded-3xl p-7 lg:block"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "0 40px 80px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          {/* Card header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/55">
                Month-End Close
              </p>
              <p className="mt-0.5 font-heading text-sm font-semibold text-white">
                Your Portfolio · by Vertex
              </p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#20949d]/20">
              <CheckIcon />
            </span>
          </div>

          {/* Checklist */}
          <ul className="mt-5">
            {checklistItems.map((item, i) => (
              <li
                key={item}
                className="flex items-center justify-between gap-3 border-b border-white/10 py-3 last:border-b-0"
              >
                <span className="text-[0.92rem] font-semibold text-white/90">
                  {item}
                </span>
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20949d]/25"
                  style={{
                    animation:
                      "check-pop 0.45s cubic-bezier(0.16,1,0.3,1) both",
                    animationDelay: `${0.5 + i * 0.28}s`,
                  }}
                >
                  <CheckIcon />
                </span>
              </li>
            ))}
          </ul>

          {/* Close complete chip */}
          <div
            className="mt-5 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3"
            style={{
              animation: "chip-rise 0.5s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "2.1s",
            }}
          >
            <span className="text-[0.85rem] font-bold text-white">
              Close complete
            </span>
            <span className="text-[0.8rem] font-semibold text-[#51cec8]">
              Books · Tax · Lease Compliance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
