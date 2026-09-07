import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Property Management Accounting Services & Bookkeeping | REA",
  description: "Monthly property management accounting services and bookkeeping. Add doors without adding an accounting department. 30-50% less than in-house.",
};

const stats = [
  { value: "30-50%", label: "Less Than In-House" },
  { value: "230+", label: "Property Accountants" },
  { value: "8", label: "Platforms Supported" },
  { value: "100%", label: "On-Time Close" },
];

const reasons = [
  { title: "Growing Too Fast", description: "You're growing too fast for your accountants to handle. Scaling without the burden of hiring, firing, and managing new employees." },
  { title: "Spend Less on Fees", description: "You want to spend less on accounting fees. Our services run 30-50% less than an in-house team, reducing cost and operational stress." },
  { title: "Software Expertise", description: "You need an expert in your accounting software. REA covers nearly all property management accounting software providers." },
];

const services = [
  { title: "Trust Bookkeeping", description: "Leverage your software's capabilities with REA's tailored trust bookkeeping service." },
  { title: "Corporate Bookkeeping", description: "Addresses complexity of corporate financial activities for property managers." },
  { title: "Bank Reconciliations", description: "Meticulous accuracy brought to your finances via your platform's bank reconciliation system." },
  { title: "Financial Diagnostic Cleanup", description: "Advanced diagnostic tools used to troubleshoot financial anomalies in your books." },
  { title: "Trust Compliance", description: "Comprehensive Trust Compliance Verification services delivered with detailed reporting." },
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

const steps = [
  { title: "We Review Your Account", description: "Access granted, financials and diagnostics analyzed — every property, unit, and report. Inconsistencies are fixed for financial accuracy." },
  { title: "Monthly Bookkeeping Begins", description: "Accounts reconciled, incoming transactions labeled, accounts payable streamlined, and more — all inside your existing platform." },
  { title: "Receive Monthly Reports & Distributions", description: "Audit-ready financial statements delivered monthly. Reports are clear, not jargon-heavy. Monthly distributions prepared so you're never in the dark." },
];

const testimonials = [
  { quote: "I transitioned from an erroneous bookkeeper who lacked expertise in real estate. REA provides accurate financials consistently plus proactive advice.", author: "Sara Crosby", role: "Real Estate Investor" },
  { quote: "REA exclusively specializes in Real Estate. I rest easy knowing my financials are precise every month while I save money.", author: "Steve Wilko", role: "Owner Operator" },
  { quote: "REA helped as if they were a part of our company. Extremely responsive and always accurate.", author: "Kelly Stanaway", role: "Property Manager" },
];

const faqs = [
  { question: "What are the costs associated with your property management accounting?", answer: "Pricing is tailored and transparent. A detailed quote is provided based on required services. Services run 30-50% less than an in-house team." },
  { question: "What qualifications do your property management bookkeepers have?", answer: "Professionals with extensive real estate and property management experience, relevant certifications, proficiency in industry-standard software, and current knowledge of financial regulations." },
  { question: "What is the turnaround time for setting up bookkeeping services?", answer: "Generally 1-2 weeks to fully integrate and begin managing your finances." },
  { question: "How do you handle the transition from our current system?", answer: "A streamlined process includes data migration, system integration, and staff training for a smooth switch without operational disruption." },
  { question: "How do you access our accounting software?", answer: "Clients create and administer individual user access for REA personnel. REA does not provide, resell, or sublicense software access." },
];

export default function PropertyManagementPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Monthly Property Management Accounting Services and Bookkeeping"
        description="Improve operational efficiencies while increasing profit margins. Add doors without adding an accounting department."
        showDotGrid
      />
      <StatsBar stats={stats} />

      {/* Why Choose */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Why Property Management Companies Choose REA
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-[#20949d]">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#435e6b]">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Platforms */}
      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Property Management Software Expertise
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {softwareLinks.map((s) => (
              <Link key={s.name} href={s.href} className="rounded-full border border-[#dbe0e7] bg-white px-5 py-2.5 text-sm font-medium text-[#07213a] transition-colors hover:border-[#20949d] hover:text-[#20949d]">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Property Management Bookkeeping from REA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">Done Inside the Platform You Already Run</p>
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

      {/* How It Works */}
      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            How Our Property Management Bookkeeping Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#435e6b]">Review, Close, Report</p>
          <div className="mt-12 space-y-8">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-6 rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#20949d] font-heading text-sm font-bold text-white">{i + 1}</div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#07213a]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready to Add Doors Without Adding Accountants?" description="Schedule a call to learn how REA's bookkeeping keeps trust accounting compliant, owner statements on time, and teams focused on growth." />
    </SiteLayout>
  );
}
