"use client";

export default function WhatsappButton() {
  const phone = "573150738110"; // ← CAMBIA ESTE NÚMERO
  const message = encodeURIComponent(
    "Hola 👋, quiero información sobre los helados 🍦"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        zIndex: 9999,
        cursor: "pointer",
      }}
    >
      <img
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        style={{ width: 30, height: 30 }}
      />
    </a>
  );
}
