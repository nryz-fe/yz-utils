module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 添加插件（只是加载，拥有了使用它的能力，具体增加的规则需配合extends使用）
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // 共享设置，提供给每一个将被执行的规则
  settings: {
    // react版本问题
    react: {
      version: "detect",
    },
  },
  rules: {
    // 0:'off'  1:'warn'  2:'error'
    "prettier/prettier": 2,
    "no-console": 1,
    "no-var": 2,
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": 0,
  },
};
