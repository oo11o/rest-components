import {Request, Response, NextFunction} from 'express';
import { BaseRoute } from './base.route.js';

export class UserRoute extends BaseRoute {
    constructor() {
        super()  
        this.bindRoutes([
            {path: '/users', method: 'get', func: this.getAll },
            {path: '/users/:id', method: 'get', func: this.getOne}       
        ]);  
    }    
    
    public getAll(req: Request, res: Response, next: NextFunction) {
        this.ok(res, { data: []})
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        console.log(this)
       // this.ok(res, { page: 'test-2'})
    }

}
