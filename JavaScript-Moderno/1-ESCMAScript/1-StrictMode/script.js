/*
    O strict mode (modo estrito): Ativando esse modo
    os erros que eram silenciosos passa a gerar
    execeções no Javascript

*/


"use strict"

function showMessage(){

    let personName = "vinicius" //Not defined

    console.log("Olá", personName)
}

console.log(showMessage())

class Student {
    get point(){
        return 7
    }
}

let student = new Student()
/*student.point = 2*/ //Cannot set property because its a get class

//Duplicate parameter name not allowed int his context
function sum(a,a,c){
    return a+a+c
}

let result = sum(1,3,2) //3 + 3 + 2 = 8. Quando passamos parêmetros duplicados o ultimo que vai assumir o valor 
console.log("Resultado", result)
