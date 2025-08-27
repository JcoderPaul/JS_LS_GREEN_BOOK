/* Перепишем функции в js_callback_function.js в 'стрелочном' виде. */

const power = pow => num => num**pow;

const powerOfTwo = power(2);

console.log(powerOfTwo(3)) // 9 ← 3^2 
console.log(powerOfTwo(10)) // 100 ← 10^2 

console.log("____________________________________________");

const powerOfThree = power(3);

console.log(powerOfThree(3)) // 27 ← 3^3 
console.log(powerOfThree(10)) // 1000 ← 10^3