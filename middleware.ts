import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.searchParams.append(
    "_nextCacheSkip",
    Math.floor(Date.now() / 1 / 15).toString(),
  );
  return NextResponse.rewrite(url);
}
