import brLine from "./js_border_line.js";

/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 * 2. Выведите в консоль результирующий массив
 * 3. Выведите в консоль "postId" второго объекта
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

/* 1.Шаг - получаем массив "распарсеных" объектов из массива строк */
const postsOdjArray = postsJSON.map((post) => JSON.parse(post));

/* 2.Шаг - выводим массив объектов на экран */
console.log(postsOdjArray);
brLine();

/* 3.Шаг - выводим в консоль postId 2-го элемента (т.е. с индексом 1) */
console.log(postsOdjArray[1].postId);
brLine();

/* 4.Шаг - выводим в консоль commentsQuantity последнего элемента (т.е. с индексом length - 1) */
console.log(postsOdjArray[postsOdjArray.length - 1].commentsQuantity);
brLine();