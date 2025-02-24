
/*
    1-
    there are two ways to do a event: 
    addEventListener -> captura todos os eventos 
    onsubmit/onclick -> Escolher direto o evento
*/

/*
    2-
    Diferença do evento de "submit" e do "click"

    submit -> também funciona com os input! 
    ex: se eu digitar ao no input e clicar na tecla
    enter ele vai contar como um evento submit
    tudo que estiver dentro do formulario vai ser
    considerado um subit.

    click ->
    preciso clicar com o mouse no botão para o evento
    funcionar 


    // form.onclick = (event) => {
    //     event.preventDefault()
    //     console.log("Você fez submit no  formulário #1")
    // }

*/ 

/*
    3-
    onsubmit -> vai mostrar apenas o ultimo evento no console
    addEventListener -> Vai mostrar todos os eventos no console
*/

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #1")
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #2")
}


form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log("Voce fez submit no formulario #3")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log("Voce fez submit no formulario #4")
})
