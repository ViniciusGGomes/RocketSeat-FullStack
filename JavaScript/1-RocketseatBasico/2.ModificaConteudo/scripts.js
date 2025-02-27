//Mostra oque está dentro do id <span>
const guest = document.querySelector("#guest-1 span")

console.log(guest)

guest.textContent = "vinicius"

//retornos:
console.log(guest.textContent) // Retorna o conteúdo visivel e oculto
console.log(guest.innerText) // Retorna somente o conteúdo visível.
console.log(guest.innerHTML) // Retorna o HTML como texto

//1-Criamos um novo <span></span> no html
//2-Usamos o css para deixar ele invisivel
//3-textContent mostra oque está invisivel