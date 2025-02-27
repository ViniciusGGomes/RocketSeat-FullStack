// Record -> pode-se definir chaves como String e valores como números, limitando as opções disponíveis. É possível criar objetos com chaves String e valores numéricos, ou até mesmo com tipos personalizados.

// Cria um objeto onde todas as chaves são strings
const score: Record<string, number> = {
  "Rodrigo": 10,
  "Mayk": 15
}

// Limitar valores
type Profile = "admin" | "user" | "guest"

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3
}

// Objeto personalizados.
interface User{
  name: string
  email: string
}

const users: Record<number, User> = {
  1: {name:"Vinícius", email:"vincius@gmail.com"},
  2: {name:"jão", email:"jão@gmail.com"}
}