import { Operacion } from "../interfaces/operacion.js";
import { Negociacion } from "../models/negociacion.js";

export class NegociacionesService {
    public obtenerNegociacionesAPI(): Promise<Negociacion[]> {
        return fetch('http://localhost:8080/datos')
            .then(res => res.json())
            .then((datos:Operacion[]) => {
                return datos.map((operacion)=> {
                    return new Negociacion(
                        new Date(),
                        operacion.monto,
                        operacion.veces
                    );
                });
            });
    }
}