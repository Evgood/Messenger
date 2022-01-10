// import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Router from './Router';

describe('Router', () => {
    beforeEach(() => {
        (global as any).window = {};
    });

    it('should be sigletone', () => {
        const router = Router;

        expect(Router).to.eq(router);
    });
});