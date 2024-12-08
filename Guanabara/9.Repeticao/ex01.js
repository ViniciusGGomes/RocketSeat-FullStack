var c = 0;

while(c < 500){ //Teste logico feito no inicio e depois execulta
    console.log(`Contador ${c}`)
    c++
}

console.log(c)

do{ //Execulta primeiro e depois faz o teste logico
    c--
    console.log(`Contador ${c}`)
}while(c > 1)