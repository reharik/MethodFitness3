module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@typescript-eslint/triple-slash-reference': 0,
		'prettier/prettier': 2,
	},
	ignorePatterns: ['generated'],
};
