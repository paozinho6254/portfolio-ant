import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header de Introdução */}
          <header className="mb-16 border-l-4 border-cyberNavy pl-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Antônio Rocha <br />
              <span className="text-cyberNavy">da Silva</span>
            </h1>
            <p className="text-xl mt-4 text-gray-400 font-mono">
              [Desenvolvedor de Sistemas // ADS 2026]
            </p>
          </header>

          <div className="mt-16 mb-10 flex justify-center">

            <div className="relative w-[900px] h-[600px] border border-cyberNavy/40 p-2 bg-black group rounded-lg">

              <div className="relative w-full h-full overflow-hidden bg-gray-900 rounded-md font-mono">
                <Image
                  src="/images/minhas/Eu.png"
                  alt="Foto de perfil de Antônio Rocha"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyberNavy rounded-tl-sm z-10"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyberNavy rounded-br-sm z-10"></div>

                <div className="absolute inset-0 bg-cyberNavy/10 mix-blend-overlay z-0 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Conteúdo Biográfico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-light leading-relaxed text-gray-300">
            <div className="space-y-6">
              <p>
                Natural de Blumenau-SC, iniciei minha jornada tecnológica em 2021,
                explorando a lógica de programação através de autodidatismo.
                Aos 17 anos, encerro minha etapa no ensino médio técnico do <span className="text-white font-medium"> SESI
                </span> já imerso no mercado acadêmico de ADS.
              </p>
              <p>
                Minha formação foi moldada por experiências práticas: desde o grupo de
                <span className="text-cyberNavy"> iniciação científica</span> no SESI até a
                especialização em desenvolvimento WEB e Banco de Dados pelo programa
                <span className="text-white font-medium"> Jovem Programador (SENAC)</span> em 2024.
              </p>
            </div>

            <div className="space-y-6 border-t border-gray-800 md:border-t-0 pt-6 md:pt-0">
              <p>
                Estou ingressando no curso de <span className="text-cyberNavy italic">Análise e Desenvolvimento de Sistemas </span>
                com o objetivo claro de conectar teoria e prática. Busco oportunidades
                para aplicar meu conhecimento em ambientes produtivos e colaborativos.
              </p>

              <div className="p-4 border border-cyberNavy/20 bg-cyberNavy/5 rounded-sm">
                <h3 className="text-cyberNavy font-bold mb-2 uppercase text-sm tracking-widest">// STATUS_ATUAL</h3>
                <ul className="font-mono text-sm space-y-1">
                  <li>&gt; Graduação: ADS (Início 2026)</li>
                  <li>&gt; Local: Blumenau, Vale do Itajaí</li>
                  <li>&gt; Foco: Full-stack Development</li>
                  <li>&gt; Disponibilidade: Imediata para estágio/Júnior</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}