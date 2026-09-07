import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Real Estate Income Tax Services | REA",
  description: "Expert real estate income tax preparation and planning. Entity returns, K-1s, cost segregation, and year-round tax strategy. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Entity Tax Returns", description: "1065, 1120, 1120-S preparation for LLCs, LPs, corporations, and other real estate entities." },
  { title: "K-1 Preparation", description: "Accurate K-1 preparation for investors, partners, and syndication participants." },
  { title: "1099 Filings", description: "Vendor and contractor 1099 preparation and filing for all real estate entities." },
  { title: "Tax Planning", description: "Year-round tax strategy including depreciation optimization, entity structuring, and deferral opportunities." },
  { title: "Cost Segregation Support", description: "Data preparation and coordination for cost segregation studies to maximize tax benefits." },
  { title: "State Tax Compliance", description: "Multi-state tax compliance for real estate operators across all 50 states." },
];

const testimonials = [
  { quote: "REA's tax expertise saved us significantly on our entity returns. Their understanding of real estate tax law is exceptional.", author: "Michael Torres", role: "Real Estate Investor" },
  { quote: "The K-1 preparation REA provides is accurate and timely. Our investors receive their documents on schedule every year.", author: "Jennifer Park", role: "Syndicator" },
  { quote: "REA's year-round tax planning has helped us optimize our entity structure and minimize our tax burden.", author: "David Chen", role: "Property Manager" },
];

const faqs = [
  { question: "What real estate tax returns do you prepare?", answer: "We prepare 1065 (partnerships), 1120 (corporations), 1120-S (S-corporations), and individual returns for real estate investors and operators." },
  { question: "Do you handle multi-state tax filings?", answer: "Yes. We manage multi-state tax compliance for real estate operators across all 50 states." },
  { question: "Can you help with cost segregation studies?", answer: "Yes. We prepare the data for cost segregation studies and coordinate with specialists to maximize your tax benefits." },
  { question: "Do you offer year-round tax planning?", answer: "Yes. We provide ongoing tax strategy including depreciation optimization, entity structuring, and deferral opportunities throughout the year." },
];

export default function TaxPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Real Estate Income Tax Services" description="Expert tax preparation and planning for real estate entities, investors, and operators." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Real Estate Tax Services from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Tax Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Real Estate Tax Services?" description="Schedule a call to learn how REA can optimize your real estate tax strategy." />
    </SiteLayout>
  );
}
