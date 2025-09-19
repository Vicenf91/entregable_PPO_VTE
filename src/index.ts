import { Cd } from "./CD.js";
import { DiscoDuro } from "./DiscoDuro.js";

const cd = new Cd ("Julio Iglesias", "Grabado", 700, "CD_R", 400, false);
const hdd = new DiscoDuro ("DiscoDuroHdd","Con datos", 500_000, "HDD", 7200, "SATA", true);


cd.girarDisco();
cd.leerDatos();
// cd.escribirDatos("Nuevos datos")
cd.reportarInformacion();
cd.expulsar();


// DISCO DURO

hdd.girarDisco();
hdd.conectar();
hdd.leerDatos();
hdd.escribirDatos("Entregable Vicente");
hdd.formatear();
hdd.reportarInformacion();