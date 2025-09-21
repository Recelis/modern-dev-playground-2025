import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./routes";

@customElement("lit-index")
export class LitIndex extends LitElement {
  render() {
    return html` <div>
      <h1>Lit Index App</h1>
      <todo-routes></todo-routes>
    </div>`;
  }
}
