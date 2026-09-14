import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { TAILWIND_SETTLE_MS, watchTailwindBuilds, type TailwindWindow } from "./tailwind-build-guard";

/**
 * The guard against cdn.tailwindcss.com's overlapping builds (see the module). A fake CDN stands in:
 * assigning `tailwind.config` counts as one full rebuild and writes the generated sheet, the way the
 * real setter does.
 */
let sheet: HTMLStyleElement;
let rebuilds: number;
let dispose: () => void;

const flush = () => Promise.resolve();
// As the CDN does: a sheet that has left the document is replaced by a new one in <head>.
function cdnWrite(css: string) {
  if (!sheet.isConnected) {
    sheet = document.createElement("style");
    document.head.append(sheet);
  }
  sheet.textContent = css;
}

beforeEach(() => {
  vi.useFakeTimers();
  document.head.innerHTML = "";
  sheet = document.createElement("style");
  document.head.append(sheet);
  rebuilds = 0;
  let config: Record<string, unknown> = { theme: {} };
  const tailwind = {
    get config() { return config; },
    set config(value: Record<string, unknown>) {
      config = value;
      rebuilds++;
      cdnWrite(`/* full build ${rebuilds} */`);
    },
  };
  (window as TailwindWindow).tailwind = tailwind;
});

afterEach(() => {
  dispose?.();
  vi.useRealTimers();
  delete (window as TailwindWindow).tailwind;
});

describe("watchTailwindBuilds", () => {
  test("it rebuilds once after mount, and its own write does not ask for another", async () => {
    dispose = watchTailwindBuilds(document, window as TailwindWindow);
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS);
    expect(rebuilds).toBe(1);
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS * 5);
    expect(rebuilds).toBe(1);
  });

  test("two overlapping CDN builds get one full rebuild once they are quiet", async () => {
    dispose = watchTailwindBuilds(document, window as TailwindWindow);
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS);
    await flush();
    expect(rebuilds).toBe(1);

    cdnWrite(".flex{display:flex}");
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS / 2);
    cdnWrite("/* the older build, landing last */");
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS - 1);
    expect(rebuilds).toBe(1);
    vi.advanceTimersByTime(1);
    expect(rebuilds).toBe(2);
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS * 5);
    expect(rebuilds).toBe(2);
  });

  test("writes to the canvas's other styles are not CDN builds", async () => {
    dispose = watchTailwindBuilds(document, window as TailwindWindow);
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS);
    await flush();

    const selected = document.createElement("style");
    selected.id = "selected-blocks";
    document.head.append(selected);
    const hoisted = document.createElement("style");
    hoisted.setAttribute("data-precedence", "klyro-site");
    document.head.append(hoisted);
    await flush();
    selected.textContent = "[data-block-id=a]{outline:1px solid}";
    hoisted.textContent = ":root{}";
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS * 5);
    expect(rebuilds).toBe(1);
  });

  test("a sheet the CDN appends for the first time counts as a build", async () => {
    sheet.remove();
    dispose = watchTailwindBuilds(document, window as TailwindWindow);
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS);
    await flush();
    expect(rebuilds).toBe(1);

    const fresh = document.createElement("style");
    fresh.textContent = ".grid{display:grid}";
    document.head.append(fresh);
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS);
    expect(rebuilds).toBe(2);
  });

  test("disposed, it neither observes nor rebuilds", async () => {
    dispose = watchTailwindBuilds(document, window as TailwindWindow);
    dispose();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS * 5);
    cdnWrite("/* late */");
    await flush();
    vi.advanceTimersByTime(TAILWIND_SETTLE_MS * 5);
    expect(rebuilds).toBe(0);
  });
});
