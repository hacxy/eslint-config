# @hacxy/eslint-config

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的 eslint 配置预设, 所有预设都遵循我的个人喜好: [rules](https://github.com/hacxy/eslint-config/tree/main/src/rules).

这将会使项目仅使用eslint的格式化能力, 而无需安装和配置 Prettier

## 先决条件

💡 eslint v9.5.0+

## 使用

### Vscode中使用

- 安装[VS Code ESLint 扩展](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- 将以下设置添加到您的`.vscode/settings.json`：

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

在项目中安装:

```sh
npm install @hacxy/eslint-config -D
```

项目根目录下创建 `eslint.config.js` 或者 `eslint.config.mjs`:

```js
import linter from '@hacxy/eslint-config';
export default linter({
  // ... your eslint config
});
```

### 将脚本加入到package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

从 `@hacxy/eslint-config` 中默认导出的方法为公共规则, 它不会开启任何框架的eslint规则, 在 [rules/common.ts](https://github.com/hacxy/eslint-config/blob/main/src/rules/common.ts) 中可以查看这些规则.

> [!TIP] > **需要注意的是, 所有的预设都默认使用typescript规则校验, 如果你不使用typescript, 请覆盖默认配置:**
>
> ```js
> import linter from '@hacxy/eslint-config';
> export default linter({
>   typescript: false
>   // ... your eslint config
> });
> ```

### Vue Rules

在vue项目中使用:

```js
import linter from '@hacxy/eslint-config/vue';
export default linter({
  // ... your eslint config
});
```

该规则在[公共配置](https://github.com/hacxy/eslint-config/blob/main/src/rules/common.ts)的基础上进行扩展, 你可以在 [rules/vue.ts](https://github.com/hacxy/eslint-config/blob/main/src/rules/vue.ts) 中可以查看这些规则.

### Nodejs Rules

在 `Nodejs` 项目中使用:

```js
import linter from '@hacxy/eslint-config/nodejs';
export default linter({
  // ... your eslint config
});
```

该规则在[公共配置](https://github.com/hacxy/eslint-config/blob/main/src/rules/common.ts)的基础上进行扩展, 你可以在 [rules/nodejs.ts](https://github.com/hacxy/eslint-config/blob/main/src/rules/nodejs.ts) 中可以查看这些规则.

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Hacxy](https://github.com/hacxy)
