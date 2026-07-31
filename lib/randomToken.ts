const CHARACTERS =
  "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

export function randomToken(length = 32): string {
  let token = "";

  if (
    typeof globalThis !== "undefined" &&
    globalThis.crypto &&
    "getRandomValues" in globalThis.crypto
  ) {
    const bytes = new Uint8Array(length);
    globalThis.crypto.getRandomValues(bytes);

    for (let i = 0; i < length; i++) {
      token +=
        CHARACTERS[
          bytes[i] % CHARACTERS.length
        ];
    }

    return token;
  }

  for (let i = 0; i < length; i++) {
    token +=
      CHARACTERS[
        Math.floor(Math.random() * CHARACTERS.length)
      ];
  }

  return token;
}

export function randomNumeric(length = 6): string {
  let value = "";

  for (let i = 0; i < length; i++) {
    value += Math.floor(Math.random() * 10);
  }

  return value;
}

export function randomReference(prefix = "RT3") {
  const date = new Date();

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${prefix}-${yyyy}${mm}${dd}-${randomToken(10)}`;
}