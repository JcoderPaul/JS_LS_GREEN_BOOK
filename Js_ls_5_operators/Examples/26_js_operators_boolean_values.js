/* Возвращаемые значения переменных */
console.log( Boolean()) // false

console.log( Boolean('')) // false

console.log( Boolean(undefined)) // false

console.log( Boolean(0)) // false

console.log( Boolean(false)) // как не странно тоже - false
console.log("-----------------------------------------")

/* Но... */

console.log( Boolean(" ")) // true

console.log( Boolean(10)) // true
