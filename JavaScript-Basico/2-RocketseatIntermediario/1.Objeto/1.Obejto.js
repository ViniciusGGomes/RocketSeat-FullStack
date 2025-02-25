/* 
    Objeto tem propriedades(características) 
    e comportamentos(métodos)
    Objeto são estruturas que representam algo
    no munod real.

*/


const user = {
    email: "vinicao@gmail.com",
    passaword: 123,

    name: {
        first_name: "Vinicius",
        surname: "Gomess"
    },

    address: {
        street: "Rua x",
        number: 23,
        city: "São paulo",
        postal_code: "12345-123"
    },

    message: () => {
        console.log("Seja bem vindo")
    }

}

//Acessando propriedade e métodos usando a notação de .
user.message()

console.log(user.email)
console.log(user.name.surname)
console.log(user.address.city)
console.log(typeof(user))

//Notação de cochetes []
console.log("-----------")
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()