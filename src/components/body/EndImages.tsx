import React from "react";
import { motion, type Variants } from "framer-motion";
import endorsed1 from "../../assets/images/endorsed1.png";
import endorsed2 from "../../assets/images/endorsed2.png";

const StackedEndorsements: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-32">
      {/* Structural Container */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Left Column: Text Content (Sticky) */}
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex rounded-full bg-[#003358]/5 px-4 py-2 border border-[#003358]/10">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
                  Broad Coalition
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#003358] sm:text-6xl md:text-7xl">
                The Voices of <br />
                <span className="text-[#00a3cc]">Our County.</span>
              </h2>

              <div className="mt-8 h-1.5 w-20 bg-[#00a3cc]" />

              <p className="mt-8 text-lg leading-relaxed text-[#003358]/70">
                Damarcus Offord is honored to be endorsed by a diverse group of
                community leaders, advocates, and public servants who believe in
                a more efficient, transparent, and modernized Dallas County
                Clerk’s office.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Dallas County Young Democrats",
                  "Stonewall Democrats of Dallas",
                  "Former Clerk John Warren",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#003358]"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00a3cc]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stacked Images */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              {/* Image 1 */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[48px] bg-white p-4  transition-all duration-500 "
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[36px]">
                  <img
                    src={endorsed1}
                    alt="Damarcus Offord Endorsement 1"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003358]/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="mt-6 flex items-center justify-between px-4 pb-2">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00a3cc]">
                    Community Pillar
                  </p>
                  <p className="text-sm font-bold text-[#003358]">
                    Strategic Endorsement
                  </p>
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-[48px] bg-[#003358] p-4  transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[36px]">
                  <img
                    src={endorsed2}
                    alt="Damarcus Offord Endorsement 2"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001c31]/90 via-transparent to-transparent opacity-40" />
                </div>
                <div className="mt-6 flex items-center justify-between px-4 pb-2 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7eddf4]">
                    Proven Leadership
                  </p>
                  <p className="text-sm font-bold">Public Service Support</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none opacity-[0.02]">
        <span className="text-[15rem] font-black uppercase leading-none text-[#003358] md:text-[25rem]">
          UNITY
        </span>
      </div>
    </section>
  );
};

export default StackedEndorsements;
