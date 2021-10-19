test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  });

/* Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase "Deveria falhar!" sequer aparece no console.
Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
Vamos reescrever o teste chamando a callback done após a assgiterção para indicar que o teste acabou:
 */

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});