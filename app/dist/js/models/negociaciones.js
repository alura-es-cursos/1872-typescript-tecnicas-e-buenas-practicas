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
    paraTexto() {
        return JSON.stringify(this.negociaciones);
    }
    esIgual(negociaciones) {
        return JSON.stringify(this.negociaciones) == JSON.stringify(negociaciones.lista());
    }
}
//# sourceMappingURL=negociaciones.js.map