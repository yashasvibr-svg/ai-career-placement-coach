"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "How comfortable are you with Data Structures and Algorithms?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 2,
    question: "How comfortable are you with SQL and databases?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 3,
    question: "How confident are you in technical interviews?",
    options: ["Low", "Medium", "High"],
  },
  {
    id: 4,
    question: "How many technical projects have you completed?",
    options: ["None", "1–2", "3+"],
  },
  {
    id: 5,
    question: "How would you rate your communication skills?",
    options: ["Needs improvement", "Good", "Strong"],
  },
];

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleAnswer(questionId: number, answer: string) {
    setAnswers((current) => ({
      ...current,
      [questionId]: answer,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

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
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
                  >
                    <input
                      type="radio"
                      name={`question-${item.id}`}
                      value={option}
                      checked={answers[item.id] === option}
                      onChange={() => handleAnswer(item.id, option)}
                      className="h-4 w-4"
                    />

                    <span className="text-sm text-slate-700">
                      {option}
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
            Get My Readiness Result
          </button>
        </form>

        {submitted && (
          <section
            aria-live="polite"
            className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5"
          >
            <h2 className="font-semibold text-emerald-900">
              Assessment completed
            </h2>

            <p className="mt-2 text-sm text-emerald-800">
              Your responses have been recorded. In the next stage, we'll
              use these results to generate personalized AI career guidance.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}