import brLine from "./js_border_line.js";

/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 * 2. Добавьте в конец массива несколько новых элементов
 * 3. Выведите в консоль длину результирующего массива
 */


const myArr = new Array(3, 5, 15, 23);
console.log(myArr.length); // 4
brLine();

myArr.push(45); // добавляет элемент в конец массива
myArr.push(0);
myArr.push(423);

console.log(myArr.length); // 7
