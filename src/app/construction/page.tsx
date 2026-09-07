import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Construction Accounting Services | REA",
  description: "Expert construction accounting services including job costing, WIP tracking, and retainage management. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "Job Costing", description: "Detailed job-level cost tracking with accurate allocation of labor, materials, and overhead to each project." },
  { title: "WIP Tracking", description: "Work-in-progress tracking to accurately report revenue and costs for long-term construction projects." },
  { title: "Retainage Management", description: "Track retainage held and released for both receivables and payables across all projects." },
  { title: "Bank Reconciliations", description: "Every project bank account reconciled with proper cost allocation and compliance." },
  { title: "Financial Reporting", description: "Monthly packages including project-level P&Ls, balance sheets, and WIP schedules." },
  { title: "Tax Preparation", description: "Entity returns, K-1s, and year-round tax planning for construction entities." },
];

const testimonials = [
  { quote: "REA's construction accounting expertise transformed our job costing. We finally have accurate project-level visibility.", author: "Mark Stevens", role: "General Contractor" },
  { quote: "The WIP tracking REA provides is exactly what we needed for accurate financial reporting.", author: "Sandra Lopez", role: "Construction Company Owner" },
  { quote: "REA handles our retainage tracking flawlessly. No more missed payments or billing errors.", author: "Thomas Wright", role: "Construction Manager" },
];

const faqs = [
  { question: "Do you handle percentage-of-completion accounting?", answer: "Yes. We implement percentage-of-completion and completed-contract methods, with accurate WIP tracking for long-term projects." },
  { question: "Can you track costs per job?", answer: "Yes. We implement detailed job-level cost tracking with proper allocation of labor, materials, and overhead to each project." },
  { question: "Do you handle retainage?", answer: "Yes. We track retainage held and released for both receivables and payables, ensuring accurate billing and payment tracking." },
  { question: "What software do you use for construction accounting?", answer: "We work with QuickBooks, Sage, and other platforms commonly used by construction companies." },
];

export default function ConstructionPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Construction Accounting Services" description="Expert construction accounting including job costing, WIP tracking, and retainage management." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Construction Accounting from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Construction Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Construction Accounting?" description="Schedule a call to learn how REA can manage your construction accounting with precision." />
    </SiteLayout>
  );
}
