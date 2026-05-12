import React from "react";
import {
  FaShieldHalved,
  FaFileContract,
  FaUserCheck,
  FaCubesStacked,
  FaEnvelope,
  FaScaleBalanced,
  FaArrowRightLong,
  FaMobileScreenButton,
  FaLock,
} from "react-icons/fa6";

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "May 2026";

  return (
    <div className="min-h-screen bg-white font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b-[10px] border-[#00a3cc] bg-[#003358] px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
            <FaCubesStacked className="text-[#00a3cc]" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em]">
              Voter Privacy Protocol
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-black uppercase leading-[0.85] tracking-tight sm:text-6xl md:text-8xl">
                Privacy
                <br />
                <span className="text-[#00a3cc]">Policy.</span>
              </h1>

              <div className="mt-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#7eddf4]">
                <FaFileContract className="text-[#00a3cc]" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-white/10 p-6 sm:p-8 backdrop-blur-sm border border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                Official Statement
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Damarcus Offord for County Clerk is a campaign supporting
                Damarcus Offord's candidacy for Dallas County Clerk. This
                Privacy Policy explains how we collect, use, and protect
                information submitted through this website.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          DATA
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        {/* Section: Information Collection */}
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-10">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#00a3cc]">
                Section 01
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#003358] sm:text-5xl">
                Information
                <br />
                We Collect
              </h2>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#f7fcff] border border-[#e3f2f9] p-8 md:p-12 lg:col-span-8">
            <p className="text-lg leading-8 text-[#003358]/80">
              When you sign up to receive updates, sign a petition, or take
              action through this site, we may collect your{" "}
              <span className="font-bold text-[#003358]">
                name, email address, phone number, and ZIP code.
              </span>{" "}
              We may also collect basic technical information such as browser
              type and IP address through standard website analytics.
            </p>
          </div>
        </section>

        {/* Section: How We Use Information */}
        <section className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-10">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#00a3cc]">
                Section 02
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#003358] sm:text-5xl">
                How We Use
                <br />
                Information
              </h2>
            </div>
          </div>

          <div className="rounded-[40px] bg-[#003358] p-8 text-white md:p-12 lg:col-span-8 shadow-xl shadow-[#003358]/10">
            <p className="text-lg leading-8 text-white/80">
              We use your information to send campaign updates, share
              information about Damarcus Offord's candidacy, and coordinate
              volunteer and civic engagement activities.{" "}
              <span className="font-bold text-[#7eddf4]">
                We do not sell your personal information to any third party.
              </span>
            </p>
          </div>
        </section>

        {/* Section: Text Messaging */}
        <section className="mt-12 rounded-[40px] bg-[#e6f7ff] border border-[#bde4f7] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#00a3cc] text-white">
              <FaMobileScreenButton size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#003358] sm:text-4xl">
                Text Messaging
              </h2>
              <div className="mt-6 space-y-6 text-sm leading-8 text-[#003358]/80 sm:text-base">
                <p>
                  If you opt in to receive text messages from the Damarcus
                  Offord campaign, your information will be used solely to send
                  campaign-related communications.
                </p>
                <div className="rounded-2xl bg-white p-6 border border-[#bde4f7]">
                  <p className="font-bold text-[#003358]">
                    Text Messaging Opt-In Data:
                  </p>
                  <p className="mt-2">
                    We will not share or sell your text messaging opt-in data,
                    consent, or related personal information with any third
                    parties, unless required by law. Message and data rates may
                    apply. You can opt out at any time by replying STOP to any
                    message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Sharing & Security */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[40px] bg-[#f7fcff] border border-[#e3f2f9] p-8 md:p-10">
            <div className="flex items-center gap-4 text-[#00a3cc]">
              <FaShieldHalved size={24} />
              <h3 className="text-xl font-black uppercase tracking-tight">
                Sharing of Information
              </h3>
            </div>
            <p className="mt-6 text-sm leading-8 text-[#003358]/70">
              We do not sell, rent, or trade your personal information. We may
              share information with vendors and service providers who assist in
              operating this website and campaign communications — those parties
              are bound to use your data only in support of our campaign
              activities. We may also disclose information if required by law or
              in response to a valid legal process.
            </p>
          </div>

          <div className="rounded-[40px] bg-white border border-slate-100 p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#00a3cc]">
              <FaLock size={24} />
              <h3 className="text-xl font-black uppercase tracking-tight text-[#003358]">
                Data Security
              </h3>
            </div>
            <p className="mt-6 text-sm leading-8 text-[#003358]/70">
              We take reasonable precautions to protect your information from
              unauthorized access, disclosure, or misuse. No data transmission
              over the internet is completely secure, but we use standard
              practices to safeguard the information you provide.
            </p>
          </div>
        </div>

        {/* Section: Your Choices */}
        <section className="mt-12 rounded-[40px] bg-gradient-to-br from-[#003358] to-[#004a80] p-8 md:p-12 text-white">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Your Choices
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/70">
                You may unsubscribe from email communications at any time by
                clicking the unsubscribe link in any message. To opt out of text
                messages, reply STOP. To request that your information be
                removed from our records, contact us at the email address below.
              </p>
            </div>
            <div className="shrink-0">
              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
                  Contact
                </p>
                <a
                  href="mailto:info@votedamarcus.com"
                  className="mt-2 block text-xl font-black text-[#00a3cc] hover:text-[#7eddf4] transition-colors sm:text-2xl"
                >
                  info@votedamarcus.com
                </a>
                <p className="mt-4 text-[10px] leading-relaxed text-white/50 max-w-[200px]">
                  For questions about this policy or your information, contact
                  us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-12 pt-12">
        <div className="mx-auto max-w-7xl border-t border-[#d6edf5] pt-8 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003358]/45">
            Paid for by the Damarcus Offord Campaign
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
