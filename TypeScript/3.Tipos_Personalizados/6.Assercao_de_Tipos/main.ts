// type assertion -> permite definir a tipagem de um objeto quando o TypeScript não consegue inferir

type UserResponse = {
  id: number,
  name: string,
  avatar: string
}

let userResponse  = {} as UserResponse

