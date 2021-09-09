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
    let newButton = document.createElement('button');
    newButton.id='btn-holiday';
    newButton.innerText = str;
    //let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    buttonsContainer = document.querySelector('.buttons-container')
    buttonsContainer.appendChild(newButton);
}

holidayButton('Feriados');

