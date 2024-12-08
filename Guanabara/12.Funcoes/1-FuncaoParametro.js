//Função com um parâmetro
function imparPar(n){
    if(n % 2 == 0){
        return `${n} = Par`
    }else{
        return `${n} = impar`
    }
}

resultado = imparPar(332)
console.log(resultado)

//Função com 2 parâmetros
function somar(n1 = 0, n2 =0){
    return n1 + n2
}

resultado = somar(2,5)
console.log(resultado)