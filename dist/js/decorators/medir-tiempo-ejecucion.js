"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.medirTiempoEjecucion = void 0;
function medirTiempoEjecucion() {
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var t1 = performance.now();
            var retorno = metodoOriginal.apply(this, args);
            var t2 = performance.now();
            console.log("Tiempo de ejecuci\u00F3n del m\u00E9todo " + propertyKey + ": " + (t2 - t1) / 1000 + " segundos");
            return retorno;
        };
        return descriptor;
    };
}
exports.medirTiempoEjecucion = medirTiempoEjecucion;
