import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme.js";
import { profile } from "../data/content.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/certifications", label: "Certifications" },
  { to: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-bone/80 dark:bg-darkbg/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <NavLink to="/" className="font-serif text-xl tracking-wide">
          Safirah<span className="text-moss">.</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wide transition-colors duration-300 hover:text-moss ${
                  isActive ? "text-moss" : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-wide hover:text-moss">
            Resume
          </a>
          <a href="#contact" className="text-sm uppercase tracking-wide hover:text-moss">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-full border border-cafe/20 dark:border-bone/20 hover:border-moss transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="p-2 text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-bone dark:bg-darkbg overflow-hidden"
          >
            <div className="flex flex-col px-6 pb-6 gap-4">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-wide">
                  {l.label}
                </NavLink>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-wide">
                Resume
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="text-sm uppercase tracking-wide">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
