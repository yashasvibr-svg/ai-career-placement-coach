"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How comfortable are you with Data Structures and Algorithms?",
    options: [
      { label: "Beginner", score: 1 },
      { label: "Intermediate", score: 2 },
      { label: "Advanced", score: 3 },
    ],
  },
  {
    id: 2,
    question: "How comfortable are you with SQL and databases?",
    options: [
      { label: "Beginner", score: 1 },
      { label: "Intermediate", score: 2 },
      { label: "Advanced", score: 3 },
    ],
  },
  {
    id: 3,
    question: "How confident are you in technical interviews?",
    options: [
      { label: "Low", score: 1 },
      { label: "Medium", score: 2 },
      { label: "High", score: 3 },
    ],
  },
  {
    id: 4,
    question: "How many technical projects have you completed?",
    options: [
      { label: "None", score: 1 },
      { label: "1–2", score: 2 },
      { label: "3+", score: 3 },
    ],
  },
  {
    id: 5,
    question: "How would you rate your communication skills?",
    options: [
      { label: "Needs improvement", score: 1 },
      { label: "Good", score: 2 },
      { label: "Strong", score: 3 },
    ],
  },
];

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleAnswer(questionId: number, score: number) {
    setAnswers((current) => ({
      ...current,
      [questionId]: score,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const totalScore = Object.values(answers).reduce(
    (total, score) => total + score,
    0
  );

  const percentage = Math.round((totalScore / 15) * 100);

  let readiness = "";

  if (percentage >= 80) {
    readiness = "Strong";
  } else if (percentage >= 60) {
    readiness = "Developing";
  } else {
    readiness = "Needs Improvement";
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-blue-600">
          PLACEMENT READINESS
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Placement Assessment
        </h1>

        <p className="mt-3 text-slate-600">
          Answer these questions honestly to understand your current
          placement preparation level.
        </p>

        <p className="mt-4 text-sm font-medium text-slate-500">
          {answeredCount} of {questions.length} questions answered
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          {questions.map((item) => (
            <fieldset
              key={item.id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <legend className="px-1 font-semibold text-slate-900">
                {item.id}. {item.question}
              </legend>

              <div className="mt-4 space-y-3">
                {item.options.map((option) => (
                  <label
                    key={option.label}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name={`question-${item.id}`}
                      value={option.score}
                      checked={answers[item.id] === option.score}
                      onChange={() =>
                        handleAnswer(item.id, option.score)
                      }
                      className="h-4 w-4"
                    />

                    <span className="text-sm text-slate-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          <button
            type="submit"
            disabled={!allAnswered}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Calculate Readiness
          </button>
        </form>

        {submitted && (
          <section
            aria-live="polite"
            className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6"
          >
            <p className="text-sm font-semibold text-blue-600">
              YOUR RESULT
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {readiness}
            </h2>

            <p className="mt-2 text-slate-700">
              Your placement readiness score is{" "}
              <strong>{percentage}%</strong>.
            </p>

            <p className="mt-3 text-sm text-slate-600">
              Use this result as a starting point. The AI Career Coach will
              later use your assessment to recommend personalized preparation
              areas.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}