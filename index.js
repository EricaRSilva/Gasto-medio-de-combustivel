/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2)); // Exibe o valor gasto com duas casas decimais
