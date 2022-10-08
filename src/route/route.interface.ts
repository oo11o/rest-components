import { Request, Response, NextFunction } from 'express';

export interface IRoute {
    path: string,
    method: 'get' | 'post' |  'put' | 'delete' | 'patch';
    func: (req: Request, res: Response, next: NextFunction) => void
}