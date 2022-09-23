/* 
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
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

 
order.name= 'Luiza Silva';
order.payment.total = 50;
const pedido= Object.values(order.order);
const pizza = Object.keys(pedido[0]);
const bebida = Object.keys(pedido[1]);

const orderModifier = (order) => {
  order.name= 'Luiza Silva';
  order.payment.total = '50 reais';
  const msg = `Olá ${order.name}! o total do seu pedido de ${pizza}, ${bebida} é ${order.payment.total}.`
  console.log (msg);
}
orderModifier(order); 
