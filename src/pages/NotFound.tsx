import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeftLong,
  FaTriangleExclamation,
  FaHouse,
} from "react-icons/fa6";

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-[#003358] font-sans selection:bg-[#00a3cc] selection:text-white flex items-center justify-center p-6">
      {/* Background Architectural Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="grid grid-cols-12 h-full w-full border-l border-t border-[#003358]">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-[#003358] aspect-square"
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full relative z-10"
      >
        <div className="border-[12px] border-[#003358] bg-white p-8 md:p-20 shadow-[24px_24px_0px_#00a3cc] relative overflow-hidden">
          {/* Top Alert Bar */}
          <div className="absolute top-0 left-0 right-0 bg-[#003358] py-2 px-6 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00a3cc]">
              Status: Error 404
            </span>
            <FaTriangleExclamation className="text-[#00a3cc]" />
          </div>

          <div className="space-y-12 mt-8">
            {/* The Big Number */}
            <div className="relative">
              <h1 className="text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-[#003358]/5 select-none absolute -top-10 -left-6">
                404
              </h1>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] relative z-10">
                Route <br /> <span className="text-[#00a3cc]">Not Found.</span>
              </h2>
            </div>

            <div className="max-w-md space-y-6">
              <div className="h-2 w-24 bg-[#00a3cc]" />
              <p className="font-bold uppercase tracking-widest text-xs leading-loose text-slate-500">
                The section you are looking for has been decommissioned, moved,
                or never existed in the campaign blueprint. Let’s get you back
                on course.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
              <Link to="/">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="bg-[#003358] text-white p-6 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <FaHouse className="text-[#00a3cc]" />
                    <span className="font-black uppercase tracking-widest text-xs">
                      Return Home
                    </span>
                  </div>
                  <FaArrowLeftLong className="opacity-0 group-hover:opacity-100 transition-opacity rotate-180" />
                </motion.div>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="border-4 border-slate-100 p-6 flex items-center space-x-4 hover:border-[#00a3cc] transition-all group"
              >
                <FaArrowLeftLong className="text-[#003358] group-hover:-translate-x-2 transition-transform" />
                <span className="font-black uppercase tracking-widest text-xs text-[#003358]">
                  Go Back
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Right Decorative Accents */}
          <div className="absolute bottom-0 right-0 p-4 border-t-4 border-l-4 border-[#003358] hidden md:block">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-20 italic">
              Offord For Clerk 2026
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
