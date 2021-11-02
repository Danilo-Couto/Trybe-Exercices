import './App.css';
import React, { Component } from 'react';


class App extends React.Component {

constructor() {
  super ()
  this.handleClick = this.handleClick.bind(this); // this.handleClick é redeclarado dizendo que ele esta ligado a this
  this.handleClick2 = this.handleClick2.bind(this);
  this.handleClick3 = this.handleClick3.bind(this);
  console.log('componente sendo construído')
}

handleClick() {
  console.log(this)
  console.log('clicou')
}

handleClick2() {
  console.log(this)
  console.log('clicou de novo')
}

handleClick3() {
  console.log(this)
  console.log('clicou mais uma vez')
}

  render () { 
    console.log(this)
    return (
    <div>
      <button onClick={this.handleClick}> Meu botão </button>
      <button onClick={this.handleClick2}> Meu   botão 2</button>
      <button onClick={this.handleClick3}> Meu botão 3 </button> 
     </div>
   );}
}

export default App;

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .