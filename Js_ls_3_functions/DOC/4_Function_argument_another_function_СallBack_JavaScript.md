В JavaScript функцию можно передать как аргумент другой функции, что часто используется для реализации обратных вызовов 
(callbacks). 

Пример:

        function processData(data, callback) {
                const result = data.toUpperCase();
                callback(result);
        }

        function printResult(text) {
                console.log("Результат: " + text);
        }

        processData("привет", printResult); // Вывод: Результат: ПРИВЕТ

**Объяснение**:
- `processData` — функция, которая принимает строку `data` и функцию `callback` как аргументы.
- `processData` преобразует строку в верхний регистр и вызывает `callback`, передавая ей результат.
- `printResult` — функция, переданная как аргумент, которая выводит результат в консоль.
- Вызов: `processData("привет", printResult)`.

**Пример с анонимной функцией**:

        processData("привет", function(text) {
                console.log("Анонимный результат: " + text);
        }); // Вывод: Анонимный результат: ПРИВЕТ

Здесь анонимная функция передаётся напрямую в `processData` как аргумент.