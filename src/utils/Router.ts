import Route from './Route';

class Router {

    public routes: Route[];
    public history: History;
    private currentRoute: Route | null;
    private static instance: Router | null;


    constructor() {
        if (Router.instance) {
            return Router.instance;
        }

        Router.instance = this;

        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
    }


    public use(pathname: string, block: any): Router {
        const route = new Route(pathname, block);
        this.routes.push(route);

        return this;
    }


    public start(): void {
        window.addEventListener('popstate', (event => {
            console.log(event);
            // this.onRoute(event.currentTarget.location.pathname);
        }));

        // window.onpopstate = (event => {
        //     this.onRoute(event.currentTarget.location.pathname);
        // }).bind(this);

        this.onRoute(window.location.pathname);
    }


    private onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) return;

        if (this.currentRoute && this.currentRoute !== route) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render();
    }


    public go(pathname: string): void {
        this.history.pushState({}, '', pathname);
        this.onRoute(pathname);
    }


    public back(): void {
        this.history.back();
    }


    public forward(): void {
        this.history.forward();
    }


    private getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}


export default Router;