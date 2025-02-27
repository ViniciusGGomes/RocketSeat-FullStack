// Definindo tipo
const user: {name: string, address: string} = {
  name: "Vinícius",
  address: "Avenida brasil"
}

// Declarar os parâmetros como um objeto em vez de argumentos individuais ajuda a evitar erros e torna o código mais  organizado

// EXEMPLO 1
function singIn({email, password}:{email:string, password: string}){
  console.log("Usuário " + email, "PassWord " + password)
}

singIn({email: "Vinicius@gmail.com", password: "1234"})

// EXEMPLO 2
function singIn2(data: {email:string, password: string}){
  console.log(data.email, data.password)
}

singIn2({password: "123", email: "jõao@gmail.com"})

// Exemplo sem objeto(Pode gerar erro)
function singIn3(email: string, password: string) {
  console.log("Usuário " + email, "PassWord " + password);
}

singIn3("123456", "email@email.com"); // Erro de ordem!

