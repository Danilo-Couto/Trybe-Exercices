/* Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
Retorne em que estação aquele mês se encontra.
Caso seja um mês que possua duas estações retorne ambas. */

import Months from "./months";
import { Seasons } from "./seasons";
var readlineSync = require('readline-sync');

const seasonsSouth = {
  [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}

const seasonsNorth = {
  [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
  [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
  [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
  "Norte": seasonsNorth,
  "Sul": seasonsSouth
}

const monthChoosen = readlineSync.keyInSelect(Object.values(Months), 'Diga um mês do ano? ');

const hemisphereChoosen = readlineSync.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");

const month = Object.values(Months)[monthChoosen];

const hemisphere = Object.keys(hemispheres)[hemisphereChoosen];

console.log(`Mês:${month}`);
console.log(`hemisphere:${hemisphere}`);
console.log(`Estações:`);

const chosenHemisphereSeasons = Object.values(hemispheres)[hemisphereChoosen];

Object.entries(chosenHemisphereSeasons).map(entry => {
  const season = entry[0];
  const months = entry[1];

  if (months.includes(month)) console.log(season);
});
