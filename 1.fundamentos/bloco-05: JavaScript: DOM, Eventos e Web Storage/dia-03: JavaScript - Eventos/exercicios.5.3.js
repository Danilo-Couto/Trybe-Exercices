function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
    createDaysOfTheWeek();
  
function createDaysOfTheMonth () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const daysContainer = document.getElementById('days')
  
    for (let index in dezDaysList) {
        const dia = dezDaysList[index]
        const diaDoMes = document.createElement('li');
        daysContainer.appendChild(diaDoMes);
        diaDoMes.innerHTML = dia;
        //diaDoMes.className = 'day';

        if (dia===25) {
            diaDoMes.className = 'day friday holiday';
        } else if (dia===24 || dia===25 || dia===31 ) {
            diaDoMes.className = 'day holiday';
        } else if (dia===4 ||dia===11 || dia===18) {
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
    //let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.appendChild(holidayButton);
}
holidayButton('Feriados');

let feriadoButton = document.getElementById('btn-holiday');
feriadoButton.addEventListener('click', changeCollor);
    
     function changeCollor () {
        let dayHoliday = document.querySelectorAll('.holiday');
        //let backChanged = 'green';
        //let backNotChanged = 'rgb(238,238,238)';

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
    
/* 


 */