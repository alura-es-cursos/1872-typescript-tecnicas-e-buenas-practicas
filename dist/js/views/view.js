"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var medir_tiempo_ejecucion_js_1 = require("../decorators/medir-tiempo-ejecucion.js");
var View = (function () {
    function View(selector, escapar) {
        this.escapar = false;
        var elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error("No existe " + selector + " en el DOM. Por favor validar");
        }
        if (escapar)
            this.escapar = escapar;
    }
    View.prototype.update = function (model) {
        var template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    };
    __decorate([
        (0, medir_tiempo_ejecucion_js_1.medirTiempoEjecucion)()
    ], View.prototype, "update", null);
    return View;
}());
exports.View = View;
