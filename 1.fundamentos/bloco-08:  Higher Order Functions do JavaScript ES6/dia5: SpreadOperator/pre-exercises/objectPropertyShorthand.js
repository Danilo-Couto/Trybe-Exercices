const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// eu modifiqei:
const usuarias = [54, 'isabella', 'isabella@email.com']
  
console.log(newUser(...usuarias)); // { id: 54, name: 'isabella', email: 'isabella@email.com' }