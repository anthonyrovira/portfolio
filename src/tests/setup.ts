import "@testing-library/dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Runs after each test suite
afterEach(() => {
  cleanup();
});
