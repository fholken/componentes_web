class myElement extends HTMLElement {

    //Constructor: Inicialización de la instancia del elemento.
    constructor() {
        super();
        
        this.p = document.createElement('p');
    }

    //Elemento añadido al DOM.
    connectedCallback() {
        this.p.textContent = 'Hello World!!';
        this.appendChild(this.p);
    }
}

customElements.define('my-element', myElement);