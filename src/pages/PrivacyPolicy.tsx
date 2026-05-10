import React from "react";
import {
  FaShieldHalved,
  FaFileContract,
  FaUserCheck,
  FaCubesStacked,
  FaEnvelope,
  FaScaleBalanced,
  FaArrowRightLong,
} from "react-icons/fa6";

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = "August 8, 2024";

  return (
    <div className="min-h-screen bg-white font-sans text-[#003358] selection:bg-[#00a3cc] selection:text-white">
      <header className="relative overflow-hidden border-b-[10px] border-[#00a3cc] bg-[#003358] px-6 pb-16 pt-24 text-white md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3">
            <FaCubesStacked className="text-[#00a3cc]" />
            <span className="text-[11px] font-black uppercase tracking-[0.35em]">
              Governance Protocol
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
                <span>Effective Date: {effectiveDate}</span>
              </div>
            </div>

            <div className="rounded-[32px] bg-white/10 p-6 sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                Campaign Commitment
              </p>
              <p className="mt-3 text-sm leading-8 text-white/78">
                This campaign is committed to protecting visitor information and
                handling campaign-related data responsibly and transparently.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          LEGAL
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <section className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8 md:p-10">
          <p className="max-w-4xl text-lg font-bold leading-8 text-[#003358] sm:text-xl md:text-2xl">
            This campaign is committed to protecting the privacy of visitors and
            users of this website. By accessing and using this site, you consent
            to the terms of this Privacy Policy.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 lg:col-span-4">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Section 01
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              Information Collection
            </h2>
          </div>

          <div className="space-y-5 lg:col-span-8">
            <div className="rounded-[28px] bg-white p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#007fa0]">
                Personal Information
              </h3>
              <p className="mt-3 text-sm leading-8 text-[#003358]/72">
                We may collect personal information you voluntarily provide,
                including your name, email address, mailing address, and phone
                number when you submit forms through this website.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#cfefff] p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#007fa0]">
                Sms Opt In Data
              </h3>
              <p className="mt-3 text-sm leading-8 text-[#003358]/72">
                If you choose to opt in to receive text messages, we collect
                your phone number and your consent information. This data is
                used only for campaign-related communication and compliance.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#007fa0]">
                Technical Logs
              </h3>
              <p className="mt-3 text-sm leading-8 text-[#003358]/72">
                We may automatically collect limited technical information such
                as IP address, browser type, device information, and usage
                patterns to improve performance and site reliability.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 lg:col-span-4">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Section 02
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              How Information Is Used
            </h2>
          </div>

          <div className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8 lg:col-span-8">
            <div className="grid gap-4">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <FaArrowRightLong className="mt-1 text-[#00a3cc]" />
                <p className="text-sm font-bold uppercase leading-7 tracking-[0.14em] text-[#003358]">
                  Respond to direct inquiries and submitted contact requests
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <FaArrowRightLong className="mt-1 text-[#00a3cc]" />
                <p className="text-sm font-bold uppercase leading-7 tracking-[0.14em] text-[#003358]">
                  Send campaign updates, newsletters, and relevant outreach
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <FaArrowRightLong className="mt-1 text-[#00a3cc]" />
                <p className="text-sm font-bold uppercase leading-7 tracking-[0.14em] text-[#003358]">
                  Monitor and improve website performance and visitor experience
                </p>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-4">
                <FaArrowRightLong className="mt-1 text-[#00a3cc]" />
                <p className="text-sm font-bold uppercase leading-7 tracking-[0.14em] text-[#003358]">
                  Comply with campaign reporting rules and legal obligations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[32px] bg-[#003358] p-6 text-white sm:p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <FaShieldHalved className="text-3xl text-[#00a3cc]" />
                <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                  Sharing Protocol
                </h2>
              </div>

              <div className="mt-8 space-y-6">
                <div className="rounded-[28px] bg-white/10 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#7eddf4]">
                    General Information
                  </p>
                  <p className="mt-3 text-sm leading-8 text-white/78">
                    We do not share, sell, rent, or otherwise disclose your
                    personal information to third parties except where required
                    by law or where disclosure is necessary for campaign
                    operations and compliance.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[#00a3cc] p-5 text-[#003358]">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em]">
                    Sms Data Protection
                  </p>
                  <p className="mt-3 text-sm leading-8">
                    We do not share or sell your text messaging opt in data,
                    consent data, or related personal information with third
                    parties unless required by law.
                  </p>
                </div>
              </div>
            </div>

            <FaScaleBalanced className="hidden text-[7rem] text-white/8 lg:block" />
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#007fa0]">
              Data Security
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#003358]/72">
              We use industry-standard security measures to protect information
              submitted through this website. However, no internet transmission
              or storage system can be guaranteed to be completely secure.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#f7fcff] p-6 sm:p-8">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#007fa0]">
              External Links
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#003358]/72">
              This website may contain links to third-party services or
              websites. We are not responsible for the content, practices, or
              privacy policies of those external sites.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FaUserCheck className="text-[#00a3cc]" />
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#007fa0]">
                Minor Protection
              </h3>
            </div>
            <p className="mt-4 text-sm leading-8 text-[#003358]/72">
              This site is not intended for children under the age of 13. We do
              not knowingly collect personal information from minors, and if we
              learn that such information has been collected, we will take steps
              to remove it.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#cfefff] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#00a3cc]" />
              <h3 className="text-sm font-black uppercase tracking-[0.22em] text-[#007fa0]">
                Contact And Updates
              </h3>
            </div>
            <p className="mt-4 text-sm leading-8 text-[#003358]/72">
              This policy may be updated from time to time by posting a revised
              version on this website. If you have questions about this policy
              or how your information is handled, please contact the campaign
              directly.
            </p>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-12 pt-12">
        <div className="mx-auto max-w-7xl border-t border-[#d6edf5] pt-8 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003358]/45">
            Damarcus Offord Campaign Integrity Node 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
