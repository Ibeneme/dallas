import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Corrected imports - all icons now explicitly defined
import {
  FaAward,
  FaBuildingColumns,
  FaUsers,
  FaGraduationCap,
  FaFilter,
  FaCircleCheck,
} from "react-icons/fa6";

const ENDORSEMENTS = [
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredList =
    activeFilter === "All"
      ? ENDORSEMENTS
      : ENDORSEMENTS.filter((e) => e.category === activeFilter);

  return (
    <div className="bg-white min-h-screen text-[#003358] font-sans selection:bg-[#00a3cc] selection:text-white ">
      <header className="pt-32 pb-24 px-6 bg-[#003358] text-white border-b-[16px] border-[#00a3cc] relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block bg-[#00a3cc] px-4 py-1 mb-6">
            <span className="text-[#003358] font-black text-xs uppercase tracking-[0.4em]">
              The Momentum
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
            Trusted <br /> <span className="text-[#00a3cc]">Endorsements.</span>
          </h1>
        </div>
        <FaAward className="absolute -bottom-10 -right-10 text-[20rem] text-white/5 rotate-12" />
      </header>

      {/* HORIZONTAL SCROLLER: Category Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-slate-100 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center">
          <FaFilter className="text-[#00a3cc] mr-6 hidden md:block shrink-0" />

          {/* The Scroll Container */}
          <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2 -mb-2 w-full touch-pan-x">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 whitespace-nowrap font-black uppercase text-[10px] tracking-widest border-2 transition-all shrink-0
                  ${
                    activeFilter === cat
                      ? "bg-[#003358] border-[#003358] text-white"
                      : "border-slate-100 text-slate-400 hover:text-[#003358] hover:border-slate-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 mt-16">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredList.map((person) => (
              <motion.div
                layout
                key={person.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group border-l-[8px] border-slate-100 p-8 hover:border-[#00a3cc] hover:bg-slate-50 transition-all bg-white"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00a3cc] block mb-2">
                      {person.category}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tighter text-[#003358]">
                      {person.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1 italic">
                      {person.title}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                    <CategoryIcon category={person.category} />
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">
                      Verified Endorsement
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <footer className="mt-40 bg-[#003358] py-24 px-6 text-center text-white border-t-[16px] border-[#00a3cc]">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Join the <br /> <span className="text-[#00a3cc]">Coalition.</span>
          </h2>
          <button className="bg-[#00a3cc] text-[#003358] px-12 py-5 font-black uppercase tracking-[0.4em] text-sm hover:bg-white transition-all shadow-[8px_8px_0px_white]">
            Submit Endorsement
          </button>
        </div>
      </footer>
    </div>
  );
};

// Fixed CategoryIcon with all imports present
const CategoryIcon = ({ category }: { category: string }) => {
  const iconProps = { className: "text-[#00a3cc] text-lg" };
  switch (category) {
    case "County":
      return <FaBuildingColumns {...iconProps} />;
    case "State/Federal":
      return <FaAward {...iconProps} />;
    case "Faith/Community":
      return <FaUsers {...iconProps} />;
    case "Education":
      return <FaGraduationCap {...iconProps} />;
    default:
      return <FaCircleCheck {...iconProps} />;
  }
};

export default EndorsementsPage;
