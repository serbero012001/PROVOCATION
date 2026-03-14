"use client";
import { useEffect, useRef } from "react";
import { helados } from "@/data/helados";
import HeladoItem from "./HeladoItem";

export default function FavoritosSlider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scroll = 0;
    const speed = 0.5;

    const loop = () => {
      scroll += speed;
      if (scroll >= el.scrollWidth / 2) scroll = 0;
      el.scrollLeft = scroll;
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  const favoritos = helados.slice(0, 8);

  return (
    <section style={{ padding: "32px 16px" }}>
      <h3
        style={{
          fontSize: 26,
          fontWeight: 800,
          marginBottom: 16,
          color: "#231f20",
        }}
      >
        Favoritos
      </h3>



      <div
        ref={ref}
        style={{
          display: "flex",
          gap: 12,
          overflow: "hidden",
          padding: "0 16px",
        }}
      >
        {[...favoritos, ...favoritos].map((h, i) => (
          <div key={i} style={{ minWidth: 160 }}>
            <HeladoItem helado={h} />
          </div>
        ))}
      </div>
    </section>
  );
}
