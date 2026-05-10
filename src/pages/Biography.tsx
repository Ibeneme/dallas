import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaGraduationCap,
  FaBuildingColumns,
  FaUsers,
  FaArrowRightLong,
} from "react-icons/fa6";
import longImage from "../assets/images/longimage.png";

const Biography: React.FC = () => {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#f7fcff] font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      <section className="relative overflow-hidden bg-[#003358] px-6 pb-16 pt-24 text-white md:pb-20 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,163,204,0.22),transparent_30%)]" />
        <div className="pointer-events-none absolute right-0 top-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          OFFORD
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div>
            <motion.div variants={itemVars} className="inline-flex rounded-full bg-white/10 px-5 py-3">
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#7eddf4]">
                The Candidate
              </span>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="mt-6 text-5xl font-black uppercase leading-[0.84] tracking-tight sm:text-6xl md:text-7xl lg:text-[7.5rem]"
            >
              Damarcus
              <br />
              <span className="text-[#00a3cc]">Offord.</span>
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="mt-5 max-w-2xl text-sm font-black uppercase tracking-[0.22em] text-[#7eddf4] sm:text-base"
            >
              Ready to lead the Dallas County Clerk&apos;s Office
            </motion.p>
          </div>

          <motion.div
            variants={itemVars}
            className="rounded-[32px] bg-white/10 p-6 sm:p-8"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
              Campaign Focus
            </p>
            <p className="mt-3 text-sm leading-8 text-white/78">
              Leadership rooted in public service, organizational discipline,
              and a commitment to a more modern, transparent, and responsive
              county clerk&apos;s office.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-12 lg:py-14">
        <div className="space-y-8 lg:col-span-7">
          <div className="rounded-[32px] bg-white p-6 sm:p-8 md:p-10">
            <motion.div
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <motion.p
                variants={itemVars}
                className="text-base leading-8 text-[#003358]/78 sm:text-lg"
              >
                <span className="mr-2 inline-block text-4xl font-black leading-none text-[#003358]">
                  D
                </span>
                Damarcus Offord is campaigning to bring strong management,
                organizational skill, and public-service leadership to the
                Office of Dallas County Clerk. He has built a career in
                government relations, policy development, and constituent
                engagement, and in 2026 he will appear on the Democratic Primary
                ballot in Dallas County.
              </motion.p>

              <motion.p
                variants={itemVars}
                className="text-base leading-8 text-[#003358]/78 sm:text-lg"
              >
                Offord understands the County Clerk&apos;s critical role as record
                keeper for the county court system and custodian of property
                records, business filings, and other vital public records. His
                leadership approach centers on collaboration, administrative
                excellence, and dependable customer service for every resident
                who relies on the office.
              </motion.p>

              <motion.p
                variants={itemVars}
                className="text-base leading-8 text-[#003358]/78 sm:text-lg"
              >
                He began his career as a Senior Staffer for Congresswoman Eddie
                Bernice Johnson, advancing legislative priorities and responding
                to constituent needs. He later served Dallas ISD in
                Intergovernmental Relations, where he helped shape the
                district&apos;s legislative agenda in Austin.
              </motion.p>

              <motion.p
                variants={itemVars}
                className="text-base leading-8 text-[#003358]/78 sm:text-lg"
              >
                Offord went on to work for one of the largest transportation
                agencies in Texas as Senior Manager of State Relations. He is
                also a graduate of the Campaign Activity Management Program and
                the Congressional Black Caucus Leadership Institute in
                Washington, D.C.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[32px] bg-[#dff7ff] p-6 sm:p-8">
              <FaBuildingColumns className="text-3xl text-[#00a3cc]" />
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.24em] text-[#007fa0]">
                Government Relations
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight">
                Senior Manager Of State Relations
              </h3>
            </div>

            <div className="rounded-[32px] bg-white p-6 sm:p-8">
              <FaGraduationCap className="text-3xl text-[#003358]" />
              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.24em] text-[#007fa0]">
                Education Policy
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight">
                Intergovernmental Relations, Dallas ISD
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 md:p-10">
            <div className="pointer-events-none absolute -bottom-6 -right-2 select-none text-[6rem] font-black leading-none text-white/5 sm:text-[8rem]">
              SERVICE
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00a3cc] text-[#003358]">
                  <FaUsers size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#7eddf4]">
                    Community Service
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-tight">
                    Service Beyond Office
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-white/78 sm:text-base">
                Beyond his professional work, Offord serves the community in a
                variety of ways. He is part of the Mark Brown Scholarship
                Committee at Hopewell Baptist Church, has supported Democratic
                campaigns at the local, state, and federal levels, and has
                served on the South Dallas Fair Park Trust Fund Board and
                Pipeline to Possibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-[36px] bg-white">
            <img
              src={longImage}
              alt="Damarcus Offord - Career and Community Engagement"
              className="block h-auto w-full object-cover"
            />

            <div className="bg-[#00a3cc] p-6 text-[#003358] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em]">
                    Dallas County 2026
                  </p>
                  <p className="mt-2 text-lg font-black uppercase tracking-[0.08em]">
                    Leadership Through Service
                  </p>
                </div>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-[#003358] py-5">
        <div className="flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="mx-6 text-3xl font-black uppercase tracking-tight text-white/18 sm:text-4xl md:text-5xl"
            >
              Experience • Efficiency • Service •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biography;
