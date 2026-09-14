import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/vertex-accounting/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/vertex-accounting/shared/SubPageHero";
import { FinalCta } from "@/components/sites/vertex-accounting/shared/FinalCta";

export const metadata: Metadata = {
  title: "Careers at Vertex | Join Our Team",
  description: "Join Vertex's team of 230+ property accountants. Remote-first, growth-oriented culture.",
};

const benefits = [
  { title: "Remote-First", description: "Work from anywhere. Our team is distributed across the US with flexible schedules." },
  { title: "Specialized Focus", description: "Specialize in accounting — not generic bookkeeping. Deep expertise in property accounting." },
  { title: "Growth Opportunities", description: "Clear career paths from staff accountant to VP. Mentorship and professional development programs." },
  { title: "Meaningful Work", description: "Manage 130K+ units and 30M+ commercial sq. ft. Your work directly impacts real businesses." },
  { title: "Modern Tools", description: "Work with leading property management platforms including AppFolio, Yardi, Buildium, and more." },
  { title: "Collaborative Culture", description: "Named teams, not silos. Work closely with colleagues who share your passion for accounting." },
];

const openRoles = [
  { title: "Senior Property Accountant", department: "Accounting", location: "Remote" },
  { title: "Staff Property Accountant", department: "Accounting", location: "Remote" },
  { title: "Client Success Manager", department: "Client Success", location: "Remote" },
  { title: "Tax Accountant", department: "Tax", location: "Remote" },
  { title: "Bookkeeping Specialist", department: "Accounting", location: "Remote" },
];

export default function CareersPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Careers at Vertex"
        description="Join our team of 230+ property accountants. Remote-first, growth-oriented culture."
        CTAHref="#open-positions"
        showDotGrid
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Why Work at Vertex
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-[#4772ED]">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="scroll-mt-20 bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Open Positions
          </h2>
          <div className="mt-10 space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex items-center justify-between rounded-xl border border-[#dbe0e7] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-heading text-sm font-semibold text-[#07213a]">{role.title}</h3>
                  <p className="mt-1 text-xs text-[#435e6b]">
                    {role.department} · {role.location}
                  </p>
                </div>
                <Link
                  href="#"
                  className="rounded-full bg-[#4772ED] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#3a5fcc]"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta heading="Ready to Join Our Team?" description="Don't see a role that fits? Send us your resume — we're always looking for talented accounting professionals." />
    </SiteLayout>
  );
}
