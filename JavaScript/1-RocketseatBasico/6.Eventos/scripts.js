//1- Mostra um alerta ao recarregar a pagina

window.addEventListener("load", () => {
    window.alert("A pagina foi carregada")
})

//2- Mostra um alerta ao clicar em algum lugar na pagina

addEventListener("click", (event) => {
    //Ao clicar no botão (adicionar) reinicia a pagina,
    //esse método desativa essa função
    event.preventDefault()

    //Retorna todas as informações do evento.
    console.log(event)

    //Retorna o elemento clicado
    console.log(event.target)

    //Retorna o texto clicado
    console.log(event.target.textContent)
})