import Navbar from "@/components/Navbar";
import AchievementCard from "@/components/AchievementCard";

const MINHAS_CONQUISTAS = [
  {
    id: 1,
    titulo: "Ensino Médio Integrado - Técnico em Desenvolvimento de sistemas",
    instituicao: "Escola SESI",
    data: "2023-2025",
    descricao: "Ensino médio técnico focado na base da computação. Destaque para a participação no grupo de iniciação científica, onde desenvolvi habilidades de pesquisa, documentação técnica e trabalho colaborativo em projetos de software.",
    imagens: [
      "/images/certificadosconquistas/Ensinomédio/Febic.jpeg",
      "/images/certificadosconquistas/Ensinomédio/ValeEurobotics.jpeg",
      "/images/certificadosconquistas/Ensinomédio/Certificado final.png",
    ]
  },
  {
    id: 2,
    titulo: "+Devs2Blu - Flutter",
    instituicao: "SENAI / FIESC",
    data: "2025",
    descricao: "Formação Fullstack, conjunto de desenvolvimento móvel em React Native e Flutter. Além do conteúdo, este programa me fez desenvolver e aprimorar habilidades essenciais, trabalho em equipe, coordenação, e  muitas outras softskills foram exploradas com exito graças ao programa.",
    imagens: [
      "/images/certificadosconquistas/devs/turmaflutter.jpeg",
      "/images/certificadosconquistas/devs/auladevs.jpeg",
      "/images/certificadosconquistas/devs/apresentacaohackweek.jpeg",
      "/images/certificadosconquistas/devs/formaturadevs.jpeg",
      "/images/certificadosconquistas/devs/hackweek.png",
      "/images/certificadosconquistas/devs/modulo1.png",
      "/images/certificadosconquistas/devs/modulo2.png",
      "/images/certificadosconquistas/devs/modulo3.png",
      "/images/certificadosconquistas/devs/modulo4.png",
      "/images/certificadosconquistas/devs/modulo5.png",
      "/images/certificadosconquistas/devs/modulo6.png",
      "/images/certificadosconquistas/devs/modulo7.png",
      "/images/certificadosconquistas/devs/modulo8.png",
      "/images/certificadosconquistas/devs/modulo9.png",
    ]
  },
  {
    id: 3,
    titulo: "Programa Jovem Progamador",
    instituicao: "SENAC / SEPROSC",
    data: "2024",
    descricao: "Formação intensiva focada em tecnologias de mercado. Durante o curso, aprofundei conhecimentos em lógica avançada, arquitetura de banco de dados SQL e desenvolvimento de interfaces modernas",
    imagens: [
      "/images/certificadosconquistas/Jovem programdor/UC1.png",
      "/images/certificadosconquistas/Jovem programdor/UC2.png",
    ]
  },
  {
    id: 4,
    titulo: "IX FEBIC - Feira Brasileira de Iniciação Científica",
    instituicao: "FEBIC / IBIC",
    data: "2024",
    descricao: "Formação intensiva focada em tecnologias de mercado. Durante o curso, aprofundei conhecimentos em lógica avançada, arquitetura de banco de dados SQL e desenvolvimento de interfaces modernas",
    imagens: [
      "/images/certificadosconquistas/febic/UC1.png",
      "/images/certificadosconquistas/febic/UC2.png",
    ]
  }
];

export default function ConquistasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
        <div className="max-w-4xl mx-auto">
          <header className="mb-20 border-l-4 border-cyberNavy pl-6">
            <h1 className="text-5xl font-black uppercase tracking-tighter italic">
              Conquistas<span className="text-cyberNavy text-6xl">.</span>
            </h1>
            <p className="text-gray-500 font-mono mt-2 uppercase text-sm">
              Vault de Certificações e Reconhecimentos Técnicos
            </p>
          </header>

          <div className="grid grid-cols-1 gap-20">
            {MINHAS_CONQUISTAS.map((item) => (
              <AchievementCard
                key={item.id}
                titulo={item.titulo}
                instituicao={item.instituicao}
                data={item.data}
                descricao={item.descricao}
                imagens={item.imagens}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}