"use client";
import { useState } from "react";
import Image from "next/image";

interface ProjectProps {
  titulo: string;
  registroId: string;
  descricao: string;
  imagens: string[];
}

export default function ProjectCard({ titulo, registroId, descricao, imagens }: ProjectProps) {
  const [indice, setIndice] = useState(0);

  const proximo = () => setIndice((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  const anterior = () => setIndice((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));

  return (
    <section className="mb-24 last:mb-0">
      {/* Moldura do Carrossel */}
      <div className="relative border border-cyberNavy/40 p-2 bg-black rounded-lg group">
        <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden bg-gray-900 rounded-md">
          <Image
            src={imagens[indice]}
            alt={`${titulo} - imagem ${indice + 1}`}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Cantos Estilo Cyber */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyberNavy z-10"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyberNavy z-10"></div>
        </div>
      </div>

      {/* Controles de Navegação */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <button onClick={anterior} className="text-cyberNavy hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div className="flex gap-2">
          {imagens.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 ${i === indice ? 'w-8 bg-cyberNavy' : 'w-2 bg-gray-800'}`}
            />
          ))}
        </div>

        <button onClick={proximo} className="text-cyberNavy hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" transform="rotate(0 12 12)"/></svg>
        </button>
      </div>

      {/* Legenda Estilo Log (O estilo que você gostou) */}
      <div className="mt-6 p-4 border-l-2 border-cyberNavy bg-cyberNavy/5">
        <p className="text-xs font-mono text-cyberNavy uppercase tracking-widest mb-1">
          // Registro_de_Projeto_{registroId}
        </p>
        <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase tracking-tighter">
          {titulo}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed italic">
          "{descricao}"
        </p>
      </div>
    </section>
  );
}