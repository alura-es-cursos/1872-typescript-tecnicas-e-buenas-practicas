export function medirTiempoEjecucion(medirEnSegundos = true) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log('Antes del método original');
            let conversion = 1;
            let unidadTiempo = 'milisegundos';
            if (medirEnSegundos) {
                conversion = 1000;
                unidadTiempo = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tiempo de ejecución del método ${propertyKey}: ${(t2 - t1) / conversion} ${unidadTiempo}`);
            return retorno;
        };
        return descriptor;
    };
}
