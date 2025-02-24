function tabuada(){
    var palavra = document.getElementById("txtn").value
    var visualizar = document.getElementById("tabuada")

    if(palavra == ""){
        window.alert("Digite um número ")
    }else{
        numero = Number(palavra);
        visualizar.innerText = ""
        for(var contador = 0 ;  contador <= 10; contador++){
            resultado = numero * contador;

            var item = document.createElement("option");
            item.innerText = `${numero} x ${contador} = ${resultado}`
            visualizar.appendChild(item);
        }
    }
}