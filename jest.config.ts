/*
 * https://jestjs.io/docs/configuration
 */

export default {
	rootDir: 'src',
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		userAgent:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
	},
	moduleNameMapper: {
		'^lodash-es$': 'lodash',
		'^@/(.*)$': '<rootDir>/$1'
	}
}
