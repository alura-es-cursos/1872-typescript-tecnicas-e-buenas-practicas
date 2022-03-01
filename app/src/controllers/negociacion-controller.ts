import { medirTiempoEjecucion } from "../decorators/medir-tiempo-ejecucion.js";
import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from '../models/negociaciones.js';
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from '../views/mensaje-view.js';
import { diasSemana } from '../enums/dias-semana.js';
import { inspector } from "../decorators/inspector.js";
import { domInjector } from "../decorators/dom-injector.js";
import { NegociacionesService } from "../services/negociacionesService.js";
import { imprimir } from "../utils/imprimir.js";

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
    private negociacionesService = new NegociacionesService();

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
        const textoError = 'Este es un error';

        this.negociaciones.agrega(negociacion);
        imprimir(negociacion,this.negociaciones);
        //console.log(negociacion.paraTexto());
        //console.log(this.negociaciones.paraTexto());

        this.actualizaVistas();
        this.limpiaFormulario();
    }

    public importaDatos() {
        this.negociacionesService.obtenerNegociacionesAPI()
            .then((negociaciones) => {
                return negociaciones.filter((negociacionAPI)=> {
                    return !this.negociaciones
                                    .lista()
                                    .some((negociacion)=>negociacion.esIgual(negociacionAPI));
                });
            })
            .then((negociaciones)=> {
                for(let negociacion of negociaciones) {
                    this.negociaciones.agrega(negociacion)
                }
                this.negociacionesView.update(this.negociaciones);
                
            });
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