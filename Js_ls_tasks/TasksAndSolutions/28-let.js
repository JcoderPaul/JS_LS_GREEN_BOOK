/** ЗАДАЧА 28 - Let
 *
 * Измените код так, чтобы ошибка исчезла
 */

/* 
Все переменые заданы как const, меняем на let или ссылаем 
переменные на объекты. Не могут объявляться две одноименные
переменные (тем более константы). 
*/
let myFavoriteAnimal = 'Monkey'; // <-- стало, было: const myFavoriteAnimal = 'Monkey';

console.log(myFavoriteAnimal); // 'Monkey'

myFavoriteAnimal = 'Cat'; // <-- стало, было: const myFavoriteAnimal = 'Cat';

console.log(myFavoriteAnimal); // 'Cat'
