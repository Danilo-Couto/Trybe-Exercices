import CreditCardPayment from "./models/entities/CreditCardPayment";
import DebitCardPayment from "./models/entities/DebitCardPayment";
import Payment from "./models/entities/Payment";
import PixPayment from "./models/entities/PixPayment";

const payment: Payment = new DebitCardPayment();
const taxes = payment.calcTaxes(100);

console.log(taxes);