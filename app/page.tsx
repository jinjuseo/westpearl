"use client";
import Home from "./_components/_sections/Home";
import About from "./_components/_sections/About";
import Skills from "./_components/_sections/Skills";
import Projects from "./_components/_sections/Projects";
import Experience from "./_components/_sections/Experience";
import Contact from "./_components/_sections/Contact";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      id="main"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <section id="blog" className="py-24 bg-white dark:bg-slate-900">
        <BlogPreview />
      </section> */}
      <Contact />
      <div id="portal-scroll-button"></div>
      <ToastContainer theme={theme} position="top-right" closeOnClick={false} />
    </div>
  );
}
