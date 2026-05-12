import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface Endorsement {
  name: string;
  title: string;
  category:
    | "County"
    | "State/Federal"
    | "Local"
    | "Faith/Community"
    | "Education";
}

const ENDORSEMENTS: Endorsement[] = [
  {
    name: "John Warren",
    title: "Current Dallas County Clerk",
    category: "County",
  },
  {
    name: "James Talarico",
    title: "Texas State Representative",
    category: "State/Federal",
  },
  { name: "John Ames", title: "Tax Assessor", category: "County" },
  { name: "Felicia Pitre", title: "District Clerk", category: "County" },
  { name: "Pauline Medrano", title: "Treasurer", category: "County" },
  { name: "Marian Brown", title: "Sheriff", category: "County" },
  { name: "John Wiley Price", title: "Commissioner", category: "County" },
  { name: "Dr. Elba Garcia", title: "Commissioner", category: "County" },
  { name: "Andy Sommerman", title: "Commissioner", category: "County" },
  { name: "Dr. Theresa Daniel", title: "Commissioner", category: "County" },
  {
    name: "Ambassador Ron Kirk",
    title: "Former U.S. Trade Representative",
    category: "State/Federal",
  },
  {
    name: "Congresswoman Julie Johnson",
    title: "U.S. Representative",
    category: "State/Federal",
  },
  {
    name: "Senator Royce West",
    title: "State Senator",
    category: "State/Federal",
  },
  {
    name: "Senator Nathan Johnson",
    title: "State Senator",
    category: "State/Federal",
  },
  {
    name: "Rhetta Andrews Bowers",
    title: "State Representative",
    category: "State/Federal",
  },
  {
    name: "Venton Jones",
    title: "State Representative",
    category: "State/Federal",
  },
  {
    name: "Aicha Davis",
    title: "State Representative",
    category: "State/Federal",
  },
  {
    name: "Dr. Fredrick D. Haynes, III",
    title: "Friendship West Baptist",
    category: "Faith/Community",
  },
  {
    name: "Rev. Bryan Carter",
    title: "Senior Pastor, Concord Church",
    category: "Faith/Community",
  },
  {
    name: "Michael Hinojosa",
    title: "Former DISD Superintendent",
    category: "Faith/Community",
  },
  {
    name: "Betty Culbreath",
    title: "Community Leader",
    category: "Faith/Community",
  },
  {
    name: "Lynn McBee",
    title: "Community Leader",
    category: "Faith/Community",
  },
  {
    name: "Lou Luckhardt",
    title: "USW Local 9487, Past President",
    category: "Faith/Community",
  },
  { name: "Mike Rawlings", title: "Former Dallas Mayor", category: "Local" },
  { name: "Jesse Moreno", title: "Dallas Mayor Pro Tem", category: "Local" },
  { name: "Stephen Mason", title: "Cedar Hill Mayor", category: "Local" },
  { name: "Rachel Proctor", title: "DeSoto Mayor", category: "Local" },
  { name: "Clyde Hairston", title: "Lancaster Mayor", category: "Local" },
  { name: "Adam Bazaldua", title: "Dallas Councilmember", category: "Local" },
  {
    name: "Byron Sanders",
    title: "Dallas ISD Trustee",
    category: "Education",
  },
  {
    name: "Joyce Foreman",
    title: "Dallas ISD Trustee",
    category: "Education",
  },
  {
    name: "Ben Mackey",
    title: "Dallas ISD Trustee",
    category: "Education",
  },
];

const CATEGORIES = [
  "All",
  "County",
  "State/Federal",
  "Faith/Community",
  "Local",
  "Education",
];

const categoryStyles: Record<string, string> = {
  County: "bg-[#dff7ff] text-[#003358]",
  "State/Federal": "bg-[#00a3cc] text-white",
  "Faith/Community": "bg-[#eef8fd] text-[#003358]",
  Local: "bg-[#f3f9fc] text-[#003358]",
  Education: "bg-[#cfefff] text-[#003358]",
};

const EndorsementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? ENDORSEMENTS
      : ENDORSEMENTS.filter(
          (endorsement) => endorsement.category === activeTab
        );

  return (
    <section className="bg-[#f7fcff] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[36px] bg-[#003358] px-6 py-10 text-white sm:px-8 md:px-10 md:py-12 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full bg-white/10 px-5 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#7eddf4]">
                  Consensus Index
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.84] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Trusted
                <br />
                <span className="text-[#00a3cc]">Endorsements.</span>
              </h2>
            </div>

            <div className="rounded-[28px] bg-white/10 p-6 sm:p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                Coalition Overview
              </p>
              <p className="mt-3 text-sm leading-8 text-white/78 sm:text-base">
                Support spans county government, state leadership, education,
                faith communities, and local advocates across Dallas County.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[32px] bg-white p-6 sm:p-8 md:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
                Filter Endorsements
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                Explore Support By
                <span className="text-[#00a3cc]"> Category</span>
              </h3>
            </div>

            <div className="rounded-full bg-[#f7fcff] px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#007fa0]">
              Total Endorsements: {filteredData.length}
            </div>
          </div>

          <nav className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => {
              const isActive = activeTab === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "bg-[#003358] text-white"
                      : "bg-[#f1f8ff] text-[#003358] hover:bg-[#dff7ff]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-8">
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredData.map((endorser) => (
                <motion.article
                  layout
                  key={endorser.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-[32px] bg-white p-6 sm:p-7"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div
                        className={`inline-flex rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] ${
                          categoryStyles[endorser.category]
                        }`}
                      >
                        {endorser.category}
                      </div>

                      <h3 className="mt-5 text-2xl font-black uppercase leading-tight tracking-tight text-[#003358]">
                        {endorser.name}
                      </h3>
                    </div>

                    <div className="mt-6 rounded-[24px] bg-[#f7fcff] p-4">
                      <p className="text-[11px] font-bold uppercase leading-7 tracking-[0.16em] text-[#003358]/78">
                        {endorser.title}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-10 rounded-[32px] bg-[#003358] px-6 py-10 text-center text-white sm:px-8 md:px-12">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
            Join The Coalition
          </p>
          <h3 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Build Broader
            <span className="text-[#00a3cc]"> Support.</span>
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-white/78 sm:text-base">
            This campaign is powered by trusted voices who believe in competent,
            modern, and accountable public service for Dallas County.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-[#00a3cc] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#003358] transition-colors hover:bg-white"
            >
              Endorse Now
            </Link>

            <Link
              to="/donate"
              className="rounded-full bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#003358]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndorsementsSection;
