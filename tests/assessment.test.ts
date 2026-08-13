import { describe, expect, it } from "vitest";

function getReadiness(score: number) {
  if (score >= 80) {
    return "Strong";
  }

  if (score >= 60) {
    return "Developing";
  }

  return "Needs Improvement";
}

describe("Placement Assessment", () => {
  it("returns Strong for a high score", () => {
    expect(getReadiness(90)).toBe("Strong");
  });

  it("returns Developing for a medium score", () => {
    expect(getReadiness(70)).toBe("Developing");
  });

  it("returns Needs Improvement for a low score", () => {
    expect(getReadiness(40)).toBe("Needs Improvement");
  });

  it("handles the boundary score of 80", () => {
    expect(getReadiness(80)).toBe("Strong");
  });

  it("handles the boundary score of 60", () => {
    expect(getReadiness(60)).toBe("Developing");
  });
});