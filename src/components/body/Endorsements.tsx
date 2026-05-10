import React, { useState } from "react";
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
  // List remains the same...
  {
    name: "John Warren",
    title: "Current Dallas County Clerk",
    category: "County",
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
    title: "Former U.S. Trade Rep",
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
    title: "Fmr. DISD Superintendent",
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
  { name: "Byron Sanders", title: "Dallas ISD Trustee", category: "Education" },
  { name: "Joyce Foreman", title: "Dallas ISD Trustee", category: "Education" },
  { name: "Ben Mackey", title: "Dallas ISD Trustee", category: "Education" },
];

const CATEGORIES = [
  "All",
  "County",
  "State/Federal",
  "Faith/Community",
  "Local",
  "Education",
];

const EndorsementsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? ENDORSEMENTS
      : ENDORSEMENTS.filter((e) => e.category === activeTab);

  return (
    <div className="bg-[#FCFCFC] min-h-screen text-[#003358] font-sans pb-20 selection:bg-[#00a3cc]/20 overflow-x-hidden">
      {/* Static Header (Now scrolls with the page) */}
      <header className="pt-16 md:pt-28 pb-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 md:w-12 h-1 bg-[#00a3cc]/40" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-[#00a3cc]">
                Consensus Index
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              THE <span className="text-[#00a3cc]/40">ENDORSEMENTS.</span>
            </h1>
          </div>

          {/* Wrapped Navigation (No left-to-right overflow) */}
          <nav className="flex flex-wrap gap-x-6 gap-y-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === cat
                    ? "text-[#003358]"
                    : "text-slate-300 hover:text-slate-500"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00a3cc]"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto px-6 mt-12 md:mt-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((endorser) => (
              <motion.div
                layout
                key={endorser.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white border border-slate-100 p-6 md:p-8 flex flex-col justify-between min-h-[200px] shadow-sm hover:shadow-xl hover:shadow-[#00a3cc]/5 transition-all group"
              >
                <div className="space-y-3">
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#00a3cc]">
                    {endorser.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter leading-tight">
                    {endorser.name}
                  </h3>
                </div>

                <div className="mt-8">
                  <div className="bg-[#00a3cc]/5 p-4 border-l-4 border-[#00a3cc]/40">
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#003358]/80 leading-relaxed">
                      {endorser.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer Branding */}
      <footer className="mt-40 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-12">
          JOIN THE <span className="text-[#00a3cc]/40">COALITION.</span>
        </h2>
        <div className="inline-block px-4 py-2 border border-slate-200">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-300">
            Paid for by the Damarcus Offord Campaign // 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default EndorsementsPage;
