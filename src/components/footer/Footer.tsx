import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Biography", path: "/biography" },
    { name: "Endorsements", path: "/endorsements" },
    { name: "Voting Info", path: "/voting-info" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const facebookUrl = "https://www.facebook.com/share/1CkPGR9r3q/?mibextid=wwXIfr";

  return (
    <footer className="relative overflow-hidden bg-[#003358] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,163,204,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute right-0 top-0 select-none text-[7rem] font-black leading-none text-white/5 sm:text-[10rem] md:text-[13rem] lg:text-[16rem]">
        CLERK
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 md:pb-14 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex flex-col leading-[0.82]">
              <span className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                Damarcus
              </span>
              <span className="text-4xl font-black uppercase tracking-tight text-[#00a3cc] sm:text-5xl">
                Offord
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/72">
              Building a more efficient, transparent, and modern Dallas County
              Clerk’s Office with service that works for every resident.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-white">
              <FaLocationDot className="text-[#00a3cc]" />
              <span>Dallas County, TX</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Explore
            </p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center justify-between rounded-[24px]  px-4 py-4 text-sm font-black uppercase tracking-[0.16em] text-white/90 transition-colors hover:bg-white hover:text-[#003358]"
                >
                  <span>{link.name}</span>
                  <FaArrowRightLong className="text-[#00a3cc] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
              Engage
            </p>

            <div className="mt-5 rounded-[32px] bg-white/10 p-5">
              <p className="text-sm leading-7 text-white/78">
                Support the campaign, stay connected, and follow official
                updates across our public channels.
              </p>

              <Link
                to="/donate"
                className="mt-5 flex items-center justify-between rounded-full bg-[#00a3cc] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#003358] transition-colors hover:bg-white"
              >
                <span>Donate</span>
                <FaArrowRightLong size={18} />
              </Link>

              <div className="mt-5 flex gap-3">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#003358] transition-colors hover:bg-[#00a3cc]"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <Link
                  to="/privacy"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white hover:text-[#003358]"
                  aria-label="Privacy Policy"
                >
                  <MdOutlineSecurity />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">
              © {currentYear} Damarcus Offord Campaign
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
              Built around service, accountability, and trust.
            </p>
          </div>

          <div className="rounded-full border border-white/12 bg-[#002642] px-6 py-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/78">
              Paid for by the Damarcus Offord Campaign
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
