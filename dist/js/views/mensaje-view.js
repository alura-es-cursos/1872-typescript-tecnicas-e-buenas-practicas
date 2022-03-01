import { View } from "./view.js";
export class MensajeView extends View {
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
