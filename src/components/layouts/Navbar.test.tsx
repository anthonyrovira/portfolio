import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

// Mocks
vi.mock("@/hooks/useLanguage", () => ({
  useLanguage: vi.fn(() => ({
    t: {
      navbar: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        contact: "Contact",
      },
    },
  })),
}));

vi.mock("react-icons/hi", () => ({
  HiMenu: () => <div>MenuIcon</div>,
  HiX: () => <div>CloseIcon</div>,
}));

vi.mock("../ui/common/ThemeToggle", () => ({
  default: () => <div>ThemeToggle</div>,
}));

vi.mock("../ui/common/LanguageSwitcher", () => ({
  default: () => <div>LanguageSwitcher</div>,
}));

describe("Navbar", () => {
  const mockToggle = vi.fn();
  const defaultProps = {
    isSidebarOpen: false,
    toggleSidebar: mockToggle,
  };

  beforeEach(() => {
    window.scrollTo = vi.fn();
    global.scrollY = 0;
  });

  it("renders correctly", () => {
    render(<Navbar {...defaultProps} />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByAltText("AR Logo")).toBeInTheDocument();
    expect(screen.getByText("ThemeToggle")).toBeInTheDocument();
    expect(screen.getByText("LanguageSwitcher")).toBeInTheDocument();
  });

  it("displays desktop navigation links", () => {
    render(<Navbar {...defaultProps} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("adds scrolled class when page is scrolled", () => {
    render(<Navbar {...defaultProps} />);

    // Simuler le scroll
    global.scrollY = 150;
    fireEvent.scroll(window);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("backdrop-blur-md");
    expect(nav).toHaveClass("shadow-lg");
  });

  it("scrolls to home when logo is clicked", () => {
    const mockScroll = vi.fn();

    const mockElement = document.createElement("div");
    mockElement.id = "home";
    document.body.appendChild(mockElement);

    mockElement.scrollIntoView = mockScroll;

    render(<Navbar {...defaultProps} />);

    fireEvent.click(screen.getByRole("button", { name: "Home" }));

    expect(mockScroll).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    document.body.removeChild(mockElement);
  });

  it("calls toggleSidebar when menu button is clicked", () => {
    render(<Navbar {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Toggle Sidebar" });
    fireEvent.click(button);

    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it("displays close icon when sidebar is open", () => {
    render(<Navbar {...defaultProps} isSidebarOpen={true} />);
    expect(screen.getByText("CloseIcon")).toBeInTheDocument();
  });

  it("hides desktop navigation on mobile", () => {
    window.innerWidth = 500;

    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(max-width: 640px)", // sm breakpoint
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));

    render(<Navbar {...defaultProps} />);

    expect(screen.queryByTestId("desktop-nav")).toHaveClass("hidden");
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();
  });
});
