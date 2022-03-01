"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var negociacion_controller_js_1 = require("./controllers/negociacion-controller.js");
var negociacionController = new negociacion_controller_js_1.NegociacionController();
var form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        negociacionController.agrega();
    });
}
else {
    throw Error("No fue posible inicializar la aplicación. Verifique el elemento form");
}
