import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { defaults as jestNgPreset } from 'jest-preset-angular/presets';

const config: InitialOptionsTsJest = {
  ...jestNgPreset,
};

if (config.globals) {
  config.globals['ts-jest'].tsconfig = '<rootDir>/projects/angular-aspects/tsconfig.spec.json';
}
config.setupFilesAfterEnv = ['<rootDir>/jest.setup.ts'];

export default config;
