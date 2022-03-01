import { View } from './view.js';
export class NegociacionesView extends View {
    template(model) {
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
            ${model.lista().map(e => {
            return `
                <tr>
                    <td>${this.formatearFecha(e.fecha)}</td>
                    <td>${e.cantidad}</td>
                    <td>${e.valor}</td>
                </tr>
                `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    formatearFecha(fecha) {
        return new Intl.DateTimeFormat().format(fecha);
    }
}
