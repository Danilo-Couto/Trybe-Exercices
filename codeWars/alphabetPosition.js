/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

function alphabetPosition(text) {
    const alphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z' ];  

    let newText= [];
    for(let i in text) {
        alphabet.indexOf(text.toLowerCase()[i]) === -1 ? null :  newText.push(alphabet.indexOf(text.toLowerCase()[i])+1)
    }
    return newText.join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// outcome: 
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 0 3 12 15 3 11 0


// exepected:
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11