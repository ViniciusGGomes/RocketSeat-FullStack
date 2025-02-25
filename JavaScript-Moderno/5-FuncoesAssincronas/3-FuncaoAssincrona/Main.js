// Função que retorna uma Promise
function asyncFunction(){
    //Simula uma operação assícrona.
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const isSuccess = true

        if(isSuccess){
            resolve("A operação foi concluída com sucesso!")
        }else{
            reject("Algo deu errado!")
        }
            
        }, 3000) // Simula uma operção que leva 3 segundos
    })
}

// Visualizindo que o retorno é uma promise
// console.log(asyncFunction())

console.log("Execultando função assícrona...")

asyncFunction().then((response) =>{
    console.log("Sucesso: ", response)
}).catch((error) => {
    console.log("Erro", error)
}).finally(() => {
    console.log("Fim da execução")
})