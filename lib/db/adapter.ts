import { EncryptedPayload, VerifiedDocumentRecord } from "@/types/auth";

export interface StoredVaultRecord {
  userId: string;
  docType: string;
  encryptedData: EncryptedPayload;
  fileStorageUri?: string;
  createdAt: string;
}

export interface UserProfileRecord {
  userId: string;
  citizenType: "INDIVIDUAL" | "BUSINESS" | "AGENT";
  fullName: string;
  verifiedState: string;
  registeredDistrict: string;
  pincode: string;
  roles: string[];
}

export interface IDatabaseAdapter {
  getUserById(userId: string): Promise<UserProfileRecord | null>;
  upsertUser(user: UserProfileRecord): Promise<void>;
  saveVaultDocument(record: StoredVaultRecord): Promise<void>;
  getVaultDocuments(userId: string): Promise<StoredVaultRecord[]>;
}

class InMemoryDatabaseAdapter implements IDatabaseAdapter {
  private users: Map<string, UserProfileRecord> = new Map();
  private vaultRecords: StoredVaultRecord[] = [];

  constructor() {
    this.users.set("usr_founder_001", {
      userId: "usr_founder_001",
      citizenType: "INDIVIDUAL",
      fullName: "Deshraj Dhayal",
      verifiedState: "Rajasthan",
      registeredDistrict: "Sikar",
      pincode: "332601",
      roles: ["FOUNDER", "CITIZEN"],
    });
  }

  async getUserById(userId: string): Promise<UserProfileRecord | null> {
    return this.users.get(userId) || null;
  }

  async upsertUser(user: UserProfileRecord): Promise<void> {
    this.users.set(user.userId, user);
  }

  async saveVaultDocument(record: StoredVaultRecord): Promise<void> {
    this.vaultRecords.push(record);
  }

  async getVaultDocuments(userId: string): Promise<StoredVaultRecord[]> {
    return this.vaultRecords.filter((r) => r.userId === userId);
  }
}

class PostgresDatabaseAdapter implements IDatabaseAdapter {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  async getUserById(userId: string): Promise<UserProfileRecord | null> {
    return null;
  }

  async upsertUser(user: UserProfileRecord): Promise<void> {}

  async saveVaultDocument(record: StoredVaultRecord): Promise<void> {}

  async getVaultDocuments(userId: string): Promise<StoredVaultRecord[]> {
    return [];
  }
}

let activeAdapter: IDatabaseAdapter | null = null;

export function getDatabaseAdapter(): IDatabaseAdapter {
  if (!activeAdapter) {
    if (process.env.DATABASE_URL) {
      activeAdapter = new PostgresDatabaseAdapter(process.env.DATABASE_URL);
    } else {
      activeAdapter = new InMemoryDatabaseAdapter();
    }
  }
  return activeAdapter;
}
