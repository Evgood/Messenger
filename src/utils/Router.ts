import { Props } from '../types';
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


    public use(pathname: string, block: any, props: Props = {}): Router {
        const route = new Route(pathname, block, props);
        this.routes.push(route);

        return this;
    }


    public start(): void {
        window.addEventListener('popstate', event => {
            //@ts-ignore
            this.onRoute(event.currentTarget.location.pathname);
        });

        this.onRoute(window.location.pathname);
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


    private onRoute(pathname: string): void {
        let route = this.getRoute(pathname);

        if (this.currentRoute && this.currentRoute !== route) {
            this.currentRoute.leave();
        }

        this.currentRoute = route;
        route.render();
    }


    private getRoute(pathname: string): Route {
        return this.routes.find(route => route.match(pathname)) || this.getRoute('/404');
    }
}

export default Router;