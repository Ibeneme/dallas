import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import image from "../../assets/images/image.png";

// ─── Animation Variants ─────────────────────────────────────
const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVars: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVars: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// ─── Sub Components ─────────────────────────────────────────
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex rounded-full border border-cyan-400/30 bg-white/10 px-6 py-2 backdrop-blur-sm">
    <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
      {children}
    </span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#002f5a] text-white">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,#003d75_0%,transparent_65%)]" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-24 md:grid-cols-12 md:gap-16 lg:pt-28"
      >
        {/* Content Column */}
        <div className="order-2 md:order-1 md:col-span-7 lg:col-span-7">
          <motion.div variants={itemVars}>
            <Badge>Dallas County Campaign</Badge>
          </motion.div>

          <motion.div variants={itemVars} className="mt-8">
            <h1 className="text-6xl font-black uppercase leading-none tracking-tighter sm:text-7xl lg:text-[8.2rem]">
              DAMARCUS
              <span className="block text-[#00e0ff]">OFFORD</span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVars}
            className="mt-8 border-l-4 border-cyan-400 pl-6"
          >
            <p className="text-2xl font-semibold tracking-wide md:text-3xl">
              Candidate for Dallas County Clerk
            </p>
            <p className="mt-2 text-lg text-cyan-300">
              Integrity • Leadership • Results
            </p>
          </motion.div>

          <motion.p
            variants={itemVars}
            className="mt-10 max-w-lg text-lg leading-relaxed text-slate-200"
          >
            Bringing proven experience, transparency, and dedicated service to
            the people of Dallas County.
          </motion.p>

          <motion.div
            variants={itemVars}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              to="/donate"
              className="rounded-full bg-white px-12 py-5 text-base font-bold uppercase tracking-widest text-[#002f5a] transition-all hover:bg-cyan-400 hover:text-[#002f5a]"
            >
              Donate Now
            </Link>
            <Link
              to="/biography"
              className="rounded-full border-2 border-cyan-300 px-12 py-5 text-base font-bold uppercase tracking-widest transition-all hover:bg-cyan-300 hover:text-[#002f5a]"
            >
              Meet Damarcus
            </Link>
          </motion.div>
        </div>

        {/* Bigger Image Column */}
        <div className="order-1 md:order-2 md:col-span-5 lg:col-span-5">
          <motion.div
            variants={imageVars}
            className="relative mx-auto max-w-[520px] lg:max-w-[580px]"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={image}
                alt="Damarcus Offord - Official Portrait"
                className="h-full w-full object-cover"
                loading="eager"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                  Official Campaign Portrait
                </p>
              </div>
            </div>

            {/* Accent Badge */}
            <div className="absolute -bottom-4 -right-4 rounded bg-white px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#002f5a] shadow-xl">
              2026
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bar */}
      <div className="relative z-20 border-t border-white/20 bg-[#001d38] py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs font-bold uppercase tracking-widest md:flex-row">
          <p>© 2026 Paid for by the Damarcus Offord Campaign</p>
          <p className="text-cyan-400">For the People of Dallas County</p>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="pointer-events-none absolute bottom-8 right-8 select-none opacity-10">
        <span className="text-[14rem] font-black uppercase leading-none tracking-tighter lg:text-[18rem]">
          OFFORD
        </span>
      </div>
    </section>
  );
};

export default Hero;
