"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Thank you! Your request has been sent successfully.");
        form.reset();
      } else {
        setError("Unable to send your request. Please try again.");
      }
    } catch {
      setError("Unable to send your request. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

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
                href="mailto:info@luxehostcleaning.co.uk"
                className="text-gray-400 hover:text-white transition"
              >
                info@luxehostcleaning.co.uk
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

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 rounded-3xl p-10 shadow-2xl space-y-6"
        >

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <input
            name="service"
            type="text"
            placeholder="Service Required"
            required
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none border border-zinc-700 focus:border-white transition"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your property..."
            required
            className="w-full rounded-xl bg-zinc-800 px-5 py-4 outline-none resize-none border border-zinc-700 focus:border-white transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Request Quote"}
          </button>

          {success && (
            <p className="text-green-400 text-center">
              {success}
            </p>
          )}

          {error && (
            <p className="text-red-400 text-center">
              {error}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}