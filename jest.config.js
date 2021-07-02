module.exports = {
  // rootDir: path.join(__dirname, '/'),
  moduleFileExtensions: ['vue', 'js', 'ts'],
  // preset: 'babel-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest', // ts 文件用 ts-jest 转换
    '^.+\\.js$': 'babel-jest',
    // '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
    // '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  // setupFiles: ['<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    // '@/(.*)$': '<rootDir>/$1.js',
    // '^@(.*)$': '<rootDir>',
    '^comps(.*)$': '<rootDir>/src/components$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^plugins(.*)$': '<rootDir>/src/plugins$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^layouts(.*)$': '<rootDir>/src/layouts$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^stores(.*)$': '<rootDir>/src/stores$1',
    '^config(.*)$': '<rootDir>/config$1',
  },
}
