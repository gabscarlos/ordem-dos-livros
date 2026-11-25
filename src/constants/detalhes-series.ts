export interface DetalhesSerie {
  generos: string[];
  idade: string;
  adaptacao?: string;
  /** Explica a ordem quando há mais de uma opção (cronológica x publicação). */
  notaOrdem?: string;
}

const detalhesSeries: Record<string, DetalhesSerie> = {
  "harry-potter": {
    generos: ["fantasia", "juvenil", "aventura"],
    idade: "a partir de 9 anos",
    adaptacao:
      "Sim. A série virou 8 filmes da Warner Bros., lançados entre 2001 e 2011, com Daniel Radcliffe, Emma Watson e Rupert Grint. A HBO também anunciou uma série de TV baseada nos livros.",
    notaOrdem:
      "Leia os sete livros principais na ordem. Harry Potter e a Criança Amaldiçoada é o roteiro de uma peça de teatro que se passa 19 anos depois do último livro, então deve ser lido por último. Os roteiros de Animais Fantásticos se passam décadas antes de Harry nascer e podem ser lidos a qualquer momento.",
  },
  "o-senhor-dos-aneis": {
    generos: ["fantasia", "aventura"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. A trilogia de filmes dirigida por Peter Jackson (2001–2003) é uma das mais premiadas da história do cinema. A série Os Anéis de Poder, do Prime Video, se passa no mesmo universo.",
    notaOrdem:
      "Leia A Sociedade do Anel, As Duas Torres e O Retorno do Rei nessa ordem. O Hobbit (1937) se passa antes e apresenta Bilbo e o Anel, por isso costuma ser lido primeiro, embora não seja obrigatório. O Silmarillion conta a história antiga da Terra-média e é indicado para quem quer se aprofundar depois da trilogia.",
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
    notaOrdem:
      "Leia primeiro a trilogia, na ordem de publicação: Correr ou Morrer, Prova de Fogo e A Cura Mortal. Ordem de Extermínio é um prequel que se passa 13 anos antes e funciona melhor depois da trilogia, porque revela segredos dela. Arquivos e Crank Palace são livros complementares para quem já leu a série.",
  },
  duna: {
    generos: ["ficcao-cientifica", "aventura"],
    idade: "a partir de 14 anos",
    adaptacao:
      "Sim. Os filmes de Denis Villeneuve (Duna, de 2021, e Duna: Parte Dois, de 2024) adaptam o primeiro livro. Também existe um filme de David Lynch, de 1984, e a série Duna: A Profecia, da HBO.",
    notaOrdem:
      "Os seis livros acima foram escritos por Frank Herbert e devem ser lidos na ordem. Os prelúdios e continuações escritos depois por Brian Herbert e Kevin J. Anderson são opcionais e devem ficar para depois dos livros originais.",
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
    notaOrdem:
      "A lista acima segue a ordem de publicação, que recomendamos para a primeira leitura. Asimov escreveu os dois prelúdios por último (1988 e 1993), e eles partem do princípio de que você já conhece a história. Na ordem cronológica, a leitura começaria por Prelúdio à Fundação e Origens da Fundação, seguidos de Fundação, Fundação e Império, Segunda Fundação, Limites da Fundação e Fundação e Terra.",
  },
  "as-cronicas-de-narnia": {
    generos: ["fantasia", "infantil", "aventura"],
    idade: "a partir de 8 anos",
    adaptacao:
      "Sim. Três livros viraram filmes entre 2005 e 2010: O Leão, a Feiticeira e o Guarda-Roupa, Príncipe Caspian e A Viagem do Peregrino da Alvorada.",
    notaOrdem:
      "Existem duas ordens. A lista acima segue a ordem cronológica da história, que é a numeração das edições atuais. Os livros foram publicados em outra ordem, começando por O Leão, a Feiticeira e o Guarda-Roupa (1950); O Sobrinho do Mago, que conta a origem de Nárnia, só saiu em 1955. Muitos leitores preferem a ordem de publicação na primeira leitura, porque O Sobrinho do Mago revela segredos que O Leão, a Feiticeira e o Guarda-Roupa apresenta como surpresa. As duas ordens funcionam.",
  },
  "percy-jackson": {
    generos: ["fantasia", "juvenil", "aventura"],
    idade: "a partir de 10 anos",
    adaptacao:
      "Sim. Os dois primeiros livros viraram filmes (2010 e 2013), e a série Percy Jackson e os Olimpianos, do Disney+, estreou em 2023.",
    notaOrdem:
      "Comece por esta série e siga com Os Heróis do Olimpo e depois As Provações de Apolo, que continuam a mesma história com os mesmos personagens. As Crônicas dos Kane e Magnus Chase se passam no mesmo universo, mas têm outros protagonistas e podem ser lidas a qualquer momento.",
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
    notaOrdem:
      "A lista acima segue a ordem de publicação, que é a mais recomendada. Em ordem cronológica, a história começa por A Cantiga dos Pássaros e das Serpentes (64 anos antes de Jogos Vorazes), segue com Amanhecer na Colheita (24 anos antes, nos jogos de Haymitch) e termina com a trilogia original. Os dois livros mais recentes funcionam melhor depois da trilogia, porque fazem referência a acontecimentos dela.",
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
    notaOrdem:
      "A lista acima segue a numeração das edições especiais brasileiras, com A Lâmina da Assassina primeiro, por ser um prelúdio. Na ordem de publicação, a série começa por Trono de Vidro, e muitos fãs recomendam ler A Lâmina da Assassina depois de Coroa da Meia-Noite, antes de Herdeira do Fogo. Também é comum ler Império de Tempestades e Torre do Alvorecer juntos, alternando os capítulos, porque as histórias acontecem ao mesmo tempo.",
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
    notaOrdem:
      "Os três primeiros livros formam um arco completo. Se você também quiser ler As Peças Infernais, a ordem de publicação alterna as duas séries: Cidade dos Ossos, Cidade das Cinzas, Cidade de Vidro, Anjo Mecânico, Cidade dos Anjos Caídos, Príncipe Mecânico, Cidade das Almas Perdidas, Princesa Mecânica e Cidade do Fogo Celestial. O mais importante é ler As Peças Infernais antes de Cidade do Fogo Celestial, que revela o final dela.",
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
    notaOrdem:
      "Leia depois de Percy Jackson e os Olimpianos: Os Heróis do Olimpo é a continuação direta e traz Percy e Annabeth de volta. Em seguida vem As Provações de Apolo.",
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
    notaOrdem:
      "Comece pelos dois livros de contos, O Último Desejo e A Espada do Destino: eles apresentam Geralt, Yennefer e Ciri, e a saga principal parte do princípio de que você já os conhece. Tempo de Tempestade foi escrito depois da saga, mas se passa entre os contos de O Último Desejo; a maioria dos leitores o deixa para o fim.",
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
    notaOrdem:
      "A lista acima segue a vida de Anne. Na ordem de publicação, Anne de Windy Poplars (1936) e Anne de Ingleside (1939) vieram por último, embora se passem no meio da história. A ordem cronológica é a mais recomendada.",
  },
  "sherlock-holmes": {
    generos: ["misterio", "aventura"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. Há centenas de adaptações; entre as mais conhecidas estão a série Sherlock, da BBC (2010–2017), com Benedict Cumberbatch, e os filmes com Robert Downey Jr. (2009 e 2011).",
    notaOrdem:
      "A maioria das histórias pode ser lida em qualquer ordem, mas vale seguir a de publicação. Comece por Um Estudo em Vermelho, em que Holmes e Watson se conhecem, e leia As Memórias de Sherlock Holmes antes de A Volta de Sherlock Holmes, que continua um acontecimento importante do livro anterior.",
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
    notaOrdem:
      "A série pode ser lida sozinha, mas tem participações de personagens de Percy Jackson, como Annabeth, prima de Magnus. Para entender todas as referências, leia depois de Percy Jackson e Os Heróis do Olimpo.",
  },
  "as-pecas-infernais": {
    generos: ["fantasia", "juvenil", "romance"],
    idade: "a partir de 13 anos",
    notaOrdem:
      "As Peças Infernais pode ser lida sozinha, mas foi publicada intercalada com Os Instrumentos Mortais. Se você ler as duas séries, termine As Peças Infernais antes de Cidade do Fogo Celestial, o último livro de Os Instrumentos Mortais, que revela o final desta trilogia.",
  },
  "os-karas": {
    generos: ["juvenil", "misterio", "aventura", "autores-brasileiros"],
    idade: "a partir de 11 anos",
    notaOrdem:
      "Leia na ordem de publicação, começando por A Droga da Obediência, em que os Karas aparecem pela primeira vez. A Droga da Amizade, lançado em 2014, conta como o grupo se formou; mesmo sendo um prequel, funciona melhor depois dos outros livros.",
  },
  "fala-serio": {
    generos: ["juvenil", "humor", "autores-brasileiros"],
    idade: "a partir de 11 anos",
    adaptacao:
      "Sim. Fala Sério, Mãe! virou filme em 2017, com Ingrid Guimarães e Larissa Manoela.",
    notaOrdem:
      "Os livros são independentes e podem ser lidos em qualquer ordem: cada um fala de uma relação diferente (mãe, pai, professor, amiga...). Se for ler todos, comece por Fala Sério, Mãe!, o primeiro e mais famoso da série.",
  },
  "sitio-do-picapau-amarelo": {
    generos: ["infantil", "aventura", "autores-brasileiros"],
    idade: "a partir de 7 anos",
    adaptacao:
      "Sim. O Sítio teve várias adaptações para a TV; a mais conhecida foi exibida pela TV Globo.",
    notaOrdem:
      "Comece por Reinações de Narizinho, que apresenta o sítio e todos os personagens. Os outros livros são aventuras quase independentes e podem ser lidos em qualquer ordem; a lista acima segue a ordem em que Monteiro Lobato os publicou.",
  },
  "turma-da-monica-lacos": {
    generos: ["infantil", "aventura", "autores-brasileiros"],
    idade: "a partir de 8 anos",
    adaptacao:
      "Sim. Laços virou filme em 2019, e Lições ganhou um filme em 2021.",
  },
  perdida: {
    generos: ["romance", "fantasia", "autores-brasileiros"],
    idade: "a partir de 14 anos",
    notaOrdem:
      "Leia Perdida e Encontrada primeiro: são a história de Sofia e Ian. Os livros seguintes acompanham outros personagens da família Clarke e funcionam melhor depois dos dois primeiros.",
  },
  "princesas-modernas": {
    generos: ["romance", "juvenil", "autores-brasileiros"],
    idade: "a partir de 12 anos",
    adaptacao:
      "Sim. Cinderela Pop virou filme em 2019, com Maisa Silva.",
    notaOrdem:
      "Cada livro reconta um conto de fadas diferente e tem sua própria protagonista, então eles podem ser lidos em qualquer ordem.",
  },
  "filhos-do-eden": {
    generos: ["fantasia", "aventura", "autores-brasileiros"],
    idade: "a partir de 14 anos",
    notaOrdem:
      "A Batalha do Apocalipse é uma história completa e pode ser lida sozinha, mas apresenta o universo e alguns personagens que voltam na trilogia. Recomendamos lê-la primeiro e depois seguir com Herdeiros de Atlântida, Anjos da Morte e Paraíso Perdido.",
  },
  "dragoes-de-eter": {
    generos: ["fantasia", "aventura", "autores-brasileiros"],
    idade: "a partir de 12 anos",
  },
  mistborn: {
    generos: ["fantasia", "aventura"],
    idade: "a partir de 14 anos",
    notaOrdem:
      "Leia primeiro a trilogia original (O Império Final, O Poço da Ascensão e O Herói das Eras). Os quatro livros seguintes formam a segunda era, com outros protagonistas, e se passam cerca de 300 anos depois; eles funcionam melhor depois da primeira trilogia, porque fazem referência a ela.",
  },
  "a-torre-negra": {
    generos: ["fantasia", "aventura"],
    idade: "para adultos (a partir de 18 anos)",
    adaptacao:
      "Sim. A série inspirou o filme A Torre Negra (2017), com Idris Elba e Matthew McConaughey, que mistura acontecimentos de vários livros.",
    notaOrdem:
      "O Vento pela Fechadura foi lançado em 2012, depois do fim da série, mas é o volume 4.5: a história se passa entre Mago e Vidro e Lobos de Calla. A lista acima segue essa posição; quem preferir pode deixá-lo para o fim sem perder nada da trama principal.",
  },
  "six-of-crows": {
    generos: ["fantasia", "aventura", "juvenil"],
    idade: "a partir de 14 anos",
    adaptacao:
      "Os personagens de Six of Crows aparecem na série Sombra e Ossos, da Netflix (2021–2023).",
    notaOrdem:
      "Six of Crows pode ser lida sem conhecer a trilogia Sombra e Ossos, mas se passa depois dela e tem algumas referências. Para aproveitar tudo, leia Sombra e Ossos antes.",
  },
  "os-artificios-das-trevas": {
    generos: ["fantasia", "juvenil", "romance"],
    idade: "a partir de 14 anos",
    notaOrdem:
      "Leia depois de Os Instrumentos Mortais: a série se passa cinco anos depois e revela o final dela. Também vale ler As Peças Infernais antes, porque vários personagens e segredos dessa trilogia voltam aqui.",
  },
  "academia-de-vampiros": {
    generos: ["fantasia", "juvenil", "romance"],
    idade: "a partir de 14 anos",
    adaptacao:
      "Sim. O primeiro livro virou filme em 2014, e a série ganhou uma adaptação para a TV em 2022.",
    notaOrdem:
      "Leia na ordem acima. Na nova edição brasileira, o segundo livro foi rebatizado: o antigo Aura Negra agora se chama Sangue e Gelo. Os livros 3 a 6 ainda estão à venda na edição anterior, com os títulos de sempre.",
  },
  "diarios-do-vampiro": {
    generos: ["fantasia", "romance", "juvenil"],
    idade: "a partir de 13 anos",
    adaptacao:
      "Sim. Os livros inspiraram a série The Vampire Diaries (2009–2017), que muda bastante a história original.",
    notaOrdem:
      "Os quatro livros acima formam a história original. A trama continua nas trilogias O Retorno e Caçadores, escritas anos depois, que podem ser lidas em seguida.",
  },
  "artemis-fowl": {
    generos: ["fantasia", "aventura", "juvenil", "humor"],
    idade: "a partir de 10 anos",
    adaptacao:
      "Sim. O primeiro livro virou filme da Disney em 2020.",
  },
};

export default detalhesSeries;
