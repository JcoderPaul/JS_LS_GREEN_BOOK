/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 * 3. Также вызовите обе функции
 * 
 * См. полное разъяснения:
 * - ..\JS_LS\Js_ls_tasks\DOC\62_Task_Explanations\DifferenceBetweenFunctionDeclarations.md
 */

console.log("Вызываем firstFunction до объявления:", firstFunction(2, 3)); // Работает, выводит 5
try {
  console.log("Вызываем secondFunction до объявления:", secondFunction(2, 3)); // Ошибка
} catch (e) {
  console.log("Ошибка при вызове secondFunction:", e.message); // Cannot access 'secondFunction' before initialization
}

/* 
Объявленная с именем функция, доступна до 
объявления см. выше или вывод в консоль. 
*/
function firstFunction(a, b) {
  return a + b;
}

/* 
Анонимная функция (функциональное выражение), доступна 
как переменная только после объявления см. выше или 
вывод в консоль.
*/
const secondFunction = function (a, b) {
  return a + b;
}
