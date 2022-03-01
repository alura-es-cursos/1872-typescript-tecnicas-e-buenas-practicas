import { escapar } from '../decorators/escapar.js';
import { Negociaciones } from '../models/negociaciones.js';
import { View } from './view.js';
export class NegociacionesView extends View<Negociaciones> {
    
    @escapar 
    protected template(model: Negociaciones) : string {
        return `
        <table class="table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Cantidad</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            ${model.lista().map(e =>{
                return `
                <tr>
                    <td>${this.formatearFecha(e.fecha)}</td>
                    <td>${e.cantidad}</td>
                    <td>${e.valor}</td>
                </tr>
                `;
            }).join('')}
            </tbody>
            <script>alert('hola')</script>
        </table>
        `;
    }

    private formatearFecha(fecha : Date) : string {
        return new Intl.DateTimeFormat().format(fecha);
    }
}