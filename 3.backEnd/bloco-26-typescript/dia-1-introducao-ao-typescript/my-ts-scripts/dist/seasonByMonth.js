"use strict";
/* Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
Retorne em que estação aquele mês se encontra.
Caso seja um mês que possua duas estações retorne ambas. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const months_1 = __importDefault(require("./months"));
const seasons_1 = require("./seasons");
var readlineSync = require('readline-sync');
const seasonsSouth = {
    [seasons_1.Seasons.OUTONO]: [months_1.default.MARCO, months_1.default.ABRIL, months_1.default.MAIO, months_1.default.JUNHO],
    [seasons_1.Seasons.INVERNO]: [months_1.default.JUNHO, months_1.default.JULHO, months_1.default.AGOSTO, months_1.default.SETEMBRO],
    [seasons_1.Seasons.PRIMAVERA]: [months_1.default.SETEMBRO, months_1.default.OUTUBRO, months_1.default.NOVEMBRO, months_1.default.DEZEMBRO],
    [seasons_1.Seasons.VERAO]: [months_1.default.DEZEMBRO, months_1.default.JANEIRO, months_1.default.FEVEREIRO, months_1.default.MARCO],
};
const seasonsNorth = {
    [seasons_1.Seasons.PRIMAVERA]: seasonsSouth[seasons_1.Seasons.OUTONO],
    [seasons_1.Seasons.VERAO]: seasonsSouth[seasons_1.Seasons.INVERNO],
    [seasons_1.Seasons.OUTONO]: seasonsSouth[seasons_1.Seasons.PRIMAVERA],
    [seasons_1.Seasons.INVERNO]: seasonsSouth[seasons_1.Seasons.VERAO],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const monthChoosen = readlineSync.keyInSelect(Object.values(months_1.default), 'Diga um mês do ano? ');
const hemisphereChoosen = readlineSync.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
const month = Object.values(months_1.default)[monthChoosen];
const hemisphere = Object.keys(hemispheres)[hemisphereChoosen];
console.log(`Mês:${month}`);
console.log(`hemisphere:${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[hemisphereChoosen];
Object.entries(chosenHemisphereSeasons).map(entry => {
    const season = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(season);
});
