const { expect } = require('chai');

const logger = require('@ekoot/shared/logger');

describe('Shared/Logger', () => {
    it('should be a string : error', async () => {
        expect(await logger.error('error')).to.not.be.null;
    });

    it('should be a string : warn', async () => {
        expect(await logger.warn('warn')).to.not.be.null;
    });

    it('should be a string : debug', async () => {
        expect(await logger.debug('debug')).to.not.be.null;
    });

    it('should be a string info', async () => {
        expect(await logger.info('info')).to.not.be.null;
    });

    it('should be a string success', async () => {
        expect(await logger.success('success')).to.not.be.null;
    });

    it('should be a string : log', async () => {
        expect(await logger.log('log')).to.not.be.null;
    });

    it('should be a string : Empty message ', async () => {
        expect(await logger.log()).to.not.be.null;
    });

    it('should be a string : Message in parameter is empty ', async () => {
        expect(await logger.log('')).to.not.be.null;
    });

    it('should be a string containing the object in Json format ', async () => {
        const obj = { foo: 'bar', baz: { nest: 'ed', oh: { dear: 'god' } } };

        expect(await logger.log(obj)).to.not.be.null;
    });
});
