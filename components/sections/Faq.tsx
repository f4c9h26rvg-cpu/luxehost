"use client";

const faqs = [
  {
    question: "Do you provide same-day Airbnb turnover cleaning?",
    answer:
      "Yes. Subject to availability, we can provide same-day turnover cleaning to ensure your property is guest-ready.",
  },
  {
    question: "Do you supply linen and towels?",
    answer:
      "Yes. We provide premium hotel-quality linen and towel services for Airbnb and serviced accommodation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover London and surrounding areas for Airbnb cleaning and property management services.",
  },
  {
    question: "Are your cleaners insured?",
    answer:
      "Absolutely. Our team is fully insured, trained and committed to delivering luxury standards.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[8px] text-gray-500 text-center">
          FAQ
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Frequently Asked Questions
        </h2>

        <div className="mt-20 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}