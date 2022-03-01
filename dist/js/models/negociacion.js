export class Negociacion {
    constructor(_fecha, cantidad, valor) {
        this._fecha = _fecha;
        this.cantidad = cantidad;
        this.valor = valor;
    }
    get fecha() {
        const nuevaFecha = new Date(this._fecha.getTime());
        return nuevaFecha;
    }
    get total() {
        return this.cantidad * this.valor;
    }
    static crearNegociacion(fechaString, cantidadString, valorString) {
        const regexp = /-/g;
        const fecha = fechaString.replace(regexp, ',');
        const cantidad = parseInt(cantidadString);
        const valor = parseFloat(valorString);
        return new Negociacion(new Date(fecha), cantidad, valor);
    }
}
