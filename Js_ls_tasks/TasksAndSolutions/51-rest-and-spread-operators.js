import brLine from "./js_border_line.js";

/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore", которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов, округленное 
 * до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом - выводим в консоль 
 * следующую ошибку: "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest", так и оператор "spread".
 * См. док. ..\JS_LS\Js_ls_tasks\DOC\RestAndSpredOperatorsOnJS\
 */

/* ----- Пояснения работы оператора ----- */
function testRestAndSpred(a, ...b){
  console.log(a);
  console.log(b);
}

testRestAndSpred(3, 5, 7, 2);
/*
3
[ 5, 7, 2 ]
*/
brLine();


/* ----- Решение задачи ----- */
const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ['abc', 1.3, true, 2.5, 1.9];
const scores5 = [];

function meanScore(...arr) {
  const forWorkArray = [...arr];
  if(!forWorkArray.every((element => typeof element === "number"))){
    return "Все аргументы в вызове функции должны быть числами!";
  }

  if (forWorkArray.length === 0){ 
    return "Массив пуст!";
  }  
  
  const sum = forWorkArray.reduce((accumulator, currentVal) => accumulator + currentVal, 0);

  /*
  Код ниже требует пояснений:
  - Метод toFixed(2): toFixed(n) применяется к числу и возвращает строку, представляющую число, округлённое до 'n'
    знаков после запятой. В текущем случае n = 2, поэтому результат округляется до двух знаков после запятой.
    Пример: (3.3333333333333335).toFixed(2) возвращает строку "3.33".
    
    Важно: toFixed всегда возвращает строку, а не число, даже если результат — целое число (например, 5.00 будет 
    строкой "5.00").

  - Обёртка Number(...): Number() преобразует строку, возвращённую toFixed(2), обратно в число (тип number). 
    Пример: Number("3.33") возвращает число 3.33. Это необходимо, так как функция meanScore должна возвращать 
    число, а не строку, для дальнейших вычислений или использования результата.
  */

  return Number((sum / forWorkArray.length).toFixed(2));

  /* 
  Однако можно еще короче:

    return forWorkArray.reduce((accumulator, currentVal) => accumulator + currentVal/forWorkArray.length, 0)
                       .toFixed(2);
                       
  */
}

console.log(meanScore(...scores1)); // 1.93

console.log(meanScore(...scores1, ...scores2)); // 2.8

console.log(meanScore(...scores1, ...scores2, ...scores3)); // 2.59

console.log(meanScore(...scores4)); // Все аргументы в вызове функции должны быть числами!

console.log(meanScore(...scores5)); // Массив пуст!
