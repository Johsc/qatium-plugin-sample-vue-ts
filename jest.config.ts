import type { Config } from 'jest';

const config: Config = {
    clearMocks: false,
    resetMocks: true,
    restoreMocks: false,
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons']
    },
    roots: ['<rootDir>/src/'],
    moduleFileExtensions: ['js', 'ts', 'vue'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '@qatium/sdk/(.*)$': '<rootDir>/node_modules/@qatium/sdk/build/$1',
        '@qatium/sdk': '<rootDir>/node_modules/@qatium/sdk/build'
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,ts}'],
    transformIgnorePatterns: ['/node_modules/']
};

export default config;
