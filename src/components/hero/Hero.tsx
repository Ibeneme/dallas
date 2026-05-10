import React from "react";
import { motion, type Variants } from "framer-motion";
import image from "../../assets/images/image.png";

const Hero: React.FC = () => {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars: Variants = {
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
    <header className="relative overflow-hidden border-b-[12px] border-[#00a3cc] bg-[#003358] pb-20 pt-12 text-white md:pb-32 md:pt-24">
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:gap-8"
      >
        <div className="order-2 z-10 space-y-8 md:order-1 md:col-span-7">
          <motion.div variants={itemVars} className="space-y-2">
            <h1 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl lg:text-9xl">
              Damarcus
              <br />
              <span className="text-[#00a3cc]">Offord</span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVars}
            className="inline-flex flex-col border-l-[6px] border-[#00a3cc] py-2 pl-4 md:border-l-8 md:pl-6"
          >
            <p className="text-xl font-black uppercase tracking-[0.15em] sm:text-2xl md:text-3xl md:tracking-[0.2em]">
              Dallas County Clerk
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 sm:text-base md:text-lg">
              Integrity • Experience • Service
            </p>
          </motion.div>

          <motion.p
            variants={itemVars}
            className="max-w-xl text-lg font-medium leading-relaxed text-slate-200 md:text-xl"
          >
            Transforming public service through transparent, efficient, and
            modernized systems for every resident of Dallas County.
          </motion.p>

          <motion.div variants={itemVars} className="pt-4">
            <motion.button
              whileHover={{ x: 4, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#00a3cc] bg-[#00a3cc] px-8 py-4 text-base font-black uppercase tracking-widest text-[#003358] transition-colors hover:bg-white active:bg-slate-200 md:px-12 md:py-5 md:text-lg"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2 md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="relative w-full max-w-[280px] sm:max-w-sm"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden border-[10px] border-white bg-slate-200 md:border-[16px]">
              <img
                src={image}
                alt="Damarcus Offord"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: 20, y: 20 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 -z-10 bg-[#00a3cc] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 -top-4 z-20 hidden h-12 w-12 border-l-4 border-t-4 border-[#00a3cc] sm:block"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -bottom-10 -right-10 select-none opacity-[0.03]">
        <span className="text-[15rem] font-black uppercase leading-none">
          OFFORD
        </span>
      </div>
    </header>
  );
};

export default Hero;
