/* funcao que recebe um array como param e retorn um array apenas com seus numeros pares */

/* function par () {
    const array = [1,2,3,4,5,6,7,8,9,10];
        let newArray = [];
        for (let index in array){
            if (array[index] % 2===0) {
                newArray.push(array[index]);
            }
        }
    console.log (newArray);
}
par ();
  */

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]
// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']

/* function buildCitiesArray(array) {
    for (let i = 0; i < citiesAndStates.length ; i+=1){
        console.log (`${citiesAndStates[i].city}: ${citiesAndStates[i].state}`)
    } 
}
buildCitiesArray();
 */

const buildCitiesArray = () => {
    for (let i = 0; i < citiesAndStates.length ; i+=1){
        console.log (`${citiesAndStates[i].city}: ${citiesAndStates[i].state}`)
    } 
}
