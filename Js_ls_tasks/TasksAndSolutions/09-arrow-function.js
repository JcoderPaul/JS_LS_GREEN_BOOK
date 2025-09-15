import brLine from "./js_border_line.js";
/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 * 2. У функции не должно быть параметров
 * 3. Явно верните из функции строку "Привет, мир!"
 * 4. Вызовите функцию и выведите результат в консоль
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

const helloWorldStr = () => {
        return "Hello, world!" // Явный возврат
}

console.log(helloWorldStr());

brLine();

const helloWorldAnother = () => `Hello, world again!`; // Не явный возврат

console.log(helloWorldAnother());
