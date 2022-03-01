"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negociacion = void 0;
var Negociacion = (function () {
    function Negociacion(_fecha, cantidad, valor) {
        this._fecha = _fecha;
        this.cantidad = cantidad;
        this.valor = valor;
    }
    Object.defineProperty(Negociacion.prototype, "fecha", {
        get: function () {
            var nuevaFecha = new Date(this._fecha.getTime());
            return nuevaFecha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negociacion.prototype, "total", {
        get: function () {
            return this.cantidad * this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Negociacion.crearNegociacion = function (fechaString, cantidadString, valorString) {
        var regexp = /-/g;
        var fecha = fechaString.replace(regexp, ',');
        var cantidad = parseInt(cantidadString);
        var valor = parseFloat(valorString);
        return new Negociacion(new Date(fecha), cantidad, valor);
    };
    return Negociacion;
}());
exports.Negociacion = Negociacion;
