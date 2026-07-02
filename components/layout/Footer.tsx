export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold tracking-wider">
            LUXEHOST
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            Luxury Airbnb Cleaning, Linen Service and Property Management
            across London.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Airbnb Turnover</li>
            <li>Deep Cleaning</li>
            <li>Linen Service</li>
            <li>Property Management</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>London, United Kingdom</li>
            <li>info@luxehostcleaning.com</li>
            <li>+44 20 0000 0000</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-5">
            Opening Hours
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Monday - Friday</li>
            <li>08:00 - 18:00</li>
            <li>Emergency Support 24/7</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">
        © 2026 LuxeHost Cleaning. All rights reserved.
      </div>
    </footer>
  );
}