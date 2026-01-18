"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <h1 className="text-lg font-mono text-cyan-400 mb-4 animate-pulse">Hi, I'm Zakir Hossain 👋</h1>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Software <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">Engineer</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build scalable, secure, and high-performance web applications. Turning complex problems into elegant, user-centric digital solutions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1">
                View Projects <ChevronRight size={20} />
              </button>
            </a>
            <a href="#contact">
              <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
                Contact Me
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-72 lg:w-[23rem] aspect-[4/5] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[3rem] rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-cyan-400/10 rounded-[3rem] -rotate-3"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-[3rem] border-2 border-slate-700/50 overflow-hidden shadow-2xl">
              <Image
                src="/img/zakir.jpg"
                width={928}
                height={1152}
                alt="Zakir Hossain"
                className="w-full h-full object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-500 transform scale-105 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
