module.exports = {
	env: {
		es2021: true,
	},
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	extends: [
		'react-app',
		'react-app/jest',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@typescript-eslint/triple-slash-reference': 0,
		'prettier/prettier': 2,
	},
	ignorePatterns: ['node_modules', 'generated'],
};
