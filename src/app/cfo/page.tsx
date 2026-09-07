import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Fractional CFO Services for Real Estate | REA",
  description: "Expert fractional CFO services for real estate companies. Strategic financial guidance without the full-time cost. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Financial Strategy", description: "Strategic financial planning aligned with your real estate investment goals and portfolio growth." },
  { title: "Budgeting & Forecasting", description: "Annual budgets, rolling forecasts, and scenario analysis for your real estate portfolio." },
  { title: "Cash Flow Management", description: "Monitor and optimize cash flow across properties, entities, and funds." },
  { title: "Lender Reporting", description: "Prepare and deliver lender-required financial reports and compliance documentation." },
  { title: "Acquisition Analysis", description: "Financial modeling and due diligence support for new property acquisitions." },
  { title: "Investor Relations", description: "Clear financial reporting and communication with investors and limited partners." },
];

const testimonials = [
  { quote: "REA's fractional CFO service gives us strategic financial guidance without the cost of a full-time hire. Invaluable for our growing portfolio.", author: "Karen Mitchell", role: "Real Estate Investor" },
  { quote: "The budgeting and forecasting REA provides has transformed how we plan for portfolio growth.", author: "Robert Chang", role: "Property Manager" },
  { quote: "REA's lender reporting is always accurate and on time. Our lenders trust their work.", author: "Lisa Morgan", role: "Developer" },
];

const faqs = [
  { question: "What does a fractional CFO do?", answer: "A fractional CFO provides strategic financial leadership — budgeting, forecasting, cash flow management, lender reporting, and acquisition analysis — on a part-time basis." },
  { question: "How is this different from bookkeeping?", answer: "Bookkeeping records daily transactions. Fractional CFO services provide strategic financial guidance, planning, and analysis to help you make better business decisions." },
  { question: "Who benefits from fractional CFO services?", answer: "Real estate companies that need strategic financial guidance but don't need (or can't afford) a full-time CFO — typically portfolios with 50+ units or $5M+ in assets." },
  { question: "How often do we meet with the CFO?", answer: "Typically monthly, with additional meetings as needed for acquisitions, lender requirements, or strategic planning sessions." },
];

export default function CFOPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Fractional CFO Services for Real Estate" description="Strategic financial guidance for real estate companies without the full-time cost." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Fractional CFO Services from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About CFO Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Strategic Financial Leadership?" description="Schedule a call to learn how REA's fractional CFO services can guide your real estate financial strategy." />
    </SiteLayout>
  );
}
