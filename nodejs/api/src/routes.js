import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    Controller: ({ request, response, database }) => {
      const product = database.select("products");

      return response.end(JSON.stringify(product));
    },
  },
  {
    method: "POST",
    path: "/products",
    Controller: ({ request, response, database }) => {
      const { name, price } = request.body;

      database.insert("products", { name, price });

      return response.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: "/products/:id", // convenção para deixar explicito que esse é o id do produto
    Controller: ({ request, response }) => {
      return response.end("produto removido com ID: " + request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));

// Devolvendo uma nova lista com o map, onde a gente percorre cada rota ao em vez de adicionar manualmente a função parseRoutePath em cada path.
