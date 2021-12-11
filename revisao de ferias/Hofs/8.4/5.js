// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
  const names = [
    'aanemarie',  'adervandes',
    'akifusa',    'abegildo',
    'adicellia',  'aladonata',
    'abeladerco', 'adieidy',
    'alarucha'
  ]
 
  function containsA() {
      const allToLower = names.map(str => str.toLowerCase());
      const joined = allToLower.reduce((total, name)=> total.concat(name));
    const filteredA= joined.split('').filter(letter => letter === 'a')
    return filteredA.length;
  } 

  console.log(containsA())

/*   // gabarito: 

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }
  console.log(containsA()) */
