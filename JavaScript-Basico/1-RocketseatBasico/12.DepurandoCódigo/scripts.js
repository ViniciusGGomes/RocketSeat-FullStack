const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = input.value
    const hasNumberRegex = /\d+/g

    if(hasNumberRegex.test(value)){
        window.alert("O texto contém número. Por favor, digite corretamente")
    }else{
        window.alert("Enviado")
    }
})