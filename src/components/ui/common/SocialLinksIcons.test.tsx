import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import GitHub from "@/icons/github.svg?react";
import LinkedIn from "@/icons/linkedin.svg?react";
import X from "@/icons/x.svg?react";
import SocialLinksIcons from "./SocialLinksIcons";

// Mock SVG imports
vi.mock("@/icons/github.svg?react", () => ({ default: vi.fn(() => <svg />) }));
vi.mock("@/icons/linkedin.svg?react", () => ({ default: vi.fn(() => <svg />) }));
vi.mock("@/icons/x.svg?react", () => ({ default: vi.fn(() => <svg />) }));

describe("SocialLinksIcons", () => {
  it("renders all social media links with correct attributes", () => {
    render(<SocialLinksIcons />);

    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/anthonyrovira/");
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");

    const github = screen.getByRole("link", { name: /github/i });
    expect(github).toHaveAttribute("href", "https://github.com/anthonyrovira");

    const x = screen.getByRole("link", { name: /x/i });
    expect(x).toHaveAttribute("href", "https://x.com/AnthonyRoviraJS");
  });

  it("applies correct styling classes", () => {
    render(<SocialLinksIcons />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass("text-text-light dark:text-white/50");
      expect(link).toHaveClass("hover:text-text-light_secondary dark:hover:text-white");
      expect(link).toHaveClass("transition-colors duration-300");
    });
  });

  it("renders SVG icons with correct size classes", () => {
    render(<SocialLinksIcons />);

    expect(LinkedIn).toHaveBeenCalledWith(expect.objectContaining({ className: "w-5 h-5" }), {});
    expect(GitHub).toHaveBeenCalledWith(expect.objectContaining({ className: "w-5 h-5" }), {});
    expect(X).toHaveBeenCalledWith(expect.objectContaining({ className: "w-5 h-5" }), {});
  });
});
