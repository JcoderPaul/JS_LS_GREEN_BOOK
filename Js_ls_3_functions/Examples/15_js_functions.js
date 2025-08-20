/* Простая функция сумматор */
function sum(a, b) {
        const c = a + b
        console.log(c)
}

/* Вариант применения - 1 */
sum(3, 5)
console.log("--------------------------------------------------")

/* Вариант применения - 2 */
let a = 5
let b = 7

sum(a, b)
console.log("--------------------------------------------------")

console.dir(sum)
/*
При вызове из консоли console.dir(sum) мы можем увидеть некий набор данных.

Функция это объект со своей структурой - sum(a, b):
        length: 2       // Количество параметров функции
        name: "sum"     // Имя функции
        prototype: {}
        arguments: null
        caller: null
        [[FunctionLocation]]: VM950:1
        [[Prototype]]: ƒ ()
        [[Scopes]]: Scopes[1]
*/