class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log("Hola desde el constructor - Memoria");
    }

    connectedCallback() {
        console.log("Hola desde el DOM");
    }

    disconnectedCallback() {
        console.log("Adios del DOM");
    }

}
customElements.define('my-custom-element', MyCustomElement);

document.querySelector('my-custom-element').remove();
