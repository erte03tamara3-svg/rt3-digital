export const env = {
  appName: "RT3 Digital",

  appUrl:
    process.env.NEXT_PUBLIC_APP_URL ||
    "https://rt3-digital.vercel.app",

  supabaseUrl:
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",

  supabaseAnonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};

export function getVerifikasiUrl(id: string | number) {
  return `${env.appUrl}/verifikasi/${id}`;
}