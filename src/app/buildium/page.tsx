import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Buildium Bookkeeping Services for Property Managers | REA",
  description:
    "Expert Buildium bookkeeping services for property managers and investors. 230+ property accountants working directly inside your Buildium instance.",
};

const stats = [
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for managers, investors, and HOAs directly in Buildium." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled within Buildium's trust accounting system." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages from Buildium including balance sheets, P&Ls, and general ledgers." },
  { title: "Buildium Cleanup & Diagnostics", description: "Correcting back-books, fixing misapplied transactions, and troubleshooting issues." },
  { title: "1099 Filings & Tax Preparation", description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning." },
];

const testimonials = [
  { quote: "REA has been handling our Buildium bookkeeping for over a year. The monthly close is always on time and accurate.", author: "Rachel Kim", role: "Property Manager" },
  { quote: "Our Buildium books were a mess before REA. They cleaned everything up and now we have clean monthly closes.", author: "James Wilson", role: "Owner Operator" },
  { quote: "The team understands Buildium inside and out. Highly recommend for any property manager.", author: "Amanda Foster", role: "Real Estate Investor" },
];

const faqs = [
  { question: "What Buildium features do you leverage?", answer: "We use Buildium's native trust accounting, bank reconciliation, AP/AR, and reporting features to keep your books accurate and compliant." },
  { question: "How do you access our Buildium instance?", answer: "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access." },
  { question: "Can you clean up messy Buildium books?", answer: "Yes. We specialize in cleanup and diagnostics — correcting back-books, fixing misapplied transactions, and getting your Buildium instance back on track." },
  { question: "How do you handle HOA reserves in Buildium?", answer: "We properly separate operating and reserve funds within Buildium, ensuring each HOA's reserves are tracked independently." },
  { question: "What financial reports do you provide?", answer: "Balance sheets, P&Ls, owner statements, and custom reports — all generated from within Buildium." },
];

export default function BuildiumPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Expert Buildium Bookkeeping Services For Property Investors & Managers"
        description="Cost-effective, accurate, on-time bookkeeping for Buildium users. We work directly inside your Buildium instance."
        badgeLabel="Buildium Partner"
        showDotGrid
      />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Buildium Bookkeeping Services from REA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">Done Inside Your Buildium, Not Exported Out</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-heading text-base font-semibold text-[#07213a]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">{s.description}</p>
                <Link href="#get-started" className="mt-4 inline-block text-sm font-medium text-[#20949d] hover:underline">See how it works →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">How Buildium Bookkeeping Transforms Your Business</h2>
          <div className="mt-12 space-y-8">
            {[
              { title: "Understanding Your Portfolio", desc: "We learn your Buildium setup, connect to your instance, review your books, and resolve any issues." },
              { title: "Expert Monthly Bookkeeping", desc: "Ongoing reconciliations, AP, AR, reporting, and new property setups — all done directly inside Buildium." },
              { title: "Transparent Financial Reporting", desc: "Monthly financial packages delivered through Buildium including P&Ls, balance sheets, and owner statements." },
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Buildium Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate Buildium Books?" description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team." />
    </SiteLayout>
  );
}
