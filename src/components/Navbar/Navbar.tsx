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
    { name: "Privacy", path: "/privacy" }, // NEW: Added to the blueprint
  ];

  const facebookUrl = "https://www.facebook.com/damarcus.offord";

  return (
    <nav className="bg-[#003358] border-b-[6px] border-[#00a3cc] sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="group flex flex-col">
              <span className="text-white font-black text-3xl uppercase leading-[0.8] tracking-tighter transition-colors group-hover:text-[#00a3cc]">
                Damarcus
              </span>
              <span className="text-[#00a3cc] font-black text-3xl uppercase leading-[0.8] tracking-tighter transition-colors group-hover:text-white">
                Offord
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-200
                    ${
                      isActive
                        ? "text-[#00a3cc] bg-white/5"
                        : "text-white hover:text-[#00a3cc] hover:bg-white/5"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00a3cc]" />
                  )}
                </Link>
              );
            })}

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 text-white hover:text-[#00a3cc] transition-colors border-l border-white/10 ml-2"
            >
              <FaFacebookF size={16} />
            </a>

            <Link
              to="/donate"
              className="ml-4 bg-[#00a3cc] text-[#003358] px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-200 border-4 border-[#00a3cc] hover:bg-transparent hover:text-white"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 border-2 border-white/10"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#002642] border-t-4 border-[#00a3cc] fixed inset-0 top-24 z-[99] flex flex-col p-8 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-[#00a3cc] py-4 text-2xl font-black uppercase tracking-tighter border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 pb-12 space-y-6">
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block bg-[#00a3cc] text-[#003358] py-6 text-center text-xl font-black uppercase tracking-[0.4em] shadow-[8px_8px_0px_white]"
            >
              Donate Now
            </Link>

            <a
              href={facebookUrl}
              className="flex items-center justify-center space-x-4 text-white font-black uppercase tracking-widest text-xs"
            >
              <FaFacebookF className="text-[#00a3cc]" />
              <span>Follow the Campaign</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
