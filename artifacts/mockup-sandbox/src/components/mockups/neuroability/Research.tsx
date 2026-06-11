import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Video, Brain, Accessibility, Users } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Research() {
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
          <span className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">
            NeuroAbility Foundation
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Our Work</a>
          <a href="#/" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="#/research" className="text-slate-900 font-medium transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#/"
            className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300"
          >
            Get Involved
          </a>
          <a
            href="#/donate"
            className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full"
          >
            Donate
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-8 pt-24 pb-16 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fade}
          className="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-6"
        >
          Research
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fade}
          className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-medium leading-[1.1] text-slate-900 mb-8"
        >
          Our Research
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fade}
          className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          We conduct open research at the intersection of accessibility, deep learning, and education.
          All of our work is published openly so the entire community can build on it.
        </motion.p>
      </section>

      {/* Research Projects */}
      <section className="max-w-5xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-1 gap-8">
          {/* Card 1 — InkSight */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fade}
            className="border border-slate-100 rounded-2xl p-8"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Video size={20} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-slate-900">
                    InkSight Data Labeling
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                In Progress
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-6">
              Building a Multimodal Vision-Language Model benchmark over YouTube-sourced handwritten
              STEM lecture videos. This benchmark evaluates how well models understand handwritten
              mathematical derivations in video lectures across three core tasks.
            </p>

            {/* Task badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                T1 — Temporal Grounding
              </span>
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                T2 — Derivation Reconstruction
              </span>
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                T3 — Cross-Modal Retrieval
              </span>
            </div>

            {/* Task descriptions */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-700 mb-1">Temporal Grounding</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Localize the exact video timestamps where a specific derivation step is written on the board.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-700 mb-1">Derivation Reconstruction</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Reconstruct the full step-by-step derivation from video frames into structured LaTeX notation.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-700 mb-1">Cross-Modal Retrieval</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Retrieve the correct video segment given a textual math query, or vice versa.
                </p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
            >
              View on GitHub <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Card 2 — Accessible Learning Platform */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fade}
            className="border border-slate-100 rounded-2xl p-8"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Accessibility size={20} className="text-teal-700" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl font-medium text-slate-900">
                    Accessible Learning Platform
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                In Progress
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-6">
              A deep-learning-powered, accessible, interactive learning platform designed for students
              who struggle with attending school, and anyone who prefers customizable, individualized,
              and accessible online learning.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                Deep Learning Personalization
              </span>
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                Accessibility-First Design
              </span>
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                Customizable Learning Paths
              </span>
              <span className="bg-teal-50 text-teal-800 rounded-full px-3 py-1 text-xs font-semibold">
                Works for All Learners
              </span>
            </div>

            {/* Feature descriptions */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-xl p-4 flex gap-3">
                <Brain size={16} className="text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">Deep Learning–Driven Personalization</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Adapts content difficulty, pacing, and format to each student's needs in real time.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 flex gap-3">
                <Accessibility size={16} className="text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">Accessibility-First Design</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Built from the ground up for screen readers, alternative input methods, and cognitive accessibility.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 flex gap-3">
                <BookOpen size={16} className="text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">Customizable Learning Paths</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Students choose their own pace and style — whether visual, auditory, or hands-on.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 flex gap-3">
                <Users size={16} className="text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">Works for All Learners</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Designed for students with chronic illness, neurodivergence, or anyone who prefers individualized online learning.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
            >
              View on GitHub <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="border-t border-slate-100 py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-medium text-slate-900 mb-4">
              Get involved in our research.
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
              We welcome researchers, developers, and students who want to contribute to open
              accessibility research. Every contribution — code, data labeling, or feedback — moves the
              field forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
              >
                Contribute on GitHub <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
              >
                Contact Us
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
              <span className="font-['Playfair_Display',serif] font-semibold text-teal-800">
                NeuroAbility Foundation
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1">A registered 501(c)(3) nonprofit.</p>
          </div>
          <div className="flex gap-10 text-sm text-slate-400">
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Work</p>
              <a href="#/research" className="block hover:text-slate-700 transition-colors">Research</a>
              <a href="#" className="block hover:text-slate-700 transition-colors">Open Source</a>
              <a href="#" className="block hover:text-slate-700 transition-colors">Lessons</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Students</p>
              <a href="#" className="block hover:text-slate-700 transition-colors">Find a Mentor</a>
              <a href="#" className="block hover:text-slate-700 transition-colors">Access Tools</a>
              <a href="#" className="block hover:text-slate-700 transition-colors">Stipends</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider">Org</p>
              <a href="#" className="block hover:text-slate-700 transition-colors">About</a>
              <a href="#/donate" className="block hover:text-slate-700 transition-colors">Donate</a>
              <a href="#" className="block hover:text-slate-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
