import {LitElement, html, css} from "lit";

class ShareholderOption extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }

        .wrapper {
            display: flex;
            gap: 20px;
        }

        .circle-letters {
            width: 65px;
            height: 65px;
            background: linear-gradient(114deg, rgba(75,165,226,1) 0%, rgba(75,165,226,1) 50%, rgba(48,140,209,1) 50%, rgba(48,140,209,1) 100%);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
        }

        .name {
            margin-top: 10px;
            color: rgb(75,165,226);
            font-weight: bold;
        }

        .id-number {
            font-style: italic;
            color: gray
        }

        .percentage {
            font-style: italic;
            color: green;
        }
        .has-shareholders{
            margin: 7px 0px;
            color: gray;
        }
    `;

    static get properties() {
        return {
            name: { type: String },
            idNum: { type: String },
            percentage:{ type: String },
            initials: { type: String },
            hasShareholders: { type: String }
        }
    }

    initialLetters() {
        const arrNames = this.name.split(" ");
        const twoNames = arrNames.slice(0, 2);
        this.initials = twoNames.map(name => name.charAt(0).toUpperCase());
    }

    firstUpdated() {
        this.initialLetters()
    }

    render() {
        return html`
            <div class="wrapper">
                <div class="circle-letters">${ this.initials }</div>
                <div class="right-wrapper">
                    <div class="name">${ this.name }</div>
                    <div class="id-number">C.C ${ this.idNum }</div>
                    ${ this.hasShareholders
                        ? html`<div class="has-shareholders">${this.hasShareholders} accionistas</div>`
                        : "" }
                    <div class="percentage">Participación: ${ this.percentage }</div>
                </div>
            </div>
        `;
    }
}

customElements.define('shareholder-option', ShareholderOption);