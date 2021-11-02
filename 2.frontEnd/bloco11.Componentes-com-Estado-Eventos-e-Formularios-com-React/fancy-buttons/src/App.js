import './App.css';
import React, { Component } from 'react';

class App extends React.Component {

constructor() {
  super ()

  this.handleClick = this.handleClick.bind(this); // this.handleClick é redeclarado dizendo que ele esta ligado a this
  this.handleClick2 = this.handleClick2.bind(this);
  this.handleClick3 = this.handleClick3.bind(this);

  this.state = {
    numeroDeCLiquesBotao1: 0,
    numeroDeCLiquesBotao2: 0,
    numeroDeCLiquesBotao3: 0,
  }
}

handleClick() {
  this.setState ((estadoAnterior, _props) => ({
    numeroDeCLiquesBotao1: estadoAnterior.numeroDeCLiquesBotao1+1
    }))
}

handleClick2() {
  this.setState ((estadoAnterior, _props) => ({
    numeroDeCLiquesBotao2: estadoAnterior.numeroDeCLiquesBotao2+1
  }))
}

handleClick3() {
  this.setState ((estadoAnterior, _props) => ({
    numeroDeCLiquesBotao3: estadoAnterior.numeroDeCLiquesBotao3+1
  }))
}

  render () { 
    return (
    <div>
      <button onClick={this.handleClick}> {this.state.numeroDeCLiquesBotao1} </button>
      <button onClick={this.handleClick2}> {this.state.numeroDeCLiquesBotao2} </button>
      <button onClick={this.handleClick3}> {this.state.numeroDeCLiquesBotao3} </button> 
     </div>
   );}
}

export default App;
