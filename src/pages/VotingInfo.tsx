import React from "react";
import {
  FaFingerprint,
  FaCalendarCheck,
  FaClock,
  FaLocationCrosshairs,
  FaBoxArchive,
} from "react-icons/fa6";

const ElectionAlert: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      <header className="relative overflow-hidden border-b-[10px] border-[#00a3cc] bg-[#003358] px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
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
              <h1 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-[9rem]">
                Primary
                <br />
                <span className="text-[#00a3cc]">Runoff.</span>
              </h1>
            </div>

            <div className="rounded-[32px] bg-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3cc] text-[#003358]">
                  <FaBoxArchive size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                    Voting Reminder
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Review the schedule, confirm your location, and make a plan
                    to cast your ballot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          VOTE
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <section className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8 md:p-10 lg:col-span-5">
            <div className="h-1 w-20 bg-[#00a3cc]" />
            <p className="mt-6 text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
              Modernizing Dallas County requires active participation.
            </p>
            <p className="mt-5 text-sm leading-8 text-[#003358]/72 sm:text-base">
              Review the runoff voting schedule and make a plan to participate.
              Your voice helps shape the future of the Dallas County Clerk’s
              office.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 md:p-10 lg:col-span-7">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Key Information
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[28px] bg-white/10 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#7eddf4]">
                  Election Type
                </p>
                <p className="mt-3 text-lg font-black uppercase leading-tight">
                  Democratic Primary Runoff
                </p>
              </div>

              <div className="rounded-[28px] bg-white/10 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#7eddf4]">
                  County
                </p>
                <p className="mt-3 text-lg font-black uppercase leading-tight">
                  Dallas County
                </p>
              </div>

              <div className="rounded-[28px] bg-[#00a3cc] p-5 text-[#003358]">
                <p className="text-[10px] font-black uppercase tracking-[0.22em]">
                  Action
                </p>
                <p className="mt-3 text-lg font-black uppercase leading-tight">
                  Make A Voting Plan
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00a3cc] text-[#003358]">
                <FaCalendarCheck size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#007fa0]">
                  Early Voting
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
                  May 18-22
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
                <FaClock className="text-[#00a3cc]" />
                <span className="text-sm font-black uppercase tracking-[0.16em] text-[#003358]">
                  07:00 AM To 07:00 PM Daily
                </span>
              </div>

              <p className="text-sm leading-8 text-[#003358]/72">
                Early voting is available at any designated early voting
                location within Dallas County. Bring an acceptable form of
                identification when you vote.
              </p>
            </div>
          </article>

          <article className="rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00a3cc] text-[#003358]">
                <FaLocationCrosshairs size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#7eddf4]">
                  Election Day
                </p>
                <h2 className="mt-2 text-4xl font-black uppercase leading-none tracking-tight text-[#00a3cc] sm:text-5xl md:text-6xl">
                  May 26
                </h2>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] bg-white/10 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#7eddf4]">
                Final Call
              </p>
              <p className="mt-3 text-sm leading-8 text-white/78">
                Polling location access on Election Day may depend on your
                registered residential address and county election guidance.
                Check your local Dallas County voting resources before heading
                out.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-[32px] bg-[#cfefff] px-6 py-8 text-center sm:px-8 md:px-12 md:py-12">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
            Voting Reminder
          </p>
          <h3 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Submit Your
            <span className="text-[#00a3cc]"> Choice.</span>
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-[#003358]/72 sm:text-base">
            The path to a more modern County Clerk’s office depends on runoff
            turnout. Confirm your schedule, review your county voting resources,
            and make your plan to vote.
          </p>
        </section>
      </main>

      <footer className="px-6 pb-12 pt-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#d6edf5] pt-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#003358]/55">
            Paid for by the Damarcus Offord Campaign
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#00a3cc]">
            Dallas Precinct Alert 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ElectionAlert;
