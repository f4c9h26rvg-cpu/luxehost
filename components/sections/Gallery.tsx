"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-gray-500">
            Gallery
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Luxury Spaces We Care For
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Every property is cleaned, prepared and presented to impress every
            guest from the moment they walk through the door.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="overflow-hidden rounded-3xl"
            >
              <Image
                src={src}
                alt="Luxury Property"
                width={700}
                height={500}
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}