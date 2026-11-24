// Endereço principal. Na Vercel, ordemlivro.com.br (sem www) já redireciona para cá.
export const SITE_URL = "https://www.ordemlivro.com.br";
export const SITE_NAME = "Ordem Livro";

export const url = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
