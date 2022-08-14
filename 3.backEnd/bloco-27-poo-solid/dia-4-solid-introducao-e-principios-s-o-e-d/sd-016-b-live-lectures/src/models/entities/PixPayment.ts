import Payment from "./Payment";

export default class PixPayment extends Payment {
    public calcTaxes(amount: number): number {
        return amount * 0.1;
    }
}