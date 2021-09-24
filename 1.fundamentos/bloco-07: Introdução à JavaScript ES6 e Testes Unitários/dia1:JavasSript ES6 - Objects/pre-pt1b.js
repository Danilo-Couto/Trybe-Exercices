/* crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

objectCreator = (a, b, c ) => {
  a = {
  };
   
  let newKey = 'brand';
  const brand = b;
  a[newKey] = brand;
  let newKey2 = 'model';
  const model = c;
  a[newKey2] = model;

  console.log(a); 
 }

objectCreator ('motorcycle','Yamaha', 'Tenere 250');