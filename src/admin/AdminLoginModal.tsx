import React, { useState } from "react";
import { supabase } from "../supabase";

type Props = {
  onSuccess: () => void;
};

const AdminLoginPage: React.FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Incorrect email or password. Please try again.");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-[#eaf9ff] px-6 py-16 text-[#003358]">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-white">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#003358] px-8 py-10 text-white md:px-10 md:py-12">
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#7eddf4]">
              Protected Campaign Access
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
              Sign In To View Submissions
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/78">
              This page is restricted to approved campaign administrators. Sign
              in with your authorized email and password to continue.
            </p>

            <div className="mt-8 rounded-[28px] bg-white/10 p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#7eddf4]">
                Secure Access
              </p>
              <p className="mt-3 text-sm leading-7 text-white/78">
                Access is verified through Supabase Authentication and protected
                by row level security policies before any submissions are
                returned.
              </p>
            </div>
          </div>

          <div className="px-8 py-10 md:px-10 md:py-12">
            <h2 className="text-2xl font-black uppercase text-[#003358]">
              Admin Login
            </h2>
            <p className="mt-2 text-sm text-[#003358]/68">
              Enter your admin credentials to continue.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.25em] text-[#007fa0]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-3xl bg-[#eef8fd] px-5 py-4 text-sm text-[#003358] outline-none placeholder:text-[#003358]/35"
                  required
                />
              </div>

              <div>
                <label className="mb-3 block text-[11px] font-black uppercase tracking-[0.25em] text-[#007fa0]">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-3xl bg-[#eef8fd] px-5 py-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#003358] outline-none placeholder:text-[#003358]/35"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="shrink-0 text-[11px] font-black uppercase tracking-[0.18em] text-[#007fa0]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {errorMessage ? (
                <div className="rounded-3xl bg-[#ffe5e5] px-4 py-3 text-sm font-bold text-[#8a1c1c]">
                  {errorMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#00a3cc] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white disabled:opacity-60"
              >
                {isLoading ? "Signing In" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
