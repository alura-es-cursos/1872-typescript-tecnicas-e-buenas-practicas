export function domInjector(selector:string) {
    return function(
        target:any,
        propertyKey:string
    ) {
        console.log(`Iniciando decorador de la propiedad ${propertyKey} con el elemento del DOM ${selector} `);
        let elementoInicial : HTMLElement;

        const getter = function() {
            if (!elementoInicial) {
                console.log(`Atribuyendo al elemento del DOM ${selector} con la propiedad ${propertyKey}`);
                elementoInicial = <HTMLElement>document.querySelector(selector);
            }
            return elementoInicial;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter}
        )
    }
}