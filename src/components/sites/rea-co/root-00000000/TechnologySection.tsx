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
    title: "Data",
    description:
      "Data ingested across every platform, unified into one view of your books.",
  },
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
    description:
      "Which is why outsourcing costs less than hiring.",
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
      "Scale your portfolio confidently with REA as your accounting backbone.",
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="scroll-mt-20 bg-sand px-5 sm:px-8">
      <div className="max-w-6xl py-20 sm:py-24">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
            Our Technology
          </h2>
          <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-teal">
            Our Technology Stack
          </h3>
          <p className="measure mt-5 leading-relaxed text-slate">
            Enterprise-grade tools unified by a proprietary AI layer to deliver
            faster, more accurate outsourced bookkeeping &amp; tax services.
          </p>
        </div>

        {/* Tech Stack Diagram */}
        <div className="mb-16 grid items-start gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left Column - What Feeds It */}
          <div>
<p className="mb-4 font-sans text-xs font-semibold uppercase tracking-wider text-slate-light">
            What feeds it
          </p>
            <div className="space-y-3">
              {feedTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 rounded-lg border border-[#dbe0e7] bg-white p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-sand font-heading text-xs font-bold text-navy">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-navy">
                      {tool.name}
                    </p>
                    <p className="font-sans text-xs text-slate-light">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Arrow + AI Engine */}
          <div className="flex flex-col items-center gap-4 pt-12">
            <div className="hidden h-px w-16 bg-teal lg:block" />
            <div className="hidden lg:block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-teal"
              >
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="rounded-xl bg-teal p-6 text-white">
              <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-wider text-white/80">
                Proprietary
              </p>
              <p className="font-heading text-lg font-bold">AI Engine</p>
            </div>
            <div className="hidden h-px w-16 bg-teal lg:block" />
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {aiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[#dbe0e7] bg-white p-6"
              >
                <h4 className="mb-2 font-heading text-sm font-bold text-navy">
                  {feature.title}
                </h4>
                <p className="font-sans text-xs leading-relaxed text-slate">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mb-20 max-w-3xl font-sans text-sm leading-relaxed text-slate">
          We invested in the tooling most accounting firms skip. Every call,
          task, timesheet and dashboard feeds the same engine.
        </p>

        {/* How It Works */}
        <div>
          <h3 className="mb-8 font-heading text-[17.28px] font-bold text-navy">
            How It Works
          </h3>
          <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-slate">
            Seamless onboarding and transparent processes designed to get your
            outsourced real estate bookkeeping up and running fast.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal font-heading text-sm font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-sm font-semibold text-navy">
                    {step.title}
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
