import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaArrowRightLong, FaCalendarCheck, FaClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DonateVotingSection: React.FC = () => {
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

  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#f7fcff]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[36px] bg-[#003358] px-6 py-8 text-white sm:px-8 sm:py-10 md:px-10 md:py-12 lg:col-span-7 xl:px-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,163,204,0.25),transparent_32%)]" />
            <div className="pointer-events-none absolute -right-8 bottom-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[13rem]">
              VOTE
            </div>

            <motion.div variants={fadeInUp} className="relative z-10">
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
                  Secure Progress
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.88] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                Experience.
                <br />
                Efficiency.
                <br />
                Service.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg md:text-xl">
                Fuel the modernization of Dallas County Clerk services and help
                move this campaign forward with strong community support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full bg-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#7eddf4]">
                  Voter Outreach
                </div>
                <div className="rounded-full bg-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#7eddf4]">
                  Campaign Operations
                </div>
                <div className="rounded-full bg-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#7eddf4]">
                  Community Presence
                </div>
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => navigate("/donate")}
                className="mt-10 flex w-full items-center justify-between rounded-[28px] bg-[#00a3cc] px-6 py-5 text-left text-[#003358] sm:w-auto sm:min-w-[320px] sm:px-8"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.26em]">
                    Support The Campaign
                  </p>
                  <p className="mt-2 text-lg font-black uppercase tracking-[0.14em] sm:text-xl">
                    Donate Now
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#003358]">
                  <FaArrowRightLong size={20} />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[36px] bg-white px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:col-span-5"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
                Election Logistics
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-tight text-[#003358] sm:text-4xl md:text-5xl">
                Runoff
                <br />
                <span className="text-[#00a3cc]">Election 2026</span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#003358]/70 sm:text-base">
                Review the voting timeline and make a clear plan to participate
                in the Dallas County Democratic Primary Runoff.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[28px] bg-[#003358] p-6 text-white sm:p-7">
                  <div className="flex items-center gap-3 text-[#7eddf4]">
                    <FaCalendarCheck />
                    <span className="text-[10px] font-black uppercase tracking-[0.24em]">
                      Election Day
                    </span>
                  </div>

                  <h4 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                    Saturday, June 13
                  </h4>
                </div>

                <div className="rounded-[28px] bg-[#f7fcff] p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-[#007fa0]">
                    <FaClock />
                    <span className="text-[10px] font-black uppercase tracking-[0.24em]">
                      Early Voting Period
                    </span>
                  </div>

                  <h4 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight text-[#003358] sm:text-4xl">
                    June 1 - June 9
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden bg-[#003358] py-5">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center text-[11px] font-black uppercase tracking-[0.28em] text-white sm:text-sm md:text-base"
            >
              <span className="mx-8 text-[#00a3cc]">•</span>
              Vote Damarcus Offord
              <span className="mx-8 text-[#00a3cc]">•</span>
              The Future of Dallas County
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonateVotingSection;
