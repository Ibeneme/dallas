import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Synchronized with App.tsx routes
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Biography", path: "/biography" },
    { name: "Endorsements", path: "/endorsements" },
    { name: "Voting Info", path: "/voting-info" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const facebookUrl = "https://www.facebook.com/damarcus.offord";

  return (
    <footer className="bg-[#003358] border-t-[8px] border-[#00a3cc] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-10">
            <Link to="/" className="flex flex-col group w-fit">
              <span className="text-white font-black text-5xl uppercase leading-[0.75] tracking-tighter transition-colors group-hover:text-[#00a3cc]">
                Damarcus
              </span>
              <span className="text-[#00a3cc] font-black text-5xl uppercase leading-[0.75] tracking-tighter transition-colors group-hover:text-white">
                Offord
              </span>
            </Link>

            <div className="space-y-6">
              <p className="text-slate-400 font-bold uppercase text-[11px] tracking-[0.2em] leading-loose max-w-sm">
                Architecting a more efficient, transparent, and modern Dallas
                County Clerk’s Office.
              </p>

              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3 text-[#00a3cc]">
                  <FaLocationDot size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                    Dallas County, TX
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="md:col-span-3 space-y-10">
            <h4 className="text-[#00a3cc] font-black uppercase text-xs tracking-[0.5em] flex items-center">
              <span className="w-8 h-[2px] bg-[#00a3cc] mr-3"></span>
              Blueprint
            </h4>
            <ul className="space-y-5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-white font-bold uppercase text-[12px] tracking-[0.25em] hover:text-[#00a3cc] transition-all"
                  >
                    <FaArrowRightLong className="mr-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00a3cc]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Action & Community */}
          <div className="md:col-span-4 space-y-12">
            <div className="space-y-6">
              <h4 className="text-[#00a3cc] font-black uppercase text-xs tracking-[0.5em] flex items-center">
                <span className="w-8 h-[2px] bg-[#00a3cc] mr-3"></span>
                Engagement
              </h4>
              <Link
                to="/donate"
                className="group flex justify-between items-center bg-[#00a3cc] text-[#003358] px-10 py-6 text-sm font-black uppercase tracking-[0.3em] transition-all hover:bg-white active:scale-[0.98] shadow-[8px_8px_0px_white] hover:shadow-none"
              >
                <span>Donate </span>
                <FaArrowRightLong
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                Official Channels
              </p>
              <div className="flex gap-4">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 border-2 border-white/10 flex items-center justify-center text-xl hover:bg-[#00a3cc] hover:text-[#003358] hover:border-[#00a3cc] transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <Link
                  to="/privacy"
                  className="w-14 h-14 bg-white/5 border-2 border-white/10 flex items-center justify-center text-xl hover:bg-[#00a3cc] hover:text-[#003358] hover:border-[#00a3cc] transition-all"
                  aria-label="Compliance"
                >
                  <MdOutlineSecurity />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Branding Foot */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="order-2 md:order-1 space-y-2 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
              © {currentYear} Damarcus Offord Campaign
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700">
              Structural Integrity in Leadership
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="border-[4px] border-slate-600 px-8 py-4 bg-[#002642]">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-300">
                Paid for by the Damarcus Offord Campaign
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-white/5 leading-none select-none -mr-10 -mt-10 pointer-events-none">
        CLERK
      </div>
    </footer>
  );
};

export default Footer;
