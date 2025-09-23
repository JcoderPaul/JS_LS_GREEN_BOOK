import brLine from "./js_border_line.js";

/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 * 2. Выведите в консоль весь массив
 * 3. Замените второй элемент массива на другой
 * 4. Выведите в консоль измененный массив
 */

const diffElemArr = ["hello", 21, {id: 3, userName: "Sanara"}];
console.log(diffElemArr);
brLine();

diffElemArr[1] = true;
console.log(diffElemArr);
