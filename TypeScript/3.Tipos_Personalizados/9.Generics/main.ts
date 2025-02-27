// Generics -> tipagem mais flexível, os generics permitem definir o tipo em tempo de execução, diferente do union, que oferece opções flexíveis, mas não exige a mesma tipagem. É possível definir um tipo padrão para generic, caso não seja especificado. A utilização de generics é comum em diversas bibliotecas e tecnologias, como React e Axios, facilitando a flexibilidade e consistência na tipagem 

/*
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T>(){
  let state: T

  function get<T>(){
    return state
  }

  function set(newValue: T){
    state = newValue
  }

  return {get, set}
}

let newState = useState()
newState.set(1)
newState.get()

// Se não escolher um tipo para o generic o padrão vai ser number
function useState2<T extends number | string = number>(){
  let state: T

  function get<T>(){
    return state
  }

  function set(newValue: T){
    state = newValue
  }

  return {get, set}
}

let newState2 = useState2()
newState2.set(1)
newState2.get()
//newState("oi") // Não permite a troca de tipos

// Union (|) -> permite fazer a união de tipos, então uma (variável,função, parâmetro, objeto) pode receber mais de um tipo.

function useState1(){
  let state: string | number

  function get(){
    return state
  }

  function set(newValue: string | number){
    state = newValue
  }

  return {get, set}

}

let newState1 = useState1()
newState1.set("string")
newState1.get()
newState1.set(2)
console.log(newState1.get())