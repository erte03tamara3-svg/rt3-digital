export function capitalize(text?: string | null): string {
  if (!text) return "";

  return text
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

export function uppercase(text?: string | null): string {
  return (text ?? "").toUpperCase();
}

export function lowercase(text?: string | null): string {
  return (text ?? "").toLowerCase();
}

export function titleCase(text?: string | null): string {
  return capitalize(text);
}

export function trimText(text?: string | null): string {
  return (text ?? "").trim();
}

export function normalizeSpaces(text?: string | null): string {
  return trimText(text).replace(/\s+/g, " ");
}

export function initials(text?: string | null): string {
  if (!text) return "";

  return normalizeSpaces(text)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function limitText(
  text?: string | null,
  max = 100
): string {
  const value = text ?? "";

  if (value.length <= max) return value;

  return `${value.substring(0, max)}...`;
}