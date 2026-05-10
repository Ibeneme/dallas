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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7fcff] p-6 font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(0,51,88,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,88,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[40px] bg-white"
      >
        <div className="bg-[#003358] px-6 py-4 text-white sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#7eddf4]">
              Status: Error 404
            </span>
            <FaTriangleExclamation className="text-[#00a3cc]" />
          </div>
        </div>

        <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="pointer-events-none absolute right-4 top-4 select-none text-[6rem] font-black leading-none text-[#003358]/5 sm:text-[8rem] md:text-[11rem]">
            404
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
                Route Not Found
              </p>

              <h1 className="mt-4 text-4xl font-black uppercase leading-[0.84] tracking-tight sm:text-5xl md:text-7xl">
                This Page
                <br />
                <span className="text-[#00a3cc]">Does Not Exist.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#003358]/72 sm:text-base">
                The page you tried to reach may have been moved, removed, or was
                never part of the current campaign site structure. Let&apos;s get
                you back to a working route.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#007fa0]">
                Recovery Options
              </p>

              <div className="mt-6 grid gap-4">
                <Link to="/">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex items-center justify-between rounded-[28px] bg-[#003358] px-6 py-5 text-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00a3cc] text-[#003358]">
                        <FaHouse />
                      </div>
                      <span className="text-sm font-black uppercase tracking-[0.18em]">
                        Return Home
                      </span>
                    </div>
                    <FaArrowLeftLong className="rotate-180 text-[#7eddf4]" />
                  </motion.div>
                </Link>

                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => window.history.back()}
                  className="flex items-center justify-between rounded-[28px] bg-[#dff7ff] px-6 py-5 text-[#003358]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#003358]">
                      <FaArrowLeftLong />
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.18em]">
                      Go Back
                    </span>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#edf6fb] px-6 py-5 sm:px-8 md:px-12">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#003358]/42 sm:text-left">
            Offord For Clerk 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
