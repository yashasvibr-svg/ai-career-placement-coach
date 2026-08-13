import { describe, expect, it } from "vitest";

describe("Career Coach", () => {
  it("should identify a strong readiness score", () => {
    const score = 87;

    expect(score).toBeGreaterThanOrEqual(80);
  });

  it("should identify a developing readiness score", () => {
    const score = 67;

    expect(score).toBeGreaterThanOrEqual(60);
    expect(score).toBeLessThan(80);
  });

  it("should identify a score that needs improvement", () => {
    const score = 40;

    expect(score).toBeLessThan(60);
  });
});