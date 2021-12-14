import React, { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { changeHandler, mouseOver} = this.props;

    return (
      <fieldset>
            <legend>Dados do último emprego</legend>
            <div className="container">
            Resumo do currículo:
              <textarea
                type="textarea"
                name="resume"
                maxLength="1000"
                required
                onChange={changeHandler}
              />
              Cargo:
              <textarea
                type="textarea"
                name="role"
                maxLength="40"
                required
                onChange={changeHandler}
                onMouseEnter={mouseOver}
              />
            </div>
              Descrição do cargo
              <textarea
                type="textarea"
                name="description"
                maxLength="500"
                required
                onChange={changeHandler}
              />
          </fieldset>
    );
  }
}

export default ProfessionalForm;