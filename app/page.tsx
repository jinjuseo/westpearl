"use client";
import { useState, useEffect } from "react";
import { BlogPreview } from "@/components/blog-preview";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./_components/Navbar";
import Home from "./_components/_sections/Home";
import About from "./_components/_sections/About";
import Skills from "./_components/_sections/Skills";
import Projects from "./_components/_sections/Projects";
import Experience from "./_components/_sections/Experience";
import Contact from "./_components/_sections/Contact";
import Footer from "./_components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";

const NAV_SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  // "blog",
  "contact",
];
export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const isLastSection = activeSection === NAV_SECTIONS[NAV_SECTIONS.length - 1];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of NAV_SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <NavBar
        sections={NAV_SECTIONS}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <section id="blog" className="py-24 bg-white dark:bg-slate-900">
        <BlogPreview />
      </section> */}
      <Contact />

      <Footer />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="fixed bottom-6 inset-x-0 mx-auto w-fit"
      >
        <button
          className={`bg-transparent p-3 duration-300 `}
          onClick={() =>
            setActiveSection((prev) => {
              {
                const currIndex = NAV_SECTIONS.indexOf(prev);
                const nextIndex = (currIndex + 1) % NAV_SECTIONS.length;
                scrollToSection(NAV_SECTIONS[nextIndex]);
                return NAV_SECTIONS[nextIndex];
              }
            })
          }
        >
          <AnimatePresence mode="wait">
            {isLastSection ? (
              <motion.div
                key="up"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp className="w-8 h-8 text-slate-400" />
              </motion.div>
            ) : (
              <motion.div
                key="down"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-8 h-8 text-slate-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
      <ToastContainer theme={theme} position="top-right" closeOnClick={false} />
    </div>
  );
}
