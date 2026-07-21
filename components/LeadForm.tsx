"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Something went wrong. Try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="lead-form" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_minmax(0,440px)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">
              Get started
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Tell us about your team, we&apos;ll map a track to it.
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">
              A program consultant responds within one business day with a
              proposed track, cohort size, and timeline.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-line p-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <Field label="Work email" name="email" type="email" required />
              <Field label="Full name" name="name" type="text" required />
              <Field label="Company" name="company" type="text" required />
              <Field
                label="Team size"
                name="teamSize"
                type="text"
                placeholder="e.g. 25-50"
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-soft"
                >
                  What are you trying to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-ink"
                  placeholder="e.g. Upskilling 30 engineers on cloud infra this quarter"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-slate disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Request a proposal"}
            </button>

            {status === "success" && (
              <p className="mt-3 text-sm text-teal">
                Thanks — a program consultant will reach out shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-700">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium uppercase tracking-[0.1em] text-ink-soft"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-ink"
      />
    </div>
  );
}
