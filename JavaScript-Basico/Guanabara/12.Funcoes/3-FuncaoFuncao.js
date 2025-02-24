//Função dentro de Funçã
//É possível ultilizar uma função antes mesmo de declará-la.

function nomeDaPessoa(nome){
    console.log(`O seu nome é ${nome}`)
    risco()

    function risco(){
        console.log("------")
    }
}

nomeDaPessoa("Vinicius")
nomeDaPessoa("outroVinicius")





