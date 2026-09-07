import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Real Estate Accounting Services | REA",
  description: "Outsourced real estate accounting services for property managers, investors, and developers. 230+ property accountants, 8 platforms supported.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Monthly Bookkeeping", description: "Accurate, on-time monthly bookkeeping including reconciliations, AP/AR, and custom reporting." },
  { title: "Trust Accounting", description: "Trust-compliant accounting with owner-by-owner reconciliation — the test a regulator actually applies." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled with proper trust and corporate fund separation." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages including balance sheets, P&Ls, owner statements, and custom reports." },
  { title: "Cleanup & Catch-Up", description: "Correcting back-books, fixing misapplied transactions, and getting your accounting back on track." },
];

const softwareLinks = [
  { name: "AppFolio", href: "/appfolio/" },
  { name: "Yardi", href: "/yardi/" },
  { name: "Buildium", href: "/buildium/" },
  { name: "Rent Manager", href: "/rent-manager/" },
  { name: "Entrata", href: "/entrata/" },
  { name: "RealPage", href: "/realpage/" },
  { name: "QuickBooks", href: "/quickbooks-real-estate/" },
  { name: "MRI", href: "/mri/" },
  { name: "Propertyware", href: "/propertyware/" },
];

const testimonials = [
  { quote: "REA handles all our real estate accounting with precision. The monthly close is always on time and accurate.", author: "Sara Crosby", role: "Real Estate Investor" },
  { quote: "Switching to REA was the best decision. Clean books, on-time closes, and 40% savings.", author: "Steve Wilko", role: "Owner Operator" },
  { quote: "The team understands real estate accounting better than anyone we've worked with.", author: "Tracy Collins", role: "Property Manager" },
];

const faqs = [
  { question: "What real estate accounting services do you offer?", answer: "We offer monthly bookkeeping, trust accounting, bank reconciliations, AP/AR, financial reporting, cleanup/catch-up, and tax preparation for real estate companies." },
  { question: "What software do you support?", answer: "We support AppFolio, Yardi, Buildium, Rent Manager, Entrata, RealPage, QuickBooks, MRI, and Propertyware." },
  { question: "How much can I save compared to in-house?", answer: "Most clients save 30-50% compared to hiring an in-house accounting team, while getting enterprise-level expertise." },
  { question: "How do you handle trust accounting?", answer: "We reconcile owner by owner, not just account by account. Each owner's ledger is tied to the backing trust balance — the test a regulator actually applies." },
];

export default function AccountingPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Real Estate Accounting Services" description="Outsourced monthly bookkeeping, trust accounting, and financial reporting for property managers, investors, and developers." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Real Estate Accounting from REA</h2>
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
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Platforms We Support</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {softwareLinks.map((s) => (
              <Link key={s.name} href={s.href} className="rounded-full border border-[#dbe0e7] bg-white px-5 py-2.5 text-sm font-medium text-[#07213a] transition-colors hover:border-[#20949d] hover:text-[#20949d]">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Real Estate Accounting?" description="Schedule a call to learn how REA's outsourced accounting services can help you reduce costs and improve accuracy." />
    </SiteLayout>
  );
}
