import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Lindungi seluruh halaman admin
  if (pathname.startsWith("/admin")) {
    const isLogin = request.cookies.get("rt3_admin_login")?.value;

    if (isLogin !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};