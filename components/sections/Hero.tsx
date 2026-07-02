"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-gray-400 mb-6">
            Luxury Airbnb Cleaning
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Cleaning
            <br />
            Redefined.
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-8 max-w-xl">
            Premium Airbnb Cleaning, Linen Service and Property Management
            across London.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Get a Quote
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Our Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="Luxury Apartment"
            width={700}
            height={900}
            className="rounded-3xl object-cover shadow-2xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}