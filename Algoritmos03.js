/* Crie um algoritmo que gere o seguinte
  padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC.
*/

// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios.
const randomId = () => Math.random().toString(36).substr(-4);

// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC".
const authentication = (randomId) => {
  const result = `${randomId()}-${randomId()}-${randomId()}-${randomId()}`;

  return result.toUpperCase();
};

// O resultado deve ser armazenado em uma variável.
const newId = authentication(randomId);

console.log({ newId });
