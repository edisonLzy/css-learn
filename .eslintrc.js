module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node":true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};