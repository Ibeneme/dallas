import React from "react";
import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaLock,
  FaArrowRightLong,
  FaHandHoldingHeart,
  FaShieldHalved,
} from "react-icons/fa6";

const DonatePage: React.FC = () => {
  const donorBoxUrl = "https://donorbox.org/offordforclerk";

  const tiers = [
    { amount: "$25", label: "Supporter" },
    { amount: "$50", label: "Advocate" },
    { amount: "$100", label: "Leader" },
    { amount: "$250", label: "Champion" },
  ];

  const trustItems = [
    {
      icon: <FaShieldHalved size={24} />,
      title: "Secure Transfer",
      text: "Donations are processed through Donorbox using secure encrypted payment handling.",
      tone: "bg-[#003358] text-[#00a3cc]",
    },
    {
      icon: <FaLock size={24} />,
      title: "Privacy Protected",
      text: "Your information is used only for campaign compliance, reporting, and required communication.",
      tone: "bg-[#00a3cc] text-[#003358]",
    },
    {
      icon: <FaCreditCard size={24} />,
      title: "Flexible Giving",
      text: "Donate using major credit cards and supported digital payment options.",
      tone: "bg-[#dff7ff] text-[#003358]",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      <header className="relative overflow-hidden border-b-[10px] border-[#00a3cc] bg-[#003358] px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex rounded-full bg-[#00a3cc] px-5 py-2"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#003358]">
              Action Center
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-8 max-w-5xl"
          >
            <h1 className="text-5xl font-black uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              Power The
              <br />
              <span className="text-[#00a3cc]">Change.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-sm font-black uppercase tracking-[0.22em] text-[#7eddf4] sm:text-base md:text-lg">
              Dallas County Clerk Democratic Primary Runoff
            </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          2026
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="grid gap-6 lg:grid-cols-12">
          <section className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8 md:p-10 lg:col-span-7 xl:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
                  Invest In The Campaign
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Every Dollar
                  <span className="text-[#00a3cc]"> Counts.</span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#003358]/75 md:text-lg">
                  Your contribution helps the campaign reach voters across
                  Dallas County, strengthen outreach, and support a more modern,
                  responsive County Clerk’s office.
                </p>
              </div>

              <div className="rounded-3xl bg-[#003358] px-5 py-4 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                  Trusted Giving
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Secure online donations through Donorbox.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {tiers.map((tier) => (
                <a
                  key={tier.amount}
                  href={donorBoxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[28px] bg-white px-4 py-6 text-center transition-colors hover:bg-[#00a3cc]"
                >
                  <div className="text-2xl font-black tracking-tight text-[#003358] sm:text-3xl group-hover:text-white">
                    {tier.amount}
                  </div>
                  <div className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#007fa0] group-hover:text-white/80">
                    {tier.label}
                  </div>
                </a>
              ))}
            </div>

            <a
              href={donorBoxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex flex-col gap-4 rounded-[32px] bg-[#003358] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                  Secure Donation Link
                </p>
                <p className="mt-2 text-xl font-black uppercase tracking-[0.15em] sm:text-2xl">
                  Continue To Donation
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00a3cc] text-[#003358]">
                <FaArrowRightLong size={22} />
              </div>
            </a>
          </section>

          <aside className="rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 md:p-10 lg:col-span-5 xl:p-12">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Security And Trust
            </p>
            <h3 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              Give With Confidence
            </h3>
            <p className="mt-5 text-base leading-8 text-white/78">
              We want every supporter to feel confident that their contribution
              is secure, compliant, and directly supporting campaign outreach.
            </p>

            <div className="mt-10 space-y-4">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] bg-white/10 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${item.tone}`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-sm font-black uppercase tracking-[0.16em] text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-white/75">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-[28px] bg-[#00a3cc] px-5 py-5 text-[#003358]">
              <FaHandHoldingHeart size={30} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em]">
                  Community Powered
                </p>
                <p className="mt-1 text-sm font-bold leading-6">
                  This campaign is built by people who believe in capable,
                  modern public service.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-[#d6edf5] px-6 py-14">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="rounded-[28px] bg-[#f7fcff] p-6 text-center md:p-8">
            <p className="text-xs font-black uppercase leading-7 tracking-[0.22em] text-[#003358]">
              Political advertisement paid for by the
              <span className="text-[#00a3cc]">
                {" "}
                Damarcus Offord Campaign
              </span>{" "}
              in accordance with election laws.
            </p>
          </div>

          <div className="grid gap-5 text-[11px] font-bold uppercase leading-6 tracking-[0.16em] text-slate-500 md:grid-cols-2">
            <p>
              Contributions or gifts to the campaign are not tax deductible as
              charitable contributions for federal income tax purposes.
            </p>
            <p>
              Texas law requires us to use our best efforts to collect and
              report the name, mailing address, occupation, and employer of
              individuals whose contributions exceed $100 in a reporting period.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonatePage;
