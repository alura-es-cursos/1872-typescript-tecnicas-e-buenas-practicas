export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Iniciando decorador de la propiedad ${propertyKey} con el elemento del DOM ${selector} `);
        let elementoInicial;
        const getter = function () {
            if (!elementoInicial) {
                console.log(`Atribuyendo al elemento del DOM ${selector} con la propiedad ${propertyKey}`);
                elementoInicial = document.querySelector(selector);
            }
            return elementoInicial;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
