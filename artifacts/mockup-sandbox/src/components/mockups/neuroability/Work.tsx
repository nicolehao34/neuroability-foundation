import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Microscope, Users, ExternalLink } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const projects = [
  {
    name: "InkSight Data Labeling",
    status: "In Progress",
    desc: "A multimodal vision-language benchmark built over YouTube STEM lecture videos, evaluating how well AI models understand handwritten mathematical derivations.",
    tags: ["Temporal Grounding", "Derivation Reconstruction", "Cross-Modal Retrieval"],
  },
  {
    name: "Accessible Learning Platform",
    status: "In Progress",
    desc: "A deep-learning-powered platform designed for students who struggle with attending school. Adapts content difficulty, pacing, and format in real time.",
    tags: ["Personalization", "Accessibility-First", "Customizable Paths"],
  },
];

const programs = [
  {
    icon: <Users size={20} className="text-teal-700" />,
    title: "1:1 Mentoring",
    desc: "We match students with volunteer mentors who have navigated similar conditions — for academic support, college prep, and career guidance.",
    link: { label: "Find a mentor", href: "#/mentor" },
  },
  {
    icon: <GitBranch size={20} className="text-teal-700" />,
    title: "Assistive Technology Access",
    desc: "We fund direct access to assistive tools for students who can't afford them — screen readers, note-taking software, and AI writing aids.",
    link: { label: "Refer a student", href: "#/refer" },
  },
  {
    icon: <Microscope size={20} className="text-teal-700" />,
    title: "Educator Guides",
    desc: "Free, evidence-based guides written for educators, parents, and mentors on how to better support students with neurological conditions.",
    link: { label: "Browse guides", href: "#/resources" },
  },
];

const stats = [
  { value: "2", label: "active research projects" },
  { value: "100%", label: "open source" },
  { value: "Free", label: "for all students" },
  { value: "501(c)(3)", label: "registered nonprofit" },
];

export function Work() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-['DM_Sans',sans-serif]">

      {/* Nav */}
      <nav className="border-b border-slate-100 px-8 py-5 flex justify-between items-center sticky top-0 bg-white z-30">
        <div className="flex items-center gap-2.5">
          <img
            src={`${import.meta.env.BASE_URL}images/neuroability-logo.jpg`}
            alt="NeuroAbility logo"
            className="w-9 h-9 rounded-full object-cover"
          />
          <a href="#/" className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">
            NeuroAbility Foundation
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="#/work" className="text-slate-900 font-medium transition-colors">Our Work</a>
          <a href="#/resources" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="#/research" className="hover:text-slate-900 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#/" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300">
            Get Involved
          </a>
          <a href="#/donate" className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full">
            Donate
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-16">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-6"
        >
          Our Work
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-medium leading-[1.1] text-slate-900 mb-8"
        >
          Everything we build is open.
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="text-lg text-slate-500 max-w-2xl leading-relaxed"
        >
          From AI research to free student programs, all of our work is published openly and built
          to serve communities that are chronically underserved by both academia and industry.
        </motion.p>
      </section>

      {/* Stats */}
      <section className="border-t border-b border-slate-100 py-12 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
              className="text-center"
            >
              <p className="font-['Playfair_Display',serif] text-3xl font-medium text-teal-800 mb-1">{s.value}</p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="flex items-end justify-between mb-12 flex-wrap gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Microscope size={20} className="text-teal-700" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Research</span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-4xl font-medium text-slate-900">
                Open research, published for everyone.
              </h2>
            </div>
            <a
              href="#/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
            >
              View all research <ArrowRight size={14} />
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
                className="border border-slate-100 rounded-2xl p-8 flex flex-col hover:border-teal-200 transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Project</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {p.status}
                  </span>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-medium text-slate-900 mb-3">
                  {p.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span key={tag} className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors group-hover:gap-2.5"
                >
                  View on GitHub <ExternalLink size={13} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Programs */}
      <section className="border-t border-slate-100 py-24 px-8 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                <Users size={20} className="text-teal-700" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Student Programs</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-4xl font-medium text-slate-900 max-w-2xl">
              Direct support for students who need it most.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fade}
                className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col hover:border-teal-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                <a
                  href={p.link.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  {p.link.label} <ArrowRight size={13} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="border-t border-slate-100 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <GitBranch size={20} className="text-teal-700" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Open Source</span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-4xl font-medium text-slate-900 mb-6">
                Built in public. Free forever.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Every tool, dataset, and lesson we produce is published openly on GitHub under a
                permissive license. Educators, researchers, and developers are free to use, fork,
                and build on our work without restriction.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 font-mono text-sm text-slate-400 space-y-3 leading-relaxed">
              <p><span className="text-teal-400">$</span> git clone github.com/neuroability</p>
              <p className="text-slate-500"># All repos are public and MIT licensed</p>
              <p><span className="text-slate-500">→</span> <span className="text-white">inksight-benchmark</span></p>
              <p><span className="text-slate-500">→</span> <span className="text-white">accessible-learning-platform</span></p>
              <p><span className="text-slate-500">→</span> <span className="text-white">educator-resources</span></p>
              <p><span className="text-slate-500">→</span> <span className="text-white">accommodation-templates</span></p>
              <p className="pt-2"><span className="text-teal-400">$</span> <span className="animate-pulse">_</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
          >
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-slate-900 mb-4">
              Help us do more.
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              All of our programs are free to students. We rely entirely on donations to fund
              research, mentors, and assistive technology access.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#/donate"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
              >
                Donate <ArrowRight size={16} />
              </a>
              <a
                href="#/refer"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
              >
                Refer a student
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 px-8 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={`${import.meta.env.BASE_URL}images/neuroability-logo.jpg`}
                alt="NeuroAbility logo"
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="font-['Playfair_Display',serif] font-semibold text-teal-800">NeuroAbility Foundation</span>
            </div>
            <p className="text-slate-400 text-xs mt-1">A registered 501(c)(3) nonprofit.</p>
          </div>
          <div className="flex gap-10 text-sm text-slate-400">
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Work</p>
              <a href="#/research" className="block hover:text-slate-700 transition-colors">Research</a>
              <a href="#/work" className="block hover:text-slate-700 transition-colors">Open Source</a>
              <a href="#/resources" className="block hover:text-slate-700 transition-colors">Guides</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Students</p>
              <a href="#/mentor" className="block hover:text-slate-700 transition-colors">Find a Mentor</a>
              <a href="#/work" className="block hover:text-slate-700 transition-colors">Access Tools</a>
              <a href="#/refer" className="block hover:text-slate-700 transition-colors">Refer a Student</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Org</p>
              <a href="#/" className="block hover:text-slate-700 transition-colors">About</a>
              <a href="#/donate" className="block hover:text-slate-700 transition-colors">Donate</a>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
