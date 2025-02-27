// fatorial 5! = 5x5 5x4 5x3 5x2 5x1

function fatorial(n){

    fat = 1
    for(n; n > 1; n--){
        fat = fat * n;
    }
    return fat;
}

console.log(fatorial(5))

// Valores do fat durante o processo:
// Iteração 1: fat = 5.
// Iteração 2: fat = 20.
// Iteração 3: fat = 60.
// Iteração 4: fat = 120.
// Resultado final: 5! = 120.

//com recursividade

function recursivo(n){

    if(n == 1){
        return n = 1
    }
    else{
        return n * recursivo(n-1)
    }

}

console.log(recursivo(5))