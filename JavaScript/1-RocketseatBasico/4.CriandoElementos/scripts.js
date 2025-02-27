//Criando um novo convidado

const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
const guestName = document.createElement("span")
const guestSurname = document.createElement("span")

guestName.textContent = "Vinicius"
guestSurname.textContent = "Gomes"

//Adiciona com elemento da lista

// //1- Adiciona após o último filho, (add mais de um)
// newGuest.append(guestName)

// //Serve tanto para o append e prepend.
// newGuest.append(guestName, guestSurname)

// //2-Adicona antes do primeiro filho, (add mais de um)
// newGuest.prepend(guestSurname)

// console.log(newGuest)

//3- Add apenas 1
newGuest.appendChild(guestName)
console.log(newGuest)

//Adiciona na lista
guests.appendChild(newGuest)

//Adiciona na classe para ter o mesmo estilo do outros
//elementos
newGuest.classList.add("guest")

//Adicionar no topo
guests.prepend(newGuest)