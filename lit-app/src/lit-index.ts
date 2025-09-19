import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-index")
export class LitIndex extends LitElement {
  render() {
    return html`<h1>Lit Index App</h1>`;
  }
}
