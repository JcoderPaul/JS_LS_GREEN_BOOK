import brLine from "./js_border_line.js";
/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * 1 - Создайте функцию "mult", в которой будут умножаться значения свойств x, y, z переданного объекта
 * 2 - Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

/* ----- 1 - Вариант ----- */

/* 1. Шаг - Создаем функцию  */
function mult(numberObj) {
  
  /* 2. Шаг - Деструктуризируем объект  */
  const { x, y, z } = numberObj;
  
  /* 3. Шаг - Возвращаем результат  */
  return x * y * z;
}

const result = mult(objectWithNumbers);
console.log(result); // 300
brLine();

/* ----- 2 - Вариант еще короче, но не понятнее ----- */

function multTwo({ x, y, z }) {
  return x * y * z;
}

console.log(multTwo(objectWithNumbers)); // 300
brLine();

/* ----- 3 - Вариант совсем коротко ----- */

const multThree = ({ x, y, z }) => x * y * z;

console.log(multThree(objectWithNumbers)); // 300