module.exports = {
  root: true,
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:prettier/recommended", // https://www.npmjs.com/package/eslint-plugin-prettier
    "plugin:functional/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", // https://github.com/typescript-eslint/typescript-eslint#readme
  parserOptions: {
    // https://www.npmjs.com/package/@typescript-eslint/parser
    project: [
      "tsconfig.json", // uncomment after move to project folder
    ],
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "node",
    "promise",
    "prettier",
    "functional",
  ],
  settings: {
    import: {
      // https://www.npmjs.com/package/eslint-plugin-import
      extensions: [".js"],
      parsers: {
        "@typescript-eslint/parser": [".ts"],
      },
      // ignore: '.(scss|less|css)$',
      // 'core-modules': [ 'node' ],
    },
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-undefined": "warn", // undefined can be overwritten or shadowed. null is a keyword that always produces the same value. https://eslint.org/docs/rules/no-undefined
    complexity: ["warn", { max: 10 }], // https://eslint.org/docs/rules/complexity
    "max-depth": ["error", 4], // https://eslint.org/docs/rules/max-depth
    "max-params": ["error", 5], // https://eslint.org/docs/rules/max-params
    "max-statements": ["error", 10], // https://eslint.org/docs/rules/max-statements
    "max-lines": [
      "error",
      { max: 400, skipBlankLines: true, skipComments: true },
    ], // https://eslint.org/docs/rules/max-lines
    "max-lines-per-function": [
      "error",
      { max: 50, skipBlankLines: true, skipComments: true },
    ], //https://eslint.org/docs/rules/max-lines-per-function

    "prettier/prettier": "warn",

    "@typescript-eslint/triple-slash-reference": "warn",
    "promise/catch-or-return": "warn",
    "promise/always-return": "warn",

    "functional/immutable-data": [
      "off",
      {
        assumeTypes: true,
        ignoreClass: "fieldsOnly",
        ignoreImmediateMutation: true,
      },
    ], // https://github.com/jonaskello/eslint-plugin-functional/blob/master/docs/rules/immutable-data.md
    "functional/no-expression-statement": "off",
    "functional/no-class": "off",
    "functional/no-this": "off",
    "functional/no-let": "off",
    "functional/no-this-expression": "off",
    "functional/prefer-readonly-type": "off",
    "functional/functional-parameters": "off",
    "functional/no-return-void": "off",
    "functional/no-conditional-statement": "off",
    "functional/no-throw-statement": "off",
    "functional/no-loop-statement": "off",
    "functional/no-mixed-type": "off",
    "functional/no-promise-reject": "off",
    "functional/no-try-statement": "off",
    "functional/no-method-signature": "warn",
    "functional/prefer-tacit": "off", // a = () => false
  },
};
