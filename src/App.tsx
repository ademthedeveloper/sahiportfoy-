import { I18nProvider } from "@/lib/i18n";
import { SmoothScroll } from "@/lib/smooth";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Portfolio } from "@/components/Portfolio";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function App() {
  return (
    <I18nProvider>
      <SmoothScroll>
        <div className="ambient-glow" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Portfolio />
          <Stats />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </SmoothScroll>
    </I18nProvider>
  );
}
