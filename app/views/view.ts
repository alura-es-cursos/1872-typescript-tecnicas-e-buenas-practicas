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

    public update(model: T):void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'')
        }
        this.elemento.innerHTML = template;
    }
}