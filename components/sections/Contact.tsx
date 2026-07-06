"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* Left Side */}

        <div>
          <p className="uppercase tracking-[6px] text-gray-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Request Your Free Quote
          </h2>

          <p className="text-gray-300 mt-8 leading-8">
            Tell us about your property and we'll prepare a personalised quote
            as quickly as possible.
          </p>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Email
              </h3>

              <a
                href="mailto:walmor.costa@luxehostcleaning.co.uk"
                className="text-gray-400 hover:text-white transition"
              >
                walmor.costa@luxehostcleaning.co.uk
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/447424245853"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                +44 7424 245853
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Website
              </h3>

              <a
                href="https://luxehostcleaning.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                luxehostcleaning.co.uk
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Service Area
              </h3>

              <p className="text-gray-400">
                London & Greater London
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}

        <form className="bg-zinc-900 rounded-3xl p-10 shadow-2xl space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <input
            type="text"
            placeholder="Property Address"
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <textarea
            rows={6}
            placeholder="Tell us about your property..."
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none resize-none border border-zinc-700 focus:border-white transition"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition"
          >
            Request Quote
          </button>

        </form>

      </div>
    </section>
  );
}