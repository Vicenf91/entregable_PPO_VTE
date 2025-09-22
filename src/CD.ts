import { AlmacenarDatos } from "./AlmacenarDatos.js";
import { Disco } from "./Disco.js";

export class  Cd extends Disco implements AlmacenarDatos {
    #regrabable: boolean;

    constructor (nombre: string,contenido:string, capacidad: number, tipo: string, rpm: number, regrabable: boolean){
        super(nombre, contenido, capacidad, tipo, rpm);
        this.#regrabable = regrabable;
    }

    getRegrabable() {return this.#regrabable;}
    setRegrabable(esRegrabable: boolean){this.#regrabable = esRegrabable;}

    leerDatos(): void{
        console.log("Cd leyendo con láser...");
    }

    escribirDatos(datos:string): void{
        console.log(`CD escribiendo con láser: ${datos}`);
        this.setContenido(datos);
    }

    expulsar(): void {
        console.log("Expulsando CD...");
    }
}

    

    