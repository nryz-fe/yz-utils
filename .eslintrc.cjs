module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	// 添加插件（只是加载，拥有了使用它的能力，具体增加的规则需配合extends使用）
	plugins: ['react', '@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	// 共享设置，提供给每一个将被执行的规则
	settings: {
		// react版本问题
		react: {
			version: 'detect'
		}
	},
	rules: {
		// 0:'off'  1:'warn'  2:'error'
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/ban-types': 0,
		'prettier/prettier': 2,
		'no-console': 1,
		'no-unused-vars': 0, //定义了变量却没有在代码中使用
		'react/prop-types': ['off'],
		'react/jsx-key': ['off'],
		'react/react-in-jsx-scope': ['off'],
		semi: 0, // 缺少分号，行尾必须使用分号
		curly: 0, // if 后必须包含 { ，单行 if 除外
		'default-case': 2, // switch 语句必须包含 default
		'max-depth': [2, 5], // 最大块嵌套不能超过5层
		'max-params': [2, 8], // 函数的形参不能多于8个
		'new-cap': 2, // new关键字后类名应首字母大写
		'no-array-constructor': 2, // 禁止使用Array构造函数，定义数组直接用最快捷的方式[1, 2, 3]
		// "no-await-in-loop":2,// 禁止将await写在循环里,循环属于同步操作，不该将await异步操作写在内部
		'no-caller': 2, // 禁止使用arguments.caller和arguments.callee，ES6中废弃了
		'no-const-assign': 2, // 禁止对const定义重新赋值
		'no-delete-var': 2, // 禁止对变量使用delete关键字，delete只适用于对象的属性，提醒使用的范围
		'no-dupe-args': 2, // 函数参数禁止重名
		'no-empty-function': 0, // 禁止空的function,保证写的每一个function都有用
		'no-eval': 2, // 禁止使用eval
		'no-extra-semi': 2, // 禁止额外的分号，有些地方没必要加分号比如if () {};这样就是错误的
		'no-global-assign': 1, // 对全局变量赋值
		'array-bracket-spacing': 0, // 数组方括号前后的空格使用规则
		'array-bracket-newline': 0, // 数组方括号前后的换行符使用规则
		'accessor-pairs': 2, // 设置了 setter ，必须相应设置 getter ，反之不必须
		'array-callback-return': 2, // 数组的 map、filter、sort 等方法，回调函数必须有返回值
		'array-element-newline': 0, // 每个数组项是否独占一行
		'arrow-body-style': 0, // 箭头函数的书写规则
		'arrow-spacing': 0, // 箭头函数的空格使用规则
		'arrow-parens': 0, // 箭头函数的圆括号使用规则
		'block-scoped-var': 2, // 不能在块外使用块作用域内 var 定义的变量
		'block-spacing': 0, // 代码块花括号前后的空格规则
		'for-direction': 2, // for 循环不得因方向错误造成死循环
		'no-alert': 1, // 禁止 alert，
		'no-duplicate-imports': 2, // 禁止重复 import
		'no-empty-pattern': 2, // 禁止解构中出现空 {} 或 []
		'no-extend-native': [2, { exceptions: ['Array', 'Object'] }], // 禁止扩展原生对象
		'no-floating-decimal': 2, // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
		'no-implied-eval': 2, // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
		'no-mixed-spaces-and-tabs': 2, // 禁止混用空格和 tab 来做缩进，必须统一
		'no-multi-assign': 2, // 禁止连等赋值
		'no-multiple-empty-lines': [
			2,
			{
				// 连续空行的数量限制
				max: 3, // 文件内最多连续 3 个
				maxEOF: 1, // 文件末尾最多连续 1 个
				maxBOF: 1 // 文件头最多连续 1 个
			}
		],
		'no-nested-ternary': 2, // 禁止嵌套的三元表达式
		'no-octal': 2, // 禁止使用0开头的数字表示八进制
		'no-redeclare': 2, // 禁止重复声明
		'no-return-await': 2, // 禁止在 return 中使用 await
		'no-return-assign': 2, // 禁止在return中赋值
		'no-script-url': 2, // 禁止 location.href = 'javascript:void'
		'no-self-assign': 2, // 禁止将自己赋值给自己
		'no-shadow-restricted-names': 2, // 禁止使用保留字作为变量名
		'no-unreachable': 2, // 禁止出现不可到达的代码，如在 return、throw 之后的代码
		'no-useless-call': 2, // 禁止不必要的 call 和 apply
		'no-useless-computed-key': 2, // 禁止使用不必要计算的key，如 var a = { ['0']: 0 }
		'no-var': 2, // 禁止使用 var，必须用 let 或 const
		'no-whitespace-before-property': 2, // 禁止属性前出现空格，如 foo. bar()
		'no-with': 2, // 禁止 with
		'nonblock-statement-body-position': 2, // 禁止 if 语句在没有花括号的情况下换行
		'one-var': [
			2,
			{
				// 是否允许使用逗号一次声明多个变量
				const: 'never' // 所有 const 声明必须独占一行，不允许用逗号定义多个
			}
		],
		'symbol-description': 2, // 创建 Symbol 的时候必须传入描述
		yoda: 2 // 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)
	}
}
