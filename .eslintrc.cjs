/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    // 'no-undef': 'off',
    // 禁止 function 出现重名参数
    // "no-dupe-args": "warring",
    semi: [1],
    camelcase: 0,
    // 屏蔽文件名必须为驼峰
    "vue/multi-word-component-names": 0,
    // 允许ts的any
    "@typescript-eslint/no-explicit-any": ["off"],
    // 允许出现未使用的变量
    "no-unused-vars": 0,
  },
};
