"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ICONS = ["🍦", "🍭", "🍓", "🍫", "🐶", "🦴"];

interface Particle {
  id: number;
  icon: string;
  x: number;
  duration: number;
  delay: number;
}

export default function FlavorRain() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generamos las posiciones solo una vez al cargar el componente
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      icon: ICONS[i % ICONS.length],
      x: Math.floor(Math.random() * 100), // Usamos porcentaje para evitar errores de pantalla
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -100, x: `${p.x}vw`, opacity: 0 }}
          animate={{ 
            y: "110vh", 
            opacity: [0, 0.4, 0],
            rotate: 360 
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          className="text-4xl absolute"
        >
          {p.icon}
        </motion.div>
      ))}
    </div>
  );
}
