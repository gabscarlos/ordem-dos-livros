export interface Genero {
  id: string;
  nome: string;
  titulo: string;
  descricao: string;
}

const generos: Genero[] = [
  {
    id: "fantasia",
    nome: "Fantasia",
    titulo: "Séries de livros de fantasia",
    descricao:
      "Mundos mágicos, criaturas fantásticas e grandes jornadas. Veja as melhores séries de livros de fantasia e a ordem certa de leitura de cada uma.",
  },
  {
    id: "romantasia",
    nome: "Romantasia",
    titulo: "Séries de romantasia",
    descricao:
      "A mistura de fantasia e romance que domina o BookTok. Confira as séries de romantasia mais lidas e em que ordem ler cada livro.",
  },
  {
    id: "ficcao-cientifica",
    nome: "Ficção científica",
    titulo: "Séries de livros de ficção científica",
    descricao:
      "Futuros possíveis, viagens espaciais e robôs. Veja as séries de ficção científica clássicas e modernas na ordem certa de leitura.",
  },
  {
    id: "distopia",
    nome: "Distopia",
    titulo: "Séries de livros distópicos",
    descricao:
      "Sociedades opressoras, rebeliões e escolhas impossíveis. Confira as séries distópicas mais populares e a ordem de leitura de cada uma.",
  },
  {
    id: "romance",
    nome: "Romance",
    titulo: "Séries de livros de romance",
    descricao:
      "Histórias de amor que rendem vários livros. Veja as séries de romance mais queridas e em que ordem ler.",
  },
  {
    id: "juvenil",
    nome: "Juvenil",
    titulo: "Séries de livros juvenis",
    descricao:
      "As séries que marcaram gerações de leitores adolescentes, com a ordem certa de leitura de cada uma.",
  },
  {
    id: "infantil",
    nome: "Infantil",
    titulo: "Séries de livros infantis",
    descricao:
      "Séries para crianças que estão começando a ler sozinhas ou já devoram livros. Veja a ordem de leitura de cada coleção.",
  },
  {
    id: "humor",
    nome: "Humor",
    titulo: "Séries de livros de humor",
    descricao:
      "Séries para rir do começo ao fim. Confira a ordem dos livros de cada uma.",
  },
  {
    id: "aventura",
    nome: "Aventura",
    titulo: "Séries de livros de aventura",
    descricao:
      "Jornadas, missões e muita ação. Veja as séries de aventura e a ordem certa de leitura.",
  },
  {
    id: "autores-brasileiros",
    nome: "Autores brasileiros",
    titulo: "Séries de livros de autores brasileiros",
    descricao:
      "Séries escritas por autores brasileiros, com a ordem certa de leitura de cada uma.",
  },
];

export default generos;
