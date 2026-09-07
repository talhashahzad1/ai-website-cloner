import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Yardi Bookkeeping Services for Property Managers | REA",
  description:
    "Expert Yardi bookkeeping services for property managers and investors. 230+ property accountants working directly inside your Yardi instance.",
};

const stats = [
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  {
    title: "Trust & Corporate Bookkeeping",
    description: "Accurate monthly bookkeeping for managers, investors, and HOAs directly in Yardi.",
  },
  {
    title: "Bank Reconciliations",
    description: "Every property bank account reconciled within Yardi's trust accounting system.",
  },
  {
    title: "Accounts Payable & Receivable",
    description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions.",
  },
  {
    title: "Financial Reporting",
    description: "Monthly packages from Yardi including balance sheets, P&Ls, and general ledgers.",
  },
  {
    title: "Yardi Cleanup & Diagnostics",
    description: "Correcting back-books, fixing misapplied transactions, and troubleshooting issues.",
  },
  {
    title: "1099 Filings & Tax Preparation",
    description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning.",
  },
];

const testimonials = [
  {
    quote: "REA handles our Yardi books with precision. Our monthly close is always on time and our owner statements are flawless.",
    author: "Michael Torres",
    role: "Property Manager",
  },
  {
    quote: "Switching to REA for our Yardi bookkeeping saved us 40% compared to our in-house team. The quality is outstanding.",
    author: "Jennifer Park",
    role: "Real Estate Investor",
  },
  {
    quote: "The team understands Yardi inside and out. They found issues our previous bookkeeper missed for years.",
    author: "David Chen",
    role: "Owner Operator",
  },
];

const faqs = [
  {
    question: "Which Yardi versions do you support?",
    answer: "We support Yardi Voyager, Yardi Breeze, and other Yardi platforms. Our team has deep expertise across the full Yardi suite.",
  },
  {
    question: "How do you access our Yardi instance?",
    answer: "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access. Clients retain control over permissions.",
  },
  {
    question: "Can you fix messy Yardi books?",
    answer: "Yes. We specialize in cleanup and diagnostics — correcting back-books, fixing misapplied transactions, and getting your Yardi instance back on track.",
  },
  {
    question: "What financial reports do you provide through Yardi?",
    answer: "We provide balance sheets, P&Ls, owner statements, and custom reports — all generated from within Yardi.",
  },
  {
    question: "How do you handle trust accounting in Yardi?",
    answer: "We reconcile owner by owner, not just account by account. Each owner's ledger is tied to the backing trust balance — the test a regulator actually applies.",
  },
];

export default function YardiPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Expert Yardi Bookkeeping Services For Property Investors & Managers"
        description="Cost-effective, accurate, on-time bookkeeping for Yardi users. We work directly inside your Yardi Voyager or Breeze instance."
        badgeLabel="Yardi Partner"
        showDotGrid
      />

      <StatsBar stats={stats} />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Yardi Bookkeeping Services from REA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">
            Done Inside Your Yardi, Not Exported Out
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-heading text-base font-semibold text-[#07213a]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">{s.description}</p>
                <Link href="#get-started" className="mt-4 inline-block text-sm font-medium text-[#20949d] hover:underline">
                  See how it works →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            How Yardi Bookkeeping Transforms Your Business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#435e6b]">
            From Catch-Up to Clean Monthly Closes
          </p>
          <div className="mt-12 space-y-8">
            {[
              { title: "Understanding Your Portfolio", desc: "We learn your Yardi setup, connect to your instance, review your books, and resolve any issues. Catch-up bookkeeping if needed." },
              { title: "Expert Monthly Bookkeeping", desc: "Ongoing reconciliations, AP, AR, reporting, and new property setups — all done directly inside Yardi." },
              { title: "Transparent Financial Reporting", desc: "Monthly financial packages delivered through Yardi including P&Ls, balance sheets, and owner statements." },
            ].map((step, i) => (
              <div key={step.title} className="flex gap-6 rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20949d] font-heading text-sm font-bold text-white">{i + 1}</div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#07213a]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Yardi Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate Yardi Books?" description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team." />
    </SiteLayout>
  );
}
