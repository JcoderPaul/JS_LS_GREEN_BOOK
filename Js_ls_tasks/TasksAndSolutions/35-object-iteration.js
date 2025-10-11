import brLine from "./js_border_line.js";

/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 * 2. Если имя свойства (ключ) равно "key1" или "key3", выведите значение свойства в консоль.
 * 
 * см. пояснения: ..\JS_LS\Js_ls_2_object\DOC\CheckObjectOwnElementsExample.md
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

/* ----- 1 - Вариант первый - через Object.keys ----- */

/* Object.keys возвращает массив строк, содержащий имена собственных перечисляемых свойств объекта. */
const keys = Object.keys(myObject);
console.log("Массив keys: " + keys);
brLine();

keys.forEach(key => {
  if (key === 'key1' || key === 'key3') {
    console.log(myObject[key]);
  }
});
brLine();

/* ----- 2 - Вариант второй - через Object.entries ----- */

/* Object.entries возвращает массив пар [key, value], дает одновременный доступ к ключам и значениям. */
const entr = Object.entries(myObject);
console.log("Map of entries: ");
console.log(entr);
brLine();

for (const [key, value] of entr) {
  if (key === 'key1' || key === 'key3') {
    console.log(value);
  }
};
brLine();

/* ----- 3 - Вариант второй - через "for...in" с проверкой на собственные свойства ----- */

/* "for...in" перебирает все перечисляемые свойства, но требует проверки на собственные свойства с помощью Object.hasOwn. */
for (const key in myObject) {
  if (Object.hasOwn(myObject, key) && (key === 'key1' || key === 'key3')) { // <-- нужны два "true && true"
    console.log(myObject[key]);
  }
}