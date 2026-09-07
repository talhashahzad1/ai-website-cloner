import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Real Estate Developer Accounting Services | REA",
  description: "Expert accounting for real estate developers including draws, capitalization, and job-level cost tracking. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "Development Accounting", description: "Draws, soft costs, and capitalized interest tracked accurately through the development lifecycle." },
  { title: "Job-Level Cost Tracking", description: "Per-project cost tracking with detailed reporting for each development project." },
  { title: "Bank Reconciliations", description: "Every project bank account reconciled with proper cost allocation." },
  { title: "Financial Reporting", description: "Monthly packages including project-level P&Ls, balance sheets, and draw schedules." },
  { title: "Cost Segregation Support", description: "Data preparation for cost segregation studies to maximize tax benefits." },
  { title: "Tax Preparation", description: "Entity returns, K-1s, and year-round tax planning for development entities." },
];

const testimonials = [
  { quote: "REA understands the unique accounting challenges of development projects. Their draw tracking is impeccable.", author: "Robert Chang", role: "Real Estate Developer" },
  { quote: "The team handles our multi-project portfolio with ease. Each project's books are clean and separate.", author: "Lisa Morgan", role: "Developer" },
  { quote: "REA's job-level cost tracking gives us visibility we never had before. Invaluable for project management.", author: "Karen Mitchell", role: "Developer" },
];

const faqs = [
  { question: "Do you handle construction draws?", answer: "Yes. We track draws, soft costs, and capitalized interest throughout the development lifecycle, ensuring accurate project accounting." },
  { question: "Can you track costs per project?", answer: "Yes. We implement job-level cost tracking with detailed reporting for each development project in your accounting software." },
  { question: "Do you support multiple simultaneous projects?", answer: "Yes. We manage accounting across multiple concurrent development projects, keeping each project's books separate and accurate." },
  { question: "What software do you use for development accounting?", answer: "We work with QuickBooks, Yardi, MRI, and other platforms commonly used by real estate developers." },
];

export default function DevelopersPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Real Estate Developer Accounting Services" description="Expert accounting for developers including draws, capitalization, and job-level cost tracking across your development portfolio." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Development Accounting from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Developer Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Development Accounting?" description="Schedule a call to learn how REA can manage your development project accounting with precision." />
    </SiteLayout>
  );
}
