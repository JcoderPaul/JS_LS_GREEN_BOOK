import brLine from "./js_border_line.js";

/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * 1 - Создайте функцию "shortPerson", которая деструктуризирует объект и возвращает его короткую версию
 *     Пример результата: { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * 2 - Если входной объект не имеет поля postsQuantity, он должен получить значение по умолчанию 0
 * 
 * См. похожую задачу: ..\JS_LS\Js_ls_tasks\56-object-destructuring.js
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

/* ----- 1 - Решение ----- */
function shortPerson(person) {
  /* Есть сейчас 'name' должно стать 'n', есть 'postsQuantity' должно стать 'p' еще и с умолчанием '= 0' и т.д. */
  const {name: n, info: {country: c, age: a}, postsQuantity: p = 0} = person;
  return {n, c, a, p};
}

/* Тест: */
console.log(shortPerson(person1)) // { n: "Mike", c: "Spain", a: 23, p: 100 }
console.log(shortPerson(person2)) // { n: "Alice", c: "Italy", a: 25, p: 0 }
brLine();

/* ----- 2 - Решение (сокращенный, стрелочная функция) ----- */
const shortPrsn = ({name: n, info: {country: c, age: a}, postsQuantity: p = 0}) => ({n, c, a, p});

/* Тест: */
console.log(shortPrsn(person1)) // { n: "Mike", c: "Spain", a: 23, p: 100 }
console.log(shortPrsn(person2)) // { n: "Alice", c: "Italy", a: 25, p: 0 }
