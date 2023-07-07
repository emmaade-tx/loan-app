export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(scss|sass)$': 'identity-obj-proxy',
      '\\.svg$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.css$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  