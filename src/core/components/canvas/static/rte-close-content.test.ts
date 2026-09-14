import { describe, expect, test } from "vitest";
import { contentToSaveOnClose } from "./rte-close-content";

describe("contentToSaveOnClose", () => {
  test("TipTap's reading of untouched content is not a change", () => {
    // Stored `Intro text`; TipTap answers `<p>Intro text</p>` before a key is pressed.
    expect(contentToSaveOnClose("<p>Intro text</p>", "<p>Intro text</p>")).toBeNull();
  });

  test("an edit is saved", () => {
    expect(contentToSaveOnClose("<p>Intro text</p>", "<p>Intro text, edited</p>")).toBe("<p>Intro text, edited</p>");
  });

  test("with nothing recorded at open, what the editor holds is saved", () => {
    expect(contentToSaveOnClose(null, "<p>Intro text</p>")).toBe("<p>Intro text</p>");
  });
});
