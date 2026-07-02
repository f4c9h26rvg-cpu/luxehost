import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}