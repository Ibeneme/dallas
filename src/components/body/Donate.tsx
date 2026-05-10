import React from "react";
import { motion, type Variants } from "framer-motion";

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

  return (
    <section className="relative overflow-hidden border-b-[12px] border-[#003358] bg-white md:border-b-[16px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-0 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex min-h-[500px] flex-col justify-center bg-[#00a3cc] p-8 md:p-20 lg:col-span-7"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full select-none overflow-hidden opacity-10">
            <span className="absolute -bottom-10 -left-10 text-[20rem] font-black leading-none text-[#003358]">
              $
            </span>
          </div>

          <motion.div variants={fadeInUp} className="relative z-10 space-y-10">
            <div className="space-y-3">
              <div className="inline-block bg-[#003358] px-3 py-1">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  Secure Progress
                </span>
              </div>

              <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:text-8xl">
                Experience.
                <br />
                Efficiency.
                <br />
                Service.
              </h2>
            </div>

            <p className="max-w-md text-xl font-bold uppercase leading-tight tracking-tight text-[#003358] md:text-2xl">
              Fuel the modernization of Dallas County Clerk services.
            </p>

            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-between bg-white px-8 py-6 text-xl font-black uppercase tracking-widest text-[#003358] shadow-[10px_10px_0px_#003358] transition-all md:w-[420px] md:text-2xl"
            >
              <span>Donate Now</span>
              <span className="text-3xl transition-transform group-hover:translate-x-2">
                →
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center border-[#003358] bg-white p-8 md:p-20 lg:col-span-5 lg:border-l-[12px] lg:border-t-0"
        >
          <motion.div variants={fadeInUp} className="space-y-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-1 w-10 bg-[#00a3cc]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00a3cc]">
                  Election Logistics
                </span>
              </div>

              <h3 className="text-4xl font-black uppercase leading-none tracking-tighter text-[#003358] md:text-5xl">
                Runoff
                <br />
                <span className="text-[#00a3cc]">Election 2026</span>
              </h3>
            </div>

            <div className="space-y-4">
              <div className="border-l-[10px] border-[#00a3cc] bg-[#003358] p-6 shadow-[12px_12px_0px_#f1f5f9] md:p-8">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#00a3cc]">
                  Primary Election Day
                </p>
                <h4 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                  Saturday, June 13
                </h4>
              </div>

              <div className="group border-2 border-slate-100 bg-white p-6 transition-all hover:border-[#003358] md:p-8">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#00a3cc]">
                  Early Voting Period
                </p>
                <h4 className="text-3xl font-black uppercase tracking-tight text-[#003358] md:text-4xl">
                  June 1 - June 9
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-t-4 border-[#00a3cc] bg-[#003358] py-8">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center text-sm font-black uppercase tracking-[0.3em] text-white md:text-base"
            >
              <span className="mx-10 text-xl text-[#00a3cc]">•</span>
              Vote Damarcus Offord
              <span className="mx-10 text-xl text-[#00a3cc]">•</span>
              The Future of Dallas County
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonateVotingSection;
