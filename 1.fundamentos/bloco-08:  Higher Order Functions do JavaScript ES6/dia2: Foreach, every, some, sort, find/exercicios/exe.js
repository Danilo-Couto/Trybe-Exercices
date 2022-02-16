const clients = [
   {nome: 'ccc', idade: '32', emailCliente: ''},
   {nome: 'bbb', idade: '22', emailCliente: ''},
   {nome: 'aaa', idade: '11', emailCliente: ''}  
  ];
  
  function ordered() {
    return clients
      .map((client) => (
        {
          nome: client.nome,
          age: client.idade,
        }
      ))
      .sort((a, b) => a.age - b.age);
  }

 
  console.log(ordered())

  