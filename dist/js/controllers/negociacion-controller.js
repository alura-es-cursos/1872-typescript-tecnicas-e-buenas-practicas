var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { medirTiempoEjecucion } from "../decorators/medir-tiempo-ejecucion.js";
import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from '../models/negociaciones.js';
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from '../views/mensaje-view.js';
import { diasSemana } from '../enums/dias-semana.js';
import { inspector } from "../decorators/inspector.js";
import { domInjector } from "../decorators/dom-injector.js";
export class NegociacionController {
    constructor() {
        this.negociaciones = new Negociaciones();
        this.negociacionesView = new NegociacionesView('#negociacionesView');
        this.mensajeView = new MensajeView('#mensajeview');
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
__decorate([
    domInjector('#fecha')
], NegociacionController.prototype, "inputFecha", void 0);
__decorate([
    domInjector('#cantidad')
], NegociacionController.prototype, "inputCantidad", void 0);
__decorate([
    domInjector('#valor')
], NegociacionController.prototype, "inputValor", void 0);
__decorate([
    inspector,
    medirTiempoEjecucion()
], NegociacionController.prototype, "agrega", null);
