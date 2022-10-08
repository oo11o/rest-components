export interface IUserRepo {
    create: (obj:object) => object;
    getOne: (obj:object) => object;
    getAll: (obj:object) => [];
    update: (obj:object) => object;
    delete: (obj:object) => object;
}