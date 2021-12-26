/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */
 
/* function disemvowel(str) {
    return str.split('').filter(letter => {
       return (letter !=='a' && letter !=='e' && letter !=='i' && letter !=='o' && letter !=='u' && letter !=='A' && letter !=='E' && letter !=='I' && letter !=='O' && letter !=='U')
    }).join('');
} */

/* function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(letter => {
        return vowels.indexOf(letter.toLowerCase()) === -1; // index -1 é o retorno de um index não presente no array. Td que for diferente de -1 sera uma vogal
    }).join('');
  } */

  function disemvowel(str) {
    const vowels = 'aeiou';
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}
  
console.log(disemvowel("This website is for losers LOL!"));

