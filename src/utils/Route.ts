import Block from './Block';
import renderDOM from '../utils/services/renderDom';
import { Props } from '../types';

class Route {

    private pathname: string;
    private blockClass: any;
    private block: Block;
    private props: Props;


    constructor(pathname: string, view: any, props: Props) {
        this.pathname = pathname;
        this.blockClass = view;
        this.props = props;
    }


    public match(pathname: string): boolean {
        return pathname === this.pathname;
    }


    public leave(): void {
        if (this.block) {
            this.block.deleteElement();
        }
    }


    public render(): void {
        this.block = new this.blockClass(this.props);
        renderDOM('#root', this.block);
        return;
    }
}

export default Route;
