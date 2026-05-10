import React from "react";
import { motion } from "framer-motion";
import { FaCreditCard, FaLock, FaArrowRightLong, FaHandHoldingHeart } from "react-icons/fa6";

const DonatePage: React.FC = () => {
  const donorBoxUrl = "https://donorbox.org/offordforclerk";

  const tiers = [
    { amount: "$25", label: "Supporter" },
    { amount: "$50", label: "Advocate" },
    { amount: "$100", label: "Leader" },
    { amount: "$250", label: "Champion" },
  ];

  return (
    <div className="bg-white min-h-screen text-[#003358] font-sans selection:bg-[#00a3cc] selection:text-white flex flex-col">
      
      {/* HEADER: High-Impact Brutalist */}
      <header className="pt-32 pb-24 px-6 bg-[#003358] text-white border-b-[16px] border-[#00a3cc] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-[#00a3cc] px-6 py-2 mb-8"
          >
            <span className="text-[#003358] font-black text-sm uppercase tracking-[0.5em]">Action Center</span>
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
            Power the <br /> <span className="text-[#00a3cc]">Change.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#00a3cc]/80">
            Dallas County Clerk Democratic Primary Runoff
          </p>
        </div>
        {/* Background Decorative Text */}
        <span className="absolute bottom-0 right-0 text-[20rem] font-black text-white/5 leading-none select-none -mb-20">2026</span>
      </header>

      <main className="max-w-6xl mx-auto w-full px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-[12px] border-[#003358] bg-white shadow-[30px_30px_0px_#00a3cc]">
          
          {/* LEFT COLUMN: The Strategy */}
          <div className="lg:col-span-7 p-10 md:p-16 space-y-12 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-100">
            <div className="space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#003358]">
                Every Dollar <span className="text-[#00a3cc]">Counts.</span>
              </h2>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-xs leading-loose italic">
                "Your investment allows us to reach voters across every precinct in Dallas County. 
                Together, we are modernizing the clerk’s office for the next generation."
              </p>
            </div>

            {/* Support Tiers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tiers.map((tier) => (
                <a 
                  key={tier.amount}
                  href={donorBoxUrl}
                  className="border-4 border-slate-100 p-6 text-center hover:border-[#00a3cc] hover:bg-slate-50 transition-all group"
                >
                  <div className="text-2xl font-black text-[#003358] mb-1 group-hover:scale-110 transition-transform">{tier.amount}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{tier.label}</div>
                </a>
              ))}
            </div>

            <motion.a
              href={donorBoxUrl}
              whileHover={{ x: 15 }}
              className="flex items-center justify-between bg-[#003358] text-white p-8 font-black uppercase tracking-[0.4em] group transition-all"
            >
              <span className="text-lg">Continue to Donation</span>
              <FaArrowRightLong className="text-[#00a3cc] text-2xl group-hover:translate-x-4 transition-transform" />
            </motion.a>
          </div>

          {/* RIGHT COLUMN: Security & Trust */}
          <div className="lg:col-span-5 bg-slate-50 p-10 md:p-16 flex flex-col justify-center space-y-12">
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-[#003358] p-4 text-[#00a3cc]">
             
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-2">Secure Transfer</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed">
                    Industry standard SSL encryption via DonorBox. Your financial safety is our priority.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#00a3cc] p-4 text-[#003358]">
                  <FaLock size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-2">Privacy Locked</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed">
                    Data is strictly used for campaign reporting as required by Texas Election Law.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-slate-200 p-4 text-slate-600">
                  <FaCreditCard size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest mb-2">Flexible Giving</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed">
                    Supporting Apple Pay, Google Pay, PayPal, and all major credit cards.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="pt-10 border-t border-slate-200 flex items-center space-x-4 grayscale opacity-50">
               <FaHandHoldingHeart size={40} className="text-[#003358]" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                 Community <br /> Powered Campaign
               </span>
            </div>
          </div>
        </div>
      </main>

      {/* MANDATORY LEGAL FOOTER */}
      <footer className="py-20 px-6 mt-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-[4px] border-[#003358] p-8 text-center bg-white">
            <p className="text-xs font-black text-[#003358] uppercase tracking-[0.3em] leading-loose">
              Political advertisement paid for by the <span className="text-[#00a3cc]">Damarcus Offord Campaign</span> in accordance with election laws.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
            <p>Contributions or gifts to the campaign are not tax deductible as charitable contributions for Federal income tax purposes.</p>
            <p>Texas law requires us to use our best efforts to collect and report the name, mailing address, occupation, and name of employer of individuals whose contributions exceed $100 in a reporting period.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonatePage;