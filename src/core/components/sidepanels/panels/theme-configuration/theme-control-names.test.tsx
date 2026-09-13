import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

// klyro fork. Each theme control is announced by the name printed beside it. `getBy*` throws when
// nothing carries the name, so finding the control IS the assertion.

vi.mock("~/runtime", () => ({ useRegisteredFonts: () => [{ family: "Inter" }, { family: "Lora" }] }));

import BorderRadiusInput from "./border-radius-input";
import ColorPickerInput from "./color-picker-input";
import FontSelector from "./font-selector";

beforeAll(() => {
  // Radix's slider measures its thumb; jsdom has no layout and no ResizeObserver.
  globalThis.ResizeObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("the theme panel's controls", () => {
  it("names a colour input by its colour's name", () => {
    render(<ColorPickerInput value="#ff0000" onChange={vi.fn()} label="Primary Background" />);
    expect(screen.getByLabelText("Primary Background").getAttribute("type")).toBe("color");
  });

  it("names a font picker by the label above it", () => {
    render(<FontSelector label="heading" value="Inter" onChange={vi.fn()} />);
    expect(screen.getByRole("combobox", { name: "Heading" })).toBeTruthy();
  });

  it("names the border-radius slider", () => {
    render(<BorderRadiusInput value="8px" onChange={vi.fn()} />);
    expect(screen.getByRole("slider", { name: "Border radius" })).toBeTruthy();
  });
});
