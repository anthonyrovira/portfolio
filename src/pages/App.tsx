import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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
