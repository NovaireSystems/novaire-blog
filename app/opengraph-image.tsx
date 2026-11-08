import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Ops Modernized — Modern Logistics. Smarter Operations.";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #080d19 0%, #101d35 55%, #07111f 100%)",
          color: "#ffffff",
          padding: "70px 80px",
          fontFamily: "Arial",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -180,
            width: 650,
            height: 650,
            borderRadius: "50%",
            border: "1px solid rgba(56,189,248,0.18)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -20,
            top: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(56,189,248,0.12)",
            display: "flex",
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "#38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#07111f",
              fontSize: 25,
              fontWeight: 800,
            }}
          >
            O
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            OPS MODERNIZED
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 950,
            zIndex: 1,
          }}
        >
          <div
            style={{
              color: "#38bdf8",
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 5,
              marginBottom: 24,
            }}
          >
            LOGISTICS · TECHNOLOGY · AI
          </div>

          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: -2,
            }}
          >
            Modern Logistics.
            <br />
            Smarter Operations.
          </div>

          <div
            style={{
              fontSize: 25,
              color: "#a8b8cc",
              marginTop: 30,
              lineHeight: 1.4,
            }}
          >
            Insights for the next generation of operational businesses.
          </div>
        </div>

        {/* Bottom branding */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 22,
            fontSize: 19,
            color: "#94a3b8",
            zIndex: 1,
          }}
        >
          <span>Published by Novaire Systems</span>
          <span>OPS MODERNIZED · 2026</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}