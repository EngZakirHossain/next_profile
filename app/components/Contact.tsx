"use client";
import { useState } from "react";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800 to-[#0F172A] rounded-[3rem] p-12 lg:p-20 border border-slate-700/50 flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Info */}
          <div className="lg:w-1/2">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's build something amazing <span className="text-cyan-400 italic">together.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Currently available for freelance projects and full-time opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:eng.zakirhossain4969@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-white font-medium group-hover:text-cyan-400 transition">
                  eng.zakirhossain4969@gmail.com
                </span>
              </a>

              <a href="https://www.linkedin.com/in/zakirhossain4969" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                  <Linkedin size={20} />
                </div>
                <span className="text-white font-medium group-hover:text-cyan-400 transition">
                  linkedin.com/in/zakirhossain4969
                </span>
              </a>

              <a href="https://github.com/EngZakirHossain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">
                  <Github size={20} />
                </div>
                <span className="text-white font-medium group-hover:text-cyan-400 transition">
                  github.com/EngZakirHossain
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-cyan-500 outline-none" 
                required
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-cyan-500 outline-none" 
                required
              />
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Your Message" 
                value={form.message} 
                onChange={handleChange} 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-cyan-500 outline-none" 
                required
              ></textarea>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"} <MessageSquare size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
