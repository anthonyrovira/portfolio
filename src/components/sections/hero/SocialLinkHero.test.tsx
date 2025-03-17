// src/components/SocialLinkHero.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import GiHub from "@/icons/github.svg?react";
import LinkedIn from "@/icons/linkedin.svg?react";
import X from "@/icons/x.svg?react";
import { SOCIAL_LINKS } from "@/constants/social"; // Import the constant
import SocialLinkHero from "./SocialLinkHero";

// Mock SVG imports
vi.mock("@/icons/github.svg?react", () => ({ default: vi.fn(() => <svg />) }));
vi.mock("@/icons/linkedin.svg?react", () => ({ default: vi.fn(() => <svg />) }));
vi.mock("@/icons/x.svg?react", () => ({ default: vi.fn(() => <svg />) }));

describe("SocialLinkHero", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  SOCIAL_LINKS.forEach(({ icon, link }) => {
    it(`renders ${icon} icon and link correctly`, () => {
      render(<SocialLinkHero icon={icon} link={link} />);

      // Check link attributes
      const socialLink = screen.getByRole("link");
      expect(socialLink).toHaveAttribute("href", link);
      expect(socialLink).toHaveAttribute("target", "_blank");
      expect(socialLink).toHaveAttribute("rel", "noopener noreferrer");

      // Check icon rendering
      const IconComponent = {
        linkedin: LinkedIn,
        github: GiHub,
        x: X,
      }[icon];
      expect(IconComponent).toHaveBeenCalled();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  it("applies correct styling classes to the button", () => {
    render(<SocialLinkHero icon="github" link="https://github.com" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("group");
    expect(button).toHaveClass("relative");
    expect(button).toHaveClass("p-3");
    expect(button).toHaveClass("cursor-pointer");

    const innerDiv = button.querySelector("div.relative");
    expect(innerDiv).toHaveClass("rounded-xl");
    expect(innerDiv).toHaveClass("bg-light-foreground/10");
    expect(innerDiv).toHaveClass("border");
    expect(innerDiv).toHaveClass("border-white/10");
  });

  it("renders the correct icon based on the `icon` prop", () => {
    render(<SocialLinkHero icon="linkedin" link="https://www.linkedin.com/in/anthonyrovira/" />);

    expect(LinkedIn).toHaveBeenCalledWith(
      expect.objectContaining({
        className:
          "w-5 h-5 sm:w-6 sm:h-6 text-text-light_secondary group-hover:text-accent-purple dark:text-gray-400 dark:group-hover:text-white",
      }),
      {}
    );
  });
});
