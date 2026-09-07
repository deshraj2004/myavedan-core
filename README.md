# myAvedan (माई आवेदन) — Core Umbrella Platform

> **भारत का एकीकृत सूचना एवं सेवा इकोसिस्टम (शिक्षा, व्यापार एवं लोक सेवाएं)**

[![iStart Rajasthan](https://img.shields.io/badge/iStart%20Rajasthan-Registered%20(5F85FD9)-blue)](https://istart.rajasthan.gov.in)
[![QRate Rating](https://img.shields.io/badge/QRate%20Rating-BRONZE%20(Score%2014)-orange)](https://istart.rajasthan.gov.in)
[![Deployment](https://img.shields.io/badge/Vercel-Edge%20Ready-black)](https://myavedan.com)

---

## 1. Overview & Identity
- **Startup Name**: myAvedan (माई आवेदन)
- **Domain**: `myavedan.com`
- **Founder**: Deshraj Dhayal
- **Registration**: iStart Rajasthan (Reg No: `5F85FD9`)
- **QRate Score**: 14 (Rating: `BRONZE`)
- **Location**: Bajyawas, Sikar, Rajasthan - 332601

---

## 2. 3-Sector & 6-Vertical Ecosystem

| Sector | Information Vertical (Discovery) | Service Vertical (Fulfillment) | Target Subdomain |
| :--- | :--- | :--- | :--- |
| **Education** | **Job Avedan** (नौकरी सूचना) | **Exam Avedan** (फॉर्म व एडमिट कार्ड) | `jobavedan.myavedan.com` / `examavedan.myavedan.com` |
| **Business** | **BizAvedan** (MSME व नीतियां) | **Legal Avedan** (रजिस्ट्रेशन व लीगल) | `bizavedan.myavedan.com` / `legalavedan.myavedan.com` |
| **Public / G2C** | **Yojana Avedan** (योजना खोज) | **Sarkari Avedan** (नागरिक आवेदन) | `yojanaavedan.myavedan.com` / `sarkariaavedan.myavedan.com` |

---

## 3. Core Architecture Pillars
1. **Central SSO (`lib/auth/sso.ts`)**: Scoped wildcard session cookie (`Domain=.myavedan.com`) authorizing users across all sub-platforms.
2. **Citizen Vault (`app/api/auth/profile/route.ts`)**: AES-256-GCM field-level encryption with strict zero-disclosure redaction policy for government IDs.
3. **Programmatic SEO (`app/sitemap.ts` & `components/seo/JsonLd.tsx`)**: Automated Schema.org injection (`Organization`, `WebSite`, `GovernmentService`, `EducationalOrganization`, `FAQPage`).
4. **Webhook Orchestration (`app/api/webhooks/central-events/route.ts`)**: HMAC-SHA256 verified event routing to background n8n automation pipelines.

---

## 4. Local Verification & Development
```bash
# Run self-contained crypto and architecture verification test
npm run verify

# Start development server
npm run dev
```

---

## 5. 1-Click Vercel Deployment

1. Push this repository to GitHub (`github.com/deshraj2004/myavedan-core`).
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Set the Environment Variables:
   - `NEXT_PUBLIC_ROOT_DOMAIN`: `myavedan.com`
   - `SSO_JWT_SECRET`: *(Generate a secure 32+ character key)*
   - `VAULT_MASTER_KEY_HEX`: *(64-character hexadecimal key)*
   - `CENTRAL_WEBHOOK_SECRET`: *(Secure shared secret for subdomains)*
5. Click **Deploy**.
6. Under **Project Settings > Domains**, attach `myavedan.com` and wildcard `*.myavedan.com`.
