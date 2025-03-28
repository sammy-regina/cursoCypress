export default [{
    rules: {
        camelcase: 'error',

        indent: ['error', 4, {
            SwitchCase: 1,
        }],

        'no-multiple-empty-lines': ['error', {
            max: 2,
            maxEOF: 0,
        }],

        'operator-assignment': ['error', 'always'],
        'space-infix-ops': 'error',
        'space-before-blocks': 'error',
        'space-in-parens': 'error',
        'keyword-spacing': 'error',

        'lines-around-comment': ['error', {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
        }],

        'spaced-comment': 'error',

        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 3,
        }],

        quotes: ['error', 'single'],
        'newline-after-var': 'error',
        'arrow-spacing': 'error',
    }
}];