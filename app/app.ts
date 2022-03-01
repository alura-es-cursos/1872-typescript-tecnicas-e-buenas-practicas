/*
import { Negociacion } from "./models/negociacion.js";
const negociacion = new Negociacion(new Date(),20,1000);
*/

import { NegociacionController } from "./controllers/negociacion-controller.js";
import { View } from "./views/view.js";

const negociacionController = new NegociacionController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit',event => {
        event.preventDefault();
        negociacionController.agrega();
    });
    
} else {
    throw Error("No fue posible inicializar la aplicación. Verifique el elemento form");
}

const btnImportar = document.querySelector('#btn_importar');

if (btnImportar) {
    btnImportar.addEventListener('click',event => {
        negociacionController.importaDatos();
    });
} else {
    throw Error("No se encontró el botón de importar");
}

