import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const MEUS_PROJETOS = [

  {
    id: "01",
    titulo: "Guichê de senhas inteligente - fesbraer",
    descricao: `O Fesbraer, maior evento de aeromodelismo da América Latina, reúne pilotos de diferentes categorias como escala, jatos e acrobáticos com regras específicas de operação: categorias não podem voar simultaneamente e há limite de até 5 aeronaves na pista. Esse cenário naturalmente gera alta complexidade na organização das filas e da ordem de voo.\W
   
    Pensando nisso, desenvolvi um sistema de guichê de senhas inteligente, projetado para organizar o fluxo de pilotos em tempo real durante o evento.\
   
    
    A solução permite que pilotos retirem senhas por categoria, enquanto operadores estruturam janelas de voo organizadas, respeitando as regras operacionais. O sistema também integra uma base de dados previamente construída a partir das inscrições do evento, possibilitando um cadastro rápido e eficiente no momento da chamada.\
    
   
    Durante o 39º Fesbraer, o sistema foi utilizado em ambiente real, apoiando diretamente a organização das apresentações. Além da implementação técnica, atuei também na operação do sistema, coordenando chamadas, alinhando pilotos na pista e ajustando a dinâmica conforme necessário.\
   
    
    Uma tela dedicada permitiu que os pilotos acompanhassem o andamento da fila em tempo real, facilitando a preparação das aeronaves processo que, em alguns casos, pode levar até 30 minutos.\
    
    
    O resultado foi uma melhoria significativa na organização do fluxo de voos, com feedbacks positivos de organizadores e participantes. O sistema cumpriu seu papel na prática e abriu espaço pa  ra futuras evoluções nas próximas edições do evento.`,
    tecnologias: "Dart, Flutter, NextJS, Supabase, Firebase",
    imagens: [
      "/images/projetos/guichesenha/3.jpg",
      "/images/projetos/guichesenha/4.jpeg",
      "/images/projetos/guichesenha/1.png",
      "/images/projetos/guichesenha/2.png",
      "/images/projetos/guichesenha/5.jpeg",
      "/images/projetos/guichesenha/6.jpeg",
    ]
  },

  {
    id: "02",
    titulo: "Clicare - +Devs2Blu",
    descricao: "O CliCare é um app para ser usado para fazer agendamentos em clínicas de maneira mais prática. As tecnologias utilizadas para fazer o desenvolvimento em web é por meio de Java com o FrameWork do SpringBoot, mas com objetivo de desenvolver para aplicações Mobile com Dart \
    e Flutter para que seja possível marcar uma consulta apenas pelo celular.",
    tecnologias: "Dart, Flutter, Java, SpringBoot, PostgreSQL",
    imagens: [
      "/images/projetos/clicare/clicare telas.png",
      "/images/projetos/clicare/Tela de login.png",
    ]
  },

  {
    id: "03",
    titulo: "SGCA - Inciação científica",
    descricao: "Projeto premiado na FEBIC, desenvolvido para monitoramento e gerenciamento de recursos durante desastres naturais. O projeto é composto por mim, Antônio Rocha da Silva; Gustavo Franke; Kauã Mellato; e nossos orientadores, Ana Carla Zultanski e Marcio Schoenfelder. \
    A região de Gaspar (SC) enfrenta problemas decorrentes de eventos climáticos, como enchentes, deslizamentos e enxurradas, que resultam em grandes desastres. Propõe-se uma solução viável para auxiliar a Defesa Civil de Gaspar na mitigação das consequências desses eventos. É fundamental \
    reduzir o tempo de resposta em situações de catástrofe e otimizar o direcionamento de materiais de suporte, como alimentos, roupas, remédios, etc. O gerenciamento eficiente dos recursos e a organização do seu envio podem evitar perdas materiais durante os desastres e principalmente, \
    salvar vidas. Espera-se que o projeto facilite a gestão de recursos humanos, financeiros e materiais em eventos de desastres ambientais em Gaspar, melhorando a organização e a utilização dos recursos pela Defesa Civil de Gaspar, auxiliando a população a suprir suas necessidades durante \
    e após os desastres, reduzindo os impactos e preservando vidas.",
    tecnologias: "Oracle Apex, MySQL",
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
                tecnologias={projeto.tecnologias}
                imagens={projeto.imagens}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}