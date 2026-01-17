"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full p-6 z-50 bg-black/50 backdrop-blur-md border-b border-cyberNavy/30">
            {/* Usamos 'justify-end' para empurrar todos os elementos para a direita. 
                O 'gap-6' controla o espaçamento entre o grupo do ícone e o nome.
            */}
            <div className="max-w-7xl mx-auto flex justify-start items-center gap-6">
                
                {/* GRUPO: FAVICON + HAMBÚRGUER */}
                <div className="flex items-center gap-4">
                    {/* 1. FAVICON (à esquerda do hamburguer) */}
                    <div className="relative w-15 h-15 opacity-80 hover:opacity-100 transition-opacity">
                        <Image 
                            src="/favicon.ico" 
                            alt="Logo AR"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* 2. BOTÃO HAMBÚRGUER */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none group"
                    >
                        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white mb-1.5 ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>

                {/* 3. SEU NOME (Mantido na direita) */}
                <div className="text-white font-bold text-xl tracking-tighter border-l border-cyberNavy/30 pl-6 uppercase">
                    Antônio<span className="text-cyberNavy">_</span>Rocha
                </div>
            </div>

            {/* Menu Lateral / Overlay (Mantido a lógica de abertura) */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black border-b border-cyberNavy animate-in fade-in slide-in-from-top-4">
                    <ul className="flex flex-col p-8 gap-6 text-white text-lg font-light uppercase tracking-[0.2em]">
                        <li>
                            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-cyberNavy transition-all flex items-center gap-3">
                                <span className="text-cyberNavy font-mono text-xs">01//</span> SOBRE_MIM
                            </Link>
                        </li>
                        <li>
                            <Link href="/projetos" onClick={() => setIsOpen(false)} className="hover:text-cyberNavy transition-all flex items-center gap-3">
                                <span className="text-cyberNavy font-mono text-xs">02//</span> PROJETOS
                            </Link>
                        </li>
                        <li>
                            <Link href="/conquistas" onClick={() => setIsOpen(false)} className="hover:text-cyberNavy transition-all flex items-center gap-3">
                                <span className="text-cyberNavy font-mono text-xs">03//</span> CONQUISTAS
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}