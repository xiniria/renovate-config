module.exports = {
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  env: {
    node: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
  ],
  rules: {
    semi: 'error',
  },
};
