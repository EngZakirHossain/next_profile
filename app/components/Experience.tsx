"use client";

const experiences = [
  {
    year: "May 2023 – July 2025",
    role: "Software Engineer",
    company: "Flight Expert · Dhaka, Bangladesh",
    detail: `
      Developed and maintained scalable RESTful APIs for airline and hotel data integration.
      Integrated third-party travel supplier APIs (GDS, airline, hotel aggregators).
      Designed and optimized MySQL database schemas for high-volume booking and ticketing data.
      Built internal tools for customer management, ticket tracking, and staff workflow automation.
      Contributed to a custom secure Payment Gateway for seamless online transactions.
      Collaborated with sales, operations, and customer service teams to align software with business goals.
      Monitored live production systems, diagnosed issues, and ensured high availability.
      Maintained API documentation and managed versioning for consistent integrations.
    `,
  },
  {
    year: "Nov 2021 – May 2023",
    role: "Jr. Software Engineer",
    company: "Trimetric | Architects & Engineers · Dhaka, Bangladesh",
    detail: `
      Developed architect firm workflow and inventory management software.
      Built dynamic and static websites using PHP, JavaScript, HTML5, and CSS3.
      Maintained corporate and client websites for performance, security, and accuracy.
      Designed wireframes and prototypes based on Figma and Adobe XD.
      Collaborated with clients and stakeholders to transform requirements into digital products.
      Ensured responsive design and cross-browser compatibility.
      Worked closely with developers and designers for seamless project delivery.
    `,
  },
  {
    year: "Aug 2019 – Nov 2019",
    role: "Web Developer (Intern)",
    company: "Fendonus Limited · Dhaka, Bangladesh",
    detail: `
      Designed and developed websites using Laravel and JavaScript.
      Worked on an Ad-network company CMS and backend systems.
      Maintained servers and product backend infrastructure.
      Implemented backend logic for ad delivery, campaign management, and analytics tracking.
      Collaborated with senior developers and designers to meet technical and project deadlines.
    `,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Professional Journey</h3>
          <div className="h-1 w-20 bg-cyan-500 rounded-full mx-auto"></div>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-800 pb-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-[#0F172A]" />
              <span className="text-xs font-mono text-cyan-500 mb-2 block">{exp.year}</span>
              <h4 className="text-xl font-bold text-white">{exp.role}</h4>
              <p className="text-slate-400 text-sm mb-4">{exp.company}</p>
              <ul className="text-slate-500 leading-relaxed list-disc pl-5 space-y-1">
                {exp.detail.trim().split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
