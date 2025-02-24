let varComposta = [5,4,3,2,8]
varComposta.sort()
console.log(varComposta)
console.log(varComposta.length)

// ---------
for(let i=0 ; i<varComposta.length; i++){
    console.log(`${i}-> valor so array ${varComposta[i]}`)
}

console.log("Ex 2:")
varComposta.push(1)

for(let i in varComposta){
    console.log(`${i}-> valor so array ${varComposta[i]}`)
}

// ---------

let verifica = varComposta.indexOf(5)
console.log(verifica)
let verifica2 = varComposta.indexOf(10)
if(verifica2 == -1){
    console.log("Significa que não existe esse número :/")
}