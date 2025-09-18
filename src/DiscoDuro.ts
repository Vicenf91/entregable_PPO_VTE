import { AlmacenarDatos } from "./AlmacenarDatos.js";
import { Disco } from "./Disco.js";

class DiscoDuro extends Disco implements AlmacenarDatos{
    #tipoConexion: string;
    #formateado: boolean;

    constructor(nombre:string, contenido: string, capacidad:number, tipo: string, rpm: number,tipoConexion: string, formateado: boolean){
            super(nombre, contenido, capacidad, tipo, rpm);
            this.#tipoConexion = tipoConexion;
            this.#formateado = formateado;
    }

    getTipoConexion() {return this.#tipoConexion;}
    setTipoConexion(nuevoTipoConexion:string) {this.#tipoConexion = nuevoTipoConexion}
    
    getFormateado(){ return this.#formateado;}
    setFormateado(estaFormateado: boolean) { this.#formateado = estaFormateado;}

    leerDatos(): void {
        console.log("Disco duro leyendo con cabezal magnetico:");
    }

    escribirDatos(datos: string): void {
        console.log(`Disco duro escribiendo con cabezal magnetico: ${datos}`)
        this.setContenido(datos);
    }

    formatear():void {
        this.#formateado = true;
        console.log("Formateo completado.");
    }

    conectar(): void {
        console.log(`Conectado por ${this.#tipoConexion}`)
    }
}