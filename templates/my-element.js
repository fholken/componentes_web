class myElement extends HTMLElement {
    //Constructor: Inicialización de la instancia del elemento.
    constructor() {
        super();
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>My Element!!</h1>
                <div>
                    <p>Soy más texto ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            h1 {
                color: red;
            }
        </style>
        `;
    }

    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    //Elemento añadido al DOM.
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);