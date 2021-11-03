import './App.css';
import React, { Component } from 'react';

class App extends React.Component {

constructor() {
  super ()
  
  this.state = {
    numeroDeCLiquesBotao1: 0,
  }
  
  this.handleClick = this.handleClick.bind(this); 
}

handleClick() {
  this.setState ((estadoAnterior, _props) => ({
    numeroDeCLiquesBotao1: estadoAnterior.numeroDeCLiquesBotao1 + 1
    }),() => {
      console.log(`Botão ${this.getColor(this.state.numeroDeCLiquesBotao1)}`);
    });
  }

getColor(num){
  return (num % 2 === 0 )? 'green': 'white'
}

  render () {  
    const {numeroDeCLiquesBotao1} = this.state;
    return (
    <div>
      <button 
      onClick={this.handleClick}
      style= {{backgroundColor: this.getColor(numeroDeCLiquesBotao1) }}
      > {numeroDeCLiquesBotao1} </button>
     </div>
   );}
}

export default App;