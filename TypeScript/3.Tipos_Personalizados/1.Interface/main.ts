// Usamos a interface para definir as propriedades de um produto, como id e nome, Ultilizando interfaces, podemos criar tipos personalizados para atender às necessidades do dados. 

interface IProduct {
  id: number,
  name: string
}


function newProduct(product: IProduct){
  console.log(product)
}

newProduct({id: 2, name: "mouse"})

// Ao ultilizar a interface Product, conseguimos visualizar e garantir a correta tipagem dos dados do produto. O uso da interfaces facilita a definição e manipulação de tipos de dados personalizados em nossos programas.

