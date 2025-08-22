/* Оператор И - && */

if(true && false){} else {console.log(false)}   // false
if(true || false){console.log(true)}    // true

console.log("---------------------------------------------------------")

let a = 5 + 5   // true
let b = 0       // false

if(a || b) {console.log("Результат: " + a)} else {console.log(b)}
console.log("---------------------------------------------------------")

/* Или так ... */

console.log(a || b) // 10

console.log(true && false)      // false
console.log(a && b)      // 0
console.log("---------------------------------------------------------")

/* 'a' = 10 и это 'true', но console.log("Не true!") вернет 'undefined', а это 'false' и значит мы увидим - 'Не true!' */
a && console.log("Не true!") 
console.log("---------------------------------------------------------")

/* А вот тут мы ничего не увидим сразу, т.к. 'b' = 0 false и мы не вызываем функцию печати в консоль */
b && console.log("Не false!")   

/* Теоретически так можно управлять запуском функций */
