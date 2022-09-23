const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//  Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log (allLessons);
// console.log (allLessons.lesson1.numeroEstudantes);
// console.log (Object.values(allLessons)[2].numeroEstudantes);

 
const NumbOfStu = (obj) => {
  let count=0;
  for (let i in Object.keys(obj)){
    count += Object.values(obj)[i].numeroEstudantes;
  }
  return count;
}
console.log (NumbOfStu(allLessons));
