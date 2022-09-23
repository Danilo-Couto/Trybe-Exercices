// Crie uma função que receba uma frase e retorne qual a maior palavra.

//let phrase = "Antônio foi no banheiro e não sabemos o que aconteceu";

const longest = (phrase) => {
    const array = phrase.split(' ');
    let longestWord = array[0]
    for (let word of array) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;    
}
console.log(longest("Antônio foi no banheiro e não sabemos o que aconteceu"));

//em uma linha: (pedir explicacao, pois nao entendi)
/* 
const longestWord = phrase => phrase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
 */