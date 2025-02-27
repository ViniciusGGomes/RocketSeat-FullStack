// keyof -> utilizado para extrair chaves de um objeto e usá-las para tipagem. 

// Criamos um objeto icons com chaves de nomes de ícones e valores de endereços. Em seguida, criaremos uma tipagem a partir desse objeto usando keyof, o que nos permite restringir o uso apenas às chaves disponíveis. Assim, conseguiremos extrair as chaves de uma tipagem usando o keyof

const icons = {
  "home": "./path/home.svg",
  "add": "./path/add.svg",
  "remove": "./path/remove.svg",
}

type Icon = typeof icons

const icon: keyof Icon = "add"