// components/common/__tests__/Greeting.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Greeting from "../Greeting";

describe("Greeting", () => {
  it("renders a greeting with the provided name", () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
  });

  it("renders a different name correctly", () => {
    render(<Greeting name="Bob" />);
    expect(screen.getByText("Hello, Bob!")).toBeInTheDocument();
  });
});
