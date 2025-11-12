/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

/*
Было:

function mult(a, b) {
  return a * b
}

setTimeout(function () {
  console.log(mult(5, 10))
}, 1000)

стало:
*/

const mult = (a, b) => a * b;

setTimeout(() => console.log(mult(5, 10)), 1000); // возвращает 50 через 1 сек.
