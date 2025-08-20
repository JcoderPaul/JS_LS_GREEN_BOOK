/* Функция с возвратом значения */
function getSumm(a, b){
        return a + b    // Финальная операция после которой функция возвращает результат и прекращает работу
}

console.log(getSumm(3, 3)) // А счастье было так возможно... 
console.log("-------------------------------------------------------")

let c = getSumm(4, 4) // И так возможно...
console.log(c)
console.log("-------------------------------------------------------")

let one = 5
let two = 5

c = getSumm(one, two) // И так возможно...
console.log(c)
console.log("-------------------------------------------------------")

/* Функция с Undefined возвратом, т.е. без return */
function justSumm(a, b) {
        const c = a + b
}

console.log(justSumm(4, 6))     // undefined
console.log("-------------------------------------------------------")

/* Это тоже функция с Undefined возвратом, т.е. без return */
function justPrintSumm(a, b) {
        const c = a + b
        console.log(c)
}

const res = justPrintSumm(8, 10)        // выведет в консоль 18, но "не вернет результат"
console.log("-------------------------------------------------------")
console.log(res)     // undefined