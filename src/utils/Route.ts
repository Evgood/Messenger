import Block from './Block';
import renderDOM from '../utils/service/renderDom';

class Route {

    private pathname: string;
    private blockClass: any;
    private block: Block;


    constructor(pathname: string, view: any) {
        this.pathname = pathname;
        this.blockClass = view;
    }


    public match(pathname: string): boolean {
        return pathname === this.pathname;
    }


    public navigate(pathname: string): void {
        if (this.match(pathname)) {
            this.render();
        }
    }


    public leave(): void {
        if (this.block) {
            this.block.hide();
        }
    }


    public render(): void {
        if (!this.block) {
            this.block = new this.blockClass();
            renderDOM('#root', this.block);
            return;
        }

        this.block.show();
    }
}

export default Route;