# @hacxy/eslint-config

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

基于 `[@antfu/eslint-config](https://github.com/antfu/eslint-config)` 的 eslint 配置预设, 所有预设都遵循我的个人喜好.

## 使用

在项目中安装:
``` sh
npm install @hacxy/eslint-config -D
```

项目根目录下创建 `eslint.config.js` 或者 `eslint.config.mjs`:
```js
import linter from '@hacxy/eslint-config';
export default linter();
```

