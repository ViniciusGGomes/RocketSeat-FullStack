// Pick -> permite selecionar propriedades específicas de um tipo, evitando a necessidade de criar novos tipos. Além disso, é possível reaproveitar várias propriedades de um tipo, garantindo flexibilidade e facilitando a reutilização de tipagens em aplicações.

interface Book {
  title: string
  author: string
  pages: number
}

let newBook: Pick <Book, "title" | "author"> = {
  title: "TypeScript",
  author: "Vinícius"
}