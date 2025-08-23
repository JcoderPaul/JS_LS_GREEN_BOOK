/* Обычная функция */
function multiplicationParam(value = 1, multiplier = 1) {
        return value * multiplier;
}

console.log(multiplicationParam()) // Применяются значения по умолчанию - 1
console.log(multiplicationParam(5)) // Применяются значения по умолчанию - 5
console.log(multiplicationParam(5, 10))

console.log("_____________________________________________________")

/* Ананимная функция */

const multiPulty = function (value = 1, multiplier = 1) {
        return value * multiplier;
}

console.log(multiPulty()) // Применяются значения по умолчанию - 1
console.log(multiPulty(5)) // Применяются значения по умолчанию - 5
console.log(multiPulty(5, 10))

console.log("_____________________________________________________")

/* Стрелочная функция - "лямбда" */

const pseudoLambda = (value = 1, multiplier = 1) => {
        return value * multiplier;
}

console.log(pseudoLambda()) // Применяются значения по умолчанию - 1
console.log(pseudoLambda(5)) // Применяются значения по умолчанию - 5
console.log(pseudoLambda(5, 10))

console.log("_____________________________________________________")