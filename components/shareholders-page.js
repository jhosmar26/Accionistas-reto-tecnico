import {LitElement, html, css} from "lit";

class ShareholdersPage extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }
    `;

    static get properties() {
        return {
            shareholders: { type: Array }
        }
    }

    constructor() {
        super();
        this.shareholders = [];

        this.addEventListener('ApiData', (e) => {
            this._dataSaved(e.detail.data);
        })
    }

    _dataSaved(data) {
        this.shareholders = data
    }

    render() {
        return html`
            <div class="wrapper">
                <get-data url="http://localhost:3002/accionistas" method="GET"></get-data>
                <steps-section title="ACCIONISTAS" currentStep="2" totalSteps="3"></steps-section>
                <shareholders-list .shareholders=${this.shareholders}></shareholders-list>
                <infobox-component mainContent="Recuerda que si deseas actualizar la información de los accionistas deberás dirigirte a tu oficina o canal web."></infobox-component>
                <button-component></button-component>
                <shareholder-modal></shareholder-modal>
            </div>
        `;
    }
}

customElements.define('shareholders-page', ShareholdersPage);