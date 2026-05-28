import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const guides = [
  {
    title: "Understanding executive function challenges",
    description: "A comprehensive overview of how executive dysfunction impacts learning and daily life.",
    audience: "For Educators",
  },
  {
    title: "How to write accommodation requests",
    description: "Step-by-step templates for drafting effective 504 plan and IEP accommodation requests.",
    audience: "For Parents",
  },
  {
    title: "Supporting students during health flare-ups",
    description: "Strategies for maintaining continuity of learning when chronic illness disrupts attendance.",
    audience: "For Mentors",
  },
  {
    title: "Using AI tools in the classroom for neurodiverse learners",
    description: "Practical applications of generative AI to reduce cognitive load and scaffold assignments.",
    audience: "For Educators",
  },
  {
    title: "Talking to your child's school about their condition",
    description: "Communication strategies for building a collaborative relationship with teachers and admin.",
    audience: "For Parents",
  },
  {
    title: "Peer mentoring best practices",
    description: "How to structure peer support programs that empower students with neurological conditions.",
    audience: "For Students",
  }
];

const categories = ["All", "For Educators", "For Parents", "For Mentors", "For Students"];

export function Guides() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGuides = activeCategory === "All" 
    ? guides 
    : guides.filter(g => g.audience === activeCategory);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <nav className="border-b border-slate-100 px-8 py-5 flex justify-between items-center sticky top-0 bg-white z-30">
        <div className="flex items-center gap-2.5">
          <img src="/__mockup/images/neuroability-logo.png" alt="NeuroAbility logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">NeuroAbility Foundation</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="/" className="hover:text-slate-900 transition-colors">Our Work</a>
          <a href="/" className="text-slate-900 font-medium transition-colors">Resources</a>
          <a href="/" className="hover:text-slate-900 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300">Get Involved</a>
          <a href="/" className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full">Donate</a>
        </div>
      </nav>

      <main>
        {/* Header Section */}
        <section className="py-24 px-8 max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-medium text-teal-800 leading-[1.1] tracking-tight">
              Learn how to support your students.
            </h1>
            <p className="text-xl text-slate-500 mt-6 leading-relaxed">
              Explore our library of free, evidence-based guides designed to help you create more accessible and inclusive environments for individuals with neurological and chronic health conditions.
            </p>
          </motion.div>
        </section>

        {/* Filters & Content Section */}
        <section className="pb-24 px-8 max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm font-medium px-5 py-2 rounded-full transition-colors ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Card */}
          {activeCategory === "All" && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
              <div className="border border-slate-100 rounded-2xl p-8 md:p-12 bg-slate-50 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-4 block">Featured Guide</span>
                  <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-medium text-slate-900 mb-4">
                    The Educator's Handbook for Neurological Accessibility
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    Our flagship, comprehensive resource detailing evidence-based accommodations, classroom strategies, and technological interventions to support neurodiverse learners.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-6 py-3 rounded-full">
                    Download free (PDF)
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
                }}
                className="border border-slate-100 rounded-2xl p-8 flex flex-col hover:border-teal-200 transition-colors group"
              >
                <div className="mb-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 block group-hover:text-teal-700 transition-colors">
                    {guide.audience}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-xl font-medium text-slate-900 mb-3 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {guide.description}
                  </p>
                </div>
                <a href="#" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors inline-flex items-center gap-1 mt-4">
                  Read guide
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-0 group-hover:translate-x-1 transition-transform">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
          
          {filteredGuides.length === 0 && (
            <div className="py-24 text-center border border-slate-100 rounded-2xl border-dashed">
              <p className="text-slate-500">No guides found for this category yet.</p>
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-8 border-t border-slate-100 bg-teal-50/30">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-medium text-teal-900 mb-6">
              Can't find what you need?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Our team of specialists can help you find specific resources or point you in the right direction. Let us know how we can support you.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-semibold text-teal-700 bg-white hover:bg-slate-50 transition-colors px-8 py-4 rounded-full border border-teal-200 shadow-sm">
              Contact us
            </a>
          </motion.div>
        </section>
      </main>

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
