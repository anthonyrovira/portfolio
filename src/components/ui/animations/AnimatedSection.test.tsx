import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AnimatedSection from "./AnimatedSection";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

describe("AnimatedSection", () => {
  // Basic render test
  it("renders children correctly", () => {
    render(
      <AnimatedSection>
        <div data-testid="child">Test Child</div>
      </AnimatedSection>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  // Testing props
  it("applies correct className and id", () => {
    const { container } = render(
      <AnimatedSection className="test-class" id="test-id">
        Content
      </AnimatedSection>
    );

    const div = container.firstChild;
    expect(div).toHaveClass("test-class");
    expect(div).toHaveAttribute("id", "test-id");
  });
});
