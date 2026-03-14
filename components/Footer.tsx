export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 60,
        padding: "30px 20px",
        background: "#231f20",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: 10, letterSpacing: 2 }}>
        PROVOCACIÓN
      </h3>

      <p style={{ fontSize: 13, opacity: 0.8 }}>
        Heladería artesanal
      </p>

      <div style={{ marginTop: 15, display: "flex", gap: 16, justifyContent: "center" }}>
        <a href="#" style={{ color: "#ff008a" }}>Instagram</a>
        <a href="#" style={{ color: "#ff008a" }}>Facebook</a>
        <a href="https://wa.me/3150138110" style={{ color: "#ff008a" }}>WhatsApp</a>
      </div>
    </footer>
  );
}
