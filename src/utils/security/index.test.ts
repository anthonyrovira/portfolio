import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { checkRateLimit } from ".";

describe("checkRateLimit", () => {
  const mockLocalStorage = (() => {
    let store: Record<string, string> = {};

    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
    };
  })();

  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal("localStorage", mockLocalStorage);
    mockLocalStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("should allow first submission and initialize counters", () => {
    const now = Date.now();
    vi.setSystemTime(now);

    const result = checkRateLimit();

    expect(result).toBe(true);
    expect(localStorage.getItem("submissionCount")).toBe("1");
    expect(localStorage.getItem("lastSubmissionTime")).toBe(now.toString());
  });

  it("should reset counter after 1 minute", () => {
    // First submission
    const firstSubmissionTime = Date.now();
    vi.setSystemTime(firstSubmissionTime);
    checkRateLimit();

    // Advance to 61 seconds
    const secondSubmissionTime = firstSubmissionTime + 61000;
    vi.setSystemTime(secondSubmissionTime);

    const result = checkRateLimit();

    expect(result).toBe(true);
    expect(localStorage.getItem("submissionCount")).toBe("1");
    expect(localStorage.getItem("lastSubmissionTime")).toBe(secondSubmissionTime.toString());
  });

  it("should allow up to 3 submissions within 1 minute", () => {
    const startTime = Date.now();
    vi.setSystemTime(startTime);

    // first submission
    expect(checkRateLimit()).toBe(true);
    expect(localStorage.getItem("submissionCount")).toBe("1");

    // second submission after 10sec
    vi.setSystemTime(startTime + 10000);
    expect(checkRateLimit()).toBe(true);
    expect(localStorage.getItem("submissionCount")).toBe("2");

    // Third submission after 20sec
    vi.setSystemTime(startTime + 20000);
    expect(checkRateLimit()).toBe(true);
    expect(localStorage.getItem("submissionCount")).toBe("3");

    // Fourth submission after 30sec (should fail)
    vi.setSystemTime(startTime + 30000);
    expect(checkRateLimit()).toBe(false);
    expect(localStorage.getItem("submissionCount")).toBe("3");
  });

  it("should block after 3 submissions", () => {
    const startTime = Date.now();
    vi.setSystemTime(startTime);

    // fill the rate limit
    localStorage.setItem("submissionCount", "3");
    localStorage.setItem("lastSubmissionTime", startTime.toString());

    const result = checkRateLimit();

    expect(result).toBe(false);
    expect(localStorage.getItem("submissionCount")).toBe("3");
  });

  it("should handle invalid storage values", () => {
    const now = Date.now();
    vi.setSystemTime(now);

    // Wrong values
    localStorage.setItem("submissionCount", "invalid");
    localStorage.setItem("lastSubmissionTime", "not-a-number");

    const result = checkRateLimit();

    expect(result).toBe(true);
    expect(localStorage.getItem("submissionCount")).toBe("1");
    expect(localStorage.getItem("lastSubmissionTime")).toBe(now.toString());
  });
});
