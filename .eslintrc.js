module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-console': 0,
    'no-console': ["error", { allow: ["log"] }],
    'no-debugger': 2,
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "max-len": [2, {
      "code": 100,
      "ignoreTrailingComments": true,
      "ignoreTemplateLiterals": true,
      "ignoreUrls": true,
      "comments": 150
    }],
    "object-shorthand": ["error", "properties"],
    "no-var": 2,
    "no-extra-semi": 2,
  }
}
