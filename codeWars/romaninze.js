// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

function romanize(number){
  const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let roman = '';
  let i;
  for ( i in lookup ) {
    for ( let j = 0 ; number >= lookup[i] ; j+=1 ) {
        // console.log ('lookup[i]:',i, lookup[i])
      roman += i;
        // console.log('----')
        // console.log ('roman:', roman)
      number -= lookup[i];
        // console.log('----')
        // console.log('number:',number)
    }
  }
  return roman
}

console.log(romanize(444))


