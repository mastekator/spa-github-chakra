module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'google'
    ],
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true
    },
    ignorePatterns: [
        '.eslintrc.js',
        'node_modules',
        'src/graphql.ts',
        'src/migrations'
    ],
    'rules': {
        'max-len': [
            'error',
            120,
            4,
            {
                'ignoreTrailingComments': true,
                'ignoreComments': true,
                'code': 120,
                'ignoreUrls': true,
                'ignoreTemplateLiterals': true,
                'ignoreStrings': true,
                'ignoreRegExpLiterals': true
            }
        ],
        'camelcase': 'off',
        'new-cap': 'off',
        'semi': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'indent': 'off',
        'require-jsdoc': 'off',
        'operator-linebreak': 'off',
        'valid-jsdoc': 'off',
        'space-before-function-paren': 'off',
        'react/prop-types': 'off',
        'linebreak-style': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
}
