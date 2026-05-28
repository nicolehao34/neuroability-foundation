import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

const mentors = [
  {
    name: "Dr. Amara Osei",
    subjects: "Math & Science",
    bio: "Former high school teacher with 12 years experience supporting students with ADHD and processing disorders. Now researching adaptive learning at university.",
    available: true
  },
  {
    name: "Luis Herrera",
    subjects: "Writing & College Prep",
    bio: "First-gen college grad who navigated chronic fatigue syndrome throughout his undergrad. Specializes in executive function strategies and college applications.",
    available: true
  },
  {
    name: "Priya Nair",
    subjects: "Study Skills & Career Guidance",
    bio: "Career counselor passionate about helping neurodiverse students find paths that play to their strengths. Currently building out her waitlist.",
    available: false
  }
];

export function Mentor() {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [frequency, setFrequency] = useState("flexible");
  const [submitted, setSubmitted] = useState(false);

  const toggleSubject = (s: string) =>
    setSubjects(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-['DM_Sans',sans-serif]">

      {/* Nav */}
      <nav className="border-b border-slate-100 px-8 py-5 flex justify-between items-center sticky top-0 bg-white z-30">
        <div className="flex items-center gap-2.5">
          <img src="/__mockup/images/neuroability-logo.png" alt="NeuroAbility logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">NeuroAbility Foundation</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="/" className="hover:text-slate-900 transition-colors">Our Work</a>
          <a href="/" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="/" className="hover:text-slate-900 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300">Get Involved</a>
          <a href="/" className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full">Donate</a>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-8 pt-20 pb-16 text-center">
        <motion.p initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-5">
          Mentoring Program
        </motion.p>
        <motion.h1 initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-medium leading-[1.1] text-slate-900 mb-6">
          Find your mentor.
        </motion.h1>
        <motion.p initial="hidden" animate="visible" custom={2} variants={fade}
          className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Free, 1:1 mentoring matched by subject and condition. Every mentor is a volunteer
          who gets it — many have navigated similar challenges themselves.
        </motion.p>
      </section>

      {/* How it works */}
      <section className="border-t border-slate-100 py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { step: "01", title: "Fill out the form", desc: "Tell us what subject you need help with, your biggest challenge, and how often you'd like to meet." },
              { step: "02", title: "We find your match", desc: "We review your request and match you with a mentor suited to your needs. Usually within 5–7 days." },
              { step: "03", title: "Meet at your pace", desc: "Connect weekly, biweekly, or flexibly — on your schedule, wherever works for you." }
            ].map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}>
                <div className="text-xs font-bold text-slate-300 tracking-widest mb-4">{s.step}</div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section className="py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="font-['Playfair_Display',serif] text-3xl font-medium text-slate-900 mb-10">
            Request a mentor
          </motion.h2>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="border border-teal-100 bg-teal-50 rounded-2xl p-10 text-center">
              <CheckCircle size={40} className="text-teal-600 mx-auto mb-4" />
              <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-slate-900 mb-3">Request received.</h3>
              <p className="text-slate-500">We'll be in touch within 5–7 days with your match. Check your inbox.</p>
            </motion.div>
          ) : (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
              className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First name</label>
                  <input type="text" placeholder="Your first name"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input type="email" placeholder="you@example.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">What do you need help with?</label>
                <div className="flex flex-wrap gap-2">
                  {["Math", "Science", "Writing", "Study skills", "College prep", "Career guidance", "Other"].map(s => (
                    <button key={s} onClick={() => toggleSubject(s)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        subjects.includes(s)
                          ? "bg-teal-700 text-white border-teal-700"
                          : "border-slate-200 text-slate-600 hover:border-teal-300"
                      }`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your condition <span className="font-normal text-slate-400">(optional — used only for matching)</span>
                </label>
                <input type="text" placeholder="e.g. ADHD, epilepsy, fibromyalgia…"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">What's your biggest challenge right now?</label>
                <textarea rows={3} placeholder="Tell us what's been hardest…"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors resize-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Preferred meeting frequency</label>
                <div className="flex gap-6">
                  {["Weekly", "Biweekly", "Flexible"].map(f => (
                    <label key={f} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="frequency" value={f.toLowerCase()}
                        checked={frequency === f.toLowerCase()}
                        onChange={() => setFrequency(f.toLowerCase())}
                        className="accent-teal-700" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button onClick={() => setSubmitted(true)}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                Request a Mentor <ArrowRight size={16} />
              </button>

              <p className="text-center text-xs text-slate-400">
                All mentors are background-checked volunteers. Matching typically takes 5–7 days.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mentor spotlight */}
      <section className="border-t border-slate-100 py-20 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="font-['Playfair_Display',serif] text-3xl font-medium text-slate-900 mb-10">
            Meet some of our mentors
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mentors.map((m, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
                className="bg-white border border-slate-100 rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold text-sm shrink-0">
                    {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    m.available ? "bg-teal-50 text-teal-700" : "bg-slate-100 text-slate-500"
                  }`}>
                    {m.available ? "Accepting students" : "Waitlisted"}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{m.name}</p>
                  <p className="text-teal-700 text-sm font-medium">{m.subjects}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-8 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/__mockup/images/neuroability-logo.png" alt="NeuroAbility logo" className="w-7 h-7 rounded-full object-cover" />
              <span className="font-['Playfair_Display',serif] font-semibold text-teal-800">NeuroAbility Foundation</span>
            </div>
            <p className="text-slate-400 text-xs mt-1">A registered 501(c)(3) nonprofit.</p>
          </div>
          <div className="flex gap-10 text-sm text-slate-400">
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider mb-1">Work</p>
              <a href="/" className="block hover:text-slate-700 transition-colors">Research</a>
              <a href="/" className="block hover:text-slate-700 transition-colors">Open Source</a>
              <a href="/" className="block hover:text-slate-700 transition-colors">Lessons</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider mb-1">Students</p>
              <a href="/" className="block hover:text-slate-700 transition-colors">Find a Mentor</a>
              <a href="/" className="block hover:text-slate-700 transition-colors">Access Tools</a>
              <a href="/" className="block hover:text-slate-700 transition-colors">Stipends</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider mb-1">Org</p>
              <a href="/" className="block hover:text-slate-700 transition-colors">About</a>
              <a href="/" className="block hover:text-slate-700 transition-colors">Donate</a>
              <a href="/" className="block hover:text-slate-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
