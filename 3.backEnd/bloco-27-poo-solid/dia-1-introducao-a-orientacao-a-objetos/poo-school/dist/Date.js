"use strict";
class Data {
    constructor(day, month, year) {
        const dateStr = `${year}-${month}-${day}`;
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
}
// Para testar!
const testDate = new Data(29, 1, 1989);
console.log(testDate);
