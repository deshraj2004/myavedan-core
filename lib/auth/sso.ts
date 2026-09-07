import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { MyAvedanSessionPayload } from "@/types/auth";

const DEFAULT_JWT_SECRET = "myavedan-root-sso-secret-change-in-prod-min-32-chars";
const JWT_SECRET_STRING = process.env.SSO_JWT_SECRET || DEFAULT_JWT_SECRET;
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STRING);
const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "myavedan.com";
const COOKIE_NAME = "myavedan_session";

export async function createSSOToken(
  payload: Omit<MyAvedanSessionPayload, "iat" | "exp" | "iss">
): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(`https://${ROOT_DOMAIN}`)
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function verifySSOToken(
  token: string
): Promise<MyAvedanSessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      issuer: `https://${ROOT_DOMAIN}`,
    });
    return payload as unknown as MyAvedanSessionPayload;
  } catch {
    return null;
  }
}

export async function setSSOCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === "production";

  cookieStore.set(COOKIE_NAME, token, {
    domain: isProduction ? `.${ROOT_DOMAIN}` : undefined,
    path: "/",
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSSOCookie(): Promise<void> {
  const cookieStore = await cookies();
  const isProduction = process.env.NODE_ENV === "production";

  cookieStore.set(COOKIE_NAME, "", {
    domain: isProduction ? `.${ROOT_DOMAIN}` : undefined,
    path: "/",
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    maxAge: 0,
  });
}
