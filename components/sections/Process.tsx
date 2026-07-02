"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book Your Cleaning",
    description:
      "Request a quote online or contact our team in just a few minutes.",
  },
  {
    number: "02",
    title: "We Prepare Everything",
    description:
      "Our professional cleaners prepare your property, replace linen and restock essentials.",
  },
  {
    number: "03",
    title: "Quality Inspection",
    description:
      "Every property is checked to ensure hotel-quality presentation before arrival.",
  },
  {
    number: "04",
    title: "Guest Check-In",
    description:
      "Your guests arrive to a perfectly prepared, spotless home every single time.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-gray-500">
            HOW IT WORKS
          </p>

          <h2 className="text-5xl font-bold mt-5">
            A Simple Process.
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From booking to guest arrival, we take care of every detail so your
            property is always ready.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10 mt-24">

          {steps.map((step, index) => (

            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="relative"
            >

              <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto">
                {step.number}
              </div>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[70%] w-full border-t border-dashed border-gray-300"></div>
              )}

              <div className="mt-10 text-center">

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                  {step.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}