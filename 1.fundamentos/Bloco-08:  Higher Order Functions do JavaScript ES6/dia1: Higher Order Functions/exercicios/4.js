const RIGHT_ANSWERS =   ['A', 'C',   'B', 'D', 'A', 'A',  'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function check (a, b) {
  let points = 0;
  for (let i = 0 ; i < a.length ; i+= 1) {
      if (b[i]=== "N.A"){
      } else if (a[i] === b[i]) {
          points+= 1  
      } else {
          points-= 0.5            
      }    
  }
return points
}

console.log (check(RIGHT_ANSWERS, STUDENT_ANSWERS));
// console.log (RIGHT_ANSWERS.length) 
