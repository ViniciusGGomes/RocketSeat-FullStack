// Partial -> permite deixar todos os campos opcionais, é como se a gente estive usando o ? mas sem precisar ter o trabalho de colocar o ? em cada campo

interface User4 {
  id: number
  name: string
  email: string
  sexo?: string
}

let newUser: User4 = {
  id: 1,
  name: "Vinícius",
  email: "vinicius@gmail.com"
}

let updateUser: Partial<User4> = {
  name: "Vinícius Gomes"
}