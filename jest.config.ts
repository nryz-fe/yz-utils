/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	// rootDir: 'src',
	// 在每次测试前自动清除模拟的上下文 (mock calls, instances, contexts and results)
	clearMocks: true,
	// 开启覆盖率 Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	// 生成的覆盖率文件的文件位置 The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',
	// 使用哪个提供程序来检测代码覆盖率 Indicates which provider should be used to instrument code for coverage
	coverageProvider: 'v8',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		userAgent:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
	},
	// transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)']
	moduleNameMapper: {
		'^lodash-es$': 'lodash'
	}
}
