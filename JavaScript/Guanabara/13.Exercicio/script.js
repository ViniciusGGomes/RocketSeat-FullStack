var array = []
var mostraNumero = document.getElementById("tabela")

function addArray(number){
    if(array.indexOf(number) != -1){
        window.alert("Esse número ja foi adiconado")
    }else{
        array.push(number)
        // Cria uma nova opção
        var novaOpcao = document.createElement("option");
        novaOpcao.text = `Valor ${number} adicionado`;

        // Adiciona a nova opção ao <select>
        mostraNumero.appendChild(novaOpcao);
    }

}


function adicionar(){
    var numT = document.getElementById("txtn").value
    
    if(numT == ""){
        window.alert("Digite um número válido")
    }else{
        numeroDigitado = Number(numT)
        addArray(numeroDigitado)

    }


}



function soma(){
    total = 0
    for(i=0; i<array.length; i++){
        total += array[i]
    }

    return total
}

function media(){
    somar = soma()
    valorMedia = somar / array.length

    return valorMedia
}

function finalizar(){
    var mostraTexto = document.getElementById("mostraTexto")
    mostraTexto.innerText = ""

    array.sort()


    var p1 = document.createElement("p")
    p1.innerText = `Ao todo, temos ${array.length} números cadastrados.`
    mostraTexto.appendChild(p1)
    
    var p2 = document.createElement("p")
    p2.innerText = `O maior valor informado foi ${array[array.length - 1]}`
    mostraTexto.appendChild(p2)

    var p3 = document.createElement("p")
    p3.innerText = `O menor valor informado foi ${array[0]}`
    mostraTexto.appendChild(p3)

    var p4 = document.createElement("p")
    p4.innerText = `Somando todos os valores, temos ${soma()}`
    mostraTexto.appendChild(p4)

    var p5 = document.createElement("p")
    p5.innerText = `A média dos valores digitados é ${media()}`
    mostraTexto.appendChild(p5)

}