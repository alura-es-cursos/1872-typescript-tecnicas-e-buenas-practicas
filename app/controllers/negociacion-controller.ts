import { medirTiempoEjecucion } from "../decorators/medir-tiempo-ejecucion.js";
import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from '../models/negociaciones.js';
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from '../views/mensaje-view.js';
import { diasSemana } from '../enums/dias-semana.js';
import { inspector } from "../decorators/inspector.js";
import { domInjector } from "../decorators/dom-injector.js";

export class NegociacionController {
    @domInjector('#fecha')
    private inputFecha: HTMLInputElement;
    @domInjector('#cantidad')
    private inputCantidad: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociaciones = new Negociaciones();
    private negociacionesView = new NegociacionesView('#negociacionesView');
    private mensajeView = new MensajeView('#mensajeview');

    constructor() {
        this.negociacionesView.update(this.negociaciones);
    }

    @inspector
    @medirTiempoEjecucion()
    public agrega() : void {
        /*
            Equipo, recordar crear la negociación con métodos estáticos
        */
        const negociacion = Negociacion.crearNegociacion(this.inputFecha.value, 
                                                        this.inputCantidad.value,
                                                        this.inputValor.value);
        
        if (!this.esDiaComercial(negociacion.fecha)) {
            this.mensajeView.update('Sólo son aceptadas las negociaciones, en días comerciales.');
            return;
        }
        this.negociaciones.agrega(negociacion);
        this.actualizaVistas();
        this.limpiaFormulario();
    }

    private esDiaComercial(fecha: Date) : boolean {
        return fecha.getDay() > diasSemana.DOMINGO 
            && fecha.getDay() < diasSemana.SABADO;
    }

    
    private limpiaFormulario() : void {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }

    private actualizaVistas() : void {
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada exitosamente');
    }

    
}