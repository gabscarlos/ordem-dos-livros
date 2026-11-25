// Guias temáticos (/guias/<id>). Os guias com "itens" são curados à mão;
// os com "automatico" montam a lista a partir dos dados das séries.

export interface ItemGuia {
  serie: string;
  /** Por que essa série entra no guia (uma ou duas frases). */
  motivo: string;
}

export interface Guia {
  id: string;
  /** Título curto, usado em cartões e links. */
  nome: string;
  /** Título da página (h1 e <title>). */
  titulo: string;
  descricao: string;
  intro: string;
  itens?: ItemGuia[];
  automatico?: "curtas" | "adaptadas";
}

const guias: Guia[] = [
  {
    id: "series-parecidas-com-harry-potter",
    nome: "Parecidas com Harry Potter",
    titulo: "Séries de livros parecidas com Harry Potter",
    descricao:
      "Terminou Harry Potter e quer mais? Veja séries de livros parecidas, com magia, escolas secretas e jovens heróis, e a ordem certa de leitura de cada uma.",
    intro:
      "Se você gostou de acompanhar Harry, Rony e Hermione, estas séries têm o que fez Harry Potter ser tão especial: jovens que descobrem um mundo mágico escondido, amizades fortes, mistérios e uma ameaça que cresce a cada livro. Para cada série, explicamos o que ela tem em comum com Harry Potter e mostramos a ordem dos livros.",
    itens: [
      { serie: "percy-jackson", motivo: "Um garoto descobre que é filho de um deus grego e vai para um acampamento onde treinam semideuses. Tem o mesmo clima de escola mágica, trio de amigos e profecias." },
      { serie: "as-cronicas-de-narnia", motivo: "Crianças atravessam um guarda-roupa e chegam a um mundo mágico em guerra. É o clássico que abriu caminho para a fantasia infantojuvenil." },
      { serie: "os-herois-do-olimpo", motivo: "A continuação de Percy Jackson, com novos semideuses, gregos e romanos, e uma profecia ainda maior." },
      { serie: "artemis-fowl", motivo: "Um gênio do crime de 12 anos descobre o mundo secreto das fadas. Tem magia escondida no mundo real, muita aventura e humor." },
      { serie: "os-instrumentos-mortais", motivo: "Uma adolescente descobre o mundo oculto dos Caçadores de Sombras em Nova York, com anjos, demônios e segredos de família." },
      { serie: "ciclo-da-heranca", motivo: "Um garoto comum encontra um ovo de dragão e se torna o herói improvável de uma guerra contra um rei tirano." },
      { serie: "as-cronicas-dos-kane", motivo: "Dois irmãos descobrem que têm poderes ligados à magia do Egito antigo. Do mesmo autor de Percy Jackson." },
      { serie: "desventuras-em-serie", motivo: "Três irmãos órfãos enfrentam um vilão astuto que quer sua herança. Tem mistério, humor sombrio e muitos enigmas." },
      { serie: "academia-de-vampiros", motivo: "Uma escola secreta onde jovens vampiros e seus guardiões estudam e treinam. É Hogwarts em versão mais adolescente e romântica." },
    ],
  },
  {
    id: "series-para-adolescentes",
    nome: "Para adolescentes",
    titulo: "Séries de livros para adolescentes",
    descricao:
      "As melhores séries de livros para adolescentes: distopias, romances, fantasia e mistério, com a idade recomendada e a ordem certa de leitura de cada uma.",
    intro:
      "Uma boa série é a melhor forma de criar o hábito de leitura: quando o primeiro livro prende, a vontade de saber o que acontece depois faz o resto. Reunimos séries que fazem sucesso entre adolescentes, de distopias a romances, incluindo autores brasileiros, com a idade recomendada para cada uma.",
    itens: [
      { serie: "jogos-vorazes", motivo: "Katniss se oferece no lugar da irmã em um jogo mortal transmitido ao vivo. A distopia que marcou uma geração de leitores." },
      { serie: "os-karas", motivo: "Um grupo secreto de estudantes investiga mistérios no colégio. Clássico brasileiro, indicado em escolas de todo o país." },
      { serie: "divergente", motivo: "Em uma Chicago dividida em facções, Tris descobre que não se encaixa em nenhuma. Ação e escolhas difíceis do começo ao fim." },
      { serie: "maze-runner", motivo: "Thomas acorda sem memória em uma clareira cercada por um labirinto gigante. Suspense que faz querer ler o próximo capítulo." },
      { serie: "fazendo-meu-filme", motivo: "Fani, apaixonada por cinema, vive um intercâmbio e os dilemas do primeiro amor. Série brasileira leve e divertida." },
      { serie: "heartstopper", motivo: "A história em quadrinhos de Charlie e Nick, sobre amizade, amor e autodescoberta. Delicada e fácil de ler." },
      { serie: "a-selecao", motivo: "America participa de uma competição pelo amor de um príncipe em um reino dividido em castas. Romance com pitadas de distopia." },
      { serie: "a-rainha-vermelha", motivo: "Mare descobre um poder impossível em um mundo dividido pela cor do sangue. Fantasia cheia de reviravoltas." },
      { serie: "sombra-e-ossos", motivo: "Alina descobre um poder raro que pode salvar seu país da escuridão. Porta de entrada para o Grishaverso." },
      { serie: "estilhaca-me", motivo: "Juliette tem um toque letal e é presa por um regime autoritário. Distopia com romance e um estilo de escrita único." },
    ],
  },
  {
    id: "series-curtas",
    nome: "Séries curtas",
    titulo: "Séries de livros curtas para maratonar",
    descricao:
      "Séries de livros com até 3 volumes para ler do começo ao fim sem demorar meses. Trilogias e duologias completas, com a ordem certa de leitura.",
    intro:
      "Nem toda série precisa de dez livros. Estas têm no máximo três volumes, então dá para começar e terminar a história em pouco tempo, sem ficar esperando lançamentos. São ótimas para quem quer experimentar um gênero novo ou maratonar nas férias.",
    automatico: "curtas",
  },
  {
    id: "series-que-viraram-filme-ou-serie",
    nome: "Viraram filme ou série",
    titulo: "Séries de livros que viraram filme ou série",
    descricao:
      "Séries de livros que ganharam adaptação para o cinema ou para o streaming, com o que foi adaptado e a ordem certa para ler os livros.",
    intro:
      "Assistiu e quer conhecer a história original? Ou leu e quer ver na tela? Estas séries de livros foram adaptadas para o cinema, a TV ou o streaming. Para cada uma, contamos o que foi adaptado e mostramos a ordem certa de leitura, porque quase sempre os livros contam mais do que a tela.",
    automatico: "adaptadas",
  },
];

export default guias;
