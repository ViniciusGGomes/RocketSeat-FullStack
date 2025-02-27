/*
    fetch() - API default do JavaScript,
    usamos ele para fazer requisições. 
    dentro de ("") colocamos o endereço da API
    que queremos consumir.

    1- Ultilizando o fetch com then:
*/

// Indica que é um Promise{<pending>}
const response = fetch("http://localhost:3333/products")
console.log(response) 

// Devolve detalhes da API, status, type, url
fetch("http://localhost:3333/products").then((response) => {
    console.log(response)
})

// Resposta do conteúdo no formato json, por ser assicrono
// a gente adiciona mais um then() usamos o nome data para 
// diferenciar do response, data de dados.
fetch("http://localhost:3333/products").then(response => {
    response.json().then(data => console.log(data))
})

// --------------------------------------------------
//2- Ultilizando o fetch com async/await.
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products") //Detalhes, status, type
    const data = await response.json() //dados no formato de json
    console.log(data)
}

fetchProducts()

// --------------------------------------------------
//3- Função que busca por um produto especifico
async function fetchProductByIde(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

fetchProductByIde("1")

/*
    4- Utilizando o método POST para enviar dados e 
    cadastrar um novo produto.
*/

const productName = document.getElementById("productName")
const productPrice = document.getElementById("productPrice")
const form = document.getElementsByTagName("form")

addEventListener("submit", async (event) => {
    event.preventDefault()

    // Configurações da nossa requisição: 
    await fetch("http://localhost:3333/products", {
        method: "POST", // Enviar
        headers: {
            "Content-Type": "application/json" // O formato que eu vou usar para fazer o envio das informações, vamos usar o json. existe o json/xml 
        },
        body: JSON.stringify({  // O corpo, tranforma o nosso objeto em texto. stringify() - método do JSON
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })
})

