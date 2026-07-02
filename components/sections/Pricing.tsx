"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Essential",
    price: "£50",
    description: "Perfect for standard Airbnb turnovers.",
    features: [
      "Full Cleaning",
      "Kitchen & Bathroom",
      "Bedroom Preparation",
      "Guest Ready Finish",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "£105",
    description: "Our most popular package.",
    features: [
      "Everything in Essential",
      "Fresh Linen & Towels",
      "Check-in / Check-out",
      "Property Inspection",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For agencies and multiple properties.",
    features: [
      "Custom Pricing",
      "Dedicated Manager",
      "Priority Support",
      "Tailored Solutions",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-gray-400">
            Pricing
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Choose Your Plan
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Transparent pricing with premium service quality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className={`rounded-3xl p-10 transition duration-300 ${
                plan.featured
                  ? "bg-white text-black scale-105 shadow-2xl"
                  : "border border-white/10 hover:border-white/30"
              }`}
            >
              {plan.featured && (
                <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm mb-6">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <div className="text-5xl font-bold mt-6">
                {plan.price}
              </div>

              <p className="mt-4 opacity-70">
                {plan.description}
              </p>

              <ul className="space-y-4 mt-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-4 rounded-full font-semibold transition ${
                  plan.featured
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Get a Quote
              </button>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}