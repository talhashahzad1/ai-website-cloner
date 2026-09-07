import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  imageAlt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mark Kappelman, CPA, CFA",
    title: "Co-Founder",
    bio: "Sixteen years across accounting, operations, and real estate, including seven years at PwC and Ernst & Young, and more than $15m of real estate acquired personally.",
    image: "/sites/rea-co/root-00000000/images/mark-kappelman-avatar.png",
    imageAlt: "Mark Kappelman, CPA, CFA, Co-Founder at Vertex",
  },
  {
    name: "Adam Eatros",
    title: "Co-Founder",
    bio: "17 years leading operations, finance, and strategy, including 11 years as co-founder and COO of Yidio, and an active LP or GP in assets valued at over $500m.",
    image: "/sites/rea-co/root-00000000/images/adam-eatros.png",
    imageAlt: "Adam Eatros, Co-Founder at Vertex",
  },
  {
    name: "Sharifa Giraldo, CPA",
    title: "VP Client Success (Residential PM)",
    bio: "My goal is to give our clients the peace of mind that comes from knowing their financials are in expert hands.",
    image: "/sites/rea-co/root-00000000/images/sharifa.png",
    imageAlt: "Sharifa Giraldo, CPA, VP Client Success (Residential PM) at Vertex",
  },
  {
    name: "Will Daege",
    title: "VP - Client Success (Commercial PM)",
    bio: "25+ years across retail, office, industrial, and multifamily, including Portfolio Controller for The Related Companies' New York development portfolio.",
    image: "/sites/rea-co/root-00000000/images/will.png",
    imageAlt: "Will Daege, VP - Client Success (Commercial PM) at Vertex",
  },
];

export function PeopleSection() {
  return (
    <section id="people" className="scroll-mt-20 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-20 sm:py-24">
        {/* Header */}
        <div className="mb-14 max-w-2xl text-center mx-auto">
          <p className="font-sans text-xs uppercase tracking-widest text-teal">
            Our Team
          </p>
          <h2 className="mt-3 font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
            The People Behind the Numbers
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate">
            At Vertex, we believe in the power of personal connection. We&apos;re not a
            faceless corporation; we&apos;re a team of 230+ experienced real estate
            accounting professionals passionate about helping property managers
            and investors succeed.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex items-start gap-6 rounded-2xl border border-border-line bg-white p-7"
            >
              <div className="shrink-0">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  width={112}
                  height={112}
                  className="h-24 w-24 shrink-0 rounded-2xl object-cover object-top sm:h-28 sm:w-28"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-[1.15rem] font-semibold leading-tight text-navy">
                  {member.name}
                </h3>
                <h4 className="mt-1 text-[0.85rem] font-bold text-teal-dark">
                  {member.title}
                </h4>
                <blockquote className="mt-3">
                  <p className="text-[0.98rem] italic leading-relaxed text-slate">
                    &ldquo;{member.bio}&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* As Seen On */}
        <div className="mt-14 text-center">
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-slate-light">
            Vertex As Seen On
          </p>
          <div className="flex items-center justify-center gap-10">
            <Image
              src="/sites/rea-co/root-00000000/images/fox-business.webp"
              alt="Fox Business"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/sites/rea-co/root-00000000/images/bloomberg-logo.webp"
              alt="Bloomberg"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}