import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import clear from 'rollup-plugin-clear'
import dts from 'rollup-plugin-dts'

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				dir: 'lib',
				format: 'cjs',
				entryFileNames: '[name].cjs.js',
				sourcemap: false,
				plugins: [terser()],
				globals: {
					lodash: '_'
				}
			},
			{
				dir: 'lib',
				format: 'esm',
				entryFileNames: '[name].esm.js',
				sourcemap: false,
				plugins: [terser()],
				globals: {
					lodash: '_'
				}
			},
			{
				dir: 'lib',
				format: 'umd',
				entryFileNames: '[name].umd.js',
				name: 'nr_yz_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
				sourcemap: false,
				plugins: [terser()],
				globals: {
					lodash: '_'
				}
			}
		],
		plugins: [
			nodeResolve({
				moduleDirectories: ['node_modules']
			}),
			commonjs(),
			babel({ babelHelpers: 'bundled' }),
			typescript({ tsconfig: './tsconfig.json' }),
			clear({
				targets: ['lib'],
				watch: true // 实时监听文件变化
			})
		],
		external: ['lodash']
	},
	{
		input: 'src/index.ts',
		output: [
			{
				dir: 'lib/types',
				format: 'es',
				preserveModules: true
			}
		],
		plugins: [dts()]
	}
]
