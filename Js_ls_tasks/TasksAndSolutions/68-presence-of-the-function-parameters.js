/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась ошибка:
 * "Функция "square" не может быть вызвана без аргумента"
 */

/*
Было:

function square(a) {
  console.log(a * a)
}

стало:
*/

function square(a) {
  if (a === undefined) {
    throw new Error(`Функция "square" не может быть вызвана без аргумента`);
  } else {
    console.log(a * a);
  }
}

square(10) // 100

try{
  square(); // ДО: 'NaN' и ПОСЛЕ: 'Uncaught Error: Функция "square" не может быть вызвана без аргумента'
} catch (ex) {
  console.log(ex.message);
}
