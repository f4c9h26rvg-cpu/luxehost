const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Airbnb Host",
    text: "LuxeHost completely transformed the way I manage my properties. Every turnover is flawless and my guest reviews have never been better.",
  },
  {
    name: "James Carter",
    role: "Property Investor",
    text: "Professional, punctual and incredibly reliable. I finally have peace of mind knowing my apartments are always guest-ready.",
  },
  {
    name: "Emily Roberts",
    role: "Short-Let Owner",
    text: "Outstanding service from start to finish. The attention to detail is exactly what luxury properties require.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[6px] text-gray-400 text-center">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Trusted by Airbnb Hosts
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-white/30 transition"
            >
              <div className="text-yellow-400 text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8 mb-8">
                "{item.text}"
              </p>

              <div>
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}