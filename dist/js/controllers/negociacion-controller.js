import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from '../models/negociaciones.js';
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from '../views/mensaje-view.js';
import { diasSemana } from '../enums/dias-semana.js';
export class NegociacionController {
    constructor() {
        this.negociaciones = new Negociaciones();
        this.negociacionesView = new NegociacionesView('#negociacionesView');
        this.mensajeView = new MensajeView('#mensajeview');
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
        this.negociacionesView.update(this.negociaciones);
    }
    agrega() {
        const negociacion = Negociacion.crearNegociacion(this.inputFecha.value, this.inputCantidad.value, this.inputValor.value);
        if (!this.esDiaComercial(negociacion.fecha)) {
            this.mensajeView.update('Sólo son aceptadas las negociaciones, en días comerciales.');
            return;
        }
        this.negociaciones.agrega(negociacion);
        this.actualizaVistas();
        this.limpiaFormulario();
    }
    esDiaComercial(fecha) {
        return fecha.getDay() > diasSemana.DOMINGO
            && fecha.getDay() < diasSemana.SABADO;
    }
    limpiaFormulario() {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }
    actualizaVistas() {
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada exitosamente');
    }
}
