const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcSoma = (num1, num2, callback) => {
    let soma = num1+num2;
    callback (soma);
}

funcSoma(10,8,resultadoFinal);