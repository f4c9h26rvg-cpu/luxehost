export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="text-3xl font-bold tracking-widest text-white">
          LUXEHOST
        </div>

        <nav className="hidden md:flex gap-12 text-sm uppercase tracking-[3px] text-gray-300">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
          Get a Quote
        </button>

      </div>
    </header>
  );
}