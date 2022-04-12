/* Crie um algoritmo que percorre um array unidimensional
  contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
*/

const data = ['a', 10, 'b', 'hola', 122, 15];
let bigger = 0;

// Obtenha um array contendo apenas as letras:
let stringArray = data.filter((index) => {
  if (typeof index === 'string') {
    return index
  }
});

// Obtenha um array contendo apenas os números:
let numberArray = data.filter((index) => {
  if (typeof index === 'number') {
    return index
  }
});

// Obtenha o maior número da array:
data.forEach((index) => index > bigger ? (
  bigger = index
) : bigger);

console.log({ stringArray, numberArray, biggestNumberInArray: bigger });
