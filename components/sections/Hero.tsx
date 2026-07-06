"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-gray-400 mb-6">
            Luxury Airbnb Cleaning
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Luxury Airbnb
            <br />
            Cleaning
            <br />
            Across London
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-8 max-w-xl">
            Professional Airbnb turnover cleaning, linen service and property
            management trusted by hosts, landlords and serviced accommodation
            providers across London.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Request a Quote
            </a>

            <a
              href="https://wa.me/447424245853?text=Hello%20LuxeHost%20Cleaning,%20I%20would%20like%20to%20request%20a%20quotation%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-400 mt-2">
                Properties Serviced
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="text-gray-400 mt-2">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-gray-400 mt-2">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Same Day</h3>
              <p className="text-gray-400 mt-2">
                Availability
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="Luxury Airbnb Apartment"
            width={800}
            height={900}
            priority
            className="rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}