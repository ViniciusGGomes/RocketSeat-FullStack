const input = document.querySelector("input")

//1- Retorna o padrão encontrado na String(oque não é digito(0-9))

input.addEventListener("input", () =>{
    const value = input.value

    const regex = /\D+/g

    console.log(value.match(regex))
    
})

//2- Testa se atende o padrão

input.addEventListener("input", () =>{
    const value = input.value
    const regex = /\D+/g

    const isValid = regex.test(value)
    console.log(isValid)
})

/*
//3- Remover as letras, deixar apenas os números
 -  Método replace(padrão/substitui), 
    ele vai procurar todos os lugaras onde o padrão foi atendido(letra/texto)
    e substituir por alguma coisa
*/

const form = document.querySelector("form")

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    const regex = /\D+/g
    
    const value = input.value.replace(regex, "")
    console.log(value)
})

//4- alerta caso não estaja no padrão

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = input.value
    const regex =  /\D+/g

    if(regex.test(value)){
        console.log("dados enviado para o banco de dados")
    }else{
        window.alert("Valor inválido. Digite corretamente")
    }
})

