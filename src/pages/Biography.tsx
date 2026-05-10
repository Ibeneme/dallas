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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="bg-white font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-0 border-x border-slate-100 lg:grid-cols-12">
        <div className="space-y-16 p-8 md:p-16 lg:col-span-7 lg:p-24">
          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#00a3cc] px-4 py-1">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#003358]">
                The Candidate
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter md:text-8xl">
              Damarcus
              <br />
              <span className="text-[#00a3cc]">Offord.</span>
            </h1>

            <p className="text-xl font-black uppercase tracking-widest text-[#003358]">
              Ready to lead the County Clerk&apos;s Office
            </p>
          </motion.div>

          <div className="space-y-8 text-lg font-medium leading-relaxed text-slate-700">
            <motion.p
              variants={itemVars}
              initial="hidden"
              whileInView="visible"
            >
              <span className="float-left mr-3 mt-1 text-4xl font-black leading-none text-[#003358]">
                D
              </span>
              amarcus Offord is campaigning to bring his strong management,
              organizational and personal skills to the Office of Dallas County
              Clerk. Offord has a strong background in government relations,
              policy development, and constituent engagement. In 2026, he will
              be on the Democratic Primary ballot in Dallas County.
            </motion.p>

            <motion.p
              variants={itemVars}
              initial="hidden"
              whileInView="visible"
            >
              Offord understands the key administrative role played by the
              County Clerk as the record keeper for our county court system, as
              well as custodian of property records, business filings, and other
              vital public records. His leadership approach includes seeking to
              be a strong team player in coordination with other county
              officials and departments, and ensuring outstanding customer
              service to all who rely on the Office of Dallas County Clerk.
            </motion.p>

            <motion.div
              variants={itemVars}
              initial="hidden"
              whileInView="visible"
              className="space-y-8 pt-6"
            >
              <p>
                Offord began his career as a Senior Staffer for Congresswoman
                Eddie Bernice Johnson, where he advanced legislative initiatives
                and responded to constituent issues. He then worked with Dallas
                ISD as the leader of Intergovernmental Relations, where he
                spearheaded the district&apos;s legislative agenda in Austin.
              </p>

              <p>
                He then went on to work for one of the largest transportation
                agencies in Texas as Senior Manager of State Relations. Offord
                is a graduate of the Campaign Activity Management Program and
                the Congressional Black Caucus Leadership Institute in
                Washington, D.C.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
            <div className="flex h-48 flex-col justify-between border-t-8 border-[#00a3cc] bg-slate-50 p-8">
              <FaBuildingColumns className="text-3xl text-[#00a3cc]" />
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Government Relations
                </h4>
                <p className="text-lg font-black uppercase leading-none tracking-tight">
                  Senior Manager of State Relations
                </p>
              </div>
            </div>

            <div className="flex h-48 flex-col justify-between border-t-8 border-[#003358] bg-slate-50 p-8">
              <FaGraduationCap className="text-3xl text-[#003358]" />
              <div className="space-y-1">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Education Policy
                </h4>
                <p className="text-lg font-black uppercase leading-none tracking-tight">
                  Intergovernmental Relations, Dallas ISD
                </p>
              </div>
            </div>
          </div>

          <div className="relative space-y-8 overflow-hidden bg-[#003358] p-12 text-white">
            <div className="relative z-10 flex items-center space-x-4">
              <FaUsers className="text-3xl text-[#00a3cc]" />
              <h3 className="text-3xl font-black uppercase tracking-tighter">
                Community Service
              </h3>
            </div>

            <p className="relative z-10 text-sm font-bold uppercase leading-loose tracking-[0.15em] text-slate-300 md:text-base">
              Beyond his professional work, Offord enjoys serving the community
              in other ways. He is on the Mark Brown Scholarship Committee at
              Hopewell Baptist Church. He has worked on numerous Democratic
              campaigns at the local, state and federal levels. He also served
              on the South Dallas Fair Park Trust Fund Board and Pipeline to
              Possibilities.
            </p>

            <span className="absolute -bottom-10 -right-10 select-none text-9xl font-black uppercase text-white/5">
              Service
            </span>
          </div>
        </div>

        <div className="relative border-[#00a3cc] bg-slate-100 lg:col-span-5 lg:border-l-[8px]">
          <div className="w-full lg:sticky lg:top-24">
            <img
              src={longImage}
              alt="Damarcus Offord - Career and Community Engagement"
              className="block h-auto w-full object-cover"
            />

            <div className="bg-[#00a3cc] p-8 text-[#003358]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.3em]">
                  Dallas County 2026
                </span>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden border-t-[12px] border-[#00a3cc] bg-[#003358] py-16">
        <div className="flex animate-pulse space-x-12 whitespace-nowrap opacity-20">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-6xl font-black uppercase tracking-tighter text-white md:text-8xl"
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
