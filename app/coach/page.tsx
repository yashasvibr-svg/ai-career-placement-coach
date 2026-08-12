"use client";

import { useState } from "react";

export default function CoachPage() {
  const [score, setScore] = useState("");
  const [readiness, setReadiness] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getGuidance() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: Number(score),
          readiness,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessage(data.message);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to get career guidance."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          AI CAREER COACH
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Get Personalized Career Guidance
        </h1>

        <p className="mt-3 text-slate-600">
          Enter your assessment result to receive personalized placement
          preparation guidance.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="score"
              className="block text-sm font-medium text-slate-700"
            >
              Placement readiness score
            </label>

            <input
              id="score"
              type="number"
              min="0"
              max="100"
              value={score}
              onChange={(event) => setScore(event.target.value)}
              placeholder="Example: 67"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label
              htmlFor="readiness"
              className="block text-sm font-medium text-slate-700"
            >
              Readiness level
            </label>

            <select
              id="readiness"
              value={readiness}
              onChange={(event) => setReadiness(event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
            >
              <option value="">Select your level</option>
              <option value="Strong">Strong</option>
              <option value="Developing">Developing</option>
              <option value="Needs Improvement">
                Needs Improvement
              </option>
            </select>
          </div>

          <button
            type="button"
            onClick={getGuidance}
            disabled={!score || !readiness || loading}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Getting guidance..." : "Get Career Guidance"}
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {message && (
          <section
            aria-live="polite"
            className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5"
          >
            <h2 className="font-semibold text-emerald-900">
              Career Guidance
            </h2>

            <p className="mt-2 text-sm leading-6 text-emerald-800">
              {message}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}