import { Gama } from "./gama";
import { SistemaOperativo } from "./sistema-operativo";

export class Celular {
    constructor(
        public id: number,
        public marca: string,
        public serial: number,
        public fechaCompra: Date,
        public anioLanzamiento: number,
        public precio: number,
        public sistemaOperativo: SistemaOperativo,
        public gama: Gama,
    ){}
}