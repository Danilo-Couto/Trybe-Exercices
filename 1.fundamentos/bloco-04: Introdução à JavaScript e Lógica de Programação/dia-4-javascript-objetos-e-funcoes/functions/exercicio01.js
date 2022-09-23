    function reverseString(str) {
      let lowerCase = str.toLowerCase();
      let splitString = lowerCase.split(""); 
      let reverseArray = splitString.reverse(); 
      let joinArray = reverseArray.join(""); 
     
      if (joinArray === lowerCase) {
         return true;
      } else {
         return false;
      }
}

let ehPalindromo = reverseString('ARARA');
console.log("ehPalindromo?:", ehPalindromo);
console.log("----------");  
