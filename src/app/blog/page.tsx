import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Real Estate Articles, Resources and Education For Property Investors",
  description:
    "We are here to help you become a profitable real estate investor. Here are the latest real estate articles to help you become a better real estate investor.",
};

interface Post {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const featuredPost: Post = {
  title: "Outsourced Real Estate Accounting in Denver",
  excerpt:
    "Outsourced real estate accounting in Denver gives property owners and managers accurate books, tighter cash flow, and audit-ready financial reporting without hiring an in-house team. REA's Real Estate Accounting specialists handle month-end close, owner statements, and tax-ready books for Denver portfolios.",
  date: "September 4, 2026",
  image: "/sites/rea-co/shared/blog/outsourced-real-estate-accounting-in-denver-hero.webp",
  slug: "/outsourced-real-estate-accounting-in-denver/",
  featured: true,
};

const posts: Post[] = [
  {
    title: "MRI vs Yardi Voyager for Commercial Portfolios",
    excerpt:
      "MRI vs Yardi Voyager for commercial portfolios rarely has one clean winner. MRI leans toward flexible reporting for mixed-use owners; Yardi Voyager brings scale and tighter integrations for large multifamily operations.",
    date: "September 3, 2026",
    image: "/sites/rea-co/shared/blog/mri-vs-yardi-voyager-commercial-portfolios-hero.webp",
    slug: "/mri-vs-yardi-voyager-commercial-portfolios/",
  },
  {
    title: "Critical Date Tracking From Lease Abstraction",
    excerpt:
      "Missing a single renewal deadline can cost a landlord an anchor tenant or cost a tenant a location the business depends on. Critical date tracking turns every lease clause into an actionable calendar item.",
    date: "August 29, 2026",
    image: "/sites/rea-co/shared/blog/critical-date-tracking-lease-abstraction-options-hero.webp",
    slug: "/critical-date-tracking-lease-abstraction-options/",
  },
  {
    title: "QuickBooks Classes for Rental Property: Setup Guide",
    excerpt:
      "QuickBooks classes for rental property portfolios let you split income and expenses by building, unit, or fund inside a single company file — without opening a separate QuickBooks file for every property.",
    date: "September 1, 2026",
    image: "/sites/rea-co/shared/blog/quickbooks-classes-vs-locations-rental-property-hero.webp",
    slug: "/quickbooks-classes-vs-locations-rental-property/",
  },
  {
    title: "Commercial Real Estate Accounting in Charlotte",
    excerpt:
      "Charlotte's office towers, retail centers, and industrial parks each carry accounting complexity that generic bookkeeping can't handle. Specialized CRE accounting gives you tenant-level visibility.",
    date: "August 28, 2026",
    image: "/sites/rea-co/shared/blog/commercial-real-estate-accounting-in-charlotte-hero.webp",
    slug: "/commercial-real-estate-accounting-in-charlotte/",
  },
  {
    title: "Straight-Line Rent for Commercial Landlords Explained",
    excerpt:
      "Straight-line rent spreads a commercial lease's total rent, free rent months included, evenly across the full lease term so your financials reflect the true economics of every deal.",
    date: "August 27, 2026",
    image: "/sites/rea-co/shared/blog/straight-line-rent-commercial-landlords-deferred-hero.webp",
    slug: "/straight-line-rent-commercial-landlords-deferred/",
  },
  {
    title: "Outsourced Accounting for Property Management, Seattle",
    excerpt:
      "Outsourced accounting for property management companies in Seattle solves a problem local firms can't outsource away on their own: reconciliations that close on time, every month.",
    date: "August 26, 2026",
    image: "/sites/rea-co/shared/blog/outsourced-accounting-property-management-companies-seattle-hero.webp",
    slug: "/outsourced-accounting-property-management-companies-seattle/",
  },
  {
    title: "LIHTC Compliance Accounting: Certs, 8609s & Reporting",
    excerpt:
      "LIHTC compliance accounting keeps a Low-Income Housing Tax Credit (LIHTC) property eligible for its credits by tying tenant income certifications to unit-level reporting throughout the compliance period.",
    date: "August 25, 2026",
    image: "/sites/rea-co/shared/blog/lihtc-compliance-accounting-income-certifications-hero.webp",
    slug: "/lihtc-compliance-accounting-income-certifications/",
  },
  {
    title: "Outsourced Real Estate Accounting in Orange County",
    excerpt:
      "Orange County property owners juggling Prop 13 assessments, rent control disclosures, and multi-entity tax filings often reach a breaking point — outsourced REA teams bring order to the books.",
    date: "August 24, 2026",
    image: "/sites/rea-co/shared/blog/outsourced-real-estate-accounting-in-orange-county-hero.webp",
    slug: "/outsourced-real-estate-accounting-in-orange-county/",
  },
  {
    title: "Ratio Utility Billing System: RUBS Accounting Guide",
    excerpt:
      "When a lease charges residents for water, sewer, or trash based on square footage instead of a submeter, that charge comes through a Ratio Utility Billing System (RUBS) — and accounting for it is its own workflow.",
    date: "August 23, 2026",
    image: "/sites/rea-co/shared/blog/rubs-utility-billback-accounting-hero.webp",
    slug: "/rubs-utility-billback-accounting/",
  },
  {
    title: "Commercial Real Estate Accounting in Seattle",
    excerpt:
      "Commercial real estate accounting in Seattle covers far more than monthly bookkeeping: office, retail, and industrial landlords face unique compliance demands around tenant CAM reconciliations.",
    date: "August 22, 2026",
    image: "/sites/rea-co/shared/blog/commercial-real-estate-accounting-seattle-hero.webp",
    slug: "/commercial-real-estate-accounting-seattle/",
  },
  {
    title: "Special Assessment HOA Accounting: Billing & Collections",
    excerpt:
      "When a homeowners association can't cover a major repair from its reserve fund, the HOA board levies a special assessment to bill unit owners — and the accounting trail has to be airtight.",
    date: "August 21, 2026",
    image: "/sites/rea-co/shared/blog/hoa-special-assessment-accounting-billing-hero.webp",
    slug: "/hoa-special-assessment-accounting-billing/",
  },
];

function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#dbe0e7] bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className={`relative overflow-hidden ${large ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
          sizes={large ? "(min-width: 1024px) 1152px, 100vw" : "(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw"}
        />
      </div>
      <div className={`flex flex-col ${large ? "p-8" : "p-6"}`}>
        <span className="text-xs font-medium text-[#435e6b]">
          {post.date}
        </span>
        <h3
          className={`mt-2 font-heading font-semibold text-[#07213a] group-hover:text-[#20949d] ${
            large ? "text-2xl" : "text-base"
          }`}
        >
          {post.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-[#435e6b] ${
            large ? "text-base" : "text-sm line-clamp-3"
          }`}
        >
          {post.excerpt}
        </p>
        <div className="mt-4">
          <Link
            href={post.slug}
            className="text-sm font-medium text-[#20949d] hover:underline"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20"
        style={{
          backgroundColor: "#07213a",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.09) 1px, rgba(0,0,0,0) 1.4px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-[#51cec8]">
            Resources
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
            Real Estate Articles, Resources and Education For Property Investors
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            We are here to help you become a profitable real estate investor.
            Here are the latest real estate articles to help you become a
            better real estate investor.
          </p>
          <p className="mt-6 text-sm font-medium text-white/60">
            208 articles
          </p>
        </div>
      </section>

      {/* Featured latest + grid */}
      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-heading text-2xl font-semibold text-[#07213a]">
            All articles
          </h2>

          {/* Featured latest */}
          <div className="mb-10">
            <PostCard post={featuredPost} large />
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        heading="Need Expert Accounting Advice?"
        description="Schedule a call to discuss your real estate accounting needs with our team."
      />
    </SiteLayout>
  );
}