export class Disco {
    #nombre: string;
    #contenido: string;
    #capacidad: number;
    #tipo: string;
    #rpm: number;
    
    constructor(nombre: string, contenido: string, capacidad: number, tipo: string, rpm:number) {
        this.#nombre = nombre;
        this.#contenido = contenido;
        this.#tipo = tipo;
        this.#rpm = rpm;
    }

    getNombre() {return this.#nombre}
    setNombre(nuevoNombre:string) {this.#nombre = nuevoNombre}

    getContenido() {return this.#contenido}
    setContenido(nuevoContenido:string) {this.#contenido = nuevoContenido}

    getTipo() {return this.#tipo}
    setTipo(nuevoTipo:string) {this.#tipo = nuevoTipo}

    getRpm() {return this.#rpm}
    setRpm(nuevoRpm:number) {this.#rpm = nuevoRpm}

    girarDisco(): void {
        console.log(`El disco gira a ${this.#rpm} revoluciones por minuto.`)
    }

    consultarInformacion(): void {
    console.log(`Nombre: ${this.#nombre}`);
    console.log(`Capacidad: ${this.#capacidad} MB`);
    console.log(`Tipo: ${this.#tipo}`);
    console.log(`Contenido: ${this.#contenido}`);
  }
}