export const SITE_URL = "https://ordemlivro.com.br";
export const SITE_NAME = "Ordem Livro";

export const url = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
