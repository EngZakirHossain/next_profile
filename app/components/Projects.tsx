"use client";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Enterprise Solution",
    desc: "A full-scale online shop with real-time inventory tracking and secure payment gateway integration.",
    tech: ["Next.js", "Redux","Laravel", "Rest-api"],
    link: "https://mewmewshopbd.com",
    github: "#"
  },
  {
    title: "SaaS Management Dashboard",
    desc: "Comprehensive admin panel for managing users, subscriptions, and analytics with interactive charts.",
    tech: ["Laravel", "Rest Api", "Next Js", "Chart.js"],
    link: "https://backoffice.trimatric.ai",
    github: "https://github.com/EngZakirHossain/trimatric-api"
  },
  {
    title: "Real-time Data Manipulation using Rest Api and Dynamic Website Build",
    desc: "A workspace app allowing multiple users to edit their website using WebSockets.",
    tech: ["Next js", "Laravel", "MySql", "Rest Api"],
    link: "https://trimatric.ai/",
    github: "https://github.com/EngZakirHossain/trimatric-ai"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Featured Projects</h3>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all">
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Code2 className="text-slate-700 w-20 h-20" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => <span key={t} className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">{t}</span>)}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                <div className="flex gap-4">
                  <a href={project.link} target="_blank" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.github} target="_blank" className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
