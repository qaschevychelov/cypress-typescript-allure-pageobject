# Шаблонный проект на Cypress

* показан пример использования Page Object Model
* добавлен отчет Allure

## Перед работой с Allure:
1. нужно скачать Allure CLI командой `brew install allure` (macOS)
2. далее прогоняем тесты `npm run test`
3. далее запускаем Allure командой `npm run allureServe`

## Параллельный запуск
* выполнить команду `npm run cy:run:parallel` - запустится 4 потока. Распараллеливание идет по spec файлам