import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Lock, Shield, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const amounts = [10, 25, 50, 100, "Custom"];

const tierDescriptions: Record<string, string> = {
  "10": "Funds basic learning materials for one student.",
  "25": "Covers one 1-on-1 mentoring session.",
  "50": "Provides adaptive technology access for a week.",
  "100": "Funds a month of premium tool access for a student.",
  "Custom": "Every dollar makes a direct impact on our mission.",
};

export function Donate() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState<number | string>(25);

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] text-slate-900 selection:bg-teal-100 selection:text-teal-900">
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
            {/* Toggle */}
            <div className="flex bg-slate-50 p-1 rounded-full mb-8">
              <button 
                onClick={() => setIsMonthly(false)}
                className={`flex-1 text-sm font-medium py-2.5 rounded-full transition-all ${!isMonthly ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Give Once
              </button>
              <button 
                onClick={() => setIsMonthly(true)}
                className={`flex-1 text-sm font-medium py-2.5 rounded-full transition-all flex items-center justify-center gap-2 ${isMonthly ? 'bg-teal-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <Heart className="w-4 h-4" /> Give Monthly
              </button>
            </div>

            {/* Amounts */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-3 px-2 text-center rounded-xl font-medium transition-all border ${
                    selectedAmount === amount 
                    ? 'border-teal-700 bg-teal-50 text-teal-800' 
                    : 'border-slate-200 text-slate-600 hover:border-teal-300 hover:bg-slate-50'
                  }`}
                >
                  {typeof amount === 'number' ? `$${amount}` : amount}
                </button>
              ))}
            </div>
            
            {/* Tier Description */}
            <div className="bg-slate-50 rounded-xl p-4 mb-8 text-sm text-slate-600 border border-slate-100 flex items-start gap-3">
              <div className="mt-0.5 text-teal-700"><ArrowRight className="w-4 h-4" /></div>
              <p>{tierDescriptions[selectedAmount.toString()]}</p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">First name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-slate-400" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Last name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-slate-400" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-slate-400" placeholder="jane@example.com" />
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Card details</label>
                <div className="relative">
                  <input type="text" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 transition-all placeholder:text-slate-400 font-mono text-sm" placeholder="0000 0000 0000 0000" />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              <button className="w-full py-3.5 mt-6 bg-teal-700 hover:bg-teal-800 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                Donate {typeof selectedAmount === 'number' ? `$${selectedAmount}` : ''} {isMonthly ? 'Monthly' : ''}
              </button>
            </form>

            {/* Trust Signals */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-teal-600" /> Secure transaction
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-teal-600" /> 100% to program
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full border border-teal-600 flex items-center justify-center text-[8px] font-bold text-teal-600">$</div>
                Tax-deductible
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
