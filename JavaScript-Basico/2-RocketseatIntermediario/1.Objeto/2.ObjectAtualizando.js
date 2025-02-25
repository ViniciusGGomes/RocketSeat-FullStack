const user = {
    name: "Vinicao",
    email: "Vinicao@gmail.com",
    message: () => {
        console.log(this.name)
        console.log(user.name)
    },
    message2: function(){
        console.log(this.email)
        console.log(user.email)
    }
}
//Pegadinha. Com arrowfunction não funciona o "this.""
user.message()
user.message2()

//2.Atualizando os valores do objeto

const product = {
    name: "teclado",
    quantity: "100"
}

console.log(product)
product.name = "mouse"
product.quantity = "60"

console.log(product)

product["name"] = "headset"
product["quantity"] = "10"
console.log(product)