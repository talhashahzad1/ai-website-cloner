interface StatsBarProps {
  stats: { value: string; label: string }[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="border-y border-[#dbe0e7] bg-white px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-3xl font-bold text-[#20949d]">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-[#435e6b]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
