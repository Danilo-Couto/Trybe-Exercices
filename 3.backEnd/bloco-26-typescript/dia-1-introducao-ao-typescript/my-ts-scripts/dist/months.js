"use strict";
// Crie uma enum que represente os meses do ano.
Object.defineProperty(exports, "__esModule", { value: true });
var Months;
(function (Months) {
    Months["JANEIRO"] = "Janeiro";
    Months["FEVEREIRO"] = "Fevereiro";
    Months["MARCO"] = "Mar\u00E7o";
    Months["ABRIL"] = "Abril";
    Months["MAIO"] = "Maio";
    Months["JUNHO"] = "Junho";
    Months["JULHO"] = "Julho";
    Months["AGOSTO"] = "Agosto";
    Months["SETEMBRO"] = "Setembro";
    Months["OUTUBRO"] = "Outubro";
    Months["NOVEMBRO"] = "Novembro";
    Months["DEZEMBRO"] = "Dezembro";
})(Months || (Months = {}));
exports.default = Months;
/*
Estações do ano no Hemisfério Norte
    | Estação   | Início         | Término        |
    | --------- | -------------- | -------------- |
    | Outono    | 23 de setembro | 21 de dezembro |
    | Inverno   | 21 de dezembro | 20 de março    |
    | Primavera | 20 de março    | 21 de junho    |
    | Verão     | 21 de junho    | 23 de setembro |

Estações do ano no Hemisfério Sul
    | Estação   | Início         | Término        |
    | --------- | -------------- | -------------- |
    | Outono    | 20 de março    | 21 de junho    |
    | Inverno   | 21 de junho    | 22 de setembro |
    | Primavera | 22 de setembro | 21 de dezembro |
    | Verão     | 21 de dezembro | 20 de março    |
    */ 
