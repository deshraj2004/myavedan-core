import { NextRequest, NextResponse } from "next/server";
import { createSSOToken, verifySSOToken, setSSOCookie } from "@/lib/auth/sso";

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get("myavedan_session")?.value;
  if (!sessionToken) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const session = await verifySSOToken(sessionToken);
  if (!session) {
    return NextResponse.json({ authenticated: false, error: "Expired session" }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: {
      userId: session.userId,
      citizenType: session.citizenType,
      roles: session.roles,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, userId, citizenType, roles } = body;

    if (action === "create_session") {
      const token = await createSSOToken({
        userId: userId || "usr_guest",
        citizenType: citizenType || "INDIVIDUAL",
        roles: roles || ["CITIZEN"],
      });

      await setSSOCookie(token);
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
