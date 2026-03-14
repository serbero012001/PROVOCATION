"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import DogBanner from "@/components/DogBanner";
import IceCreamGrid from "@/components/IceCreamGrid";
import MainFooter from "@/components/MainFooter";
import LoadingScreen from "@/components/LoadingScreen";
import { helados as ListaHelados, helados as HeladoData } from "@/data/helados";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("TODOS");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const petHelados = useMemo(() => 
    ListaHelados.filter(h => (h.tipo as string) === "Perros").slice(0, 3), 
  [ListaHelados]);

  const filteredCatalog = useMemo(() => {
    return ListaHelados.filter(h => {
      const esPerro = (h.tipo as string) === "Perros";
      const term = search.toLowerCase();
      const coincideBusqueda = 
        h.nombre.toLowerCase().includes(term) || 
        h.marca.toLowerCase().includes(term) || 
        (h.tipo as string).toLowerCase().includes(term);
      const coincideCat = activeCategory === "TODOS" || (h.tipo as string).toUpperCase() === activeCategory.toUpperCase();
      return !esPerro && coincideBusqueda && coincideCat;
    });
  }, [search, activeCategory, ListaHelados]);

  const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage);
  const currentItems = filteredCatalog.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="bg-[#FFF8F1] min-h-screen">
      <LoadingScreen />
      
      <Navbar 
        onSearch={setSearch} 
        onFilter={(cat) => {
          setActiveCategory(cat);
          setCurrentPage(1);
        }}
        currentFilter={activeCategory}
      />
      
      <div className="bg-[#D70E8E] pb-24">
        <DogBanner />
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-[40px] md:rounded-[70px] shadow-2xl p-4 md:p-16 border border-gray-50">
          
          <section className="mb-24">
            <h3 className="text-4xl font-black text-[#905742] uppercase tracking-tighter mb-12 italic text-center md:text-left">
              Colección <span className="text-[#D70E8E]">Canina</span> 🐾
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {petHelados.map((pet) => (
                <div key={pet.id} className="bg-linear-to-b from-[#F9ECE4] to-white rounded-[60px] p-10 text-center border border-[#905742]/5 group hover:scale-105 transition-all">
                  <img src={pet.imagen} className="h-48 mx-auto mb-6 drop-shadow-2xl" alt={pet.nombre} />
                  <h4 className="font-black text-[#905742] text-sm uppercase tracking-widest">{pet.nombre}</h4>
                  <div className="h-1 w-8 bg-[#D70E8E] mx-auto mt-4 rounded-full" />
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-100 mb-20" />

          <div id="catalogo" className="scroll-mt-32"> 
            <div className="mb-12">
              <h3 className="text-4xl font-black text-[#2C2A2B] uppercase tracking-tighter">
                Nuestra Carta
              </h3>
              <p className="text-[10px] font-bold text-gray-300 tracking-[3px] uppercase mt-2">
                Explora el sabor de Provocación
              </p>
            </div>

            <IceCreamGrid data={currentItems} />
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-24">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setCurrentPage(i + 1);
                    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-black text-[10px] transition-all ${
                    currentPage === i + 1 ? 'bg-[#D70E8E] text-white scale-125 shadow-lg' : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  {i + 1}
                </button>
              )).slice(0, 10)}
            </div>
          )}
        </div>
      </div>

      <MainFooter onFilter={(cat) => {
        setActiveCategory(cat);
        setCurrentPage(1);
      }} />
    </main>
  );
}
