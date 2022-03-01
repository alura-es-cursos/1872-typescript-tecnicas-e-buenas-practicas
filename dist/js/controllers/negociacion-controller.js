"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacionController = void 0;
var medir_tiempo_ejecucion_js_1 = require("../decorators/medir-tiempo-ejecucion.js");
var negociacion_js_1 = require("../models/negociacion.js");
var negociaciones_js_1 = require("../models/negociaciones.js");
var negociaciones_view_js_1 = require("../views/negociaciones-view.js");
var mensaje_view_js_1 = require("../views/mensaje-view.js");
var dias_semana_js_1 = require("../enums/dias-semana.js");
var NegociacionController = (function () {
    function NegociacionController() {
        this.negociaciones = new negociaciones_js_1.Negociaciones();
        this.negociacionesView = new negociaciones_view_js_1.NegociacionesView('#negociacionesView');
        this.mensajeView = new mensaje_view_js_1.MensajeView('#mensajeview');
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
        this.negociacionesView.update(this.negociaciones);
    }
    NegociacionController.prototype.agrega = function () {
        var negociacion = negociacion_js_1.Negociacion.crearNegociacion(this.inputFecha.value, this.inputCantidad.value, this.inputValor.value);
        if (!this.esDiaComercial(negociacion.fecha)) {
            this.mensajeView.update('Sólo son aceptadas las negociaciones, en días comerciales.');
            return;
        }
        this.negociaciones.agrega(negociacion);
        this.actualizaVistas();
        this.limpiaFormulario();
    };
    NegociacionController.prototype.esDiaComercial = function (fecha) {
        return fecha.getDay() > dias_semana_js_1.diasSemana.DOMINGO
            && fecha.getDay() < dias_semana_js_1.diasSemana.SABADO;
    };
    NegociacionController.prototype.limpiaFormulario = function () {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    };
    NegociacionController.prototype.actualizaVistas = function () {
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada exitosamente');
    };
    __decorate([
        (0, medir_tiempo_ejecucion_js_1.medirTiempoEjecucion)()
    ], NegociacionController.prototype, "agrega", null);
    return NegociacionController;
}());
exports.NegociacionController = NegociacionController;
