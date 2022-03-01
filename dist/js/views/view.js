export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`No existe ${selector} en el DOM. Por favor validar`);
        }
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
