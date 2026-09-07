import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "AppFolio Bookkeeping Services for Property Managers | REA",
  description:
    "Expert AppFolio bookkeeping services for scaling property investors and managers. Certified Stack partner with 230+ property accountants.",
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
    description:
      "Accurate monthly bookkeeping for managers, investors, and HOAs directly in AppFolio.",
  },
  {
    title: "Bank Reconciliations",
    description:
      "Every property bank account reconciled within AppFolio's trust accounting system.",
  },
  {
    title: "Accounts Payable & Receivable",
    description:
      "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions.",
  },
  {
    title: "Financial Reporting",
    description:
      "Monthly packages from AppFolio including balance sheets, P&Ls, and general ledgers.",
  },
  {
    title: "AppFolio Cleanup & Diagnostics",
    description:
      "Correcting back-books, fixing misapplied transactions, and troubleshooting issues.",
  },
  {
    title: "1099 Filings & Tax Preparation",
    description:
      "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning.",
  },
];

const verticals = [
  { name: "Property Management", desc: "Pooled trust cash masking per-owner shortfalls" },
  { name: "Commercial Real Estate", desc: "CAM math runs on setup, not the lease" },
  { name: "Owner Operators", desc: "New entities get inconsistent charts of accounts" },
  { name: "Developers", desc: "Draws and soft costs coded like rental income" },
  { name: "Homeowner Associations", desc: "Operating and reserve funds sharing one ledger" },
  { name: "Syndicators", desc: "AppFolio pays owners without checking the waterfall" },
  { name: "Construction", desc: "Job cost and WIP live outside the ledger" },
  { name: "Assisted Living", desc: "Level-of-care revenue has no native home" },
];

const testimonials = [
  {
    quote:
      "I transitioned from an erroneous bookkeeper who lacked expertise in real estate. REA provides accurate financials consistently plus proactive advice. They are a game-changer.",
    author: "Sara Crosby",
    role: "Real Estate Investor",
  },
  {
    quote:
      "REA exclusively specializes in Real Estate. I rest easy knowing my financials are precise every month while I save money.",
    author: "Steve Wilko",
    role: "Owner Operator",
  },
  {
    quote:
      "I felt comfortable handing over all accounting responsibilities. It has been nothing less than an amazing experience.",
    author: "Tracy Collins",
    role: "Property Manager",
  },
];

const faqs = [
  {
    question: "Do you handle both corporate and trust bank reconciliations?",
    answer:
      "Yes, we handle both corporate and trust bank reconciliations within AppFolio's toolset, ensuring every account is properly reconciled each month.",
  },
  {
    question: "What financial reports do you provide?",
    answer:
      "We provide detailed monthly financial reports including balance sheets, P&Ls, owner statements, and general ledgers — all generated from within AppFolio.",
  },
  {
    question: "How does bookkeeping help scale my business?",
    answer:
      "Outsourcing your bookkeeping frees up resources to focus on acquiring properties and growing your portfolio, rather than managing financial records.",
  },
  {
    question: "How do you handle new property integration?",
    answer:
      "We provide seamless setup for new properties with correct categorization and alignment with your overall operations, directly within AppFolio.",
  },
  {
    question: "What data security measures do you have?",
    answer:
      "We use encrypted transmission, secure storage, and strict access controls to protect your financial data at all times.",
  },
  {
    question: "How do you access our AppFolio instance?",
    answer:
      "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access. Clients retain control over permissions.",
  },
];

const steps = [
  {
    title: "Understanding Your Business Inside-Out",
    description:
      "We learn your portfolio, connect to your AppFolio instance, review your books, and resolve any issues. We perform catch-up bookkeeping if needed to build a clean foundation.",
  },
  {
    title: "Expert Monthly Bookkeeping",
    description:
      "Ongoing bookkeeping including reconciliations, AP, AR, reporting, and new property setups — all done directly inside your AppFolio instance.",
  },
  {
    title: "Transparent Financial Reporting",
    description:
      "Monthly financial packages delivered through AppFolio including P&Ls, balance sheets, and owner/tenant statements — trust-account compliant.",
  },
];

export default function AppFolioPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Expert AppFolio Bookkeeping Services For Scaling Property Investors & Managers"
        description="Cost-effective, accurate, on-time bookkeeping for AppFolio users. As a certified Stack™ partner, we work directly inside your AppFolio instance."
        badgeImage="/sites/rea-co/root-00000000/images/appfolio-stack-badge.png"
        badgeLabel="AppFolio Stack™ Solution Partner"
        showDotGrid
      />

      <StatsBar stats={stats} />

      {/* Services */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            AppFolio Bookkeeping Services from REA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">
            Done Inside Your AppFolio, Not Exported Out
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-heading text-base font-semibold text-[#07213a]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">
                  {s.description}
                </p>
                <Link
                  href="#get-started"
                  className="mt-4 inline-block text-sm font-medium text-[#20949d] hover:underline"
                >
                  See how it works →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            How AppFolio Bookkeeping Transforms Your Business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#435e6b]">
            From Catch-Up to Clean Monthly Closes
          </p>
          <div className="mt-12 space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-6 rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20949d] font-heading text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#07213a]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="#get-started"
              className="rounded-full bg-[#20949d] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a7a82]"
            >
              Start With a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            AppFolio Bookkeeping, Vertical by Vertical
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#435e6b]">
            Pick the Business You Actually Run
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {verticals.map((v) => (
              <div
                key={v.name}
                className="rounded-xl border border-[#dbe0e7] bg-white p-5"
              >
                <h3 className="font-heading text-sm font-semibold text-[#07213a]">
                  {v.name}
                </h3>
                <p className="mt-1 text-sm text-[#435e6b]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        testimonials={testimonials}
        heading="What Our Clients Say About AppFolio Services"
      />

      <FaqSection faqs={faqs} />

      <FinalCta
        heading="Ready for Accurate AppFolio Books?"
        description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team."
      />
    </SiteLayout>
  );
}
