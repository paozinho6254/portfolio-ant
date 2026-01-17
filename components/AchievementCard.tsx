"use client";
import { useState } from "react";
import Image from "next/image";

interface AchievementProps {
  titulo: string;
  instituicao: string;
  data: string;
  descricao: string; 
  imagens: string[];
}

export default function AchievementCard({ titulo, instituicao, data, descricao, imagens }: AchievementProps) {
  const [indice, setIndice] = useState(0);

  const proximo = () => setIndice((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  const anterior = () => setIndice((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));

  return (
    <section className="mb-20">
      <div className="relative border border-cyberNavy/30 p-2 bg-black group rounded-lg">
        <div className="relative h-[250px] md:h-[600px] w-full overflow-hidden bg-gray-900 rounded-md shadow-[0_0_15px_rgba(0,85,255,0.1)]">
          <Image
            src={imagens[indice]}
            alt={titulo}
            fill
            className="object-contain p-4 transition-all duration-500"
          />
          
          <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyberNavy opacity-50"></div>
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyberNavy opacity-50"></div>
        </div>

        {imagens.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <button onClick={anterior} className="p-2 bg-black/80 border border-cyberNavy text-cyberNavy rounded-full pointer-events-auto hover:bg-cyberNavy hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={proximo} className="p-2 bg-black/80 border border-cyberNavy text-cyberNavy rounded-full pointer-events-auto hover:bg-cyberNavy hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(180 0 0)"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          </div>
        )}
      </div>

      {/* Legenda Estilo Log com Descrição */}
      <div className="mt-4 p-4 border-l-2 border-cyberNavy bg-cyberNavy/5">
        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] font-mono text-cyberNavy uppercase tracking-[0.2em]">
            // CREDENCIAL_VERIFICADA
          </p>
          <span className="text-[10px] font-mono text-gray-500 italic">{data}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white font-mono uppercase">
          {titulo}
        </h3>
        
        <p className="text-sm text-cyberNavy mt-1 font-mono font-medium uppercase">
          &gt; {instituicao}
        </p>

        <p className="text-sm text-gray-400 mt-3 leading-relaxed italic border-t border-white/5 pt-3">
          "{descricao}"
        </p>
      </div>
    </section>
  );
}