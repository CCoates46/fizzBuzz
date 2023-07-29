import type { Config } from '@jest/types'

const baseDir =  '<rootDir>/fizzBuzz/fizzBuzz'
const baseTestDir =  '<rootDir>/fizzBuzz'


const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.js`
    ],
    testMatch: [
        `${baseTestDir}/**/*test.js`,
    ],
}

export default config;