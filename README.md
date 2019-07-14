# react create app
npx create-react-app . /(folder)

#Свойство propTypes
npm install --save-dev prop-types

#Пакет classnames
npm install classnames

#Styled Components
npm install styled-components@beta
Документация Styled Components https://www.styled-components.com/

#Emotion
npm i emotion
Документация Emotion https://emotion.sh/docs/introduction

#react-config:
npm i --save-dev prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y husky lint-staged

#Документация Editorconfig https://editorconfig.org/
Этот файл добавит общие настройки редактора, такие как символы окончания строк.
-----------------------
.editorconfig
-----------------------
root = true
[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
-----------------------

#Документация Prettier https://prettier.io/docs/en/index.html
Создает конфигурацию для Prettier.
-----------------------
.prettierrc
-----------------------
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}
-----------------------

#.lintstagedrc
Создает конфигурацию для lint-staged.
-----------------------
.lintstagedrc
-----------------------
{
  "linters": {
    "src/**/*.{json,css}": ["prettier --write", "git add"],
    "src/**/*.js": ["prettier --write", "eslint --fix", "git add"]
  }
}
-----------------------

#.huskyrc
Добавляем конфиг для husky, чтобы при каждом коммите запускался линтинг файлов.
-----------------------
.huskyrc
-----------------------
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
-----------------------

#.gitattributes
Если вы работаете в команде с разными ОС, в репозиторий необходимо добавить файл .gitattributes для того чтобы сказать git не конвертировать окончания строк в js файлах, они всегда будут lf.
-----------------------
.gitattributes
-----------------------
*.js text eol=lf
-----------------------

#Настройки VSCode
-----------------------
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true
}
-----------------------

#Документация ESLint https://eslint.org/
Создает конфигурацию для ESLint.
-----------------------
.eslintrc
-----------------------
{
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "plugins": ["react", "import", "prettier", "jsx-a11y"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-console": 1,
    "linebreak-style": ["error", "unix"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/no-onchange": 0,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/destructuring-assignment": [
      2,
      "always",
      { "ignoreClassFields": true }
    ]
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  }
}
-----------------------

#Создание задач
В файле package.json дополните поле scripts следующими задачами.
lint - запускает линтинг файлов
lint:fix - запускает исправление некоторых ошибок
lint:format - запускает исправление стиля кода
-----------------------
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint:fix": "eslint src/**/*.js --fix",
  "lint:format": "prettier src/**/*.{js,css,json} --write"
  }
-----------------------













