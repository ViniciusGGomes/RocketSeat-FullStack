// Intersecção de tipos para estender (types), conseguimos reaproveitar as tipagens em ambos os casos. Essa estratégia de intersecção de tipos permite estender e reutilizar types de forma eficiente.

type Person = {
  id: number,
  name: string
}

type Teacher = Person & {
  subjects: string 
}

type Student = Person &{
  age: number
}

let teacher: Teacher
let student: Student

