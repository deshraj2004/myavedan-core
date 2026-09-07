import crypto from "crypto";
import { EncryptedPayload } from "@/types/auth";

const DEFAULT_KEY_HEX = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
const ENCRYPTION_KEY_HEX = process.env.VAULT_MASTER_KEY_HEX || DEFAULT_KEY_HEX;
const ALGORITHM = "aes-256-gcm";

export function encryptField(plainText: string): EncryptedPayload {
  const iv = crypto.randomBytes(12);
  const key = Buffer.from(ENCRYPTION_KEY_HEX, "hex");
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(plainText, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag();

  return {
    iv: iv.toString("hex"),
    tag: tag.toString("hex"),
    cipherText: encrypted,
  };
}

export function decryptField(payload: EncryptedPayload): string {
  const key = Buffer.from(ENCRYPTION_KEY_HEX, "hex");
  const iv = Buffer.from(payload.iv, "hex");
  const tag = Buffer.from(payload.tag, "hex");
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  
  decipher.setAuthTag(tag);
  let decrypted = decipher.update(payload.cipherText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export function maskIdentityNumber(docType: string): string {
  if (docType === "AADHAAR") {
    return "[Aadhaar Redacted]";
  }
  return "XXXXX1234X";
}
