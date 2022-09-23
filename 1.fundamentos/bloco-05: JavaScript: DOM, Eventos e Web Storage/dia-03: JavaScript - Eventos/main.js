const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

//2
  firstLi.addEventListener('click', adicionaTech);
  secondLi.addEventListener('click', adicionaTech);
  thirdLi.addEventListener('click', adicionaTech);

  function adicionaTech(event) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    //input.value = '';
  }

  //3
  
  input.addEventListener('input', ola);
  
  function ola (event) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  }

  //4 
 
  myWebpage.addEventListener('dblclick', redireciona);
  
  function redireciona () {
    window.location.assign("https://danilo-couto.github.io/")
    //ou //window.location.replace('https://danilo-couto.github.io/');
     };
  
myWebpage.addEventListener('mouseover', alteraCor);
function alteraCor () {
  myWebpage.style.backgroundColor = 'red';
}

myWebpage.addEventListener('mouseleave', resetaCor);
function resetaCor () {
  myWebpage.style.backgroundColor = '';
}

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(qqrcoisa) {
  // O Event é passado como um parâmetro para a função.
  qqrcoisa.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.