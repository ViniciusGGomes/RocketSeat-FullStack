//Ex1:
let obj = []

try {
    obj.execulte()
} catch (error) {
    console.log(error)
}

/*

Ex2:
 Nesse exemplo usamos o throw para lançar as nossas 
 própria exeções.
 Isso é útil para validar dados ou criar mensagens de
 erro personalizadas.

*/

function dividir(a,b){
    if(b === 0){
        throw new Error("Divisão por zero não é permitida")
    }

    return a / b
}

try {
    dividir(10,0)
} catch (error) {
    console.log("Erro:", error.message);
}


/*

Ex3:
    palavra instanceof
    verifica se a instacia do nosso erro é da classe
    de erro TypeError

*/

try {
    obj.execulte()
} catch (error) {
    if(error instanceof TypeError){
        console.log("Método indisponível.")
    }
}
/*

Ex4:
    Simulando como deve ser usar as exceções

*/

let obj2 = [17]
let index = 300

try {
    if(!obj2.includes(17)){
        throw new Error("O número 17 não está disponível.")
    }
    
    if(index > 99){
        throw new RangeError("Número está fora do intervalo. Escolha um número de 0 à 99")
    }
} catch (error) {
    if(error instanceof TypeError){
        console.log("Método indisponível.")
    }else if(error instanceof RangeError){
        console.log(error.message)
    }else{
        console.log(error.message)
    }
}