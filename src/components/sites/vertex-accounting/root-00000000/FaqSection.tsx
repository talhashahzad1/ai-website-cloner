interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question:
      "How can outsourcing my real estate bookkeeping improve my business's profit margins?",
    answer:
      "By outsourcing your bookkeeping to Vertex, you benefit from our specialized expertise and precise accounting practices, which ensure accuracy and minimize financial discrepancies. This reduces the risk of costly errors and penalties. The overall efficiency helps improve your operational margins by allowing you to reallocate resources towards growth-focused activities.",
  },
  {
    question:
      "What specific real estate accounting services and tools do you use to manage my financial records?",
    answer:
      "At Vertex, we are experienced accountants across all industry-leading property management accounting software such as AppFolio, Yardi, Buildium, Rent Manager, Entrata, Real Page, QuickBooks, and MRI. These tools provide comprehensive solutions for managing financial transactions, tracking expenses, and creating reports. We get accountant access to your software PMS, just like you'd provide any internal employee.",
  },
  {
    question:
      "Can you handle both residential and commercial real estate bookkeeping?",
    answer:
      "Yes, we manage the finances for over 130,000 residential units and more than 30 million commercial square feet. Our team has developed a depth of experience and tailored processes that cater effectively to both sectors. Whether you're dealing with residential properties or expansive commercial spaces, our bookkeeping services are designed to support all aspects of real estate accounting.",
  },
  {
    question:
      "What kind of cost savings can I expect by outsourcing my bookkeeping?",
    answer:
      "By choosing us, you can anticipate significant cost savings. These savings come from several areas, including reduced need for in-house accounting staff, less expenditure on training and accounting software, and decreased risks of costly errors.",
  },
  {
    question:
      "Can you assist with regulatory compliance and audits for real estate businesses?",
    answer:
      "Yes, regulatory compliance and preparedness for audits are fundamental components of our services. At Vertex, we ensure that all your financial practices adhere to the latest real estate regulations and standards. Our thorough and precise bookkeeping fortifies your business against compliance issues and streamlines the audit process, minimizing potential risks and penalties.",
  },
];

export function FaqSection() {
  return (
    <section id="qa" className="scroll-mt-20 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl py-20 sm:py-24">
        <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          {faqItems.map((item) => (
            <div key={item.question} className="border-line border-b py-7">
              <h3 className="font-heading text-[1.1rem] font-semibold leading-snug text-navy">
                {item.question}
              </h3>
              <p className="measure mt-3 leading-relaxed text-slate">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}