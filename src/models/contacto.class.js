import { LEVELS } from "./conect";

export class Contacto {
    name= String;
    email = String;
    conectado = false;
    level = LEVELS.Desconectado

    constructor(name, email, conectado, level){
        this.name = name;
        this.email = email;
        this.conectado = conectado;
        this.level = level;
    }

}