export function medirTiempoEjecucion() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            //Medir el t1
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this,args);
            //Medir el t2
            const t2 = performance.now();
            console.log(`Tiempo de ejecución del método ${propertyKey}: ${(t2-t1)/1000} segundos`)

            return retorno;
        }
        return descriptor;
    }
}
