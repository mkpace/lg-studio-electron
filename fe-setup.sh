#!/bin/bash

#yarn add --save-dev prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier

npx create-next-app@14.2.3

# create .prettierrc file
printf '{\r\t"semi": true,\r\t"trailingComma": "all",\r\t"singleQuote": true,\r\t"printWidth": 100\r}' > .prettierrc

# create .eslintrc file
printf '{\r\t"extends": ["next/core-web-vitals", "eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],\r\t"plugins": ["react"],\r\t"parser": "@typescript-eslint/parser",\r\t"rules": {\r\t\t"semi": ["error", "always"],\r\t\t"quotes": ["error", "single"],\r\t\t"no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],\r\t\t"@typescript-eslint/explicit-function-return-type": "off"\r\t}\r}' > .eslintrc.json

mkdir .vscode

touch ./vscode/extentions.json

printf '{\r\t"recommendations": [\r\t\t"dbaeumer.vscode-eslint",\r\t\t"esbenp.prettier-vscode"\r\t]\r}' > .vscode/extensions.json

