"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  id: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tighter">
          <Link href="/">ZAKIR<span className="text-cyan-400">.</span></Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const section = document.getElementById(link.id);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
        >
          RESUME
        </a>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1E293B] border-t border-slate-700 p-6 flex flex-col space-y-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const section = document.getElementById(link.id);
                if (section) section.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="text-lg py-2 text-white"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
