import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldHalved,
  FaFileContract,
  FaUserCheck,
  FaCubesStacked,
  FaEnvelope,
  FaScaleBalanced,
  FaArrowRightLong
} from "react-icons/fa6";

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = "August 8, 2024";

  return (
    <div className="bg-white min-h-screen text-[#003358] font-sans selection:bg-[#00a3cc] selection:text-white pb-32">
      {/* 01: STRUCTURAL HEADER */}
      <header className="pt-32 pb-24 px-6 bg-[#003358] text-white border-b-[16px] border-[#00a3cc] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <div className="flex items-center gap-3">
            <FaCubesStacked className="text-[#00a3cc] text-xl" />
            <span className="font-black text-xs uppercase tracking-[0.4em]">
              Governance Protocol
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Privacy <br /> <span className="text-[#00a3cc]">Policy.</span>
          </h1>
          <div className="flex items-center space-x-3 text-slate-400 font-bold uppercase tracking-widest text-[10px] pt-4">
            <FaFileContract className="text-[#00a3cc]" />
            <span>Effective: {effectiveDate}</span>
          </div>
        </motion.div>
        <div className="absolute right-0 bottom-0 text-[20rem] font-black text-white/5 leading-none select-none pointer-events-none">
          LEGAL
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-24 space-y-24"
      >
        {/* 02: INTRO STATEMENT */}
        <section>
          <p className="text-xl md:text-2xl font-bold leading-relaxed border-l-8 border-[#003358] pl-8 py-2">
            This campaign is committed to protecting the privacy of visitors and
            users ("you" or "your") of our website. By accessing and using this
            site, you consent to the terms of this Privacy Policy.
          </p>
        </section>

        {/* 03: DATA COLLECTION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex items-center gap-3 h-fit">
            <div className="w-8 h-[2px] bg-[#00a3cc]" />
            <h3 className="font-black uppercase text-xs tracking-[0.3em] text-[#00a3cc]">
              01 Collection
            </h3>
          </div>
          <div className="md:col-span-8 space-y-8 text-slate-700 font-medium text-sm leading-loose">
            <div>
              <h4 className="font-black uppercase text-[#003358] mb-2 tracking-widest">
                a. Personal Information
              </h4>
              <p>
                We may collect personal information you voluntarily provide,
                such as your name, email address, postal address, and phone
                number submitted through forms.
              </p>
            </div>
            <div className="p-8 bg-slate-50 border-l-8 border-[#003358]">
              <h4 className="font-black uppercase text-[#003358] mb-2 tracking-widest">
                b. SMS Opt-In Data
              </h4>
              <p>
                If you choose to opt-in to receive text messages, we collect
                your phone number and consent data. This data is strictly used
                for campaign-related transmissions.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase text-[#003358] mb-2 tracking-widest">
                c. Technical Logs
              </h4>
              <p>
                We automatically collect technical data including IP addresses,
                browser types, and usage patterns to optimize system
                architecture.
              </p>
            </div>
          </div>
        </section>

        {/* 04: UTILIZATION */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex items-center gap-3 h-fit">
            <div className="w-8 h-[2px] bg-[#00a3cc]" />
            <h3 className="font-black uppercase text-xs tracking-[0.3em] text-[#00a3cc]">
              02 Utilization
            </h3>
          </div>
          <div className="md:col-span-8 space-y-6 text-slate-700 font-medium text-sm leading-loose">
            <p>We utilize the gathered information to:</p>
            <ul className="space-y-4 font-black uppercase text-[10px] tracking-widest text-[#003358]">
              <li className="flex gap-4 items-center">
                <FaArrowRightLong className="text-[#00a3cc]" /> Respond to
                direct inquiries
              </li>
              <li className="flex gap-4 items-center">
                <FaArrowRightLong className="text-[#00a3cc]" /> Distribute
                campaign updates & newsletters
              </li>
              <li className="flex gap-4 items-center">
                <FaArrowRightLong className="text-[#00a3cc]" /> Monitor and
                analyze website performance
              </li>
              <li className="flex gap-4 items-center">
                <FaArrowRightLong className="text-[#00a3cc]" /> Ensure
                compliance with legal obligations
              </li>
            </ul>
          </div>
        </section>

        {/* 05: SHARING PROTOCOL (Compliance Focal Point) */}
        <section className="bg-[#003358] p-10 md:p-16 text-white shadow-[24px_24px_0px_#00a3cc] relative">
          <div className="flex items-center space-x-4 mb-8">
            <FaShieldHalved className="text-[#00a3cc] text-3xl" />
            <h3 className="text-3xl font-black uppercase tracking-tighter">
              03 Sharing Protocol
            </h3>
          </div>
          <div className="space-y-8 font-bold uppercase tracking-widest text-[11px] leading-loose">
            <div className="space-y-2">
              <p className="text-slate-400">General Information:</p>
              <p>
                We do not share, sell, rent, or disclose your personal
                information to third parties except as described or required by
                law.
              </p>
            </div>
            <div className="space-y-2 border-t border-white/10 pt-8">
              <p className="text-[#00a3cc]">SMS Data Protection (Critical):</p>
              <p>
                We will not share or sell your text messaging opt-in data,
                consent, or related personal information with any third parties
                under any circumstances, unless required by law.
              </p>
            </div>
          </div>
          <FaScaleBalanced className="absolute top-10 right-10 text-white/5 text-9xl" />
        </section>

        {/* 06: SECONDARY CLAUSES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8 border-t border-slate-100">
          <section className="space-y-4">
            <h4 className="font-black uppercase text-[#003358] text-xs tracking-widest">
              04. Data Security
            </h4>
            <p className="text-xs text-slate-500 leading-loose">
              We employ industry-standard encryption and security measures.
              However, absolute security over the internet is not guaranteed. We
              recommend users utilize secure networks when communicating.
            </p>
          </section>
          <section className="space-y-4">
            <h4 className="font-black uppercase text-[#003358] text-xs tracking-widest">
              05. External Nodes
            </h4>
            <p className="text-xs text-slate-500 leading-loose">
              Our site may link to third-party services. We are not responsible
              for their content or privacy protocols. Review their specific
              policies upon exit of this site.
            </p>
          </section>
        </div>

        {/* 07: FINAL CLAUSES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FaUserCheck className="text-[#00a3cc]" />
              <h4 className="font-black uppercase text-[#003358] text-xs tracking-widest">
                06. Minor Protection
              </h4>
            </div>
            <p className="text-xs text-slate-500 leading-loose">
              This site is not intended for individuals under 13. We do not
              knowingly collect data from minors. If detected, such data will be
              immediately purged.
            </p>
          </section>
          <section className="space-y-4 bg-slate-50 p-8 border-r-4 border-[#003358]">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#00a3cc]" />
              <h4 className="font-black uppercase text-[#003358] text-xs tracking-widest">
                07. Contact & Updates
              </h4>
            </div>
            <p className="text-xs text-slate-500 leading-loose italic">
              Policies are subject to immediate update upon posting. For
              questions regarding your data, please contact the campaign
              headquarters directly.
            </p>
          </section>
        </div>
      </motion.main>

      {/* COMPLIANCE MARK */}
      <footer className="mt-40 flex flex-col items-center gap-4">
        <div className="w-1 h-12 bg-slate-200" />
        <div className="border-4 border-slate-100 px-12 py-4">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
            Damarcus Offord Campaign Integrity Node 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
