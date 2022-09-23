import Payment from "./Payment";

export default class CreditCardPayment extends Payment {
    public calcTaxes(amount: number): number {
        return amount * 0.2;
    }
}