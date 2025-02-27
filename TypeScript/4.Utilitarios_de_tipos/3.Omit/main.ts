// Omit -> Omite os campos escolhidos, é útil para reaproveitar uma tipagem e deixar campos específicos de foras

interface Book {
  title: string
  pages: number
  author: string
  description: string
}

let book: Omit <Book, "description" | "author">= {
  pages: 10,
  title: "JavaScript"
}