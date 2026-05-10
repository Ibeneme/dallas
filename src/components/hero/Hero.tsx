import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import image from "../../assets/images/image.png";

// --- Animation Variants (Defined outside to prevent re-renders) ---
const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVars: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageContainerVars: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
  },
};

// --- Sub-Components for Cleanliness ---
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/5">
    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300">
      {children}
    </span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#003358] text-white selection:bg-cyan-500/30">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,163,204,0.15),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-20 md:grid-cols-12 md:gap-16 lg:pb-32 lg:pt-28"
      >
        {/* Content Column */}
        <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8">
          <motion.div variants={itemVars}>
            <Badge>Dallas County Campaign</Badge>
          </motion.div>

          <motion.div variants={itemVars} className="mt-8">
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-[8.5rem]">
              Damarcus
              <span className="block text-cyan-400">Offord</span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVars}
            className="mt-8 inline-flex flex-col rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm"
          >
            <p className="text-xl font-bold uppercase tracking-widest md:text-2xl">
              Dallas County Clerk
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300/90">
                Integrity • Experience • Service
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVars}
            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300/90"
          >
            A professional, modern vision for public service built on
            transparency, efficiency, and trusted leadership for every resident.
          </motion.p>

          <motion.div
            variants={itemVars}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              to="/donate"
              className="group relative overflow-hidden rounded-full bg-cyan-500 px-10 py-4 text-sm font-black uppercase tracking-widest text-[#003358] transition-transform hover:scale-105 active:scale-95"
            >
              Donate Now
            </Link>

            <Link
              to="/biography"
              className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-black uppercase tracking-widest transition-all hover:bg-white/10 hover:border-white/40"
            >
              The Vision
            </Link>
          </motion.div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2 md:col-span-5 lg:col-span-4">
          <motion.div
            variants={imageContainerVars}
            className="relative mx-auto aspect-[4/5] w-full max-w-[400px]"
          >
            {/* Design Accents */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-cyan-400/20" />
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[40px] border-2 border-cyan-500/30" />

            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-slate-800 shadow-2xl">
              <img
                src={image}
                alt="Damarcus Offord Portrait"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />

              {/* Overlay Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003358] to-transparent p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-300">
                  Official Portrait
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Strip */}
      <div className="relative z-10 border-t border-white/5 bg-[#002a48]/50 px-6 py-6 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
            © 2026 Paid for by the Damarcus Offord Campaign
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400/80">
            Building Trust Through Service
          </p>
        </div>
      </div>

      {/* Massive Background Text (Refined) */}
      <div className="pointer-events-none absolute -bottom-16 -right-12 select-none opacity-[0.03] transition-opacity hover:opacity-[0.05]">
        <span className="text-[12rem] font-black uppercase leading-none lg:text-[20rem]">
          OFFORD
        </span>
      </div>
    </section>
  );
};

export default Hero;
