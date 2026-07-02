import { BedDouble, Sparkles, Sofa, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: BedDouble,
    title: "Airbnb Turnover",
    description:
      "Complete cleaning between guests with hotel-quality presentation.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "Detailed deep cleaning for luxury homes and serviced apartments.",
  },
  {
    icon: Sofa,
    title: "Linen Service",
    description:
      "Fresh linen, towels and perfect bed presentation every stay.",
  },
  {
    icon: ShieldCheck,
    title: "Property Management",
    description:
      "Reliable management and guest-ready preparation across London.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white text-black py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[6px] text-gray-500 text-center">
          Services
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Everything Your Property Needs
        </h2>

        <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">
          From luxury Airbnb turnover cleaning to complete property
          management, we ensure every guest walks into a flawless home.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}