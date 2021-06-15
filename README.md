# Auto Fix Application

## About
THis is an example project of autofix strategies using [Husky library](https://github.com/typicode/husky) and [Lint-Stage]()

## Husky
- Doc [here](https://github.com/typicode/husky)

- Instalation: `yarn add husky -D`
- Available hooks to use are the same of Git
  - https://git-scm.com/docs/githooks#_hooks
- Used Hooks
```js
"husky": {
  "hooks": {
    // Execute before the commit
    "pre-commit": "echo 'teste'"
  }
}
```	