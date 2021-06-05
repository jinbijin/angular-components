import { startAngularDevServer } from '@jscutlery/cypress-angular';

module.exports = (on: any, config: any) => {
  on('dev-server:start', (options: any) =>
    startAngularDevServer({ options, tsConfig: 'tsconfig.cypress.json' })
  );
  return config;
};
