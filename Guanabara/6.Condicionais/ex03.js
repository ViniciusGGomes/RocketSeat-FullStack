var agora = new Date();
var hora = agora.getHours()
console.log(hora)

var hoje = new Date()
var data = hoje.getDay()
console.log(data)

switch (data){
    case 0: 
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2: 
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("Erro")
        break
}