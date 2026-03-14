"use client";
import { motion } from "framer-motion";

export default function PetFriendlySection() {
  return (
    <section id="pets" className="py-24 bg-[var(--cafe-artesanal)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D70E8E] rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl animate-bounce">🐾</span>
            <h2 className="text-6xl font-black text-white leading-none tracking-tighter">
              ZONA <br /> <span className="text-[var(--celeste-fresco)]">PET FRIENDLY</span>
            </h2>
          </div>
          <p className="text-white/80 text-xl font-medium mb-10 max-w-md">
            En **PROVOCACIÓN** no dejamos a nadie fuera. Tenemos helados artesanales creados especialmente para la digestión de tus perritos. 100% fruta, 0% azúcar.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <p className="text-4xl mb-2">🦴</p>
              <h4 className="font-black text-white uppercase text-xs tracking-widest">Sin Lactosa</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <p className="text-4xl mb-2">🍎</p>
              <h4 className="font-black text-white uppercase text-xs tracking-widest">Fruta Natural</h4>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative order-1 md:order-2"
          initial={{ scale: 0.8, rotate: 5, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        >
          <div className="relative z-10 rounded-[60px] overflow-hidden border-[15px] border-white shadow-2xl">
            <img src="/mascotas/perro-comiendo.jpg" alt="Perrito feliz" className="w-full h-[500px] object-cover" />
          </div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 bg-[var(--rosa-provocacion)] p-8 rounded-full shadow-2xl z-20"
          >
            <span className="text-white font-black text-2xl">¡GUAU! 🐶</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
