import React from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, Shield, ArrowRight, ExternalLink } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BMC_URL = "https://www.buymeacoffee.com/nicolehao7b";

const donationTiers = [
  {
    amount: "$5",
    label: "A Coffee",
    description: "Funds basic learning materials for one student.",
    coffees: 1,
  },
  {
    amount: "$15",
    label: "A Study Session",
    description: "Covers supplies for a group study workshop.",
    coffees: 3,
  },
  {
    amount: "$25",
    label: "A Mentoring Hour",
    description: "Covers one 1-on-1 mentoring session with an expert.",
    coffees: 5,
  },
  {
    amount: "$50",
    label: "Tech Access",
    description: "Provides adaptive technology access for a week.",
    coffees: 10,
  },
];

export function Donate() {
  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <nav className="border-b border-slate-100 px-8 py-5 flex justify-between items-center sticky top-0 bg-white z-30">
        <div className="flex items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}images/neuroability-logo.jpg`} alt="NeuroAbility logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">NeuroAbility Foundation</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Our Work</a>
          <a href="#/" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="#/" className="hover:text-slate-900 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#/" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300">Get Involved</a>
          <a href="#/donate" className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full">Donate</a>
        </div>
      </nav>

      <main className="py-24 px-8 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="font-['Playfair_Display',serif] text-5xl font-medium text-slate-900 tracking-tight mb-4">
              Support accessibility research.
            </h1>
            <p className="text-lg text-slate-500 mb-12">
              Accessibility research is chronically underfunded, yet it changes lives. Your donation directly helps students access the tools and mentorship they need to thrive.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn} 
            className="border border-slate-100 rounded-2xl p-8 shadow-sm"
          >
            {/* Buy Me a Coffee Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Buy us a coffee</h2>
                <p className="text-sm text-slate-500">Every coffee fuels our mission</p>
              </div>
            </div>

            {/* Donation Tiers */}
            <div className="space-y-3 mb-8">
              {donationTiers.map((tier) => (
                <a
                  key={tier.label}
                  href={BMC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-slate-200 rounded-xl p-4 hover:border-teal-300 hover:bg-teal-50/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-semibold text-teal-700 min-w-[3.5rem]">{tier.amount}</div>
                      <div>
                        <div className="font-medium text-slate-900 group-hover:text-teal-800 transition-colors">{tier.label}</div>
                        <div className="text-sm text-slate-500">{tier.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-300 group-hover:text-teal-600 transition-colors">
                      {Array.from({ length: Math.min(tier.coffees, 5) }).map((_, i) => (
                        <Coffee key={i} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Main CTA Button */}
            <a
              href={BMC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Coffee className="w-4 h-4" />
              Support us on Buy Me a Coffee
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>

            {/* Secondary link */}
            <p className="text-center text-sm text-slate-500 mt-4">
              You'll be redirected to our{" "}
              <a
                href={BMC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-800 underline underline-offset-2"
              >
                Buy Me a Coffee page
              </a>{" "}
              to complete your donation securely.
            </p>

            {/* Trust Signals */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-teal-600" /> Secure transaction
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-teal-600" /> 100% to program
              </div>
              <div className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-teal-600" /> One-time or recurring
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 pt-4 lg:pt-12">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="font-['Playfair_Display',serif] text-xl font-medium text-slate-900 mb-6">How your donation is used</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-800">Research & Tools</span>
                    <span className="text-teal-700">60%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Funding open-source accessibility tools and academic research grants.</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-800">Student Mentoring</span>
                    <span className="text-teal-600">30%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Paying accessibility experts to provide 1-on-1 guidance to students.</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-800">Operations</span>
                    <span className="text-teal-500">10%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Keeping the servers running and the lights on.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 italic">
                  "NeuroAbility's grant allowed me to access screen reader technology that completely changed my academic trajectory."
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">JD</div>
                  <div className="text-xs">
                    <div className="font-medium text-slate-900">James D.</div>
                    <div className="text-slate-500">Computer Science Student</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-slate-100 px-8 py-10 mt-12">
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
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider mb-1">Work</p>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Research</a>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Open Source</a>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Lessons</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider mb-1">Students</p>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Find a Mentor</a>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Access Tools</a>
              <a href="#/" className="block hover:text-slate-700 transition-colors">Stipends</a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-600 text-xs uppercase tracking-wider mb-1">Org</p>
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
