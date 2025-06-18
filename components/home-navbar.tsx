"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MoveButton from "./scroll-button";

const NAV_SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
  // "blog",
];

const NavBar = () => {
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
    <div className="hidden md:flex space-x-8">
      {NAV_SECTIONS.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`capitalize transition-colors ${
            activeSection === section
              ? "text-pink-500 dark:text-pink-400"
              : "text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400"
          }`}
        >
          {section}
        </button>
      ))}
      <Link
        href="/blog"
        className="capitalize transition-colors text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400"
      >
        blog
      </Link>
      <MoveButton
        setActiveSection={setActiveSection}
        scrollToSection={scrollToSection}
        isLastSection={isLastSection}
        sections={NAV_SECTIONS}
      />
    </div>
  );
};

export default NavBar;
