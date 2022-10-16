import { HttpError } from "./http-code.error";
import { Request, Response, NextFunction } from "express";

export interface IException {
    catch(err: Error | HttpError, req:Request, res:Response, next:NextFunction);
}