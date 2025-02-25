/*
    Shollow copy (cópia superficial): não pega
    os itens aninhados.

    USAR EM PROPRIEDADES DE VALORES PRIMITIVOS
    STRING, NUMBER, ETC...

*/

const htmlCourse = {
    course: "HTML",
    students: [{name: "Rodrigo", email: "Rodrigo@gmail.com"}]
}

// const jsCourse = {
//     ...htmlCourse,
//     course: "Javascript",
// }

/* 
    Vai modificar o htmlCourse e também students por
    ser uma referência e não uma cópia, por isso o nome
    shollow copy.

// jsCourse.Students.push([{name: "Vinicius", email: "Vinicius@gmail.com"}])
    
*/

/* 
    Deep Copy (cópia profunda)
    USAR EM OBJETOS MAIS COMPLEXOS 
    ARRAYS, OBJETOS ANINHADOS(Um objeto dentro do outro) 
*/


//Exemplo1:

const jsCourse = {
    ...htmlCourse, course: "Javascript",
    students: [...htmlCourse.students, {name: "Maria", email:"maria@gmail.com"}]
}

//Exemplo2:

jsCourse.students.push({name: "vinicius", email:"vinicius@gmail.com"})

//Exemplo3:
const cssCourse = {
    ...jsCourse, course: "Css"
}

cssCourse.students = [...jsCourse.students, {name: "theo", email:"theo@gmail.com"}]

console.log(htmlCourse, jsCourse, cssCourse)