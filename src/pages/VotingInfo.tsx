import React from "react";
import {
  FaFingerprint,
  FaCalendarCheck,
  FaClock,
  FaLocationCrosshairs,
  FaBoxArchive,
  FaMapLocationDot,
} from "react-icons/fa6";

// --- Configuration ---
const VOTING_DATA = {
  electionDay: "Tuesday, May 26, 2026",
  earlyVoting: "May 18 – May 22, 2026",
  hours: "7:00 AM – 7:00 PM",
  location: "Dallas County, TX",
};

const ElectionAlert: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b-[10px] border-[#00a3cc] bg-[#003358] px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md">
            <FaFingerprint className="text-[#00a3cc]" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em]">
              Voter Protocol 2026
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
                Dallas County Democratic Primary Runoff
              </p>
              <h1 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-[9.5rem]">
                Primary
                <br />
                <span className="text-[#00a3cc]">Runoff.</span>
              </h1>
            </div>

            <div className="rounded-[32px] bg-white/10 p-6 border border-white/5 backdrop-blur-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00a3cc] text-[#003358]">
                  <FaBoxArchive size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                    Official Schedule
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    The runoff election determines the final candidate. Review
                    the 2026 dates below and ensure your voice is heard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Text */}
        <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          VOTE
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        {/* Intro Section - Flexibility Focus */}
        <section className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[32px] bg-[#f7fcff] border border-[#e3f2f9] p-8 md:p-10 lg:col-span-5">
            <div className="h-1.5 w-16 bg-[#00a3cc]" />
            <p className="mt-8 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
              Vote Anywhere 
            </p>
            <p className="mt-6 text-sm leading-8 text-[#003358]/70 sm:text-base">
              Dallas County utilizes a{" "}
              <span className="font-bold text-[#003358]">
                Countywide Vote Center model
              </span>
              . This means you aren't restricted to your home precinct—you can
              cast your ballot at any official polling location that is
              convenient for you.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#003358] p-8 text-white sm:p-10 lg:col-span-7">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Election Summary
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { label: "Election Type", val: "Primary Runoff" },
                { label: "Jurisdiction", val: "Dallas County" },
                { label: "Vote Centers", val: "Open to All", highlight: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-[24px] p-5 ${
                    item.highlight
                      ? "bg-[#00a3cc] text-[#003358]"
                      : "bg-white/10"
                  }`}
                >
                  <p
                    className={`text-[10px] font-black uppercase tracking-[0.22em] ${
                      item.highlight ? "text-[#003358]/70" : "text-[#7eddf4]"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-black uppercase leading-tight">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Date Grid */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Early Voting Card */}
          <article className="rounded-[32px] bg-[#f7fcff] border border-[#e3f2f9] p-8 md:p-10">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3cc] text-[#003358]">
                <FaCalendarCheck size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#007fa0]">
                  Early Voting Period
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
                  May 18–22
                </h2>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl bg-white border border-[#e3f2f9] px-5 py-4 shadow-sm">
                <FaClock className="text-[#00a3cc]" />
                <span className="text-sm font-black uppercase tracking-[0.15em]">
                  {VOTING_DATA.hours} Daily
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-white border border-[#e3f2f9] px-5 py-4 shadow-sm">
                <FaMapLocationDot className="text-[#00a3cc]" />
                <span className="text-sm font-black uppercase tracking-[0.15em]">
                  Any Early Voting Site
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#003358]/70">
                Registered Dallas County voters can vote at any early voting
                location. Find the site closest to your work, school, or home.
              </p>
            </div>
          </article>

          {/* Election Day Card */}
          <article className="rounded-[32px] bg-[#003358] p-8 text-white md:p-10 shadow-2xl shadow-[#003358]/20">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#003358]">
                <FaLocationCrosshairs size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#7eddf4]">
                  Election Day
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none tracking-tight text-[#00a3cc] sm:text-5xl lg:text-6xl">
                  May 26
                </h2>
              </div>
            </div>

            <div className="mt-10 rounded-[28px] bg-white/10 border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  Any Vote Center
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                Polls are open from{" "}
                <span className="text-white font-bold">
                  {VOTING_DATA.hours}
                </span>
                . Because of the countywide model, you can choose{" "}
                <span className="text-cyan-400 font-bold">
                  any participating Vote Center
                </span>{" "}
                across the county on Election Day.
              </p>
            </div>
          </article>
        </section>

        {/* CTA Banner */}
        <section className="mt-8 rounded-[40px] bg-gradient-to-br from-[#cfefff] to-[#e3f7ff] px-8 py-12 text-center md:py-16">
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#007fa0]">
            The Final Step
          </p>
          <h3 className="mt-6 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-6xl">
            Submit Your
            <span className="text-[#00a3cc]"> Choice.</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#003358]/70 sm:text-lg">
            This runoff is the final phase of the primary. Choose the location
            that works best for you and help us build a modern Dallas County
            Clerk's office.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[#d6edf5] pt-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-1">
            <span className="block text-[10px] font-black uppercase tracking-[0.28em] text-[#003358]/50">
              Paid for by the Damarcus Offord Campaign
            </span>
            <span className="block text-[9px] font-medium text-[#003358]/40">
              Not authorized by any candidate or candidate's committee.
            </span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#00a3cc]">
            Dallas Precinct Alert 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ElectionAlert;
