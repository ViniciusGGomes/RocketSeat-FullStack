// Type -> recurso que cria tipos personalizados em TypeScript

// EXEMPLO 1
type Product = {
  id: number,
  name: String
}

function newProduct1(product: Product){
  
}

// EXEMPLO 2 -> criar uma tipagem separa para fazer a união de tipos

type SelectResponse = Product[] | null

function selectProduct(): SelectResponse{
  return null
}
 
newProduct1({id: 20, name: "mouse"})

// Usar type (ou interface) é mais organizado, reutilizável e facilita a manutenção. No geral, prefira definir um type ou interface quando o mesmo objeto for usado em mais de um lugar.

// Exemplo 2 -> Maneira errada
function newProduct2(product: {id: number, name: string}){

}

newProduct2({id: 20, name: "mouse"})







