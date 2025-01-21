module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2024, // 或根据需要设置为更高版本
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:taro/all',
    // 启用 Prettier 和禁用与其冲突的 ESLint 规则
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['react', 'taro', 'prettier', 'simple-import-sort'],
  rules: {
    // 将 Prettier 格式化问题标记为错误
    'prettier/prettier': 'error',
    // 根据项目需求自定义规则
    // Taro 不需要手动引入 React
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    react: {
      // 自动检测 React 版本
      version: 'detect',
    },
  },
};
