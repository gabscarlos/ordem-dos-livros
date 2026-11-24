export const SITE_URL = "https://ordemlivro.vercel.app";
export const SITE_NAME = "Ordem Livro";

export const url = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
