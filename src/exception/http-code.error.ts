export class HttpError extends Error{
    statusCode: number;
    constructor(statusCode:number, message:string){
        super(message)
        this.message = message;
        this.statusCode = statusCode;
    }
}