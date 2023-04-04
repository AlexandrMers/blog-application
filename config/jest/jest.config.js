module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],

  setupFilesAfterEnv: [
    '<rootDir>/config/jest/jest.setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
}
