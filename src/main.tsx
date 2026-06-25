import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function ReplyDM() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0a",
      color: "#ffffff",
      fontFamily: "Inter, Arial, sans-serif",
      textAlign: "center",
      padding: "2rem",
      margin: 0,
    }}>
      <div style={{
        fontSize: "clamp(2.5rem, 8vw, 5rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        marginBottom: "1.2rem",
        lineHeight: 1.1,
      }}>
        Reply DM
      </div>
      <div style={{
        fontSize: "clamp(1rem, 3vw, 1.4rem)",
        color: "#aaaaaa",
        maxWidth: "360px",
        lineHeight: 1.7,
      }}>
        Send us a direct message to get started.
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReplyDM />
  </StrictMode>
);
