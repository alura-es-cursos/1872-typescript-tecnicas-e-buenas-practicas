import { medirTiempoEjecucion } from "../decorators/medir-tiempo-ejecucion.js";

export abstract class View<T> {
    protected elemento:HTMLElement;
    private escapar = false;

    constructor(selector:string, escapar? : boolean) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`No existe ${selector} en el DOM. Por favor validar`);
        }

        if (escapar)
            this.escapar = escapar;
    }

    protected abstract template(model: T):string;

    @medirTiempoEjecucion()
    public update(model: T):void {
        //const t1 = performance.now();
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'')
        }
        this.elemento.innerHTML = template;
        //const t2 = performance.now();
        //console.log(`Tiempo de ejecución del método update: ${(t2-t1)/1000} segundos`)
    }
}