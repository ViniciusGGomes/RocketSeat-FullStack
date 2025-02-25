/*
    OPERADOR DE COALESCÊNCIA NULA (??)
    operador lógico que retorna o seu operando do
    lado direito quando o seu operador do lado
    esquerdo é null ou undefined. Caso contrário,
    ele retorna o seu operando do lado esquerdo

*/

//"false" ele vai pensar que é conteúdo
const content = null
console.log(content ?? "Conteúdo padrão")

const nickname = "shellycobra49"
console.log(nickname ?? "Conteúdo padrão")

const user = {
    name: "Vinicius",
    picture: null
}

console.log(user.picture ?? "default.png")