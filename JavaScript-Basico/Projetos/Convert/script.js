//Cotação da moeda
const USD = 5.95
const EUR = 6.25
const GBP = 7.59


//Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer =  document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números
//Método replace - (expressão regular, substitui)
amount.addEventListener("input", () => {
    const hasNumberRegex = /\D+/g

    amount.value = amount.value.replace(hasNumberRegex, "")
})

//captura o evento de submit do formulario
form.addEventListener("submit", function(event){
    event.preventDefault()
    
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try{
        //Exibindo a cotação da moeda selecionada
        description.innerText = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //Formatar o valor total
        total = Number(amount * price)
        total = formatCurrencyBRL(total).replace("R$", "")

        //Verifica se o resultado não é um número
        if(!isNaN(total)){
            return alert("Por favor, digite o valor corretamente para converter")
        }

        result.innerText = `${total} Reais`

        //Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    }catch(error){
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde")
    }
}

//Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    //formata no padrão BRL(R$ 00,00)
    return Number(value).toLocaleString("pt-BR",{
        style: "currency", //tipo da moeda
        currency: "BRL",
    })
}
