const AGAMA = [
  "Islam",
  "Kristen",
  "Katolik",
  "Hindu",
  "Buddha",
  "Konghucu",
];

export function formatAgama(
  agama?: string | null
): string {
  if (!agama) return "-";

  const value = agama.trim().toLowerCase();

  const found = AGAMA.find(
    (item) => item.toLowerCase() === value
  );

  if (found) return found;

  return value
    .split(" ")
    .map(
      (kata) =>
        kata.charAt(0).toUpperCase() +
        kata.slice(1)
    )
    .join(" ");
}

export function isAgamaValid(
  agama?: string | null
): boolean {
  if (!agama) return false;

  return AGAMA.some(
    (item) =>
      item.toLowerCase() === agama.trim().toLowerCase()
  );
}

export function daftarAgama() {
  return [...AGAMA];
}