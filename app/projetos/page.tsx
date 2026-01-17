import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const MEUS_PROJETOS = [
  {
    id: "01",
    titulo: "Clicare - +Devs2Blu",
    descricao: "O CliCare é um app para ser usado para fazer agendamentos em clínicas de maneira mais prática. As tecnologias utilizadas para fazer o desenvolvimento em web é por meio de Java com o FrameWork do SpringBoot, mas com objetivo de desenvolver para aplicações Mobile com Dart \
    e Flutter para que seja possível marcar uma consulta apenas pelo celular.",
    imagens: [
      "/images/projetos/clicare/clicare telas.png",
      "/images/projetos/clicare/Tela de login.png",
    ]
  },
  {
    id: "02",
    titulo: "SGCA - Inciação científica",
    descricao: "Projeto premiado na FEBIC, desenvolvido para monitoramento e gerenciamento de recursos durante desastres naturais. O projeto é composto por mim, Antônio Rocha da Silva; Gustavo Franke; Kauã Mellato; e nossos orientadores, Ana Carla Zultanski e Marcio Schoenfelder. \
    A região de Gaspar (SC) enfrenta problemas decorrentes de eventos climáticos, como enchentes, deslizamentos e enxurradas, que resultam em grandes desastres. Propõe-se uma solução viável para auxiliar a Defesa Civil de Gaspar na mitigação das consequências desses eventos. É fundamental \
    reduzir o tempo de resposta em situações de catástrofe e otimizar o direcionamento de materiais de suporte, como alimentos, roupas, remédios, etc. O gerenciamento eficiente dos recursos e a organização do seu envio podem evitar perdas materiais durante os desastres e principalmente, \
    salvar vidas. Espera-se que o projeto facilite a gestão de recursos humanos, financeiros e materiais em eventos de desastres ambientais em Gaspar, melhorando a organização e a utilização dos recursos pela Defesa Civil de Gaspar, auxiliando a população a suprir suas necessidades durante \
    e após os desastres, reduzindo os impactos e preservando vidas.",
    imagens: [
      "/images/projetos/sgca/sistema_SGCA.png",
      "/images/projetos/sgca/premiação.jpeg",
      "/images/projetos/sgca/entrevista_SGCA.jpeg",
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