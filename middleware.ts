import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const IS_PRODUCTION = process.env.NODE_ENV === "production";
const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "myavedan.com";

function applySecurityHeaders(headers: Headers) {
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), browsing-topics=()"
  );
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com data:;
    img-src 'self' data: blob: https://myavedan.com https://*.myavedan.com;
    connect-src 'self' https://*.myavedan.com https://vitals.vercel-insights.com;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s{2,}/g, " ").trim();

  headers.set("Content-Security-Policy", cspHeader);
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const response = NextResponse.next();

  applySecurityHeaders(response.headers);

  const ssoToken = searchParams.get("sso_token");
  if (ssoToken && pathname === "/api/auth/sso/callback") {
    response.cookies.set("myavedan_session", ssoToken, {
      domain: IS_PRODUCTION ? `.${ROOT_DOMAIN}` : undefined,
      path: "/",
      httpOnly: true,
      secure: IS_PRODUCTION,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    const redirectUrl = searchParams.get("return_to") || "/";
    return NextResponse.redirect(new URL(redirectUrl, request.url), {
      headers: response.headers,
    });
  }

  if (pathname.startsWith("/vault") || pathname.startsWith("/dashboard")) {
    const sessionToken = request.cookies.get("myavedan_session")?.value;
    if (!sessionToken) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
