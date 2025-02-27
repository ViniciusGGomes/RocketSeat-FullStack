// TIPAGEM EXPLICITA -> Envolve em definir claramente o tipo da variável
let userName: string

userName = "Vinícius"
// userName = 18 // assignable -> atribuível
// userName = true

let total: number

total = 10
total = 1.8

let isLoading: boolean

isLoading = true
isLoading = false

// INFERÊNCIA DE TIPO -> o TypeScript deduz o tipo com base no valor atribuído

let value = 10
// value = "oi"

let AnimalName = "huck"
// AnimalName = true