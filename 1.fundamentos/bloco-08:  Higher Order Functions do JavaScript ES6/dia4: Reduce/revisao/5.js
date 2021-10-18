//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/* function containsA() {
  let str = names.reduce((acc, letter)=>acc+letter).toLowerCase();
  return str.split('').filter((elem)=> elem==='a').length
}

console.log(containsA())
*/

//GABARITO:
function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.toLowerCase().split('').reduce((acumulator, current) => {
       // console.log('acc:', acumulator);
       // console.log('curr:', current);
        if (current === 'a' ) return acumulator + 1;
        return acumulator;
     }, 0), 0);
}
console.log(containsA())

/* 
[
  'a', 'a', 'n', 'e', 'm', 'a', 'r', 'i', 'e', 'a',
  'd', 'e', 'r', 'v', 'a', 'n', 'd', 'e', 's', 'a',
  'k', 'i', 'f', 'u', 's', 'a', 'a', 'b', 'e', 'g',
  'i', 'l', 'd', 'o', 'a', 'd', 'i', 'c', 'e', 'l',
  'l', 'i', 'a', 'a', 'l', 'a', 'd', 'o', 'n', 'a',
  't', 'a', 'a', 'b', 'e', 'l', 'a', 'd', 'e', 'r',
  'c', 'o', 'a', 'd', 'i', 'e', 'i', 'd', 'y', 'a',
  'l', 'a', 'r', 'u', 'c', 'h', 'a'
] */