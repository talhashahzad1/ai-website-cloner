import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Propertyware Bookkeeping Services for Property Managers | REA",
  description: "Expert Propertyware bookkeeping services for property managers and investors. 230+ property accountants working directly inside your Propertyware instance.",
};

const stats = [
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for managers, investors, and HOAs directly in Propertyware." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled within Propertyware's trust accounting system." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages from Propertyware including balance sheets, P&Ls, and general ledgers." },
  { title: "Propertyware Cleanup & Diagnostics", description: "Correcting back-books, fixing misapplied transactions, and troubleshooting issues." },
  { title: "1099 Filings & Tax Preparation", description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning." },
];

const testimonials = [
  { quote: "REA handles our Propertyware books with precision. The monthly close is always on time and owner statements are flawless.", author: "Christine Baker", role: "Property Manager" },
  { quote: "Switching to REA for Propertyware bookkeeping saved us 40% while improving accuracy.", author: "Daniel Rivera", role: "Owner Operator" },
  { quote: "The team understands Propertyware inside and out. They found issues our previous bookkeeper missed.", author: "Margaret Young", role: "Real Estate Investor" },
];

const faqs = [
  { question: "What Propertyware features do you leverage?", answer: "We use Propertyware's native trust accounting, bank reconciliation, AP/AR, and reporting features to keep your books accurate and compliant." },
  { question: "How do you access our Propertyware instance?", answer: "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access." },
  { question: "Can you clean up messy Propertyware books?", answer: "Yes. We specialize in cleanup and diagnostics — correcting back-books, fixing misapplied transactions, and getting your Propertyware instance back on track." },
  { question: "How do you handle single-family rentals in Propertyware?", answer: "Propertyware is designed for single-family rentals. We leverage its specific features for this niche while ensuring trust compliance." },
];

export default function PropertywarePage() {
  return (
    <SiteLayout>
      <SubPageHero title="Expert Propertyware Bookkeeping Services For Property Investors & Managers" description="Cost-effective, accurate, on-time bookkeeping for Propertyware users. We work directly inside your Propertyware instance." badgeLabel="Propertyware Partner" showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Propertyware Bookkeeping Services from REA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">Done Inside Your Propertyware, Not Exported Out</p>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Propertyware Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate Propertyware Books?" description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team." />
    </SiteLayout>
  );
}
