/* 
var user = {
  name : "John",
  profession : "👨‍⚕️",
  salary  : 10000
}
console.log(Object.keys(user)); // ["name", "profession", "salary"]
console.log(Object.values(user)); // ["John", "👨‍⚕️", 10000]
console.log(Object.entries(user)); 
 */
/*output
0: (2) ["name", "John"]
1: (2) [“profession”, “👨‍⚕️”]
2: (2) [“sa */

  /* Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".
 */

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo'
};
const levelOfstudents = () => {
  const size = Object.keys(student1).length;
  const key = Object.keys(student1);
  const value = Object.values(student1);
  //const keyAndvalue = Object.entries(student1);
   
  for (i in key){
    console.log(`${key[i]}, Nível: ${value[i]}`);
  }
}
levelOfstudents ();

/* O gabarito é assim:
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

 */