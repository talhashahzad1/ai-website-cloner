import Image from "next/image";

interface Software {
  name: string;
  subtitle?: string;
  logo?: string;
  logoAlt?: string;
  href: string;
}

const softwareItems: Software[] = [
  {
    name: "AppFolio",
    logo: "appfolio.webp",
    logoAlt: "AppFolio",
    href: "/appfolio/",
  },
  {
    name: "YARDI",
    subtitle: "Voyager & Breeze",
    href: "/yardi/",
  },
  {
    name: "Buildium",
    logo: "buildium.webp",
    logoAlt: "Buildium",
    href: "/buildium/",
  },
  {
    name: "Rent Manager",
    logo: "rent-manager.webp",
    logoAlt: "Rent Manager",
    href: "/rent-manager/",
  },
  {
    name: "Entrata",
    logo: "entrata.png",
    logoAlt: "Entrata",
    href: "/entrata/",
  },
  { name: "RealPage", href: "/realpage/" },
  {
    name: "QuickBooks",
    logo: "quickbooks.png",
    logoAlt: "QuickBooks",
    href: "/quickbooks-real-estate/",
  },
  {
    name: "MRI",
    logo: "mri.webp",
    logoAlt: "MRI Software",
    href: "/mri/",
  },
  { name: "Propertyware", href: "/propertyware/" },
];

export function SoftwareSection() {
  return (
    <section id="software" className="scroll-mt-20 bg-sand px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-20 sm:py-24">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
            Accounting Experts in Your Software
          </h2>
          <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-teal">
            We Work With Your Software
          </h3>
          <p className="measure mt-5 leading-relaxed text-slate">
            Deep expertise across every major property management accounting
            platform. We get accountant access to your software PMS, just like
            you&apos;d provide any internal employee.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softwareItems.map((item) => (
            <a key={item.name} href={item.href}>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-[#dbe0e7] bg-white p-6 transition-shadow hover:shadow-lg">
                {item.logo ? (
                  <Image
                    src={`/sites/rea-co/root-00000000/images/${item.logo}`}
                    alt={item.logoAlt ?? item.name}
                    width={120}
                    height={36}
                    className="h-9 w-auto object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="font-heading text-lg font-bold text-navy">
                    {item.name}
                    {item.subtitle && (
                      <span className="ml-1 font-sans text-xs font-normal text-slate">
                        {item.subtitle}
                      </span>
                    )}
                  </span>
                )}
                <span className="font-sans text-sm text-slate">
                  Bookkeeping &amp; Tax
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}