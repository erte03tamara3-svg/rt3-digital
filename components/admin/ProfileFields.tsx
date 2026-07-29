"use client";

type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

export function InputField({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block font-semibold mb-2">{label}</label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}

export function TextAreaField({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block font-semibold mb-2">{label}</label>

      <textarea
        rows={7}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}