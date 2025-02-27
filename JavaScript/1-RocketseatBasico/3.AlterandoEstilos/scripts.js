//1-Alterar o estilo pelo Js, usando o estilo do css

const newStyle = document.querySelector("#name")

//Adiciona a classe.
newStyle.classList.add("input-error") 

//Remove a classe
newStyle.classList.remove("input-error")

//Se tiver com a classe ele remove!
//Se tiver sem a classe ele adiciona!
newStyle.classList.toggle("input-error")

//2-Criando um estilo pelo js
const button = document.querySelector("button")
button.style.backgroundColor = "red"
