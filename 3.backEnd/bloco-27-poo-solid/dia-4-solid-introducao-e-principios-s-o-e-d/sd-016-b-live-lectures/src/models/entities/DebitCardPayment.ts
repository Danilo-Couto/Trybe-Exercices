import Payment from "./Payment";

export default class DebitCardPayment extends Payment {
    public calcTaxes(amount: number): number {
        return amount * 0;
    }

}