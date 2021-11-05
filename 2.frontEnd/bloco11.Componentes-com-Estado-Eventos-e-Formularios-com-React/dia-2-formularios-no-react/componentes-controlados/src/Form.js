import React from 'react'
import './Form.js'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this); pq eu usei arrow function

    this.state = {
      dissertacao: 'Por favor, escreva uma dissertação sobre frutas',
      fruta: '',
      nome: 'Digite seu nome de fruta',
      likeFruit: Boolean,
    };
  }

  /* handleChange (e){
      this.setState ({
        [e.target.name]: e.target.value, 
      })
    } */

 /*  handleChange({target}){
    const {name,value} = target;

    this.setState ({
      [name]: value,
  })  
}
  */ 

  handleChange({target: {name, value}}){
    this.setState ({
      [name]: value,
  })  
}

  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit= (event) => {
    event.preventDefault();

    const {nome, fruta} = this.state;
    alert(`${nome}, sua fruta favorita é ${fruta}`);
  }

  render() {
    const {dissertacao, fruta, likeFruit, nome} = this.state;

    return (
      <div>
        <h1> Meu Form </h1>
        <form onSubmit={this.handleSubmit}>
            
        <fieldset>
          <label htmlFor="dissertação">
            Dissertação:
            <textarea 
              name='dissertacao'
              value={dissertacao}
              onChange={this.handleChange} />
          </label>
        </fieldset>

        <fieldset>
        Qual sua fruta favorita?
          <select 
            name='fruta'
            value={fruta} 
            onChange={this.handleChange}>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
          </select> 
        </fieldset>

        <fieldset>
            Você gosta de fruta?
            <input 
              name='likeFruit'
              type='checkbox'
              id = 'likeFruit'
              checked={likeFruit}
              onChange={this.handleInputChange}      
              /> 
            <label htmlFor="likeFruit"> Sim </label>

{/* COMO FAZER TYPO RADIO */}
{/*             <input 
              name='likeFruit'
              type='checkbox'
              id = 'likeFruit'
              checked={likeFruit}
              onChange={this.handleInputChange}      
              /> 
            <label htmlFor="notLikeFruit"> Não </label> */}
        
        </fieldset>            
        <fieldset>
          <label htmlFor="nome">
          Nome:
            <input 
              type="text" 
              name='nome'
              value={nome}
              onChange={this.handleChange} />
          </label>
        </fieldset>
  
        <input 
            type="submit"
            value="Enviar" />   
        <input type="file" />
      </form>
    </div>
    );
  }
}

export default Form;