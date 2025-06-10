"use client";

import { useState, useEffect } from "react";
import { BlogPreview } from "@/components/blog-preview";

import NavBar from "./_components/Navbar";
import Home from "./_components/_sections/Home";
import About from "./_components/_sections/About";
import Skills from "./_components/_sections/Skills";
import Projects from "./_components/_sections/Projects";
import Experience from "./_components/_sections/Experience";
import Contact from "./_components/_sections/Contact";
import Footer from "./_components/Footer";

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
  const [activeSection, setActiveSection] = useState("home");
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <NavBar sections={NAV_SECTIONS} activeSection={activeSection} />
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
    </div>
  );
}
