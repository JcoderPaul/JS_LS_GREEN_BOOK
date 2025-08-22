/* Оператор ! */

console.log(!10)        // Как ни странно - false, т.е. не true

console.log(!0)        // true, т.е. не false

console.log(!"str")        // false, т.е. не true

console.log(!"")        // true, т.е. не false

console.log(!true)        // false, т.е. не true

console.log(!undefined)        // true, т.е. не false
console.log("-----------------------------------------------------------------")

/* Оператор !! (двойное отрицание) или исходное значение */

console.log(!!10)        // true

console.log(!!0)        // false

console.log(!!"str")        // true

console.log(!!"")        // false

console.log(!!true)        // true

console.log(!!undefined)        // false
console.log("-----------------------------------------------------------------")

const user = {}

console.log(typeof user)        // object
console.log(Boolean(user))      // true

console.log("-----------------------------------------------------------------")

if(!!user){
        console.log("true")
}
