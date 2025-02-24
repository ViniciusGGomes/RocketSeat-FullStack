const input = document.querySelector("input")

//1- Atualizar atributo

//Desativa a clicagem
input.setAttribute("disabled", true)

//Transforma em arquivo
input.setAttribute("type", "file")


//2- Remove o atributo
input.removeAttribute("id")