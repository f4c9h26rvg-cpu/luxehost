"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-gray-500">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Request Your Quote
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Tell us about your property and we'll send you a personalised quotation.
          </p>

        </div>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="Full Name"
            className="border rounded-xl p-4"
          />

          <input
            placeholder="Email Address"
            className="border rounded-xl p-4"
          />

          <input
            placeholder="Phone Number"
            className="border rounded-xl p-4"
          />

          <input
            placeholder="Property Address"
            className="border rounded-xl p-4"
          />

          <textarea
            placeholder="Tell us about your property..."
            rows={6}
            className="border rounded-xl p-4 md:col-span-2"
          />

          <button
            className="bg-black text-white py-4 rounded-xl font-semibold md:col-span-2 hover:bg-gray-800 transition"
          >
            Request Quote
          </button>

        </form>

      </div>
    </section>
  );
}