import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Real Estate Syndication Accounting Services | REA",
  description: "Expert accounting for real estate syndicators including waterfall calculations, GP/LP splits, and investor reporting. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "Waterfall Calculations", description: "Accurate waterfall distributions including preferred returns, catch-ups, and promote structures." },
  { title: "GP/LP Accounting", description: "Proper tracking of general partner and limited partner equity, returns, and distributions." },
  { title: "Investor Reporting", description: "Monthly and quarterly investor reports with clear performance metrics and distribution tracking." },
  { title: "Fund Accounting", description: "Proper fund-level accounting with investor capital tracking and return calculations." },
  { title: "Tax Preparation", description: "K-1 preparation, fund tax returns, and investor tax reporting." },
  { title: "Bank Reconciliations", description: "Every fund bank account reconciled with proper investor-level tracking." },
];

const testimonials = [
  { quote: "REA's waterfall calculation expertise is unmatched. Every distribution is accurate and defensible.", author: "Michael Torres", role: "Syndicator" },
  { quote: "The investor reports REA produces are professional and clear. Our investors love the transparency.", author: "Jennifer Park", role: "Fund Manager" },
  { quote: "REA handles our multi-fund portfolio with ease. Each fund's books are clean and separate.", author: "David Chen", role: "GP Partner" },
];

const faqs = [
  { question: "Do you handle waterfall distributions?", answer: "Yes. We implement and track complex waterfall structures including preferred returns, catch-ups, promotes, and clawbacks." },
  { question: "Can you produce investor reports?", answer: "Yes. We produce monthly and quarterly investor reports with clear performance metrics, distribution tracking, and capital account statements." },
  { question: "Do you handle multiple fund structures?", answer: "Yes. We manage accounting across multiple funds and entities, keeping each fund's books separate and accurate." },
  { question: "What software do you use for syndication accounting?", answer: "We work with Yardi, MRI, QuickBooks, and other platforms commonly used by real estate syndicators." },
];

export default function SyndicationPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Real Estate Syndication Accounting Services" description="Expert accounting for syndicators including waterfall calculations, GP/LP splits, and investor reporting." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Syndication Accounting from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Syndicator Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Syndication Accounting?" description="Schedule a call to learn how REA can manage your syndication accounting with precision." />
    </SiteLayout>
  );
}
