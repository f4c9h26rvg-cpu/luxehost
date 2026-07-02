const items = [
  {
    title: "Hotel Standard",
    text: "Every property is cleaned to luxury hospitality standards.",
  },
  {
    title: "Fully Insured",
    text: "Professional team with complete insurance and reliability.",
  },
  {
    title: "Fast Turnaround",
    text: "Same-day cleaning ready for your next guest.",
  },
  {
    title: "24/7 Support",
    text: "Always available for hosts and property managers.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[6px] text-gray-400 text-center">
          Why Choose LuxeHost
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Luxury Service Without Compromise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {items.map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-3xl p-10 hover:border-white hover:shadow-xl transition"
            >
              <div className="text-4xl mb-6">✔</div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}