"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["SUNDAY"] = 1] = "SUNDAY";
    weekDays[weekDays["MONDAY"] = 2] = "MONDAY";
    weekDays[weekDays["TUESDAY"] = 3] = "TUESDAY";
    weekDays[weekDays["WEDNESDAT"] = 4] = "WEDNESDAT";
    weekDays[weekDays["FRIDAY"] = 5] = "FRIDAY";
    weekDays[weekDays["SATURDAY"] = 6] = "SATURDAY";
})(weekDays || (weekDays = {}));
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["Red"] = "Vermelho";
    RainbowColors["Orange"] = "Laranja";
    RainbowColors["Yellow"] = "Amarelo";
    RainbowColors["Green"] = "Verde";
    RainbowColors["Blue"] = "Azul";
    RainbowColors["Indigo"] = "Anil";
    RainbowColors["Violet"] = "Violeta";
})(RainbowColors || (RainbowColors = {}));
var Actions;
(function (Actions) {
    Actions[Actions["Save"] = 0] = "Save";
    Actions[Actions["Print"] = 1] = "Print";
    Actions[Actions["Open"] = 2] = "Open";
    Actions[Actions["View"] = 3] = "View";
    Actions[Actions["Close"] = 4] = "Close";
})(Actions || (Actions = {}));
(function (Actions) {
    Actions["Norte"] = "N";
    Actions["Leste"] = "L";
    Actions["Sul"] = "S";
    Actions["Oeste"] = "O";
})(Actions || (Actions = {}));
