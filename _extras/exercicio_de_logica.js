/* Crie um algoritmo que imprime um novo array com os valores em comum nos Arrays A e B ao mesmo tempo.
Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 fors.

let a = [1, 2, 4, 5, 6]
let b = [3, 9, 8, 5, 0, 2]
let c = [];

for (let contador_b=0; contador_b<=b.length; contador_b+=1){
    for (let contador_a=0; contador_a<=a.length; contador_a+=1) {
        if (a[contador_a]==b[contador_b]) {
            c += c.push(contador_b);
        } else {
    
        }
        console.log (c);
    }
} */

/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']
 */

let a = [1, 2, 4, 5, 6]
let b = [3, 9, 8, 5, 0, 2] 
a.push(b[0]);
a.push(b[1]);

console.log(a);