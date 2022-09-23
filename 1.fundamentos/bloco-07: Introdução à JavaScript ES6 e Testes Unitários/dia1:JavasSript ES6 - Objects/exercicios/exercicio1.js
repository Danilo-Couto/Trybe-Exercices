/* Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
 */

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

const key = Object.keys(order);
const valuesAddress = Object.values(order.address);
const keyAndvalue = Object.entries(order);

const customerInfo = (order) => {
  let msg = `Olá Ana Silveira, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R.: ${valuesAddress[0]}, Nº:${valuesAddress[1]}, AP:${valuesAddress[2]}`;

  console.log(msg);
}
customerInfo(order);
  
