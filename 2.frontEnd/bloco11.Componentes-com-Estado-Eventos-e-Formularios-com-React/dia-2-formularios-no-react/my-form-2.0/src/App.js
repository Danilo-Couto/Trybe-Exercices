import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  description: '',
  submitted: false,
  firstTime: true,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onBlurHandler = event => {
    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState(() => ({
      [name]: value,
    }));
  }

  changeHandler = ({target}) => {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    // if (name === 'address') value = this.validateAddress(value);
    this.updateState(name, value);
  }

  mouseOver = () =>{
    const {firstTime} = this.state;
    if (firstTime) {
      window.alert('Preencha com cuidado esta informação.')
      this.setState({
        firstTime: false,
      })  
    }
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  resetForm = () => { this.setState(initialState) };

  sendForm = () => { this.setState({ submitted: true }) };


  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state }
          mouseOver = {this.mouseOver}
          displayInfos = {this.submitted}
          onBlurHandler={ this.onBlurHandler }
        />
        {submitted &&
        <div>
          <h2>Informações Pessoais</h2>
          <p>Nome: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>CPF: {this.state.cpf}</p>
          <p>Endereço: {this.state.endereco}</p>
          <p>Cidade: {this.state.cidade}</p>
          <p>Estado: {this.state.estado}</p>
          <p>{this.state.addressType}</p>
          <h2>Úlimo Emprego</h2>
          <p>Resumo Currículo: {this.state.resume}</p>
          <p>Cargo: {this.state.role}</p>
          <p>Descrição do Cargo: {this.state.description}</p>
        </div>
        }
      </main>
    );
  }
}

export default App;

/* para ver o formulario completo do gabarito, 
https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/eventos-e-formularios-no-react/solutions/306d9a98-87b4-445b-9256-482909f5e918/conteudo/a675c67e-b553-4390-9904-82f6ed07ab20?use_case=calendar */