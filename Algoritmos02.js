/* Crie um objeto simples em JavaScript que contenha
as funções elementares de adição, subtração, multiplicação e divisão.
*/

const testArray = [2, 4, 4];

const mathObject = {
  /* A função sum permite um array como parâmetro
    de entrada e adiciona todos os seus elementos.
  */
  sum: (array) => {
    const result = array.reduce((a, b) => a + b);

    return result;
  },
  /* A função de subtração permite um array como
    parâmetro de entrada e subtrai todos os seus elementos.
  */
  subtraction: (array) => {
    const result = array.reduce((a, b) => a - b);

    return result;
  },
  /* A função de multiplicação permite um array como
    parâmetro de entrada e multiplica todos os seus elementos.
   */
  multiplication: (array) => {
    const result = array.reduce((a, b) => a * b);

    return result;
  },
  // Leve em consideração que a divisão não deve permitir dividendo 0.
  // A função de divisão aceita dois parâmetros: a e b.
  division: (a, b) => {
    if (a === 0 || b === 0) {
      return 'Wrong entries: "0"';
    }

    const result = (a / b);

    return result;
  },
};

console.log({
  sum: mathObject.sum(testArray),
  sub: mathObject.subtraction(testArray),
  mult: mathObject.multiplication(testArray),
  div: mathObject.division(testArray[1], testArray[0]),
});
