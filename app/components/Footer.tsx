"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white">ZAKIR<span className="text-cyan-400">.</span></div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Zakir Hossain. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/EngZakirHossain" target="_blank" rel="noopener noreferrer">
            <Github className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
          </a>
          <a href="https://www.linkedin.com/in/zakirhossain4969" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
          </a>
          <a href="mailto:eng.zakirhossain4969@gmail.com">
            <Mail className="text-slate-400 hover:text-white cursor-pointer transition-colors" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
