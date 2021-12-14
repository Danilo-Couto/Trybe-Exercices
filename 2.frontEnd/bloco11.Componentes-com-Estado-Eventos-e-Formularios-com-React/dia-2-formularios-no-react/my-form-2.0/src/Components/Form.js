import React, { Component } from 'react';
import PersonalForm from './PersonalForm'
import ProfessionalForm from './ProfessionalForm';

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, mouseOver, displayInfos} = this.props;

    return (
      <form>
        <PersonalForm
         changeHandler={ changeHandler } currentState={ currentState }
        />
        <ProfessionalForm
         changeHandler={ changeHandler } mouseOver={ mouseOver }
        />
        
        <input
          type="button"
          onClick={ sendForm }
          value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;