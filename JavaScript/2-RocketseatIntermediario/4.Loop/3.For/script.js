/*
    For repete até que a condição especifica seja FALSA.

    - variável de controle
    - condição
    - incremento ou decremento da variável de controle

*/

for(i=0; i<=10; i++){
    console.log(i)
}

//Tabuada
for(i=0; i<=10; i++){
    for(j=0; j<10; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log("------")
}