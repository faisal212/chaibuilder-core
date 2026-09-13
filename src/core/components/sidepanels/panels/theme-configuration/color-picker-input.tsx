import { debounce } from "lodash-es";

// klyro fork: `label` names the input. The visible name beside it is a <Label> with no `htmlFor`,
// so the colour input itself was announced as a bare "color well".
const ColorPickerInput = ({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}) => {
  const handleColorChange = debounce((value: string) => onChange(value), 200);

  return (
    <div
      className="relative flex h-6 w-6 cursor-pointer rounded-lg border border-border"
      style={{ backgroundColor: value }}>
      <input
        type="color"
        aria-label={label}
        value={value.startsWith("#") ? value : "#000000"}
        onChange={(e) => {
          const hexValue = e.target.value;
          if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
            handleColorChange(hexValue);
          }
        }}
        className="absolute inset-0 h-full w-full cursor-pointer rounded-lg border-0 opacity-0"
      />
    </div>
  );
};

export default ColorPickerInput;
