# REACT JS
#react install
*npx create-react-app . /(folder)

#Свойство propTypes пакет
*npm install --save-dev prop-types

#Пакет classnames
*npm install classnames

#Styled Components
*npm install styled-components@beta
*Документация Styled Components https://www.styled-components.com/

#Emotion
*npm i emotion
*Документация Emotion https://emotion.sh/docs/introduction 

#react-config:
*npm i --save-dev prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-react *eslint-plugin-import eslint-plugin-jsx-a11y husky lint-staged

#Документация Editorconfig https://editorconfig.org/.
*Этот файл добавит общие настройки редактора, такие как символы окончания строк.
*.editorconfig
-----------------------


#Документация Prettier https://prettier.io/docs/en/index.html
*Создает конфигурацию для Prettier.
*.prettierrc
-----------------------

#.lintstagedrc
*Создает конфигурацию для lint-staged.
*.lintstagedrc
-----------------------

#.huskyrc
*Добавляем конфиг для husky, чтобы при каждом коммите запускался линтинг файлов.
.huskyrc
-----------------------

#.gitattributes
*Если вы работаете в команде с разными ОС, в репозиторий необходимо добавить файл .gitattributes для того чтобы сказать git не конвертировать окончания строк в js файлах, они всегда будут lf.
*.gitattributes
-----------------------

#Настройки VSCode
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true
}
-----------------------

#Документация ESLint https://eslint.org/
*Создает конфигурацию для ESLint.
*.eslintrc
-----------------------

#Создание задач
*В файле package.json дополните поле scripts следующими задачами.
*lint - запускает линтинг файлов
*lint:fix - запускает исправление некоторых ошибок
*lint:format - запускает исправление стиля кода
-----------------------
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint:fix": "eslint src/**/*.js --fix",
  "lint:format": "prettier src/**/*.{js,css,json} --write"
  }
-----------------------