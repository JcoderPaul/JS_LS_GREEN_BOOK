/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]

/* Шаг 1 - создадим функцию */
function isElementInArray(searchElement, inputArray){
  
  /* Шаг 2 - Первая проверка - искомый элемент это не объект и не массив */
  if (typeof searchElement !== 'object'){
    return inputArray.includes(searchElement);
  }

  /* Шаг 3 - Преобразуем оба аргумента "в строки" и сравниваем их */
    /* Шаг 3.1 - Искомый аргумент в строку */
  const strSearchElement = JSON.stringify(searchElement);
    /* Шаг 3.2 - Обыскиваемый массив объектов/массивов -> в обыскиваемый массив строк */
  const arrayOfString = inputArray.map((elem) => JSON.stringify(elem));
    /* Шаг 3.3 - В обыскиваемом массиве строк ищем нужную строку, если есть */
  return arrayOfString.includes(strSearchElement);

  /* 
  Можно 'Шаг 3' сделать, короче в "одно действие" - через цепочку вызовов функций:
    
    return inputArray.map((elem) => JSON.stringify(elem))
                     .includes(JSON.stringify(searchElement));
  */
}

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true
