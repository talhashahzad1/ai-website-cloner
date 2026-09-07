import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Entrata Bookkeeping Services for Property Managers | REA",
  description: "Expert Entrata bookkeeping services for property managers and investors. 230+ property accountants working directly inside your Entrata instance.",
};

const stats = [
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for managers, investors, and HOAs directly in Entrata." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled within Entrata's trust accounting system." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages from Entrata including balance sheets, P&Ls, and general ledgers." },
  { title: "Entrata Cleanup & Diagnostics", description: "Correcting back-books, fixing misapplied transactions, and troubleshooting issues." },
  { title: "1099 Filings & Tax Preparation", description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning." },
];

const testimonials = [
  { quote: "REA understands Entrata's unique trust accounting flow. They caught errors our previous bookkeeper missed entirely.", author: "Karen Mitchell", role: "Property Manager" },
  { quote: "Our Entrata books are now clean and compliant. The monthly close process is smooth and on time every month.", author: "Robert Chang", role: "Owner Operator" },
  { quote: "The team's Entrata expertise saved us from a potential audit issue. They identified and fixed trust compliance gaps.", author: "Lisa Morgan", role: "Real Estate Investor" },
];

const faqs = [
  { question: "What Entrata features do you leverage?", answer: "We use Entrata's native trust accounting, bank reconciliation, AP/AR, and reporting features to keep your books accurate and compliant." },
  { question: "How do you access our Entrata instance?", answer: "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access." },
  { question: "Can you fix leasing corrections that break trust balances?", answer: "Yes. Entrata's leasing corrections can silently break owner trust balances. We identify and resolve these issues." },
  { question: "How do you handle trust compliance in Entrata?", answer: "We reconcile owner by owner, not just account by account. Each owner's ledger is tied to the backing trust balance — the test a regulator actually applies." },
];

export default function EntrataPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Expert Entrata Bookkeeping Services For Property Investors & Managers" description="Cost-effective, accurate, on-time bookkeeping for Entrata users. We work directly inside your Entrata instance." badgeLabel="Entrata Partner" showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Entrata Bookkeeping Services from REA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">Done Inside Your Entrata, Not Exported Out</p>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Entrata Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate Entrata Books?" description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team." />
    </SiteLayout>
  );
}
