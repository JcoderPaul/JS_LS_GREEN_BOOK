/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировать все значения свойств, которые являются числами.
 * 2. Сумму чисел необходимо вернуть из функции.
 * 3. Убедитесь, что итерация выполняется только по собственным свойствам объекта.
 * 
 * Для более полного понимания см.:
 * - ..\JS_LS\Js_ls_14_classes_and_prototype\DOC\JavaScriptClasses.md
 * - ..\JS_LS\Js_ls_tasks\DOC\79_Task_Explanations\79_Task_extra_explanations.md
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

/* Решение: */
function sumObjectValues(toConvertNums) {
  let sum = 0;
  Object.keys(toConvertNums).forEach((key) => {
    if (typeof toConvertNums[key] === 'number') {
      sum += toConvertNums[key]; 
    }
  });
  return sum;
}


/* Тест: */
const result = sumObjectValues(objectWithNumbers);
console.log(result); //42
