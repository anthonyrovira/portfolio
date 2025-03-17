import { useState } from "react";
import { Navbar } from "@/components/layouts/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import Hero from "@/components/sections/hero/Hero";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Footer from "@/components/layouts/Footer";
import About from "@/components/sections/about/About";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="relative z-0 bg-white dark:bg-dark-background min-h-screen w-full transition-colors duration-300">
        <Navbar isSidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Hero />
        <About />
        <Portfolio />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
