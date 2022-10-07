import { IUserRepo } from './userRepo.interface';

export class UserPosgresDBRepo implements IUserRepo {
   
   public create(obj:object):object{
      console.log(obj);
      return {};
   }

   public getOne(obj:object):object{
      console.log(obj);
      return {};
   }

   public getAll(obj:object):[]{
      console.log(obj);
      return [];
   }

   public update(obj:object):object{
      console.log(obj); 
      return {};
   }

   public delete(obj:object):object{
      console.log(obj);
      return {};
   }

}

