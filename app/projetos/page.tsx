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
    {
    id: "03",
    titulo: "Guichê de senhas para o fesbraer",
    descricao: "O Fesbraer é o maior evento de Aeromodelismo da américa Latina, isto é, por ser um evento com apresentações de pilotos inscritos, acaba gerando filas nos boxes da pista para realizar os voos, e também vale lembrar que há diferentes categorias voando, sendo aviões escala, Jatos e acrobáticos, \
    duas categorias não podem voar juntas e o limite de pilotos na pista são 5 cada. Esta organização acaba deixando o evento um completo caos, pois não se sabe quem ou quando pode voar no momento.\n\
    É por este motivo que desenvolvi um guichê de senhas personalizado online, para ser usado em tempo real, basicamente um piloto nos boxes vai para um espaço retirar seu número de senha da categoria de voo, assim o operador registra o piloto que retirou a senha, mas ai entra a questão, isso vai atrapalhar\
    durante o evento por conta do tempo de cadastrar? Não, pois para cadastrar o piloto só precisa informar o nome que ele já aparece na lista pilotos cadastros no evento, lista esta que será montada com base nos inscritos em um formulário do Sympla. Com isso os operadores de pista montam janelas de voos\
    contendo 5 senhas cada, e uma categoria por vez, e como terá uma tela direcionada para os box, além do operador chamar os pilotos pelo microfone, os mesmos poderam acompanhar o progresso da fila, facilitando a organização para preparar o avião/jato para operação de pista, que em alguns casos levam até meia hora de preparo.\e\
    O app esta sendo em Flutter, mas está em processo de mudar para o React Native para ter uma versão Tanto WEB como Mobile.",
    imagens: [
      "/images/projetos/guichesenha/Fila 1.png",
      "/images/projetos/guichesenha/Fila 2.png",
      "/images/projetos/guichesenha/Janela categoria.png",
      "/images/projetos/guichesenha/Janela montagem.png",
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