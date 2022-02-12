import * as React from "react";
import { render, screen } from "@testing-library/react";
import ExtendedFab from "../ExtendedFab";

describe("ExtendedFab", () => {
  it("renders all colors", () => {
    const { rerender } = render(<ExtendedFab icon="edit" color="surface" />);
    expect(screen.getByRole("button").className).toContain("surface");

    ["primary", "secondary", "tertiary"].forEach((color) => {
      rerender(<ExtendedFab icon="edit" color={color as "primary" | "secondary" | "tertiary"} />);
      expect(screen.getByRole("button").className).toContain(color);
    });
  });
});
