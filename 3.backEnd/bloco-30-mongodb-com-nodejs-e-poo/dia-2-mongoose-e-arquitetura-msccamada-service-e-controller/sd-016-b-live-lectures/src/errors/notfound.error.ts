import CustomError from "./custom.error";

//erro específico not found, que herda do erro customizado, passando o statuscode 404
export default class NotFoundError extends CustomError {
    constructor(message: string) {
        super(message, 404);
    }
}