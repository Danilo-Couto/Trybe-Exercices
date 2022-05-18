"use strict";
class Data {
    constructor(day, month, year) {
        const dateStr = `${year}-${month}-${day}`;
        this._day = day;
        this._month = month;
        this._year = year;
        // verifica se a data é válida
        if (new Date(dateStr).getDate() !== day) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        }
        else {
            this._day = day;
            this._month = month;
            this._year = year;
        }
    }
    get day() {
        return this._day;
    }
    set day(value) {
        this._day = value;
    }
    get month() {
        return this._month;
    }
    set month(value) {
        this._month = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
    getMonthName() {
        const months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ];
        return months[this.month - 1];
    }
    isLeapYear() {
        return this._year % 4 === 0;
    }
    compare(date) {
        const currentDateStr = `${this.year}-${this.month}-${this.day}`;
        const dateStr = `${date.year}-${date.month}-${date.day}`;
        if (new Date(currentDateStr) > new Date(dateStr))
            return 1;
        if (new Date(currentDateStr) < new Date(dateStr))
            return -1;
        return 0;
    }
    format(formatting) {
        const conditions = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
            (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
        ];
        if (conditions.every((cond) => cond)) {
            throw new Error(`O formato passado é inválido: ${formatting}`);
        }
        const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
        const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
        const year = this.year.toString();
        const dateFormatting = formatting
            .replace('dd', day)
            .replace('mm', month)
            .replace('M', this.getMonthName())
            .replace('aaaa', year)
            .replace('aa', year.substr(-2));
        return dateFormatting;
    }
    validateDate(day, month, year) {
        const dateStr = `${year}-${month}-${day}`;
        if (new Date(dateStr).getDate() !== day)
            return false;
        return true;
    }
}
// Para testar!
const testDate = new Data(29, 1, 1989);
console.log(testDate);
/*
Vamos adicionar à nossa classe de Data do exercicio anterior os comportamentos. Essa classe deverá conter os seguintes métodos:
constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor "01/01/1900";

getMonthName: retorna o mês da data por extenso;
isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
0 se as datas forem iguais;
1 se a data corrente for posterior à data do parâmetro;
-1 se a data do parâmetro for posterior à data corrente.
format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.

Legenda:
aaaa = ano com quatro dígitos
aa = ano com dois dígitos
mm = mês com 2 digitos
M = mês por extenso.
dd = dia com 2 digitos
Exemplos:
"dd/mm/aaaa" = 01/01/1900
"aaaa-mm-dd" = 1900-01-01
"dd de M de aa" = 01 de janeiro de 90
"dd, M de aaaa" = 01, janeiro de 1990
*/
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));
const otherDate = new Data(30, 1, 2021);
const compared = testDate.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
// data inválida
const invalidDate = new Data(31, 2, 2021);
console.log('Teste data inválida: ', invalidDate);
// formato inválido
console.log(invalidDate.format('a m d'));
