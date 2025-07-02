"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useMemo } from "react";
import Navbar from "../../components/home-navbar";
import BlogNavbar from "../../components/blog-navbar";

interface prop {
  navigation?: ReactNode;
}
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navigation = useMemo(() => {
    if (pathname === "/") {
      return <Navbar />;
    } else if (pathname.startsWith("/blog") && pathname !== "/blog/create") {
      return <BlogNavbar />;
    }
  }, [pathname]);
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => router.push("/")}
          >
            westpearl.dev
          </motion.div>
          <div className="flex items-center space-x-4">
            {/* <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
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
            </div> */}
            {navigation}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
