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

  const facebookUrl = "https://www.facebook.com/share/1CkPGR9r3q/?mibextid=wwXIfr";

  return (
    <nav className="sticky top-0 z-[100] bg-[#002f5a]/95 text-white backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[88px] items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <div className="flex flex-col leading-[0.82]">
              <span className="text-3xl font-black uppercase tracking-tighter text-white">
                Damarcus
              </span>
              <span className="text-3xl font-black uppercase tracking-tighter text-[#00e0ff]">
                Offord
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.125em] transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#002f5a] shadow-lg"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-[#00e0ff] hover:text-[#002f5a]"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="ml-2 rounded-full bg-[#00e0ff] px-8 py-3 text-xs font-black uppercase tracking-[0.125em] text-[#002f5a] transition-all hover:bg-white hover:shadow-lg"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white lg:hidden transition-all active:scale-95"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#002642] lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-6 py-5 text-base font-black uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-white text-[#002f5a]"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl bg-[#00e0ff] py-5 text-center text-base font-black uppercase tracking-widest text-[#002f5a]"
              >
                Donate Now
              </Link>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 py-5 text-base font-black uppercase tracking-widest text-white"
              >
                <FaFacebookF className="text-[#00e0ff]" size={20} />
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
