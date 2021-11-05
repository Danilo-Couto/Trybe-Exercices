// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

import React from 'react'
import './Form.js'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleChangeInputName = this.handleChangeInputName.bind(this);
    this.handleChangeSelectFruit = this.handleChangeSelectFruit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    this.state = {
      dissertacao: 'Por favor, escreva uma dissertação sobre frutas',
      fruta: '',
      nome: 'Digite seu nome de fruta',
    };
  }

  handleChangeTextArea(event) {
    this.setState({dissertacao: event.target.value});
  }
  handleChangeSelectFruit(event) {
    this.setState ({fruta: event.target.value});
  }
  handleChangeInputName(event) {
    this.setState({nome: event.target.value});
  }
  handleSubmit(event) {
    alert(`${this.state.nome}, sua fruta favorita é ${this.state.fruta}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>

        <h1> Meu Form </h1>
        <form onSubmit={this.handleSubmit}>

          <label>
            Dissertação:
            <textarea 
              name='dissertacao'
              value={this.state.dissertacao}
              onChange={this.handleChangeTextArea} />
          </label>

          Qual sua fruta favorita?
          <select 
            name='fruta'
            value={this.state.fruta} 
            onChange={this.handleChangeSelectFruit}>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select> 

          <label>
            Nome:
            <input 
              type="text" 
              name='nome'
              value={this.state.nome}
              onChange={this.handleChangeInputName} />
          </label>
          <input 
            type="submit"
            value="Enviar" />
          
        </form>

      </div>
    );
  }
}

export default Form;
