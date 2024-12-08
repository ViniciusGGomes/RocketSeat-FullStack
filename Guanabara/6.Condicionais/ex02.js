var idade = 68
console.log(`Sua idade é ${idade}`)

if(idade < 16){
    console.log("Você não tem idade para votar!")
}
else if(idade < 18 || idade >= 70){
    console.log("O seu voto é opcional!")
}
else{
    console.log("O seu voto é obrigatorio!")
}