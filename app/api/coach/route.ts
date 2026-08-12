import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { score, readiness } = body;

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

    return NextResponse.json({
      message: `Based on your ${score}% readiness score, your current level is ${readiness}. Your personalized AI preparation plan will be generated here.`,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process your request.",
      },
      {
        status: 500,
      }
    );
  }
}