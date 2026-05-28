import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, HeartHandshake, ShieldCheck, UserPlus } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function ReferaStudent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] text-slate-900 selection:bg-teal-100">
      <nav className="border-b border-slate-100 px-8 py-5 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-2.5">
          <img src="/__mockup/images/neuroability-logo.png" alt="NeuroAbility logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-['Playfair_Display',serif] text-lg font-semibold text-teal-800 tracking-tight">NeuroAbility Foundation</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-500 font-medium">
          <a href="/" className="hover:text-slate-900 transition-colors">Our Work</a>
          <a href="/" className="hover:text-slate-900 transition-colors">Resources</a>
          <a href="/" className="hover:text-slate-900 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors px-5 py-2.5 rounded-full border border-teal-200 hover:border-teal-300">Get Involved</a>
          <a href="/" className="text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 transition-colors px-5 py-2.5 rounded-full">Donate</a>
        </div>
      </nav>

      <main className="pb-24">
        {/* Header Section */}
        <section className="pt-24 pb-16 px-8 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
              <HeartHandshake className="w-4 h-4" />
              Community Support
            </span>
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-6xl font-medium text-slate-900 mb-6 tracking-tight leading-tight">
              Know a student who needs support?
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Connect a student with a neurological or chronic health condition to our free tools, 1:1 mentoring, and a community that understands.
            </p>
          </motion.div>
        </section>

        <section className="px-8 max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* How it works sidebar */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="md:sticky md:top-32"
          >
            <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-2xl font-medium mb-8">
              How it works
            </motion.h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-100 before:to-transparent before:left-0">
              
              <motion.div variants={fadeUp} className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center z-10">
                  <span className="text-teal-700 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">You fill out the form</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Share a few details about the student and the kind of support they might benefit from.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center z-10">
                  <span className="text-teal-700 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">We reach out</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">Our team connects with the student or their family to understand their specific needs and goals.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center z-10">
                  <span className="text-teal-700 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">They get connected</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">We pair them with a dedicated mentor and provide access to our suite of assistive tools.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="border border-slate-100 rounded-2xl p-8 bg-white shadow-sm"
          >
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-medium mb-3">Referral Received</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                  Thank you for looking out for this student. Our team will review your referral and reach out within 2 business days.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-teal-700 font-medium text-sm hover:text-teal-800"
                >
                  Submit another referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="referrerName" className="block text-sm font-medium text-slate-700">Your name</label>
                    <input 
                      type="text" 
                      id="referrerName" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-shadow text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="referrerEmail" className="block text-sm font-medium text-slate-700">Your email</label>
                    <input 
                      type="email" 
                      id="referrerEmail" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-shadow text-sm"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="studentName" className="block text-sm font-medium text-slate-700">Student's first name <span className="text-slate-400 font-normal">(optional)</span></label>
                    <input 
                      type="text" 
                      id="studentName" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-shadow text-sm"
                      placeholder="Alex"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="relationship" className="block text-sm font-medium text-slate-700">Your relationship</label>
                    <div className="relative">
                      <select 
                        id="relationship" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-shadow text-sm appearance-none bg-white"
                      >
                        <option value="" disabled selected>Select relationship...</option>
                        <option value="parent">Parent/Guardian</option>
                        <option value="educator">Educator/Teacher</option>
                        <option value="counselor">School Counselor</option>
                        <option value="peer">Peer/Friend</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">What kind of support do they need?</label>
                  
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="checkbox" className="peer w-5 h-5 appearance-none border border-slate-200 rounded text-teal-600 focus:ring-teal-500 checked:bg-teal-600 checked:border-teal-600 transition-colors cursor-pointer" />
                      <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">1:1 Mentoring</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="checkbox" className="peer w-5 h-5 appearance-none border border-slate-200 rounded text-teal-600 focus:ring-teal-500 checked:bg-teal-600 checked:border-teal-600 transition-colors cursor-pointer" />
                      <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Tools & Technology</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="checkbox" className="peer w-5 h-5 appearance-none border border-slate-200 rounded text-teal-600 focus:ring-teal-500 checked:bg-teal-600 checked:border-teal-600 transition-colors cursor-pointer" />
                      <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Peer Community</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input type="checkbox" className="peer w-5 h-5 appearance-none border border-slate-200 rounded text-teal-600 focus:ring-teal-500 checked:bg-teal-600 checked:border-teal-600 transition-colors cursor-pointer" />
                      <CheckCircle2 className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Guidance on Accommodations</span>
                    </div>
                  </label>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="context" className="block text-sm font-medium text-slate-700">Any additional context?</label>
                  <textarea 
                    id="context" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-shadow text-sm resize-y"
                    placeholder="Briefly describe what they are looking for or any challenges they're facing..."
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    Submit Referral
                  </button>
                  
                  <div className="mt-6 flex items-start gap-3 text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <p>
                      <strong className="text-slate-700 font-medium block mb-0.5">Your privacy matters</strong>
                      Referrals are reviewed within 2 business days. All information is kept strictly confidential and only shared with our program directors.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-100 px-8 py-10 mt-auto bg-white">
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
