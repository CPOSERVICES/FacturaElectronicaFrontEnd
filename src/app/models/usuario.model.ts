export class Usuario {

    constructor (
        //public id: number,
        public emisor_id: number, 
        public rol_id: number,
        public username: string,
        public password: string,
        public email: string,
        public nombre: string,
        public apellidos: string,
        public salt: string,
        public is_active: string,
        //public createdAt: string,
        //public updatedAt: string,
    ) {}
}