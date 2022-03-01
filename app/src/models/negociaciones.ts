import { Modelo } from '../interfaces/modelo.js';
import { Negociacion } from './negociacion.js';

export class Negociaciones implements Modelo<Negociaciones> {
    
    private negociaciones: Negociacion[] = [];

    public agrega(negociacion : Negociacion) {
        this.negociaciones.push(negociacion);
    }

    public lista() : readonly Negociacion[] {
        return this.negociaciones;
    }

    public paraTexto() : string {
        return JSON.stringify(this.negociaciones);
    }

    esIgual(negociaciones: Negociaciones): boolean {
        return JSON.stringify(this.negociaciones) == JSON.stringify(negociaciones.lista());
    }
}

