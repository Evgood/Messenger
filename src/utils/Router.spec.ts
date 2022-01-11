import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Router from './Router';

class Block {
    getElement() {
        const div = document.createElement('div');
        div.setAttribute('data-test-id', 'testComponent');

        return div;
    }

    dispatchMountComponent() { }

    deleteElement() { }
}

const selectComponent = () => {
    return document.querySelector('[data-test-id="testComponent"]');
};

describe('Router', () => {
    beforeEach(() => {
        const dom = new JSDOM('<div id="root"></div>', {
            url: 'http://localhost:3000',
        });

        global.document = dom.window.document;
        (global as any).window = dom.window;
    });

    it('should be sigletone', () => {
        const router = Router;

        expect(Router).to.eq(router);
    });

    describe('.use', () => {
        it('should return Router instance', () => {
            const router = Router;
            const result = router.use('/', Block);

            expect(result).to.eq(router);
        });
    });

    describe('.start', () => {
        it('should render current page', () => {
            const router = Router;
            router.use('/', Block).start();

            expect(selectComponent()).not.to.be.null;
        });
    });

    describe('.go', () => {
        it('should render new component', () => {
            const router = Router;
            router.use('/test', Block).go('/test');

            expect(selectComponent()).not.to.be.null;
        });
    });
});
