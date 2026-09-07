import { NextRequest, NextResponse } from "next/server";
import { verifySSOToken } from "@/lib/auth/sso";
import { encryptField, maskIdentityNumber } from "@/lib/vault/encryption";
import { getDatabaseAdapter } from "@/lib/db/adapter";

export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get("myavedan_session")?.value;
  if (!sessionToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const session = await verifySSOToken(sessionToken);
  if (!session) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const db = getDatabaseAdapter();
  const user = await db.getUserById(session.userId);
  const docs = await db.getVaultDocuments(session.userId);

  return NextResponse.json({
    success: true,
    profile: {
      userId: session.userId,
      citizenType: session.citizenType,
      fullName: user?.fullName || "Citizen",
      verifiedState: user?.verifiedState || "Rajasthan",
      registeredDistrict: user?.registeredDistrict || "Sikar",
      pincode: user?.pincode || "332601",
      documentCount: docs.length,
      aadhaarStatus: "VERIFIED",
      aadhaarDisplayMask: maskIdentityNumber("AADHAAR"),
      panDisplayMask: maskIdentityNumber("PAN"),
      documents: docs.map((d) => ({
        docType: d.docType,
        status: "ENCRYPTED_VAULT",
        uploadDate: d.createdAt,
      })),
    },
  });
}

export async function POST(request: NextRequest) {
  const sessionToken = request.cookies.get("myavedan_session")?.value;
  if (!sessionToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const session = await verifySSOToken(sessionToken);
  if (!session) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { documentNumber, docType, fileStorageUri } = body;

    if (!documentNumber || !docType) {
      return NextResponse.json(
        { error: "Missing required fields: documentNumber and docType" },
        { status: 400 }
      );
    }

    const encrypted = encryptField(documentNumber);
    const db = getDatabaseAdapter();
    await db.saveVaultDocument({
      userId: session.userId,
      docType,
      encryptedData: encrypted,
      fileStorageUri,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Document encrypted and saved in myAvedan vault",
      docType,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Vault Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
