export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const pathname = this.getPathname();
    console.log(pathname);

    const route = this.routes[pathname] || this.routes[404];
    if (!route) {
      console.error("Rota não encontrada:", pathname);
      return;
    }

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      })
      .catch((error) => {
        console.error("Erro ao carregar a página:", error);
      });
  }

  getPathname() {
    const path = window.location.pathname;
    return path.replace(/^(?:\/\/|[^/]+)*\//, "");
  }
}
