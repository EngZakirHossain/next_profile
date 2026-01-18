"use client";
import { ExternalLink,GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Daffodil International University",
    duration: "2016 - 2020",
    result: "CGPA: 3.59 / 4.00",
    description: "Focused on Software Engineering, Data Structures, and IOT."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Uttara Model College",
    duration: "2012 - 2014",
    result: "GPA: 5.00 / 5.00",
    description: "Science Group"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sacher High School",
    duration: "2010 - 2012",
    result: "GPA: 4.69 / 5.00",
    description: "Science Group"
  }
];

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Instructory",
    date: "Dec 2020",
    link: "https://instructory.net/courses/laravel-12-masterclass-learn-from-doing-projects"
  },
  {
    title: "Diploma In Web Design and Development ",
    issuer: "Daffodil Institute of IT",
    date: "Aug 2020",
    link: "https://diit.edu.bd"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* Education */}
        <div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" /> Education
            </h3>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-800 group hover:border-cyan-500/50 transition-colors">
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-slate-700 rounded-full group-hover:bg-cyan-500 transition-colors"></div>
                <div className="text-xs font-mono text-cyan-500 mb-2 flex items-center gap-2">
                  <Calendar size={12} /> {edu.duration}
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-slate-400 mb-2 font-medium">{edu.institution}</p>
                <p className="text-cyan-400/80 text-sm font-semibold mb-3">{edu.result}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <Award className="text-cyan-400" /> Certificates
            </h3>
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          </div>
          <div className="grid gap-4">
            {certificates.map((cert, idx) => (
              <div key={idx} className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 transition-all group flex justify-between items-center">
                <div>
                  <h4 className="text-white font-bold mb-1 group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                  <p className="text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
                </div>
                <a href={cert.link} className="p-3 bg-slate-900 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-950 transition-all">
                  <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
