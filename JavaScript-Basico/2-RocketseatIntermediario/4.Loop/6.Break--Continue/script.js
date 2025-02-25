/*
    //1-

    Break encerra a execução da repetição ou switch para  
    seguir para a instrução seguinte


*/ 

for(let i=0; i<10; i++){
    console.log(i)
    if(i == 5){
        break
    }
}

console.log("Saiu do loop")


/*
    //2-

    Continue encerra(pula) a execução das instruções
    na iteração atual e continua a execução do loop
    com a próxima iteração

*/

for(let i=0; i<10; i++){
    if(i === 5){
        continue
    }

    console.log(i)
}