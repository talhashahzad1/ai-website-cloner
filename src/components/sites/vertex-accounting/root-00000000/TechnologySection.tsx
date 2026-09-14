import type { TechTool, TechFeature, HowItWorksStep } from "@/types/rea-co";

const feedTools: TechTool[] = [
  {
    category: "Call Recordings",
    name: "Gong",
    description: "Call Recordings",
  },
  {
    category: "Task & Project Mgmt",
    name: "ClickUp",
    description: "Task & Project Mgmt",
  },
  {
    category: "Communications",
    name: "Slack",
    description: "Communications",
  },
  {
    category: "Video · Email · Calendar",
    name: "Google",
    description: "Video · Email · Calendar",
  },
  {
    category: "Network Security",
    name: "Perimeter 81",
    description: "Network Security",
  },
  {
    category: "Accounting Software",
    name: "PMS",
    description: "Accounting Software",
  },
  {
    category: "Data Analysis",
    name: "Tableau",
    description: "Data Analysis",
  },
];

const aiFeatures: TechFeature[] = [
  {
    title: "Automation",
    description: "The repeatable work stops needing a person.",
  },
  {
    title: "Analysis",
    description: "Variances surface in the month they happen.",
  },
  {
    title: "Efficiency",
    description: "Which is why outsourcing costs less than hiring.",
  },
];

const howItWorksSteps: HowItWorksStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We analyze your current accounting setup, software, and reporting needs.",
  },
  {
    number: 2,
    title: "Onboarding",
    description:
      "Seamless integration with your property management software and team.",
  },
  {
    number: 3,
    title: "Execution",
    description:
      "Daily bookkeeping, monthly reconciliations, and financial reporting.",
  },
  {
    number: 4,
    title: "Growth",
    description:
      "Scale your portfolio confidently with Vertex as your accounting backbone.",
  },
];

export function TechnologySection() {
  return (
    <>
      {/* Our Technology Section */}
      <section id="technology" className="scroll-mt-20 bg-[#f7f6f2] px-5 sm:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:py-24">
          {/* Section Header */}
          <div className="mb-12 max-w-2xl">
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-[#07213a]">
              Our Technology
            </h2>
            <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-[#4772ED]">
              Our Technology Stack
            </h3>
            <p className="measure mt-5 leading-relaxed text-[#435e6b]">
              Enterprise-grade tools unified by a proprietary AI layer to deliver
              faster, more accurate outsourced bookkeeping &amp; tax services.
            </p>
          </div>

          {/* Tech Stack Flow Diagram - Dark Container */}
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#07213a] p-8 sm:p-10 lg:p-12">
            {/* What Feeds It Label */}
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-white/50">
              What Feeds It
            </p>

            {/* Top Row - 4 Tools */}
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {feedTools.slice(0, 4).map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                >
                  <p className="font-heading text-sm font-bold text-white">
                    {tool.name}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 Tools */}
            <div className="mx-auto mt-4 grid max-w-3xl grid-cols-3 gap-4">
              {feedTools.slice(4).map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                >
                  <p className="font-heading text-sm font-bold text-white">
                    {tool.name}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Lines Down to AI Engine */}
            <div className="mx-auto mt-6 flex max-w-4xl justify-center">
              <div className="flex items-end gap-0">
                {/* Vertical lines from each tool column */}
                <div className="h-8 w-px bg-white/20" />
                <div className="h-8 w-px bg-white/20 ml-16" />
                <div className="h-8 w-px bg-white/20 ml-16" />
                <div className="h-8 w-px bg-white/20 ml-16" />
              </div>
            </div>

            {/* Horizontal connecting line */}
            <div className="mx-auto max-w-4xl">
              <div className="h-px bg-white/20" />
            </div>

            {/* Single line down to AI Engine */}
            <div className="mx-auto flex justify-center">
              <div className="h-8 w-px bg-white/20" />
            </div>

            {/* AI Engine Panel */}
            <div className="mx-auto max-w-md rounded-2xl border border-[#4772ED]/30 bg-gradient-to-b from-[#4772ED]/20 to-[#4772ED]/5 p-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#6b8aff]">
                Proprietary
              </p>
              <p className="font-heading text-2xl font-bold text-white">
                AI Engine
              </p>
              <p className="mt-3 text-sm text-white/60">
                Data ingested across every platform, unified into one view of your books.
              </p>
            </div>

            {/* Lines Down from AI Engine */}
            <div className="mx-auto flex justify-center">
              <div className="h-8 w-px bg-white/20" />
            </div>

            {/* Horizontal connecting line */}
            <div className="mx-auto max-w-4xl">
              <div className="h-px bg-white/20" />
            </div>

            {/* Lines to Output Cards */}
            <div className="mx-auto mt-6 flex max-w-4xl justify-center">
              <div className="flex items-start gap-0">
                <div className="h-8 w-px bg-white/20" />
                <div className="h-8 w-px bg-white/20 ml-32" />
                <div className="h-8 w-px bg-white/20 ml-32" />
              </div>
            </div>

            {/* Output Cards - 3 Columns */}
            <div className="mx-auto mt-2 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              {aiFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
                >
                  <h4 className="mb-2 font-heading text-sm font-bold text-white">
                    {feature.title}
                  </h4>
                  <p className="font-sans text-xs leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Text inside container */}
            <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-sm leading-relaxed text-white/60">
              We invested in the tooling most accounting firms skip. Every call,
              task, timesheet and dashboard feeds the same engine.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section - Separate */}
      <section className="bg-white px-5 sm:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:py-24">
          <h3 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#07213a]">
            How It Works
          </h3>
          <p className="mb-12 max-w-2xl font-sans text-base leading-relaxed text-[#435e6b]">
            Seamless onboarding and transparent processes designed to get your
            outsourced bookkeeping up and running fast.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4772ED] font-heading text-sm font-bold text-white">
                  {step.number}
                </div>
                <div className="min-w-0">
                  <h4 className="mb-2 font-heading text-sm font-semibold text-[#07213a]">
                    {step.title}
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-[#435e6b]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
