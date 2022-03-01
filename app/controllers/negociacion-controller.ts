import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from '../models/negociaciones.js';
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from '../views/mensaje-view.js';
import { diasSemana } from '../enums/dias-semana.js';

export class NegociacionController {
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaciones = new Negociaciones();
    private negociacionesView = new NegociacionesView('#negociacionesView');
    private mensajeView = new MensajeView('#mensajeview');

    constructor() {
        this.inputFecha = <HTMLInputElement>document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacionesView.update(this.negociaciones);
    }

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