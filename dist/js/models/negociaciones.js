export class Negociaciones {
    constructor() {
        this.negociaciones = [];
    }
    agrega(negociacion) {
        this.negociaciones.push(negociacion);
    }
    lista() {
        return this.negociaciones;
    }
}
