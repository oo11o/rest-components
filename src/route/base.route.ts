import { Router, Request, Response, NextFunction} from 'express'
import { IRoute } from './route.interface'

export class BaseRoute{
   private _router;

   constructor(){
        this._router = Router();
   }

   get router(){
    return this._router;
   }

   public send<T>(res: Response, code: number, message:T) {
    res.type('application/json');
    res.status(code).send(message);
   }

   public ok<T>(res:Response, message:T) {
    this.send(res, 200, message);
   }

   public created<T>(res:Response, message:T) {
    this.send(res, 201, message);
   }

   public badRequest<T>(res:Response, message:T) {
    this.send(res, 400, message);
   }

   public forbiddend<T>(res:Response, message:T) {
    this.send(res, 403, message);
   }

   public notFound<T>(res:Response, message:T) {
    this.send(res, 404, message);
   }

   bindRoutes(routes:IRoute[]){
        routes.forEach((route: IRoute) => {
           this.router[route.method](route.path, route.func.bind(this));
        });
   }
}