module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  moduleFileExtensions: [
    'js',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testRegex: '((\\.|/*.)(test))\\.js?$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules', '<rootDir>/src/index.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.js'],
}
