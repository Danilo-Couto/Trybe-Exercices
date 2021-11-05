import React from 'react'
import './Form.js'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      dissertacao: 'Por favor, escreva uma dissertação sobre frutas',
      fruta: '',
      nome: 'Digite seu nome de fruta',
      likeFruit: Boolean,
    };
  }

  handleChange({target}){
    const {name,value} = target;

    this.setState ({
      [name]: value,
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
            
        <fieldset>
          <label htmlFor="dissertação">
            Dissertação:
            <textarea 
              name='dissertacao'
              value={this.state.dissertacao}
              onChange={this.handleChange} />
          </label>
        </fieldset>

        <fieldset>
        Qual sua fruta favorita?
          <select 
            name='fruta'
            value={this.state.fruta} 
            onChange={this.handleChange}>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
          </select> 
        </fieldset>


 {/*  <input type="checkbox" id="html" name="fav_language" value="HTML">
 </input>
  <label for="html">HTML</label>  */}

        <fieldset>
            Você gosta de fruta?
            <input 
              name='likeFruit'
              type='checkbox'
              id = 'likeFruit'
              checked={this.state.likeFruit}
              onChange={this.handleInputChange}      
              /> 
            <label htmlFor="likeFruit"> Sim </label>

{/* COMO FAZER TYPO RADIO */}
{/*             <input 
              name='likeFruit'
              type='checkbox'
              id = 'likeFruit'
              checked={this.state.likeFruit}
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
              value={this.state.nome}
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