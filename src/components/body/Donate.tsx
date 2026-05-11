import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaArrowRightLong,
  FaCalendarCheck,
  FaClock,
  FaMapLocationDot,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DonateVotingSection: React.FC = () => {
  const navigate = useNavigate();

  const fadeInUp: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f7fcff]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Donation Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[40px] bg-[#003358] px-8 py-10 text-white sm:px-10 sm:py-12 md:px-12 lg:col-span-7 xl:px-16 shadow-2xl shadow-[#003358]/20"
          >
            {/* Design Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,163,204,0.22),transparent_40%)]" />
            <div className="pointer-events-none absolute -right-4 bottom-0 select-none text-[8rem] font-black leading-none text-white/[0.03] sm:text-[11rem] md:text-[14rem]">
              VOTE
            </div>

            <motion.div variants={fadeInUp} className="relative z-10">
              <div className="inline-flex rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md border border-white/10">
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#7eddf4]">
                  Secure Progress
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-black uppercase leading-[0.85] tracking-tight sm:text-6xl xl:text-8xl">
                Experience.
                <br />
                Efficiency.
                <br />
                Service.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Fuel the modernization of Dallas County Clerk services and help
                move this campaign forward through strong community investment.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Voter Outreach", "Campaign Ops", "Community Presence"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#7eddf4]"
                    >
                      {tag}
                    </div>
                  )
                )}
              </div>

              <motion.button
                whileHover={{ y: -4, backgroundColor: "#00b8e6" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/donate")}
                className="group mt-12 flex w-full items-center justify-between rounded-[32px] bg-[#00a3cc] px-8 py-6 text-left text-[#003358] transition-colors sm:w-auto sm:min-w-[360px]"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">
                    Contribute Today
                  </p>
                  <p className="mt-1 text-xl font-black uppercase tracking-wider sm:text-2xl">
                    Donate Now
                  </p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#003358] transition-transform group-hover:rotate-[-45deg]">
                  <FaArrowRightLong size={22} />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Voting Logistics Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[40px] bg-white border border-slate-100 px-8 py-10 shadow-sm sm:px-10 sm:py-12 lg:col-span-5 flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
                Election Logistics
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#003358] sm:text-5xl">
                Runoff
                <br />
                <span className="text-[#00a3cc]">Election 2026</span>
              </h3>

              <p className="mt-6 text-sm leading-relaxed text-[#003358]/60 sm:text-base">
                Your vote is the catalyst for a modern office. Dallas County
                uses{" "}
                <span className="text-[#003358] font-bold">
                  Countywide Vote Centers
                </span>
                —meaning you can vote anywhere.
              </p>

              <div className="mt-10 space-y-5">
                {/* Election Day */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="group rounded-[32px] bg-[#003358] p-7 text-white transition-all hover:bg-[#00406e]"
                >
                  <div className="flex items-center gap-3 text-[#7eddf4]">
                    <FaCalendarCheck size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      Election Day (Vote Anywhere)
                    </span>
                  </div>
                  <h4 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                    Tuesday
                    <span className="block text-[#00a3cc]">May 26</span>
                  </h4>
                </motion.div>

                {/* Early Voting */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="rounded-[32px] bg-[#f0f9ff] border border-[#d6efff] p-7"
                >
                  <div className="flex items-center gap-3 text-[#007fa0]">
                    <FaMapLocationDot size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      Early Voting Period
                    </span>
                  </div>
                  <h4 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight text-[#003358] sm:text-4xl">
                    May 18 – 22
                  </h4>
                  <div className="mt-4 flex items-center gap-2">
                    <FaClock size={12} className="text-[#00a3cc]" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#003358]/50">
                      7:00 AM – 7:00 PM Daily
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="overflow-hidden bg-[#003358] border-y border-white/5 py-8">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center text-xs font-black uppercase tracking-[0.4em] text-white sm:text-sm"
            >
              <span className="mx-12 h-2.5 w-2.5 rounded-full bg-[#00a3cc]" />
              Vote Damarcus Offord
              <span className="mx-12 h-2.5 w-2.5 rounded-full bg-[#00a3cc]" />
              The Future of Dallas County
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonateVotingSection;
