"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full p-6 z-50 bg-black/50 backdrop-blur-md border-b border-cyberNavy/30">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Botão Hambúrguer */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none group"
                >
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white mb-1.5 ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-white ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                <div className="text-white font-bold text-xl tracking-tighter">
                    ANTÔNIO<span className="text-cyberNavy">_</span>ROCHA
                </div>
            </div>

            {/* Menu Lateral / Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black border-b border-cyberNavy animate-in fade-in slide-in-from-top-4">
                    <ul className="flex flex-col p-8 gap-6 text-white text-lg font-light">
                        <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-cyberNavy transition-colors">/sobre_mim</Link></li>
                        <li><Link href="/projetos" onClick={() => setIsOpen(false)} className="hover:text-cyberNavy transition-colors">/projetos</Link></li>
                        <li><Link href="/conquistas" onClick={() => setIsOpen(false)} className="hover:text-cyberNavy transition-colors">/conquistas</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}