# Auto Fix Application

## About
This is an example project of autofix strategies using [Husky library](https://github.com/typicode/husky) and [Lint-Stage](https://github.com/okonet/lint-staged)

### Install and Config ESLint
- Run `yarn add eslint -D`
- Then: `yarn eslint --init`

  ✔ How would you like to use ESLint? · style

  ✔ What type of modules does your project use? · esm

  ✔ Which framework does your project use? · react

  ✔ Does your project use TypeScript? · No / Yes

  ✔ Where does your code run? · browser

  ✔ How would you like to define a style for your project? · guide

  ✔ Which style guide do you want to follow? · airbnb

  ✔ What format do you want your config file to be in? · JSON

  ✔ Would you like to install them now with npm? · No

- Finally, install all dependencies using yarn
```console
yarn add -D eslint-plugin-react@^7.21.5 eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
```

### Other Features
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Commit Lint](https://github.com/conventional-changelog/commitlint)

## Husky
- Doc [here](https://github.com/typicode/husky)!

- Instalation:
```console
# Install husky
yarn add husky -D

# Enable Git hooks
yarn husky install

# Init pre-commit
npx husky-init && yarn

# To add another hook
husky add <...>
# npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```
- Available hooks to use are the same of Git
  - https://git-scm.com/docs/githooks#_hooks
- Used Hooks
```js
"husky": {
  "hooks": {
    // Execute the lint-staged before every commit
    "pre-commit": "lint-staged"
  }
}
```

## Lint-Staged
- Doc [here](https://github.com/okonet/lint-staged)!
- Instalation: `yarn add lint-staged -D`
- Which files I want to monitore to be avilable to code pattern?
```js
"lint-staged": {
  // For all .jx files, run:
  "*.js": [
    "eslint --fix", // Fix do lint
    "cross-env CI=true yarn test --bail --findRelatedTests", // Modifed files tests with bail (all test must pass)
    "git add ."
  ]
}
```

---

## Let´s Talk 🤩
[LinkedIn](https://www.linkedin.com/in/roberto-morel-6b9065193/)
