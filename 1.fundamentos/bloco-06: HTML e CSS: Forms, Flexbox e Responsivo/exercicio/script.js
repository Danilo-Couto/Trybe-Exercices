function criarOpcoesUf() {
  let ufSelection = document.getElementById('uf');
  let ufArray = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let i=0; i<ufArray.length ; i +=1){
    let newUf = document.createElement('option');
    ufSelection.appendChild(newUf).innerText = ufArray[i];
    ufSelection.appendChild(newUf).value = ufArray[i];
  }
}
criarOpcoesUf()

/* function preventDf (event){
  event.preventDefault()
} 
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click',preventDf); 
*/

function cleanForm() {
  let inputsForm = document.querySelectorAll('input');
  for (let i = 0; i < inputsForm.length; i += 1) {
    let fieldInput = inputsForm[i];
    fieldInput.value = '';
  }
   let textAreaForm = document.querySelectorAll('textarea');
  for (let i = 0; i < textAreaForm.length; i += 1) {
    let fieldTextArea = textAreaForm[i];
    fieldTextArea.value = '';
  } 
}

let clearButton = document.getElementById('clearForm');
clearButton.addEventListener ('click', cleanForm);


new JustValidate('.js-form-1',/* {
  rules: {
      nome: {
        required: true,
      }, 
      email: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      uf: {
        required: true,
      },
      cidade: {
        required: true,
      },
      curriculo: {
        required: true,
      },
      cargo: {
        required: true,
      },
      descricaoCargo: {
        required: true,
      },
      dateStart: {
        required: true,
      },
      dateEnd: {
        required: true,
      },
  },
  messages: {
       nome : {
        required: 'This field is required'
      },
  },
}*/); 
