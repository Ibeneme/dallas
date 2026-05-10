import React, { useEffect, useState } from "react";
import AdminLoginPage from "./AdminLoginModal";
import { supabase } from "../supabase";

type Submission = {
  id: number;
  created_at: string;
  help_options: string[];
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  sms_consent: boolean;
  street_address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  message: string | null;
};

const PAGE_SIZE = 500;

const SubmissionsPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [pageError, setPageError] = useState("");

  const loadAllSubmissions = async () => {
    setIsLoading(true);
    setPageError("");

    try {
      let from = 0;
      let hasMore = true;
      const allRows: Submission[] = [];

      while (hasMore) {
        const { data, error } = await supabase
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false })
          .range(from, from + PAGE_SIZE - 1);

        if (error) {
          throw error;
        }

        const rows = (data ?? []) as Submission[];
        allRows.push(...rows);

        if (rows.length < PAGE_SIZE) {
          hasMore = false;
        } else {
          from += PAGE_SIZE;
        }
      }

      setSubmissions(allRows);
    } catch (error: any) {
      setSubmissions([]);
      setPageError(
        error?.message ||
          "We could not load submissions. Please try signing in again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const initializePage = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (!isMounted) return;

        if (error) {
          setPageError("We could not verify your session.");
          setIsAuthenticated(false);
          return;
        }

        if (!session?.user) {
          setIsAuthenticated(false);
          return;
        }

        setIsAuthenticated(true);
        await loadAllSubmissions();
      } finally {
        if (isMounted) {
          setIsCheckingAccess(false);
        }
      }
    };

    initializePage();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;

      if (!session?.user) {
        setIsAuthenticated(false);
        setSubmissions([]);
        setIsCheckingAccess(false);
        return;
      }

      setIsAuthenticated(true);
      setIsCheckingAccess(false);
      loadAllSubmissions();
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const handleSignedIn = async () => {
    setIsAuthenticated(true);
    setIsCheckingAccess(false);
    await loadAllSubmissions();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSubmissions([]);
    setIsAuthenticated(false);
    setPageError("");
  };

  if (isCheckingAccess) {
    return (
      <div className="min-h-screen bg-[#eaf9ff] px-6 py-16 text-[#003358]">
        <div className="mx-auto max-w-3xl rounded-[28px] bg-white p-10 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#bfefff] border-t-[#00a3cc]" />
          <h1 className="mt-6 text-2xl font-black uppercase">
            Checking Access
          </h1>
          <p className="mt-3 text-sm text-[#003358]/70">
            Please wait while we verify your admin session.
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLoginPage onSuccess={handleSignedIn} />;
  }

  return (
    <div className="min-h-screen bg-[#eaf9ff] px-6 py-10 text-[#003358]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-[28px] bg-[#003358] p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#7eddf4]">
                Protected Campaign Inbox
              </p>
              <h1 className="mt-3 text-4xl font-black uppercase tracking-tight md:text-5xl">
                Submissions
              </h1>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Review supporter requests, volunteer outreach, event
                invitations, and campaign messages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={loadAllSubmissions}
                disabled={isLoading}
                className="rounded-full bg-white px-5 py-3 text-sm font-black uppercase text-[#003358] disabled:opacity-60"
              >
                {isLoading ? "Refreshing" : "Refresh"}
              </button>

              <button
                onClick={handleSignOut}
                className="rounded-full bg-[#00a3cc] px-5 py-3 text-sm font-black uppercase text-white"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {pageError ? (
          <div className="mb-6 rounded-[28px] bg-[#ffe5e5] p-6 text-[#8a1c1c]">
            <h2 className="text-lg font-black uppercase">Unable To Load</h2>
            <p className="mt-2 text-sm leading-6">{pageError}</p>
          </div>
        ) : null}

        {isLoading ? (
          <div className="rounded-[28px] bg-white p-12 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#bfefff] border-t-[#00a3cc]" />
            <h2 className="mt-6 text-2xl font-black uppercase">
              Loading Submissions
            </h2>
            <p className="mt-3 text-sm text-[#003358]/70">
              Fetching records from the campaign inbox.
            </p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="rounded-[28px] bg-white p-12 text-center">
            <h2 className="text-2xl font-black uppercase">
              No Submissions Yet
            </h2>
            <p className="mt-3 text-sm text-[#003358]/70">
              No contact form entries have been received yet.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 rounded-[28px] bg-[#cfefff] px-6 py-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007fa0]">
                Total Records: {submissions.length}
              </p>
            </div>

            <div className="grid gap-5">
              {submissions.map((item) => {
                const location = [
                  item.street_address,
                  item.city,
                  item.state,
                  item.zip_code,
                ]
                  .filter(Boolean)
                  .join(", ");

                return (
                  <article
                    key={item.id}
                    className="rounded-[28px] bg-white p-6"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#007fa0]">
                          Submission #{item.id}
                        </p>
                        <h2 className="mt-2 text-2xl font-black uppercase tracking-tight">
                          {item.first_name} {item.last_name}
                        </h2>
                        <p className="mt-2 text-sm text-[#003358]/65">
                          {new Date(item.created_at).toLocaleString()}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.help_options?.length ? (
                          item.help_options.map((option) => (
                            <span
                              key={option}
                              className="rounded-full bg-[#dff7ff] px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#007fa0]"
                            >
                              {option}
                            </span>
                          ))
                        ) : (
                          <span className="rounded-full bg-[#eef6fa] px-3 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#6b7f8c]">
                            No selection
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-3xl bg-[#f7fcff] p-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#007fa0]">
                          Contact Details
                        </p>
                        <div className="mt-3 space-y-2 text-sm">
                          <p>
                            <span className="font-black">Email:</span>{" "}
                            {item.email}
                          </p>
                          <p>
                            <span className="font-black">Phone:</span>{" "}
                            {item.phone || "Not provided"}
                          </p>
                          <p>
                            <span className="font-black">SMS Consent:</span>{" "}
                            {item.sms_consent ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-[#f7fcff] p-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#007fa0]">
                          Location
                        </p>
                        <div className="mt-3 text-sm">
                          {location || "Not provided"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-3xl bg-[#f7fcff] p-4">
                      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#007fa0]">
                        Message
                      </p>
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-7">
                        {item.message || "No message provided"}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmissionsPage;
