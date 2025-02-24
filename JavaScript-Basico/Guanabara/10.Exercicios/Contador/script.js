function contar(){
    var txtInicio = document.getElementById("inicio").value 
    var txtFim = document.getElementById("fim").value
    var txtPasso = document.getElementById("passo").value
    var frase = document.getElementById("frase")

    if(txtInicio == "" || txtFim == "" || txtPasso == ""){
        frase.innerText = "Impossivel contar!"
    }else{
        frase.innerHTML = 'Contando: <br>'
        var numInicio = Number(txtInicio)
        var numFim = Number(txtFim)
        var numPasso = Number(txtPasso)

        if(numPasso <= 0){
            window.alert("Passo inválido! Considerando PASSO 1")
            numPasso = 1
        }

        if(numInicio < numFim){

            for(numInicio ; numInicio<=numFim ; numInicio+=numPasso){
                
                frase.innerText += `${numInicio} \u{1f449}`
            }
        }

        else{

            for(numInicio ; numInicio>=numFim ; numInicio-=numPasso){
                
                frase.innerText += `${numInicio} \u{1f449}`
            }
        }

         frase.innerText += `\u{1F3c1}`
    }
}