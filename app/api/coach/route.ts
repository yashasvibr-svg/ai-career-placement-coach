import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { score, readiness } = body;

    // Validate input
    if (typeof score !== "number" || !readiness) {
      return NextResponse.json(
        { error: "Assessment information is required." },
        { status: 400 }
      );
    }

    // Check API configuration
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "AI service is not configured. Please add GEMINI_API_KEY to .env.local.",
        },
        { status: 503 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
You are an AI Career Placement Coach for college students preparing
for software engineering placements.

Student assessment:
- Readiness score: ${score}%
- Readiness level: ${readiness}

Create a practical and encouraging career preparation plan.

Include:
1. A short interpretation of the score.
2. Three priority areas to improve.
3. A realistic 7-day preparation plan.
4. One measurable goal.

Keep the response concise, practical, and suitable for a college student.
Do not invent information about the student's background.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 700,
        temperature: 0.7,
      },
    });

    return NextResponse.json({
      message: response.text,
      score,
      readiness,
    });
  } catch (error) {
    console.error("Career Coach API error:", error);

    return NextResponse.json(
      {
        error:
          "The AI coach is temporarily unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}