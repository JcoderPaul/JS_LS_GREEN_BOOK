import brLine from "./js_border_line.js";

/** ЗАДАЧА 72 - Копия массива
 *
 * 1 - Создайте копию массива.
 * 2 - При изменении копии массива оригинальный массив не должен изменяться.
 */

const a = [1, 2, 3]

/* 1 - Решение: */
const b = [...a];
b.push('newElement');

console.log(" ----- Sol - 1 ----- ");
console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3, "newElement"]
brLine();

/* 2 - Решение: */
const bTwo = Array.from(a);
bTwo.push('newElement');

console.log(" ----- Sol - 2 ----- ");
console.log(a); // [1, 2, 3]
console.log(bTwo); // [1, 2, 3, "newElement"]
brLine();

/* 3 - Решение: */
const bThree = new Array(...a);
bThree.push('newElement');

console.log(" ----- Sol - 3 ----- ");
console.log(a); // [1, 2, 3]
console.log(bThree); // [1, 2, 3, "newElement"]
brLine();

/* 4 - Решение "глубокая копия массива": */
const bFour = JSON.parse(JSON.stringify(a));
bFour.push('newElement');

console.log(" ----- Sol - 4 ----- ");
console.log(a); // [1, 2, 3]
console.log(bFour); // [1, 2, 3, "newElement"]
brLine();