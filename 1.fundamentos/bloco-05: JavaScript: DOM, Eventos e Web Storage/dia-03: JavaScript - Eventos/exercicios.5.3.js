const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const weekDaysList = document.querySelector('.week-days');
function createDaysOfTheWeek() {

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days; 
      weekDaysList.appendChild(dayListItem);
    };
  };

createDaysOfTheWeek();

const dayOfTheMonth = document.getElementById('days')

function createDaysOfTheMonth () {
    const monthDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    for (let index in monthDaysList) {
        const day = monthDaysList[index]
        const diaDoMes = document.createElement('li');
        dayOfTheMonth.appendChild(diaDoMes);
        diaDoMes.innerHTML = day;

        if (day===25) {
            diaDoMes.className = 'day friday holiday';
        } else if (day===24 || day===25 || day===31 ) {
            diaDoMes.className = 'day holiday';
        } else if (day===4 ||day===11 || day===18) {
            diaDoMes.className = 'day friday'
        } else {
            diaDoMes.className = 'day'
        }
    }
}
    createDaysOfTheMonth ()

function holidayButton (str) {
    //str = 'Feriados';
    let holidayButton = document.createElement('button');
    holidayButton.id='btn-holiday';
    holidayButton.innerText = str;
    buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.appendChild(holidayButton);
}
holidayButton('Feriados');

let feriadoButton = document.getElementById('btn-holiday');
feriadoButton.addEventListener('click', changeCollor);
    
function changeCollor () {
    let dayHoliday = document.querySelectorAll('.holiday');
    
    for (let index in dayHoliday) {
        if (dayHoliday[index].style.backgroundColor == 'green') {
            dayHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
            dayHoliday[index].style.color = '#777'
        } else {
            dayHoliday[index].style.backgroundColor = 'green'
            dayHoliday[index].style.color = 'rgb(238,238,238)'
        }
    } 
} 
    
function putfridayButton (str) {
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText =str;
    buttonsContainer.appendChild(fridayButton);    
}
    putfridayButton('Sexta-feira')
//---
let fridays = document.getElementsByClassName('friday');
let botaoSexta = document.getElementById('btn-friday');
let arrayFriday = [4, 11, 18, 25];

function sextou (){
    for (let index in fridays){
        if (fridays[index].innerHTML!='é sextaaaa pohhaaa!!!') {
        fridays[index].innerHTML='é sextaaaa pohhaaa!!!'
        } else {
        fridays[index].innerHTML= arrayFriday[index];
        }
    }
}
botaoSexta.addEventListener('click', sextou);

//--------
let diaDoMes = document.querySelectorAll('.day');

for (let index in diaDoMes) {
diaDoMes[index].addEventListener('mouseover', zoomIn)
diaDoMes[index].addEventListener('mouseleave', zoomOut)

    function zoomIn (event) {
        event.target.style.color = 'green';
        event.target.style.fontSize = '40px';
    }

    function zoomOut (event) {
        event.target.style.color = '#777';
        event.target.style.fontSize = '20px';
    }
}

//----

/* 
 Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target .
 */