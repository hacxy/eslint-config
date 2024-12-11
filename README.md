# @hacxy/eslint-config

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的 eslint 配置预设, 所有预设都遵循我的个人喜好: [rules](https://github.com/hacxy/eslint-config/tree/main/src/rules).

## 使用

在项目中安装:
``` sh
npm install @hacxy/eslint-config -D
```

项目根目录下创建 `eslint.config.js` 或者 `eslint.config.mjs`:
```js
import linter from '@hacxy/eslint-config';
export default linter({
  // ... your eslint config
});
```
直接从 `@hacxy/eslint-config` 中默认导出的方法为公共规则, 它不会开启任何框架的eslint规则, 在 [rules/common.ts](https://github.com/hacxy/eslint-config/blob/main/src/rules/common.ts) 中可以查看这些规则.

> [!TIP]
> **需要注意的是, 所有的预设都默认使用typescript规则校验, 如果你不使用typescript, 请覆盖默认配置:**
> ```js
> import linter from '@hacxy/eslint-config';
> export default linter({
>   typescript: false
>   // ... your eslint config
> });
> ```

### Vue rules

在vue项目中使用:

```js
import linter from '@hacxy/eslint-config/vue';
export default linter({
  // ... your eslint config
});
```
在 [rules/vue.ts](https://github.com/hacxy/eslint-config/blob/main/src/rules/common.ts) 中可以查看这些规则.

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT [Hacxy](https://github.com/hacxy)
