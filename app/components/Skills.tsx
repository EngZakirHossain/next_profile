"use client";
import { Layers, Cpu, Database, Code2 } from "lucide-react";

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'], icon: <Layers className="w-5 h-5" /> },
  { category: 'Backend', items: ['Laravel', 'REST API', 'Authentication', '3rd Part api'], icon: <Cpu className="w-5 h-5" /> },
  { category: 'Database', items: ['MySQL', 'Firebase'], icon: <Database className="w-5 h-5" /> },
  { category: 'Tools', items: ['Git & GitHub', 'Docker', 'Figma', 'Postman'], icon: <Code2 className="w-5 h-5" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">Technical Toolbox</h3>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{skill.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span key={item} className="px-3 py-1 bg-slate-900/50 text-slate-400 text-xs rounded-lg border border-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
