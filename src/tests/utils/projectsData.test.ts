import { describe, it, expect } from "vitest";
import { getRepoLabel } from "@/utils/projectsData";

describe("getRepoLabel", () => {
  // Test for a single repository
  it('should return "GitHub" when there is only one repository', () => {
    expect(getRepoLabel(0, 1)).toBe("GitHub");
  });

  // Test for multiple repositories
  it('should return "Frontend" for the first repository when there are multiple repositories', () => {
    expect(getRepoLabel(0, 2)).toBe("Frontend");
    expect(getRepoLabel(0, 3)).toBe("Frontend");
  });

  it('should return "Backend" for the second repository when there are multiple repositories', () => {
    expect(getRepoLabel(1, 2)).toBe("Backend");
    expect(getRepoLabel(1, 3)).toBe("Backend");
  });

  it('should return "IaC" for the third repository when there are three repositories', () => {
    expect(getRepoLabel(2, 3)).toBe("IaC");
  });

  // Test for edge cases
  it('should return "GitHub" for any index beyond the expected range', () => {
    expect(getRepoLabel(3, 3)).toBe("GitHub");
    expect(getRepoLabel(4, 3)).toBe("GitHub");
    expect(getRepoLabel(10, 3)).toBe("GitHub");
  });

  // Test for potential error cases
  it("should handle edge cases gracefully", () => {
    // When totalRepos is 0, it should return "" regardless of index
    expect(getRepoLabel(0, 0)).toBe("");
    // When index is negative, it should return "GitHub"
    expect(getRepoLabel(-1, 1)).toBe("GitHub");
  });
});
