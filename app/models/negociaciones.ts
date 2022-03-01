import { Negociacion } from './negociacion.js';

export class Negociaciones {
    private negociaciones: Negociacion[] = [];

    public agrega(negociacion : Negociacion) {
        this.negociaciones.push(negociacion);
    }

    public lista() : readonly Negociacion[] {
        return this.negociaciones;
    }
}
