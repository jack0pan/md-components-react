import * as React from "react";
import { render, screen } from "@testing-library/react";
import Fab from "../Fab";

describe("Fab", () => {
  it("renders all colors", () => {
    const { rerender } = render(<Fab icon="edit" color="surface" />);
    expect(screen.getByRole("button").className).toContain("surface");

    ["primary", "secondary", "tertiary"].forEach((color) => {
      rerender(<Fab icon="edit" color={color as "primary" | "secondary" | "tertiary"} />);
      expect(screen.getByRole("button").className).toContain(color);
    });
  });

  it("renders all sizes", () => {
    const { rerender } = render(<Fab icon="edit" />);
    expect(screen.getByRole("button").className).toContain("medium");

    ["large", "small"].forEach((size) => {
      rerender(<Fab icon="edit" size={size as "large" | "small"} />);
      expect(screen.getByRole("button").className).toContain(size);
    });
  });
});
