//Visualizar o conteúdo do document
console.log(document)

console.log(document.title)

//id
const guest = document.getElementById("guest-2")
console.log(guest)

//Mostra as propritedades do objeto
console.dir(guest)

//class
const guestsClass = document.getElementsByClassName("guest")
console.log(guests)
//Mostra o primeiro
console.log(guestsClass.item(0))
console.log(guestsClass[1])

//tag
const guestsTag = document.getElementsByTagName('li')
console.log(guestsTag)

//QuerySelector
querySelector
const guestQuerryId = document.querySelector("#guest-1")
console.log(guestQuerryId)

const guestQuerryClass = document.querySelector(".guest")
console.log(guestQuerryClass)

const guestAll = document.querySelectorAll(".guest")
console.log(guestAll)