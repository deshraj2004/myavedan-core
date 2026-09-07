import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "myAvedan — Integrated Digital Services & Information Ecosystem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1f2937 2%, transparent 0%), radial-gradient(circle at 75px 75px, #111827 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "#f9fafb",
          padding: "60px 80px",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                backgroundColor: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              आ
            </div>
            <span style={{ fontSize: "38px", fontWeight: "800", letterSpacing: "-0.03em" }}>
              myAvedan <span style={{ color: "#60a5fa" }}>(माई आवेदन)</span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(30, 58, 138, 0.4)",
              border: "1px solid #3b82f6",
              borderRadius: "9999px",
              padding: "8px 24px",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
            <span style={{ fontSize: "18px", color: "#93c5fd", fontWeight: "600" }}>
              iStart Reg: 5F85FD9 | Bronze QRate (Score: 14)
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: "900",
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "980px",
            }}
          >
            भारत का एकीकृत सूचना एवं सेवा इकोसिस्टम
          </div>
          <div style={{ fontSize: "26px", color: "#9ca3af", fontWeight: "400" }}>
            Bridging Discovery (Information) & Fulfillment (Execution) across Education, Business, and G2C Services.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #1f2937",
            paddingTop: "28px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <span style={{ fontSize: "20px", color: "#60a5fa", fontWeight: "600" }}>
              • शिक्षा (Education)
            </span>
            <span style={{ fontSize: "20px", color: "#34d399", fontWeight: "600" }}>
              • व्यापार (Business)
            </span>
            <span style={{ fontSize: "20px", color: "#f59e0b", fontWeight: "600" }}>
              • लोक सेवाएं (Public G2C)
            </span>
          </div>
          <span style={{ fontSize: "18px", color: "#6b7280" }}>myavedan.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
