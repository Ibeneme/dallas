import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSquareCheck, FaCubesStacked } from "react-icons/fa6";
import { supabase } from "../supabase";

const ContactPage: React.FC = () => {
  const initialFormData = {
    helpOptions: [] as string[],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    message: "",
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState(initialFormData);

  const helpOptions = [
    "I endorse Damarcus Offord for County Clerk",
    "I want a yard sign installed",
    "I want to volunteer and would like to be contacted",
    "I want to host a fundraiser",
    "I want to host a community event",
    "I want to invite Damarcus Offord to speak",
    "Other",
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      helpOptions: prev.helpOptions.includes(option)
        ? prev.helpOptions.filter((item) => item !== option)
        : [...prev.helpOptions, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const { error } = await supabase.from("contact_submissions").insert({
      help_options: formData.helpOptions,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      sms_consent: formData.smsConsent,
      street_address: formData.streetAddress || null,
      city: formData.city || null,
      state: formData.state || null,
      zip_code: formData.zipCode || null,
      message: formData.message || null,
    });

    setIsSubmitting(false);

    if (error) {
      if (error.code === "42501") {
        setSubmitError(
          "This form is currently blocked by Supabase security rules. Update the insert policy to allow anon and authenticated users."
        );
      } else {
        setSubmitError(
          error.message || "There was a problem sending your message."
        );
      }
      return;
    }

    setFormData(initialFormData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#dff7ff] text-[#003358]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-[28px] bg-[#bfefff] p-8 md:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a3cc] text-white">
              <FaSquareCheck size={28} />
            </div>

            <p className="mt-6 text-[11px] font-black uppercase tracking-[0.3em] text-[#007fa0]">
              Submission Confirmed
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-[#003358] md:text-6xl">
              Message Received
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#003358]/80">
              Your message has been logged into the campaign system. A member of
              the team will follow up with you soon.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setSubmitError("");
              }}
              className="mt-8 inline-flex rounded-full bg-[#00a3cc] px-8 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-white"
            >
              Return to Contact Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eaf9ff] text-[#003358]">
      <div className="bg-[linear-gradient(to_bottom,rgba(0,163,204,0.08),transparent_28%),linear-gradient(to_right,rgba(0,51,88,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,51,88,0.05)_1px,transparent_1px)] [background-size:100%_100%,32px_32px,32px_32px]">
        <header className="bg-[#003358] text-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#7eddf4]">
                  Campaign Contact
                </p>
                <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
                  Join The
                  <br />
                  <span className="text-[#00a3cc]">Movement.</span>
                </h1>
              </div>

              <div className="rounded-[28px] bg-[#00446f] p-6">
                <div className="flex items-center gap-3">
                  <FaCubesStacked className="text-[#00a3cc]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.28em]">
                    Secure Campaign Channel
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Submit volunteer requests, event invitations, endorsements, and
                  outreach through the submission form below.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <section className="rounded-[28px] bg-[#cfefff] p-6 md:p-8">
              <h2 className="text-sm font-black uppercase tracking-[0.25em] text-[#007fa0]">
                Volunteer Opportunities
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {helpOptions.map((option) => {
                  const checked = formData.helpOptions.includes(option);

                  return (
                    <label
                      key={option}
                      className={`cursor-pointer rounded-3xl p-5 ${
                        checked
                          ? "bg-[#00a3cc] text-white"
                          : "bg-white text-[#003358]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleCheckboxChange(option)}
                        className="sr-only"
                      />

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className={`text-[10px] font-black uppercase tracking-[0.25em] ${
                              checked ? "text-white/80" : "text-[#007fa0]"
                            }`}
                          >
                            {checked ? "Selected" : "Available"}
                          </span>
                          <p className="mt-3 text-sm font-bold leading-6">
                            {option}
                          </p>
                        </div>

                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                            checked
                              ? "bg-[#003358] text-[#00a3cc]"
                              : "bg-[#dff7ff] text-[#003358]"
                          }`}
                        >
                          <FaSquareCheck size={16} />
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[28px] bg-[#cfefff] p-6 md:p-8">
              <h2 className="text-sm font-black uppercase tracking-[0.25em] text-[#007fa0]">
                Contact Information
              </h2>

              <div className="mt-6 space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <GhostInput
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                    value={formData.firstName}
                    onChange={(v: string) =>
                      handleInputChange("firstName", v)
                    }
                  />
                  <GhostInput
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                    value={formData.lastName}
                    onChange={(v: string) => handleInputChange("lastName", v)}
                  />
                  <GhostInput
                    label="Email Address"
                    placeholder="Enter your email address"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(v: string) => handleInputChange("email", v)}
                  />
                  <GhostInput
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(v: string) => handleInputChange("phone", v)}
                  />
                </div>

                <label className="flex items-start gap-4 rounded-3xl bg-white p-4">
                  <input
                    type="checkbox"
                    checked={formData.smsConsent}
                    onChange={(e) =>
                      handleInputChange("smsConsent", e.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[#00a3cc]"
                  />
                  <span className="text-sm leading-6 text-[#003358]/80">
                    By providing your telephone number and checking this box,
                    you consent to receive calls and text messages. Message
                    and data rates may apply. Message frequency may vary.
                    Messaging may include requests for donation. Reply STOP to
                    opt out and HELP for help.{" "}
                    <Link
                      to="/privacy"
                      className="font-black uppercase text-[#007fa0]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </section>

            <section className="rounded-[28px] bg-[#cfefff] p-6 md:p-8">
              <h2 className="text-sm font-black uppercase tracking-[0.25em] text-[#007fa0]">
                Message
              </h2>

              <div className="mt-6">
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Enter your message here"
                  className="w-full rounded-3xl bg-white px-4 py-4 text-sm text-[#003358] outline-none placeholder:text-[#003358]/40"
                />
              </div>
            </section>

            {submitError ? (
              <div className="rounded-3xl bg-[#ffe5e5] px-5 py-4 text-sm font-bold text-[#8a1c1c]">
                {submitError}
              </div>
            ) : null}

            <button
              disabled={isSubmitting}
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#00a3cc] px-8 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white disabled:opacity-70"
            >
              {isSubmitting ? "Submitting Message" : "Submit Message"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

const GhostInput = ({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder = "",
}: any) => {
  const id = React.useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-[11px] font-black uppercase tracking-[0.25em] text-[#007fa0]"
      >
        {label} {required && <span className="text-[#003358]">Required</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-3xl bg-white px-4 py-3 text-sm text-[#003358] outline-none placeholder:text-[#003358]/40"
      />
    </div>
  );
};

export default ContactPage;
