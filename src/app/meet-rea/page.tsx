import type { Metadata } from "next";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Meet REA | Our Team & Leadership",
  description: "Meet the team behind REA. 230+ property accountants led by experienced real estate accounting professionals.",
};

const leaders = [
  {
    name: "Mark Kappelman",
    role: "Co-Founder",
    bio: "Mark co-founded REA with a vision to provide specialized real estate accounting services. His expertise in property accounting and software platforms drives REA's service delivery.",
  },
  {
    name: "Sharifa Giraldo, CPA",
    role: "VP, Client Success — Residential Property Management",
    bio: "20+ years of property accounting experience. CPA since 2015. Specialist in third-party management and platform migrations.",
  },
  {
    name: "Will Daege",
    role: "VP, Client Success — Commercial Property Management",
    bio: "25+ years across retail, office, industrial, and multifamily. Former Portfolio Controller with deep expertise in commercial real estate accounting.",
  },
];

export default function MeetREAPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Meet REA"
        description="230+ property accountants led by experienced real estate accounting professionals. A named team with names, not a ticket queue."
        showDotGrid
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Our Leadership
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {leaders.map((l) => (
              <div key={l.name} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#20949d]/10 font-heading text-2xl font-bold text-[#20949d]">
                  {l.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-[#07213a]">{l.name}</h3>
                <p className="mt-1 text-xs font-medium text-[#20949d]">{l.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#435e6b]">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            How We Work Together
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: "A Named Team, Not a Pool", desc: "The same property accountants close your books every month." },
              { title: "Reachable the Way You Work", desc: "Email, phone, video, or Slack. Urgent items answered same day." },
              { title: "Inside Your Software", desc: "Accountant access granted exactly as for an internal hire." },
              { title: "230+ Accountants Behind Them", desc: "Coverage for absences, specialist escalation for complex questions." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-[#07213a]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#435e6b]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta heading="Ready to Work With Our Team?" description="Schedule a call to meet your dedicated property accounting team." />
    </SiteLayout>
  );
}
