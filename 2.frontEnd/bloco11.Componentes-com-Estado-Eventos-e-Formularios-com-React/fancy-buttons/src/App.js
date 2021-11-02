import logo from './logo.svg';
import './App.css';

function handleCick() {
  console.log('clicou')
}

function handleCick2() {
  console.log('clicou de novo')
}

function handleCick3() {
  console.log('clicou mais uma vez')
}


function App() {
  return (
    <div>
      <button onClick={handleCick}> Meu botão </button>
      <button onClick={handleCick2}> Meu botão 2</button>
      <button onClick={handleCick3}> Meu botão 3 </button>   
     </div>
   );
}

export default App;

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .