import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// klyro fork. The colour menu is mounted inside the canvas's bubble menu, so whatever it does on
// mount it does to the caret of every inline edit. It must do nothing until someone picks a colour.

vi.mock("./rte-dropdown-menu", () => ({
  default: ({ trigger, content }: { trigger: ReactNode; content: (onClose: () => void) => ReactNode }) => (
    <div>
      {trigger}
      {content(() => undefined)}
    </div>
  ),
}));
vi.mock("~/hooks/use-dark-mode", () => ({ useDarkMode: () => [false] }));

import RteColorPicker from "./rte-color-picker";

type Chain = {
  setColor: ReturnType<typeof vi.fn>;
  setHighlight: ReturnType<typeof vi.fn>;
  unsetColor: ReturnType<typeof vi.fn>;
  unsetHighlight: ReturnType<typeof vi.fn>;
  run: ReturnType<typeof vi.fn>;
};

const makeEditor = () => {
  const chain = {} as Chain;
  chain.setColor = vi.fn(() => chain);
  chain.setHighlight = vi.fn(() => chain);
  chain.unsetColor = vi.fn(() => chain);
  chain.unsetHighlight = vi.fn(() => chain);
  chain.run = vi.fn();
  const editor = { getAttributes: vi.fn(() => ({})), chain: vi.fn(() => chain), isActive: vi.fn(() => false) };
  return { editor, chain };
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("the rich-text colour menu", () => {
  let made: ReturnType<typeof makeEditor>;
  beforeEach(() => {
    made = makeEditor();
  });

  it("applies no colour and no highlight just by being mounted", async () => {
    render(<RteColorPicker editor={made.editor} from="canvas" menuRef={{ current: null }} />);
    await wait(300);

    expect(made.chain.setColor).not.toHaveBeenCalled();
    expect(made.chain.setHighlight).not.toHaveBeenCalled();
  });

  it("still applies a colour typed into the hex field", async () => {
    render(<RteColorPicker editor={made.editor} from="canvas" menuRef={{ current: null }} />);

    fireEvent.change(screen.getByPlaceholderText("#000000"), { target: { value: "#ff0000" } });
    await wait(300);

    expect(made.chain.setColor).toHaveBeenCalledWith("#ff0000");
    expect(made.chain.setHighlight).not.toHaveBeenCalled();
  });
});
