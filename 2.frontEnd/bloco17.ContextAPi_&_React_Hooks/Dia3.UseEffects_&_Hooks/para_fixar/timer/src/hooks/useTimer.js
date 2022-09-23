import { useState, useEffect } from 'react';

function useTimer() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(1);

  const TIMER_INTERVAL = 1000;
  const NUMBER_TIMEOUT = 10000;
  const MESSAGE_TIMEOUT = 4000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const increaseTimerInterval = () => {
    // console.log('increaseTimerInterval');
    setTimer(timer => timer + 1)}; //2o a ser renderizado, fica incrementado o valor do timer

  const verifyMultiple = randomNumber => {
    // console.log('verifyMultiple');
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), MESSAGE_TIMEOUT);
    }
  }; //4o a ser renderizado;

  const handleRandomNumber = () => {
    console.log('handleRandomNumber');
    // Vamos retornar um número aleatório de 1 a 100.
    const randomNumber = Math.round(
      /* O Math.random retorna um valor entre 0 e 1, com o 0 incluso, então o cálculo será multiplicar o valor aleatório por 100, e com o uso do Math.floor o resultado será um valor entre 0 e 99, após somar mais 1, o menor valor será 1 e o maior valor será 100 */
      Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM
    );
    verifyMultiple(randomNumber);
    setNumber(randomNumber);
    setTimer(0);
  };  //3o a ser renderizado;

  useEffect(() => {
    // console.log('useEffect');
    const interval = setInterval(handleRandomNumber, NUMBER_TIMEOUT); // executa o timer a cada 10 segs;
    const setTimerInterval = setInterval(increaseTimerInterval, TIMER_INTERVAL); // executa o timer increaser a cada 1 seg;
    return () => {
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  }, []); //1o a ser renderizado;

  return { number, isMultiple, timer };
}

export default useTimer;