class myElement extends HTMLElement {
    //Constructor: Inicialización de la instancia del elemento.
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('title');
        this.text = this.getAttribute('text');
        this.img = this.getAttribute('img');
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>                
                <h1>${this.title}</h1>
                <div>
                    <p>${this.text}</p>
                    <img src="${this.img}" alt=""/>
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
            p {
                color: blue;
                background-color: yellow;
            }
        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    //Elemento añadido al DOM.
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);