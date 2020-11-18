module.exports = {
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  root: true,
  plugins: [
    'eslint-plugin-import',
  ],
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
  ],
  rules: {
    semi: 'error',
  },
};
