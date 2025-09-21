import { Routes } from "@lit-labs/router";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("todo-routes")
export class TodoRoutes extends LitElement {
  private _routes = new Routes(this, [
    { path: "/", render: () => html`<h1>Home</h1>` },
    { path: "/projects", render: () => html`<h1>Projects</h1>` },
    { path: "/about", render: () => html`<h1>About</h1>` },
    { path: "/*", render: () => html`<h1>Not Found</h1>` },
  ]);

  render() {
    console.log("Current path:", window.location.pathname);
    return html`
      <header>...</header>
      <main>${this._routes.outlet()}</main>
      <footer>...</footer>
    `;
  }
}
