import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Force HTTPS in production (behind proxies that set x-forwarded-proto).
 * Localhost / LAN hosts are left alone for development.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isLocal =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("192.168.") ||
    host.startsWith("10.") ||
    host.endsWith(".local");

  if (isLocal) return NextResponse.next();

  const proto = request.headers.get("x-forwarded-proto");
  if (proto === "http") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
