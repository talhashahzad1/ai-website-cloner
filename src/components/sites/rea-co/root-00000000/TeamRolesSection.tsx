import type { TeamRole } from "@/types/rea-co";

const teamRoles: TeamRole[] = [
  {
    title: "Vice President",
    description: "Strategic oversight of your entire engagement",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 17.5a5.8 5.8 0 1 1 6 0v1.8H9v-1.8Z" />
        <path d="M10 21.5h4" />
      </svg>
    ),
  },
  {
    title: "Tax Director",
    description: "Tax strategy, preparation, and filings",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h8l5 5v13H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9.5 13h5M9.5 16.5h5" />
      </svg>
    ),
  },
  {
    title: "Controller",
    description: "Review, accuracy, and financial controls",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    ),
  },
  {
    title: "Account Manager",
    description: "Your day-to-day point of contact",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Sr. Bookkeeper / Bookkeeper",
    description: "Daily transactions and reconciliations",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h11l4 4v12H5V4Z" />
        <path d="M16 4v4h4" />
      </svg>
    ),
  },
];

export function TeamRolesSection() {
  return (
    <section id="team" className="scroll-mt-20 px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.15fr]">
        {/* Left Column - Text */}
        <div>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
            Our Team
          </h2>
          <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-teal">
            Account Management
          </h3>
          <p className="measure mt-5 leading-relaxed text-slate">
            Every client is supported by a dedicated account management team,
            from VP-level oversight to hands-on bookkeepers, designed for
            accuracy, accountability, and seamless communication.
          </p>
          <a
            href="#get-started"
            className="mt-9 hidden inline-block rounded-full bg-teal px-8 py-4 font-sans text-sm font-medium text-white transition-colors hover:bg-teal-dark lg:inline-block"
          >
            Meet Your Team
          </a>
        </div>

        {/* Right Column - Vertical role timeline */}
        <ul className="relative">
          <span aria-hidden className="absolute top-3 bottom-3 left-[0.9rem] w-px bg-[#dbe0e7]" />
          {teamRoles.map((role, i) => (
            <li
              key={role.title}
              className={`relative flex gap-5 ${i === teamRoles.length - 1 ? "" : "pb-7"}`}
            >
              <span className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6f7f7] text-teal outline outline-3 outline-white">
                {role.icon}
              </span>
              <div>
                <p className="font-heading text-[1.1rem] font-semibold leading-tight text-navy">
                  {role.title}
                </p>
                <p className="mt-1 text-[0.92rem] text-slate">
                  {role.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}