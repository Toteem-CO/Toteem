import { expect } from 'chai';

import logger from '@toteem/shared/logger';

describe('Shared/Logger', () => {
  it('Should Print Message With Error Level', async () => {
    expect(await logger.error('error')).to.not.be.null;
  });

  it('Should Print MEssage With Warn Level', async () => {
    expect(await logger.warn('warn')).to.not.be.null;
  });

  it('Should Print Message With Info Level', async () => {
    expect(await logger.info('info')).to.not.be.null;
  });
});
