"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negociaciones = void 0;
var Negociaciones = (function () {
    function Negociaciones() {
        this.negociaciones = [];
    }
    Negociaciones.prototype.agrega = function (negociacion) {
        this.negociaciones.push(negociacion);
    };
    Negociaciones.prototype.lista = function () {
        return this.negociaciones;
    };
    return Negociaciones;
}());
exports.Negociaciones = Negociaciones;
