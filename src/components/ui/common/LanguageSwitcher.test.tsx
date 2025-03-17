// LanguageSwitcher.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { languageOptions } from "@/utils/translations";
import LanguageSwitcher from "./LanguageSwitcher";

// Mock the useLanguage hook
vi.mock("@/hooks/useLanguage", () => ({
  useLanguage: () => ({
    language: "en",
    setLanguage: vi.fn(),
  }),
}));

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Buttons variant", () => {
    it("renders all language buttons", () => {
      render(<LanguageSwitcher variant="buttons" />);
      languageOptions.forEach((option) => {
        expect(screen.getByAltText(option.label)).toBeInTheDocument();
      });
    });
  });

  describe("Dropdown variant", () => {
    it("displays current language in button", () => {
      render(<LanguageSwitcher variant="dropdown" />);
      const currentFlag = screen.getByAltText("English");
      expect(currentFlag).toBeInTheDocument();
    });

    it("rotates chevron icon when open", async () => {
      const user = userEvent.setup();
      render(<LanguageSwitcher variant="dropdown" />);

      const chevron = screen.getByTestId("chevron-icon");
      expect(chevron).not.toHaveClass("rotate-180");

      await user.click(screen.getByRole("button"));
      expect(chevron).toHaveClass("rotate-180");
    });
  });
});
