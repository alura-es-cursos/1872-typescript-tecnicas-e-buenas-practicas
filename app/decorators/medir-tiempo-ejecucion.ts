export function medirTiempoEjecucion(medirEnSegundos : boolean = true) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            //Medir el t1
            console.log('Antes del método original');
            let conversion = 1;
            let unidadTiempo = 'milisegundos';

            if (medirEnSegundos) {
                conversion = 1000;
                unidadTiempo = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this,args);
            //Medir el t2
            const t2 = performance.now();
            console.log(`Tiempo de ejecución del método ${propertyKey}: ${(t2-t1)/conversion} ${unidadTiempo}`)

            return retorno;
        }
        return descriptor;
    }
}
