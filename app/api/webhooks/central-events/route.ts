import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { CentralPlatformEvent } from "@/types/ecosystem";

const SHARED_SECRET = process.env.CENTRAL_WEBHOOK_SECRET || "myavedan-webhook-secret-key-prod";
const N8N_URL = process.env.N8N_WORKFLOW_WEBHOOK_URL;

function verifySignature(rawBody: string, signature: string | null): boolean {
  if (!signature) return false;
  const expected = crypto.createHmac("sha256", SHARED_SECRET).update(rawBody).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-myavedan-signature");

    if (process.env.NODE_ENV === "production" && !verifySignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid HMAC signature" }, { status: 401 });
    }

    const eventData: CentralPlatformEvent = JSON.parse(rawBody);

    if (N8N_URL) {
      fetch(N8N_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Origin-Hub": "myavedan-parent-core" },
        body: JSON.stringify(eventData),
      }).catch((err) => console.error("Async webhook dispatch error:", err));
    }

    return NextResponse.json({
      status: "ACKNOWLEDGED",
      eventId: eventData.eventId,
      processedAt: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Bad Request";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
