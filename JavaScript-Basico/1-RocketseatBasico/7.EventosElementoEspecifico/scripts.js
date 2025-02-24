//Identificar um envento em um elemento especifico

const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
    console.log(event)
    console.log(ul.scrollTop)

    //condicional
    if(ul.scrollTop > 300){ //Assim que o scroll passar dos 300 volta pro 0

        ul.scrollTo({ //Class
            top: 0,
            behavior: "smooth",
        })
    }
})

const button = document.querySelector("button")

button.addEventListener("click", (event) => {
    event.preventDefault() //Desligar o carregamento da pagina 

    console.log("CLICOU!") //Quantas vez clicou no botão
})
