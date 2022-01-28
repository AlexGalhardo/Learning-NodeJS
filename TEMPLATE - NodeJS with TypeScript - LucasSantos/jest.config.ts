import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/tests'
  ],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/.coverage',
  coverageProvider: 'v8',
  passWithNoTests: true,
  testMatch: [
    '**/*.{spec,test}.ts',
  ]
}
export default config
