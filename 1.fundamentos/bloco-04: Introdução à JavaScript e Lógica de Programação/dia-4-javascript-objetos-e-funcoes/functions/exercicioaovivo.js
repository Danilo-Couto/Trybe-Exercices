function randomNumber(maxValue){
  return Math.ceil(Math.random() * maxValue);
}

function generateNumbers(){
  let numbers = [];

  for(let index = 0; index < 6; index += 1){
    numbers.push( randomNumber(60) );
  }

  return numbers;
}

function verificarJogo(numerosSorteados, minhaAposta){
  let numberOfHits = 0;

  for(let indexLottery = 0; indexLottery < numerosSorteados.length; indexLottery += 1){  // index++
    for(let indexGame = 0; indexGame < minhaAposta.length; indexGame += 1){  // index++
      if(numerosSorteados[indexLottery] === minhaAposta[indexGame]){
        numberOfHits += 1;
      }
    }
  }

  return numberOfHits;
}

let lotteryNumbers = generateNumbers();
let firstGame = generateNumbers();
let secondGame = generateNumbers();

let acertosJogo1 = verificarJogo(lotteryNumbers, firstGame);
let acertosJogo2 = verificarJogo(lotteryNumbers, secondGame);

console.log("Números sorteados:", lotteryNumbers);
console.log("----------");
console.log("Jogo:", firstGame);
console.log("Acertos:", acertosJogo1);
console.log("----------");
console.log("Jogo:", secondGame);
console.log("Acertos:", acertosJogo2);