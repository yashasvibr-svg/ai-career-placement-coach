import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { score, readiness } = body;

    // Validate input
    if (typeof score !== "number" || !readiness) {
      return NextResponse.json(
        {
          error: "Assessment information is required.",
        },
        {
          status: 400,
        }
      );
    }

    // Keep score within a valid range
    const safeScore = Math.max(0, Math.min(100, score));

    let guidance = "";

    if (safeScore >= 80) {
      guidance = `
Your readiness score of ${safeScore}% shows that you have a strong
foundation for software engineering placements.

Priority areas:
1. Strengthen DSA and problem-solving speed.
2. Practice technical interview questions.
3. Improve project explanation and communication.

7-Day Action Plan:
Day 1: Solve 3 array and string problems.
Day 2: Practice linked-list and stack problems.
Day 3: Revise DBMS and SQL.
Day 4: Revise operating systems and computer networks.
Day 5: Practice one coding interview.
Day 6: Review your projects and prepare explanations.
Day 7: Take a timed mock assessment.

Measurable goal:
Solve at least 20 quality coding problems this week and complete
one mock technical interview.
`;
    } else if (safeScore >= 60) {
      guidance = `
Your readiness score of ${safeScore}% shows that you are developing
a good foundation but still have some areas to strengthen.

Priority areas:
1. Build consistency in DSA practice.
2. Revise core computer-science subjects.
3. Improve technical interview confidence.

7-Day Action Plan:
Day 1: Practice arrays and strings.
Day 2: Practice sorting and searching.
Day 3: Revise DBMS and SQL.
Day 4: Revise OS concepts.
Day 5: Solve mixed coding problems.
Day 6: Practice explaining one project.
Day 7: Complete a mock placement test.

Measurable goal:
Complete at least 15 coding problems and one mock assessment
during the next 7 days.
`;
    } else {
      guidance = `
Your readiness score of ${safeScore}% shows that you are still
building your placement preparation foundation. This is a starting
point, not a final result.

Priority areas:
1. Learn fundamental DSA concepts.
2. Build strong programming fundamentals.
3. Establish a consistent daily study routine.

7-Day Action Plan:
Day 1: Review programming fundamentals.
Day 2: Learn arrays and strings.
Day 3: Practice basic searching and sorting.
Day 4: Study DBMS fundamentals.
Day 5: Study operating-system fundamentals.
Day 6: Solve beginner coding problems.
Day 7: Take a short assessment and review mistakes.

Measurable goal:
Study for at least 60 minutes per day and complete 10 beginner
coding problems this week.
`;
    }

    return NextResponse.json({
      message: guidance.trim(),
      score: safeScore,
      readiness,
      source: "career-coach-fallback",
    });
  } catch (error) {
    console.error("Career Coach API error:", error);

    return NextResponse.json(
      {
        error: "Unable to generate career guidance. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}