import brLine from "./js_border_line.js";

/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 * 2. Какой приоритет и ассоциативность имеет оператор остаток от деления?
 * 3. Проверьте ассоциативность самостоятельно
 * 
 * см. док. ..\JS_LS\Js_ls_tasks\DOC\PriorityAndAssociativity\
 */

const myNumber1 = 10
const myNumber2 = 3

const result = myNumber1 % myNumber2; // 10 = (3 + 3 + 3) + 1 или 10 % 3 -> 9/3 + 1
console.log(result); // 1
brLine();

/* Проверим приоритет */
let a = myNumber1;
let b = myNumber2;

/* 
Если у знака '+' преоритет над '%' то ответ будет = 2,
если наоборот, ответ будет = 11. 

Cм. вывод в консоль:
*/
let res = a + a % b; 
console.log(res); // 11
brLine();

/* 
Если у знака '*' преоритет над '%' то ответ будет = 1,
если наоборот, ответ будет = 10. 

Cм. вывод в консоль:
*/
let res_two = a * a % b; 
console.log(res_two); // 1
brLine();

/* 
Проверим действительно ли знак '*' и '%' равны и левоассоциативнны.
Если да, то ответ будет = 0, если наоборот, ответ будет = 10. 

Cм. вывод в консоль:
*/
let res_three = a % a * b; 
console.log(res_three); // 0
let res_four = a % (a * b); 
console.log(res_four); // 10