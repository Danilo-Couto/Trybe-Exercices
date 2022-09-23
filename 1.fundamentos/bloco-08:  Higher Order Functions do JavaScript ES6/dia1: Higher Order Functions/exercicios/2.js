/* 
2 - 
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
 */
const bet = () => Math.round(Math.random()*5+1);
const lottoNumber = () => Math.round(Math.random()*5+1);
const checker = (a,b) => {
   return a() === b() ? console.log('Parabéns você ganhou') : console.log('Tente novamente'); 
}
checker(bet, lottoNumber);

//gabarito;

const numberChecker = (myBet, numeroAleatorio) => myBet === numeroAleatorio;

const lotteryResult = (myBet, callback) => {
  const numeroAleatorio = Math.floor((Math.random() * 5) + 1);

  return callback(myBet, numeroAleatorio) ? 'Lucky day, you won!' : 'Try Again!';
}; 

console.log(lotteryResult(2, numberChecker));

/* // dissecando o código:

const lotteryResult = (2, numberChecker) => {
    const numeroAleatorio = Math.floor((Math.random() * 5) + 1); // retorna um numero aleatorio
  
    return numberChecker(2, numeroAleatorio) ? 'Lucky day, you won!' : 'Try Again!';
    // chama a funcao (2, numeroAleatorio) => 2 === numeroAleatorio;
  };  */


