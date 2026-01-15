import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const MEUS_PROJETOS = [
  {
    id: "01",
    titulo: "Sistemas de Gestão SQL (SENAC)",
    descricao: "Implementação de banco de dados relacional e integração com sistemas de desktop. Este projeto envolveu modelagem de dados e queries complexas.",
    imagens: [
      "/images/projetos/senac-1.jpg",
      "/images/projetos/senac-2.jpg",
      "/images/projetos/senac-3.jpg",
    ]
  },
  { 
    id: "02",
    titulo: "Iniciação Científica (SESI)",
    descricao: "Desenvolvimento de protótipos de software voltados para a resolução de problemas sociais, utilizando lógica avançada e trabalho em grupo.",
    imagens: [
      "/images/projetos/sesi-1.jpg",
      "/images/projetos/sesi-2.jpg",
    ]
  },
];

export default function ProjetosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-20 border-l-4 border-cyberNavy pl-6">
            <h1 className="text-5xl font-black uppercase tracking-tighter">Projetos<span className="text-cyberNavy">_</span></h1>
            <p className="text-gray-500 font-mono mt-2 uppercase text-sm">Documentação de evolução técnica</p>
          </header>

          {/* LISTAGEM DE PROJETOS SCROLLÁVEL */}
          <div className="space-y-32">
            {MEUS_PROJETOS.map((projeto) => (
              <ProjectCard 
                key={projeto.id}
                titulo={projeto.titulo}
                registroId={projeto.id}
                descricao={projeto.descricao}
                imagens={projeto.imagens}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}