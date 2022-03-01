import { Modelo } from "../interfaces/modelo.js";

export class Negociacion implements Modelo<Negociacion> {
    
    constructor(private _fecha: Date,
        public readonly cantidad: number,
        public readonly valor: number) {
            
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
    get fecha(): Date {
        const nuevaFecha = new Date(this._fecha.getTime());
        return nuevaFecha;
    }
    get total() : number {
        return this.cantidad * this.valor;
    }

    public paraTexto() : string {
        return `
            Fecha: ${this.fecha},
            Cantidad: ${this.cantidad},
            Valor: ${this.valor},
        `;
    }

    public esIgual(negociacion: Negociacion): boolean {
        return this.fecha.getDate() == negociacion.fecha.getDate() &&
                    this.fecha.getMonth() == negociacion.fecha.getMonth() &&
                    this.fecha.getFullYear() == negociacion.fecha.getFullYear() &&
                    this.valor == negociacion.valor;

    }
}