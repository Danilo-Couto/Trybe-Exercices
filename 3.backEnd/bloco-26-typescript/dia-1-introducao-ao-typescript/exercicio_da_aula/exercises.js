"use strict";
// ./exercises.ts
exports.__esModule = true;
exports.circle = exports.trapezie = exports.losangle = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1 ".concat(name, "!");
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return "".concat(name, " tem ").concat(age, " anos!");
}
exports.personAge = personAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return Math.pow(side, 2);
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
/* Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. (D * d) / 2   */
function losangle(D, d) {
    return D * d / 2;
}
exports.losangle = losangle;
;
/* Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
*/
function trapezie(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapezie = trapezie;
;
/*
Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). ℼ * r² */
function circle(r) {
    var PI = 3.14;
    return PI * Math.pow(r, 2);
}
exports.circle = circle;
;
