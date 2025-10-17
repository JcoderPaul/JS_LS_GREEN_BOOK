import brLine from "./js_border_line.js";

/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 * 3. Если поста с определенным ID в массиве постов нет, функция должна вернуть "undefined"
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

/* 1.Шаг - создаем метод */
function findPostById(enteredId, enteredPostsArray) {
  let foundPost; // Определяем возвращаемую переменную
  let toModifyArr = new Array(...enteredPostsArray); // Создаем новый массив с которым будем работать в данной функции

  foundPost = toModifyArr.find(post => post.postId === enteredId); // Ищим заданный элемент

  return foundPost; // Возвращаем его 
}

/* 2.Шаг - Тестируем требования задачи */
console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }
brLine();

console.log(findPostById(4511, posts)); // undefined
