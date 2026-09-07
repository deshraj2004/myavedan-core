export interface EncryptedPayload {
  iv: string;
  tag: string;
  cipherText: string;
}

export interface MyAvedanSessionPayload {
  userId: string;
  citizenType: "INDIVIDUAL" | "BUSINESS" | "AGENT";
  email?: string;
  phone?: string;
  roles: string[];
  iat?: number;
  exp?: number;
  iss?: string;
}

export interface VerifiedDocumentRecord {
  docType: "10TH_MARKSHEET" | "12TH_MARKSHEET" | "DOMICILE" | "JAN_AADHAAR" | "CASTE_CERT";
  documentId: string;
  verifiedAt: string;
  ipfsOrStorageUri: string;
}

export interface CitizenProfileSummary {
  userId: string;
  citizenType: "INDIVIDUAL" | "BUSINESS" | "AGENT";
  verifiedState: string;
  registeredDistrict: string;
  pincode: string;
  documentCount: number;
  aadhaarStatus: "VERIFIED" | "PENDING" | "UNLINKED";
  aadhaarDisplayMask: string;
  panDisplayMask: string;
  documents: Array<{
    docType: string;
    status: string;
    uploadDate: string;
  }>;
}

export interface VaultStoreRequest {
  documentNumber: string;
  docType: "10TH_MARKSHEET" | "12TH_MARKSHEET" | "DOMICILE" | "JAN_AADHAAR" | "CASTE_CERT";
  fileStorageUri?: string;
}
