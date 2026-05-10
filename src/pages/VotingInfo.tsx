import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFingerprint,
  FaCalendarCheck,
  FaClock,
  FaLocationCrosshairs,
  FaBoxArchive,
} from "react-icons/fa6";

const ElectionAlert: React.FC = () => {
  const [isCasting, setIsCasting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCasting(true);
      setTimeout(() => setIsCasting(false), 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#00a3cc] selection:text-white pb-32">
      {/* Structural Header */}
      <header className="pt-32 pb-24 px-6 bg-[#003358] text-white border-b-[16px] border-[#00a3cc] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <FaFingerprint className="text-[#00a3cc] text-2xl" />
            <span className="font-black uppercase tracking-[0.4em] text-[10px]">
              Voter Protocol 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-[9.5rem] font-black uppercase tracking-tighter leading-[0.8]">
            Primary <br /> <span className="text-[#00a3cc]">Runoff.</span>
          </h1>
        </div>

        {/* Animated Ballot Visual */}
        <div className="absolute right-10 bottom-10 flex flex-col items-center opacity-20 md:opacity-40">
          <FaBoxArchive size={120} className="text-white z-10" />
          <AnimatePresence>
            {isCasting && (
              <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                className="absolute top-0 w-12 h-16 bg-[#00a3cc] border-2 border-white"
              />
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-20 space-y-24">
        {/* Intro Context */}
        <div className="max-w-2xl space-y-8">
          <div className="h-2 w-24 bg-[#003358]" />
          <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#003358] leading-tight">
            Modernizing Dallas County requires active participation. Review the
            schedule to ensure your voice is counted in the blueprint for
            leadership.
          </p>
        </div>

        {/* The Voting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Early Voting Block */}
          <div className="border-[8px] border-[#003358] p-10 md:p-16 bg-white shadow-[16px_16px_0px_#00a3cc] space-y-10">
            <div className="flex items-center gap-4 text-[#00a3cc]">
              <FaCalendarCheck size={24} />
              <h3 className="font-black uppercase tracking-[0.3em] text-sm">
                Early Voting
              </h3>
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#003358]">
                May 18-22
              </h2>
              <div className="flex items-center gap-3 font-black uppercase tracking-widest text-xs text-slate-400">
                <FaClock className="text-[#00a3cc]" />
                <span>07:00 AM — 07:00 PM Daily</span>
              </div>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 leading-relaxed border-t border-slate-100 pt-8">
              Available at any early voting location within Dallas County. Bring
              a valid form of identification.
            </p>
          </div>

          {/* Election Day Block */}
          <div className="bg-[#003358] p-10 md:p-16 text-white border-[8px] border-[#003358] shadow-[16px_16px_0px_#f1f5f9] space-y-10">
            <div className="flex items-center gap-4 text-[#00a3cc]">
              <FaLocationCrosshairs size={24} />
              <h3 className="font-black uppercase tracking-[0.3em] text-sm text-white">
                Final Call
              </h3>
            </div>

            <div className="space-y-4">
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#00a3cc]">
                May 26
              </h2>
              <p className="font-black uppercase tracking-[0.5em] text-xs">
                Election Day
              </p>
            </div>

            <div className="bg-white/5 p-6 border-l-4 border-[#00a3cc]">
              <p className="text-[11px] font-black uppercase tracking-widest leading-loose">
                Polls are open across the county. Your precinct location is
                determined by your registered residential address.
              </p>
            </div>
          </div>
        </div>

        {/* Action Summary - Cleaned up to remove external tools */}
        <section className="bg-slate-50 p-12 md:p-20 border-x-[12px] border-[#003358] text-center space-y-6">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Submit your <span className="text-[#00a3cc]">Choice.</span>
          </h3>
          <p className="max-w-xl mx-auto text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-relaxed">
            The path to a modernized clerk's office depends on this runoff.
            Check local Dallas County resources for your specific precinct
            assignment.
          </p>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <div className="mt-32 px-6">
        <div className="max-w-6xl mx-auto border-t-2 border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center opacity-40 gap-4">
          <span className="text-[9px] font-black uppercase tracking-[0.4em]">
            Paid for by the Damarcus Offord Campaign
          </span>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#00a3cc]">
            Node: Dallas_Precinct_Alert
          </span>
        </div>
      </div>
    </div>
  );
};

export default ElectionAlert;
