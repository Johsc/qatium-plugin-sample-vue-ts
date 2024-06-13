import type { Config } from 'jest';

const config: Config = {
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname'
    ],
    clearMocks: false,
    resetMocks: true,
    restoreMocks: false,
    verbose: true,
    moduleFileExtensions: ['js', 'ts', 'vue'],
    roots: ['<rootDir>/src/'],
    collectCoverageFrom: ['**/*.{js, ts}', '!**/*.d.ts'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,ts}'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons']
    },
    transform: {
        '\\.[jt]sx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json'
            }
        ],
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.css$': './config/jest/cssTransform.cjs',
        '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
            './config/jest/fileTransform.cjs'
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
        '^.+\\.module\\.(css|sass|scss)$'
    ],
    modulePaths: ['<rootDir>/src']
};

export default config;
