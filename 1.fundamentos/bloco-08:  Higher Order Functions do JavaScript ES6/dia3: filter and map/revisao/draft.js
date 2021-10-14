const lista = [
    {id: 1, nome: "gol"},
    {id: 2, nome: "ferrari"},
    {id: 3, nome: "camaro :)"}
];

const callback = (acumulador, valor) => {
    acumulador[valor.id] = valor.nome
    console.log(acumulador)
    return acumulador
};

const carrosIndexadosPorId = lista.reduce(callback, {});
console.log(carrosIndexadosPorId[3]) //camaro :)