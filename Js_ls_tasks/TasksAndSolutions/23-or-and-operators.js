import brLine from "./js_border_line.js";

/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 * 
 * console.log(3 || (true && null) || false) // 3
 * 
 * начнем рассуждения:
 */



/* 1 - Шаг */
console.log("Step 1: " + !!null); // false
brLine();

/* 2 - Шаг */
console.log("Step 2: " + (true && null)); // null, т.к. null возвращает false, а (true && false) -> false 
brLine();

/* 3 - Шаг */
console.log("Step 3: " + !!3); // false, значит само число вернет - true или само себя
brLine();

/* 4 - Шаг */
console.log("Step 4: " + (true || false || false)); // true, т.к. у нас (3 || null || false), то получим число - 3, см.ниже
brLine();

/* 5 - Шаг ответ */
console.log("Step 5: " + (3 || (true && null) || false)); // 3
brLine();

