import styles from "./HeladoItem.module.css";
import { useState } from "react";



type Helado = {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
};

export default function HeladoItem({ helado }: { helado: Helado }) {
  const nombreArchivo = helado.nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");

  const src = `/helados/${helado.marca.toLowerCase()}/${nombreArchivo}.png`;
  const [agotado, setAgotado] = useState(false);

  const mensajeWhatsapp = encodeURIComponent(
    `Hola, me interesa el helado "${helado.nombre}".`
  );

  const whatsappLink = `https://wa.me/573150738110?text=${mensajeWhatsapp}`;

  return (
    <div className={styles.card}>
      {/* IMAGEN */}
      <div className={styles.imageWrapper}>
        {agotado && (
          <span
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: "#231f20",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 700,
              zIndex: 2,
            }}
          >
            AGOTADO
          </span>
        )}

        <img
          src={src}
          alt={helado.nombre}
          className={styles.image}
          onError={() => setAgotado(true)}
        />
      </div>

      {/* INFO */}
      <div className={styles.info}>
        <small className={styles.marca}>{helado.marca}</small>
        <div className={styles.nombre}>{helado.nombre}</div>
        <div className={styles.precio}>
          ${helado.precio.toLocaleString("es-CO")}
        </div>
      </div>

      {/* BOTÓN */}
      <a
        href={whatsappLink}
        target="_blank"
        className={styles.boton}
      >
        Comprar
      </a>
    </div>
  );
}
