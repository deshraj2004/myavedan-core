export interface EcosystemVertical {
  name: string;
  hindiName: string;
  role: "Information (Discovery)" | "Service (Fulfillment)";
  subdomain: string;
  description: string;
  status: "Ready" | "Upcoming Integration";
}

export interface SectorDefinition {
  title: string;
  hindiTitle: string;
  theme: string;
  accentBorder: string;
  accentBg: string;
  icon: string;
  verticals: EcosystemVertical[];
}

export interface CentralPlatformEvent {
  eventId: string;
  sourceVertical:
    | "JOB_AVEDAN"
    | "EXAM_AVEDAN"
    | "BIZ_AVEDAN"
    | "LEGAL_AVEDAN"
    | "YOJANA_AVEDAN"
    | "SARKARI_AVEDAN";
  eventType:
    | "APPLICATION_SUBMITTED"
    | "DOCUMENT_VERIFIED"
    | "SCHEME_ELIGIBILITY_MATCH"
    | "NOTIFICATION_DISPATCH"
    | "PAYMENT_COMPLETED";
  timestamp: string;
  userId: string;
  payload: Record<string, unknown>;
}
