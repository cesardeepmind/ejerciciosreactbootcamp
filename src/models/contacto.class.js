export class Contacto {
    Nombre= String;
    Apellido = String;
    Email = String;
    Conectado = false;

    constructor(Nombre, Apellido, Email, Conectado){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Conectado = Conectado
    }

}