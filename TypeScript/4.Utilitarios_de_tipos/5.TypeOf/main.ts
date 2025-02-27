// TypeOf -> permite extrair a tipagem de um objeto já definido e aplicá-la em outro, facilitando a reutilização de tipagens, especialmente ao lidar com bibliotecas externas ou APIs. Essa técnica é útil para definir tipagens a partir de conteúdos já existentes.

interface Product {
  id: number
  name: string
  quantity: number
}

const product1: Product = {
  id: 1,
  name: "Produto 1",
  quantity: 3
}

const product2: typeof product1 = {
  id: 2,
  name: "produto 2",
  quantity: 2
}