function asyncFunction(){
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        const isSuccess = false

        if(isSuccess){
            resolve("A operação foi concluída com sucesso!")
        }else{
            reject("Algo deu errado!")
        }
    }, 3000)
   })
}

/* Exemplo 1

async function fetch() {
    const response = await asyncFunction()
    console.log(response)
}

fetch()

*/

/* Exemplo 2 - arrow function 

const fetch = async () => {
    const result = await asyncFunction()
    console.log(result)
}

fetch()

*/

/* Exemplo 3 - try e catch */

async function fetch() {
    try {
        const response = await asyncFunction()
        console.log("Sucesso: ", response)
    } catch (error) {
        console.log("Erro: ", error)
    }finally{
        console.log("Fim da execução")
    }
}

fetch()