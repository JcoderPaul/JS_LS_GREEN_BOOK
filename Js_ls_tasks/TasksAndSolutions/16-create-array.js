/** ЗАДАЧА 16 - Создание массива
 *
 * 1. Создайте массив с тремя элементами разных типов
 * 2. Выведите в консоль первый элемент массива
 * 3. Выведите в консоль длину массива
 */

const varArr = new Array(1, "one", {id: 1, val: "one"});

console.log("Array position [0] is: " + varArr[0]);
console.log("Length of array: " + varArr.length);
