//1-Evento da pagina

/*

window.addEventListener("load", () => {
    window.alert("Pagina reiniciada")
})

addEventListener("click", (event) => {
    event.preventDefault()

    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
})

*/

//2-Evento em elemento especifico

/*
const ul = document.querySelector("ul")
ul.addEventListener("scroll", (event) => {
    console.log(ul.scrollTop)

    if(ul.scrollTop > 300){

        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})

const button = document.querySelector(".button")
button.addEventListener("click", (event) => {
    // window.alert("Você clicou no botão")

    event.preventDefault()

    console.log("clicou")
})
*/

//3- Eventos formulario

/*

const form = document.querySelector("form")

form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("Não vai me mostrar mesmo :/")
}

form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("diferente do click, eu consigo mandar pelo enter")
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Mostra o 1#")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Mostra o 2#")
})

*/

//4- Eventos em input

/*
const input = document.querySelector("input")

input.addEventListener("keydown", (event) => {
    console.log(event.key)
})

input.addEventListener("keypress", (event) => {
    console.log(event.key)
})


function inputChange (){
    console.log("INPUT MUDOUuuuuuuuuuuuuuuuuuuuuu")
}

input.onchange = () => inputChange()
*/

