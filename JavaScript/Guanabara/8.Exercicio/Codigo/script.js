function verificar(){
    var ano = new Date()
    var anoAtual = ano.getFullYear()

    var ultimoTexto = window.document.querySelector("div#texto")
    
    var txtAno = window.document.getElementById("txtn").value
    var numAno = Number(txtAno)
    
    if(numAno > anoAtual || numAno == 0){
        window.alert("[ERRO] verifique os dados e tente novamente")
    }
    else{
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        idade = (anoAtual - numAno)
        
        if(fsex[0].checked){
            genero = 'Homem'

                if(idade < 10){
                    img.setAttribute('src', '../img/ex02KidBoy.jpg')
                }else if(idade < 21){
                    img.setAttribute('src', '../img/ex02TeenBoy.jpg')
                }else if(idade < 50){
                    img.setAttribute('src', '../img/ex02Man.jpg')
                }else{
                    img.setAttribute('src', '../img/ex02OldMan.jpg')
                }

        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade < 10){
                img.setAttribute('src', '../img/ex02KidGirl.jpg')
            }else if(idade < 21){
                img.setAttribute('src', '../img/ex02TeenGirl.jpg')
            }else if(idade < 50){
                img.setAttribute('src', '../img/ex02Woman.jpg')
            }else{
                img.setAttribute('src', '../img/ex02OldWoman.jpg')
            }
        }

        ultimoTexto.style.textAlign = 'center';

        // Adiciona o texto
        ultimoTexto.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        
        // Adiciona a imagem abaixo do texto
        ultimoTexto.appendChild(img);
    }

}