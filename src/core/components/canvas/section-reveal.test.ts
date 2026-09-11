import {
  nearestBlockElement,
  outermostBlockElement,
  requestBlockReveal,
  resetBlockRevealRequest,
  sectionRevealTop,
  takeBlockRevealRequest,
} from "~/core/components/canvas/section-reveal";

const WINDOW = 800;

describe("outermostBlockElement", () => {
  const mount = (html: string) => {
    document.body.innerHTML = html;
    return document.body;
  };

  test("a heading six levels down answers with its section", () => {
    const body = mount(`
      <div data-block-id="gallery">
        <div data-block-id="wrap"><div><div data-block-id="row">
          <span data-block-id="heading" id="target">Clean, code-compliant work</span>
        </div></div></div>
      </div>
    `);
    const target = body.querySelector("#target")!;
    expect(outermostBlockElement(target)?.getAttribute("data-block-id")).toBe("gallery");
  });

  test("a section chosen directly answers with itself", () => {
    const body = mount(`<div data-block-id="gallery" id="target"></div>`);
    expect(outermostBlockElement(body.querySelector("#target")!)?.getAttribute("data-block-id")).toBe("gallery");
  });

  test("the canvas's own wrapper is not a section", () => {
    // `<div data-block-id="canvas">` wraps the whole page and starts at the top of the document, so
    // a walk that counted it would compute a target of zero for every block and the canvas would
    // never move at all. Four browser tests said exactly that.
    const body = mount(`
      <div data-block-id="canvas">
        <div data-block-id="container">
          <div data-block-id="gallery"><span data-block-id="heading" id="target">Recent work</span></div>
        </div>
      </div>
    `);
    expect(outermostBlockElement(body.querySelector("#target")!)?.getAttribute("data-block-id")).toBe("gallery");
  });

  test("something that is not inside a block at all answers with nothing", () => {
    const body = mount(`<div id="target"></div>`);
    expect(outermostBlockElement(body.querySelector("#target")!)).toBeNull();
  });
});

describe("nearestBlockElement", () => {
  const mount = (html: string) => {
    document.body.innerHTML = html;
    return document.body;
  };

  test("a pointer on a block answers with that block, not its section", () => {
    // This is what tells a click from a scrollbar drag. Treating the two alike cost 462px of
    // unasked-for scrolling on every canvas click in WebKit.
    const body = mount(`
      <div data-block-id="canvas"><div data-block-id="gallery">
        <span data-block-id="heading"><b id="target">Clean</b></span>
      </div></div>
    `);
    expect(nearestBlockElement(body.querySelector("#target")!)?.getAttribute("data-block-id")).toBe("heading");
  });

  test("a pointer on the canvas itself is on no block at all", () => {
    // Which is where a scrollbar drag lands, and it must still count as a person scrolling.
    const body = mount(`<div data-block-id="canvas"><div id="target"></div></div>`);
    expect(nearestBlockElement(body.querySelector("#target")!)).toBeNull();
  });
});

describe("where a reveal puts the canvas", () => {
  const reveal = (section: { top: number; bottom: number }, selected = section, scrollY = 0) =>
    sectionRevealTop({ section, selected }, WINDOW, scrollY);

  test("a section below the fold comes up to the top", () => {
    // Off screen at 3972 in the owner's recording; 24px below the top edge is where it belongs.
    expect(reveal({ top: 3972, bottom: 4600 })).toBe(3948);
  });

  test("a section ABOVE the window comes back down to the top", () => {
    expect(reveal({ top: -1200, bottom: -400 }, undefined, 2000)).toBe(776);
  });

  test("the section comes up even when the selection was already on screen", () => {
    // The whole point of this rule, and what the old one refused to do: the heading was visible at
    // the bottom of the canvas, so nothing moved and Gallery stayed below the fold.
    const heading = { top: 760, bottom: 810 };
    const gallery = { top: 700, bottom: 1500 };
    expect(sectionRevealTop({ section: gallery, selected: heading }, WINDOW, 1000)).toBe(1676);
  });

  test("a section already at the top does not move the canvas at all", () => {
    expect(reveal({ top: 24, bottom: 900 }, undefined, 500)).toBeNull();
  });

  test("a rounding-sized difference is not a scroll", () => {
    expect(reveal({ top: 25, bottom: 900 }, undefined, 500)).toBeNull();
    expect(reveal({ top: 27, bottom: 900 }, undefined, 500)).toBe(503);
  });

  test("it never scrolls above the start of the document", () => {
    expect(reveal({ top: 0, bottom: 700 }, undefined, 0)).toBeNull();
    expect(reveal({ top: 10, bottom: 700 }, undefined, 0)).toBeNull();
  });
});

describe("when the section is taller than the window", () => {
  test("a block near its bottom stays on screen instead", () => {
    // Section 2000px tall, the chosen block near its foot. Flush-to-the-top would put that block at
    // 1700px down an 800px window — off screen, editing something you cannot see.
    const section = { top: 1000, bottom: 3000 };
    const selected = { top: 2700, bottom: 2800 };
    const top = sectionRevealTop({ section, selected }, WINDOW, 0)!;
    expect(top).toBe(2024);
    expect(selected.bottom - top).toBeLessThanOrEqual(WINDOW);
    expect(selected.top - top).toBeGreaterThan(0);
  });

  test("a block near its top still gets the section flush to the top", () => {
    const section = { top: 1000, bottom: 3000 };
    expect(sectionRevealTop({ section, selected: { top: 1100, bottom: 1200 } }, WINDOW, 0)).toBe(976);
  });

  test("the section itself, chosen whole, still goes to its top", () => {
    // Taking "keep the selection on screen" literally here would scroll to the section's FOOT.
    const section = { top: 1000, bottom: 3000 };
    expect(sectionRevealTop({ section, selected: section }, WINDOW, 0)).toBe(976);
  });

  test("a block taller than the window gets its own top, not its bottom", () => {
    const section = { top: 1000, bottom: 3000 };
    expect(sectionRevealTop({ section, selected: { top: 1100, bottom: 2500 } }, WINDOW, 0)).toBe(1076);
  });
});

describe("who is allowed to ask", () => {
  beforeEach(() => resetBlockRevealRequest());

  test("nothing is revealed unless something asked", () => {
    // A click inside the canvas asks for nothing, which is what keeps the page still under a cursor.
    expect(takeBlockRevealRequest("gallery")).toBe(false);
  });

  test("a request is claimed once, by the block it was made for", () => {
    requestBlockReveal("gallery");
    expect(takeBlockRevealRequest("gallery")).toBe(true);
    expect(takeBlockRevealRequest("gallery")).toBe(false);
  });

  test("a request made for one block is never spent on another", () => {
    requestBlockReveal("gallery");
    expect(takeBlockRevealRequest("faq")).toBe(false);
    // …and it does not survive to surprise the next selection either.
    expect(takeBlockRevealRequest("gallery")).toBe(false);
  });
});
