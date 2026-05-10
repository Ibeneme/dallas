import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Biography", path: "/biography" },
    { name: "Endorsements", path: "/endorsements" },
    { name: "Voting Info", path: "/voting-info" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
  ];

  const facebookUrl = "https://www.facebook.com/damarcus.offord";

  return (
    <nav className="sticky top-0 z-[100] border-b border-white/10 bg-[#003358]/95 text-white backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[88px] items-center justify-between gap-6">
          <Link to="/" className="shrink-0">
            <div className="flex flex-col leading-[0.82]">
              <span className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Damarcus
              </span>
              <span className="text-2xl font-black uppercase tracking-tight text-[#00a3cc] sm:text-3xl">
                Offord
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`rounded-full px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "bg-white text-[#003358]"
                      : "text-white/88 hover:bg-white/10 hover:text-[#7eddf4]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-[#00a3cc] hover:text-[#003358]"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>

            <Link
              to="/donate"
              className="ml-2 rounded-full bg-[#00a3cc] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#003358] transition-colors hover:bg-white"
            >
              Donate
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#002642] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-[24px] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] ${
                    isActive
                      ? "bg-white text-[#003358]"
                      : "bg-white/5 text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-full bg-[#00a3cc] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-[#003358]"
              >
                Donate Now
              </Link>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
              >
                <FaFacebookF className="text-[#00a3cc]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
