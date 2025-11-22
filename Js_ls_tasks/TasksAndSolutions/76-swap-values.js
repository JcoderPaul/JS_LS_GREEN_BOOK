/** ЗАДАЧА 76 - Поменять местами значения двух переменных
 *
 * 1 - Поменяйте местами значения переменных "a" и "b".
 * 2 - Не используйте для этого какие-либо новые переменные.
 * 
 * См. материал (пункт 7): ..\JS_LS\Js_ls_11_destructuring\DOC\ArrayDestructuringOnJS.md
 */

let a = 'first'
let b = 'second'

console.log(a, b); // first second

[a, b] = [b, a]; // Применяется деструктуризация массива 

console.log(a, b); // second first
