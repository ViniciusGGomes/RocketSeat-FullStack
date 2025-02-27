// interface Extends -> Usamos para criar código mais flexível e modular

interface Person {
  id: number,
  name: string
}

interface Teacher extends Person{
  // id: number,
  // name: string,
  subjects: string[]
}

interface Student extends Person{
  // id: number
  // name: string,
  age: number
}

let teacher: Teacher = {id: 123, name: "Malfati", subjects: ["JavaScript", "TypeScript"]}

let student: Student = {id: 123, name: "Vinícius", age: 21}

