import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const comingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true";

  if (!comingSoon) return NextResponse.next();

  // allow coming-soon page and static assets
  const allowed = ["/coming-soon", "/_next", "/favicon.ico"];
  if (allowed.some((p) => req.nextUrl.pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // redirect everything else
  const url = new URL("/coming-soon", req.url);
  return NextResponse.redirect(url);
}
