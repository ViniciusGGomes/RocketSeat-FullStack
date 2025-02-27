// INTERFACE -> permite Sobrescrevemos uma interface
interface IBaseProduct {
  price: number
}

interface IProduct1 extends IBaseProduct{
  id: number
  name: string,
}

// Sobrescrevemos uma interface
interface IProduct1 {
  quantity: number
}

let IProduct1 : IProduct1 = {id: 1, name: "Produto 1", price: 500, quantity: 12}


// TYPE -> permite utilizar tipos primitivos para criar tipos customizados
type TBaseProduct = {
  price: number
}

type TProduct1 = TBaseProduct & {
  id: number
  name: string
  
}

let TProduct1: TProduct1 = {id: 2, name: "Produto 2", price: 500}

// Criando um tipo customizado a parti de um tipo primitivo
type TypeScript = string
type TypeNumber = number

// Interfaces são mais utilizadas no mercado e na comunidade