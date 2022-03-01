export class Negociacion {
    
    constructor(private _fecha: Date,
        public readonly cantidad: number,
        public readonly valor: number) {}

    get fecha(): Date {
        const nuevaFecha = new Date(this._fecha.getTime());
        return nuevaFecha;
    }
    get total() : number {
        return this.cantidad * this.valor;
    }

    public static crearNegociacion(fechaString : string, 
                            cantidadString : string, 
                            valorString : string) : Negociacion {
        const regexp = /-/g;
        const fecha = fechaString.replace(regexp,',');
        const cantidad = parseInt(cantidadString);
        const valor = parseFloat(valorString);
        return new Negociacion(
            new Date(fecha),
            cantidad,
            valor
        );
    }
}