import { Response, Request, NextFunction } from "express";
import { IException } from "./exeption.interface";
import { HttpError } from "./http-code.error";

export class Exception implements IException {
    catch( err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
        if(err instanceof HttpError) {
            res.status(err.statusCode).send({err: err.message});
        } else {
            res.status(500).send({err: err.message});
        }
    }
}