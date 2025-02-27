const address1 = {
    street: "Av. Brasil",
    number: 20
}

console.log(address1)

// Isso não é uma cópia. É uma referência.
// const address2 = address1
// address2.number = 30
// console.log(address1, address2)

/* 
    Aqui estamos criando um novo objeto ultilizando
    as propriedades e valores de address1.(Opção 1) 
    Ultilizando o spread operantion

*/

// const address2 = {...address1}
// address2.number = 30
// console.log(address1, address2)

const address2 = {...address1, number: 30}
console.log(address1, address2)

// Exemplo array

const list1 = ["apple", "Banana"]

// Referência de array.
// const list2 = list1
// list2.push("watermelon")
// console.log(list1, list2)

// Novo objeto, reaproveitando oque tinha no list1
const list2 = [...list1]
list2.push("watermelon")
console.log(list1, list2)

// const list2 = [...list1, "watermelon"]
// console.log(list1, list2)


