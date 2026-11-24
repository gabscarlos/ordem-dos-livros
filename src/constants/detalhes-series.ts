export interface DetalhesSerie {
  generos: string[];
  idade: string;
  adaptacao?: string;
}

const detalhesSeries: Record<string, DetalhesSerie> = {
  "harry-potter": {
    generos: ["fantasia", "juvenil", "aventura"],
    idade: "a partir de 9 anos",
    adaptacao:
      "Sim. A série virou 8 filmes da Warner Bros., lançados entre 2001 e 2011, com Daniel Radcliffe, Emma Watson e Rupert Grint. A HBO também anunciou uma série de TV baseada nos livros.",
  },
  "o-senhor-dos-aneis": {
    generos: ["fantasia", "aventura"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. A trilogia de filmes dirigida por Peter Jackson (2001–2003) é uma das mais premiadas da história do cinema. A série Os Anéis de Poder, do Prime Video, se passa no mesmo universo.",
  },
  "as-cronicas-de-gelo-e-fogo": {
    generos: ["fantasia"],
    idade: "para adultos (a partir de 18 anos)",
    adaptacao:
      "Sim. Os livros deram origem a Game of Thrones, da HBO (2011–2019). A série A Casa do Dragão é baseada em Fogo & Sangue, livro do mesmo universo.",
  },
  "diario-de-um-banana": {
    generos: ["infantil", "humor"],
    idade: "a partir de 8 anos",
    adaptacao:
      "Sim. A série ganhou filmes live-action a partir de 2010 e, mais recentemente, filmes de animação no Disney+.",
  },
  "maze-runner": {
    generos: ["distopia", "juvenil", "ficcao-cientifica", "aventura"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. Os três primeiros livros viraram uma trilogia de filmes, lançada entre 2014 e 2018.",
  },
  duna: {
    generos: ["ficcao-cientifica", "aventura"],
    idade: "a partir de 14 anos",
    adaptacao:
      "Sim. Os filmes de Denis Villeneuve (Duna, de 2021, e Duna: Parte Dois, de 2024) adaptam o primeiro livro. Também existe um filme de David Lynch, de 1984, e a série Duna: A Profecia, da HBO.",
  },
  outlander: {
    generos: ["romance", "fantasia"],
    idade: "para adultos (a partir de 18 anos)",
    adaptacao:
      "Sim. A série Outlander, do canal Starz, estreou em 2014 e adapta os livros temporada a temporada.",
  },
  "os-detetives-do-predio-azul": {
    generos: ["infantil", "misterio", "aventura", "autores-brasileiros"],
    idade: "a partir de 6 anos",
    adaptacao:
      "Os livros são inspirados na série de TV Detetives do Prédio Azul (D.P.A.), do canal Gloob, que também ganhou filmes para o cinema.",
  },
  "diario-de-pilar": {
    generos: ["infantil", "aventura", "autores-brasileiros"],
    idade: "a partir de 7 anos",
    adaptacao:
      "Sim. Diário de Pilar na Amazônia ganhou uma adaptação para o cinema.",
  },
  "socorro-cai-dentro-do-videogame": {
    generos: ["infantil", "aventura", "humor"],
    idade: "a partir de 8 anos",
  },
  "as-aventuras-do-capitao-cueca": {
    generos: ["infantil", "humor"],
    idade: "a partir de 7 anos",
    adaptacao:
      "Sim. A série virou um filme de animação da DreamWorks em 2017 e, depois, uma série animada na Netflix.",
  },
  "o-homem-cao": {
    generos: ["infantil", "humor"],
    idade: "a partir de 7 anos",
    adaptacao: "Sim. O Homem-Cão ganhou um filme de animação da DreamWorks em 2025.",
  },
  mortina: {
    generos: ["infantil", "humor"],
    idade: "a partir de 7 anos",
  },
  crepusculo: {
    generos: ["romance", "fantasia", "juvenil"],
    idade: "a partir de 13 anos",
    adaptacao:
      "Sim. A saga virou 5 filmes, lançados entre 2008 e 2012, com Kristen Stewart e Robert Pattinson.",
  },
  fundacao: {
    generos: ["ficcao-cientifica"],
    idade: "a partir de 14 anos",
    adaptacao: "Sim. A série Fundação, da Apple TV+, estreou em 2021.",
  },
  "as-cronicas-de-narnia": {
    generos: ["fantasia", "infantil", "aventura"],
    idade: "a partir de 8 anos",
    adaptacao:
      "Sim. Três livros viraram filmes entre 2005 e 2010: O Leão, a Feiticeira e o Guarda-Roupa, Príncipe Caspian e A Viagem do Peregrino da Alvorada.",
  },
  "percy-jackson": {
    generos: ["fantasia", "juvenil", "aventura"],
    idade: "a partir de 10 anos",
    adaptacao:
      "Sim. Os dois primeiros livros viraram filmes (2010 e 2013), e a série Percy Jackson e os Olimpianos, do Disney+, estreou em 2023.",
  },
  "desventuras-em-serie": {
    generos: ["infantil", "humor", "misterio", "aventura"],
    idade: "a partir de 9 anos",
    adaptacao:
      "Sim. Os primeiros livros viraram filme em 2004, com Jim Carrey, e a série completa foi adaptada pela Netflix (2017–2019).",
  },
  "jogos-vorazes": {
    generos: ["distopia", "juvenil", "aventura"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. A trilogia original virou 4 filmes (2012–2015), com Jennifer Lawrence, e A Cantiga dos Pássaros e das Serpentes ganhou filme em 2023. Amanhecer na Colheita também foi adaptado para o cinema.",
  },
  "o-mochileiro-das-galaxias": {
    generos: ["ficcao-cientifica", "humor"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. A história começou como uma série de rádio da BBC e ganhou uma série de TV (1981) e um filme (2005).",
  },
  robos: {
    generos: ["ficcao-cientifica"],
    idade: "a partir de 14 anos",
    adaptacao:
      "O filme Eu, Robô (2004), com Will Smith, foi inspirado nos contos de robôs de Asimov.",
  },
  "fazendo-meu-filme": {
    generos: ["romance", "juvenil", "autores-brasileiros"],
    idade: "a partir de 12 anos",
  },
  "a-selecao": {
    generos: ["romance", "distopia", "juvenil"],
    idade: "a partir de 12 anos",
  },
  "corte-de-espinhos-e-rosas": {
    generos: ["romantasia", "fantasia", "romance"],
    idade: "para adultos (a partir de 18 anos, tem cenas de sexo)",
  },
  "trono-de-vidro": {
    generos: ["romantasia", "fantasia", "aventura"],
    idade: "a partir de 16 anos",
  },
  "quarta-asa": {
    generos: ["romantasia", "fantasia", "romance"],
    idade: "para adultos (a partir de 18 anos, tem cenas de sexo)",
    adaptacao: "Uma série de TV baseada nos livros está em desenvolvimento pela Amazon MGM Studios.",
  },
  divergente: {
    generos: ["distopia", "juvenil", "ficcao-cientifica"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. Os três primeiros livros viraram filmes (2014–2016), com Shailene Woodley e Theo James.",
  },
  "os-instrumentos-mortais": {
    generos: ["fantasia", "juvenil", "romance"],
    idade: "a partir de 13 anos",
    adaptacao:
      "Sim. Cidade dos Ossos virou filme em 2013, e a história completa foi adaptada na série Shadowhunters (2016–2019).",
  },
  "a-rainha-vermelha": {
    generos: ["fantasia", "distopia", "juvenil"],
    idade: "a partir de 12 anos",
  },
  "os-bridgertons": {
    generos: ["romance"],
    idade: "a partir de 16 anos",
    adaptacao:
      "Sim. Os livros inspiraram Bridgerton, série da Netflix produzida por Shonda Rhimes que estreou em 2020.",
  },
  "os-herois-do-olimpo": {
    generos: ["fantasia", "juvenil", "aventura"],
    idade: "a partir de 10 anos",
  },
  "as-provacoes-de-apolo": {
    generos: ["fantasia", "juvenil", "aventura", "humor"],
    idade: "a partir de 10 anos",
  },
  "cidade-da-lua-crescente": {
    generos: ["romantasia", "fantasia", "romance"],
    idade: "para adultos (a partir de 18 anos, tem cenas de sexo)",
  },
  "minha-vida-fora-de-serie": {
    generos: ["romance", "juvenil", "autores-brasileiros"],
    idade: "a partir de 12 anos",
  },
  "o-povo-do-ar": {
    generos: ["romantasia", "fantasia", "juvenil"],
    idade: "a partir de 14 anos",
  },
  heartstopper: {
    generos: ["romance", "juvenil"],
    idade: "a partir de 13 anos",
    adaptacao:
      "Sim. Heartstopper virou uma série da Netflix em 2022, com roteiro da própria Alice Oseman, e o último volume inspirou um filme da plataforma.",
  },
  "sombra-e-ossos": {
    generos: ["fantasia", "juvenil", "romance"],
    idade: "a partir de 13 anos",
    adaptacao:
      "Sim. A trilogia foi adaptada na série Sombra e Ossos, da Netflix (2021–2023), que também trouxe personagens de Six of Crows.",
  },
  "ciclo-da-heranca": {
    generos: ["fantasia", "aventura", "juvenil"],
    idade: "a partir de 12 anos",
    adaptacao: "Sim. Eragon, o primeiro livro, virou filme em 2006.",
  },
  "the-witcher": {
    generos: ["fantasia", "aventura"],
    idade: "para adultos (a partir de 18 anos)",
    adaptacao:
      "Sim. A saga inspirou a série The Witcher, da Netflix, que estreou em 2019, além da famosa série de jogos da CD Projekt Red.",
  },
  "e-assim-que-acaba": {
    generos: ["romance"],
    idade: "a partir de 16 anos (trata de violência doméstica)",
    adaptacao:
      "Sim. É Assim que Acaba virou filme em 2024, com Blake Lively no papel de Lily Bloom.",
  },
  "diario-de-uma-garota-nada-popular": {
    generos: ["infantil", "humor"],
    idade: "a partir de 9 anos",
  },
  "anne-de-green-gables": {
    generos: ["juvenil", "infantil"],
    idade: "a partir de 10 anos",
    adaptacao:
      "Sim. A adaptação mais recente é a série Anne with an E, da Netflix (2017–2019). A história também ganhou filmes e séries ao longo do século XX.",
  },
  "sherlock-holmes": {
    generos: ["misterio", "aventura"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim, centenas. Entre as mais conhecidas estão a série Sherlock, da BBC (2010–2017), com Benedict Cumberbatch, e os filmes com Robert Downey Jr. (2009 e 2011).",
  },
  "estilhaca-me": {
    generos: ["distopia", "romance", "juvenil"],
    idade: "a partir de 14 anos",
  },
  "as-cronicas-dos-kane": {
    generos: ["fantasia", "juvenil", "aventura"],
    idade: "a partir de 10 anos",
  },
  "magnus-chase": {
    generos: ["fantasia", "juvenil", "aventura", "humor"],
    idade: "a partir de 10 anos",
  },
  "as-pecas-infernais": {
    generos: ["fantasia", "juvenil", "romance"],
    idade: "a partir de 13 anos",
  },
};

export default detalhesSeries;
