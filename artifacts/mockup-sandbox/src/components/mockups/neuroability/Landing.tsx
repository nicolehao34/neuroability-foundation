import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Microscope, Users } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

export function Landing() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-['DM_Sans',sans-serif]">

      {/* Nav */}
      <nav className="border-b border-slate-100 px-8 py-5 flex justify-between items-center sticky top-0 bg-white z-30">
        <div className="flex items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}images/neuroability-logo.jpg`} alt="NeuroAbility logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">NeuroAbility Foundation</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="#/work" className="hover:text-slate-900 transition-colors">Our Work</a>
          <a href="#/resources" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="#/research" className="hover:text-slate-900 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#get-involved" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300">
            Get Involved
          </a>
          <a href="#/donate" className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full">
            Donate
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-20 text-center">
        <motion.p
          initial="hidden" animate="visible" custom={0} variants={fade}
          className="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-6"
        >
          NeuroAbility Foundation
        </motion.p>
        <motion.h1
          initial="hidden" animate="visible" custom={1} variants={fade}
          className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-medium leading-[1.1] text-slate-900 mb-8"
        >
          Accessibility research is underfunded. We're changing that.
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" custom={2} variants={fade}
          className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Students with neurological and chronic health conditions are underserved by both
          the education system and the research community. We publish open work, build free
          tools, and connect students directly with mentors and technology.
        </motion.p>
        <motion.div
          initial="hidden" animate="visible" custom={3} variants={fade}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#/donate" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
            Donate <ArrowRight size={16} />
          </a>
          <a href="#get-involved" className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
            Get Involved
          </a>
        </motion.div>
      </section>

      {/* Hero image */}
      <section className="max-w-5xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl overflow-hidden bg-slate-100 aspect-[16/7]"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/neuroability-hero.jpg`}
            alt="Students learning together"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Three pillars */}
      <section id="work" className="border-t border-slate-100 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Microscope size={22} className="text-teal-700" />,
                title: "Research",
                desc: "Accessibility research is chronically underfunded. We investigate how technology can support students with neurological conditions — and publish everything openly so the whole field benefits."
              },
              {
                icon: <GitBranch size={22} className="text-teal-700" />,
                title: "Open Source",
                desc: "Every tool, lesson, and dataset we produce is published openly on GitHub. Free for educators, researchers, and developers to use and build on."
              },
              {
                icon: <Users size={22} className="text-teal-700" />,
                title: "Student Resources",
                desc: "We raise funds to directly connect students with expert 1:1 mentors and the assistive technologies that match their specific needs."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="resources" className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-slate-800 leading-snug italic mb-8"
          >
            "The InkSight note taking tool gave me a way to keep up with coursework during flare-ups. My mentor understood exactly what I was going through. For the first time, I didn't have to choose between my health and my education."
          </motion.blockquote>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fade}>
            <p className="font-semibold text-slate-900">Jordan K.</p>
            <p className="text-slate-400 text-sm mt-1">Computer Science student, NeuroAbility mentee</p>
          </motion.div>
        </div>
      </section>

      {/* Three action blocks */}
      <section id="get-involved" className="border-t border-slate-100 py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-slate-900 mb-4">
              How you can help.
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Accessibility research is one of the most underfunded areas in education. Every contribution matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Donate",
                desc: "Fund our research program, open-source development, and the direct costs of connecting students with mentors and assistive technology.",
                cta: "Donate to NeuroAbility",
                href: "#/donate",
                primary: true
              },
              {
                step: "02",
                title: "Support a student",
                desc: "Know a student with a neurological or chronic health condition who needs help? Connect them with our mentoring program and free tools.",
                cta: "Refer a student",
                href: "#refer",
                primary: false
              },
              {
                step: "03",
                title: "Learn how to help",
                desc: "Not sure where to start? Read our guides for educators, parents, and mentors on how to better support students with these conditions.",
                cta: "Read the guides",
                href: "#guides",
                primary: false
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fade}
                className="border border-slate-100 rounded-2xl p-8 flex flex-col"
              >
                <span className="text-xs font-bold text-slate-300 tracking-widest mb-6">{card.step}</span>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{card.desc}</p>
                <a
                  href={card.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors ${
                    card.primary
                      ? "bg-teal-700 hover:bg-teal-800 text-white"
                      : "border border-slate-200 hover:border-slate-300 text-slate-700"
                  }`}
                >
                  {card.cta} <ArrowRight size={14} />
                </a>
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
              <img src={`${import.meta.env.BASE_URL}images/neuroability-logo.jpg`} alt="NeuroAbility logo" className="w-7 h-7 rounded-full object-cover" />
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
