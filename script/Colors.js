class Colors {
    constructor(col = colors, component = "colors") {
        this.colors = col;
        this.component = component;
    }

    viewRender(root) {
        const rootElement = document.getElementById(root);

        const colorsElement = this.createOwnElement("div", this.component);
        this.colorsInput = this.createOwnElement("input", `${this.component}__input-hidden`);
        this.colorsInput.setAttribute("type", "text");

        colorsElement.appendChild(this.colorsInput);

        this.colors.forEach(color => {
            const div = this.createOwnElement("div", `${this.component}__item`);
            const span = this.createOwnElement("span", `${this.component}__number`);

            div.style.outlineColor = color;
            div.style.backgroundColor = color;

            span.textContent = color;

            div.addEventListener("click", event => this.copyColorValue(event));
            div.appendChild(span);
            colorsElement.appendChild(div);
        });

        rootElement.appendChild(colorsElement);

    }

    copyColorValue(event) {
        this.colorsInput.value = event.target.textContent;
        this.colorsInput.select();
        document.execCommand("copy");
    }

    createOwnElement(name, bemClass) {
        const elem = document.createElement(name);
        elem.classList.add(bemClass);
        return elem;
    }
}