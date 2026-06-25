import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
      padding: "2rem",
    }}>
      <div style={{
        fontSize: "clamp(2rem, 6vw, 4rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        marginBottom: "1rem",
      }}>
        Reply DM
      </div>
      <div style={{
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        color: "#888",
        maxWidth: "400px",
        lineHeight: 1.6,
      }}>
        Please send us a direct message to get started.
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReplyDM />
  </StrictMode>
);
