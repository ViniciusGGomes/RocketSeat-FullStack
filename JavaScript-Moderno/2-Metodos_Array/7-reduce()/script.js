/* 
    O método reduce é ultilizado para reduzir um array
    a um único valor.

    Parâmetros:
    - Array original (values)
    - Acumulador (accumulator)
    - Valor da iteração (currentValue)
    - Valor Inicial (0)
    
    Os parâmetros da função de callback do reduce() 
    seguem uma ordem específica:

    1- acumulador → armazena o valor acumulado da 
    operação.
    2- valor atual → o elemento atual do array na 
    iteração.
    3- índice → a posição atual no array.

    Os nomes dos parâmetros podem ser diferentes, 
    mas a ordem e função de cada um devem ser 
    respeitadas.

    A função de callback será executada uma vez 
    para cada item do array, aplicando a lógica 
    definida.
*/

const values = [1, 2, 3, 4, 5]

    const sum = values.reduce((accumulator, currentValue, index) =>{

        console.log("ACUMULADOR: ", accumulator)
        console.log("CURRENT VALUE", currentValue)
        console.log("INDEX: ", index)


        console.log("SOMA", accumulator + currentValue)
        console.log("#######")

        return accumulator + currentValue
    },0)

console.log(sum)