//Encontra o conteúdo

let message = "Estou estudando os fundamentos do Javascript"

//Obtém a posição da palavra.
console.log(message.indexOf("Javascript"))
//Quando não encontra retorna -1
console.log(message.indexOf("javascript"))


//verifica se existe a palavra na String
console.log(message.includes("javascript"))
console.log(message.toLocaleLowerCase().includes("javascript"))

//Verfica frase
console.log(message.toLocaleLowerCase().includes("estou estudando os fundamentos"))