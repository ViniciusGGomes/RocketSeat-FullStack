const input = document.querySelector("input")

/*

    //keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc.)
    //Key - mostra apenas oque foi digitado

    input.addEventListener("keydown", (event) => {
        console.log(event.key)
    })

*/

//Keypress - quando uma tecla do tipo caractere é pressionada (letras, numeros, pontos, etc)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

function inputChange() {
    console.log("O INPUT MUDOU")
}

//change - quando o conteudo muda
input.onchange = () => inputChange()

//Duas formas. a de cima é mais curta

// input.onchange = () => {
//     inputChange()
// }

