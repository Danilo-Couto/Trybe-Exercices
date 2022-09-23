
//representa os erros customizados do nosso sistema, deverá ser extendido para error específicos
export default abstract class CustomError extends Error {
    
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
    
}