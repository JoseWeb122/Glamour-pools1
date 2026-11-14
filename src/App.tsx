import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { cn } from "./utils/cn";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed right-6 bottom-6 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-accent text-onaccent shadow-[0_18px_38px_-12px_var(--c-accent)] transition-all duration-500 hover:-translate-y-1",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
    </button>
  );
}

function Site() {
  const [inquiry, setInquiry] = useState({ type: "Custom Concrete Pool", nonce: 0 });

  /* Any CTA across the site can pre-fill the consultation form */
  const requestInquiry = (type: string) => {
    setInquiry({ type, nonce: Date.now() });
    window.setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 90);
  };

  return (
    <div className="min-h-screen bg-base font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services onInquire={requestInquiry} />
        <Gallery onInquire={requestInquiry} />
        <WhyUs />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact inquiry={inquiry} />
      </main>
      <Footer onInquire={requestInquiry} />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  );
}
