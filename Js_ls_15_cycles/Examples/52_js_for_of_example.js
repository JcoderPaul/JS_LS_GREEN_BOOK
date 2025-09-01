/*
"итератор"

value — текущий элемент итерируемого объекта.
iterable — объект, поддерживающий протокол итерации (имеющий метод Symbol.iterator).

В отличие от for...in, который перебирает ключи, for...of даёт прямой доступ к значениям.
!!! НЕ ДЛЯ ОБЪЕКТОВ !!!
*/

/* Простая итерация элементов массива */
const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value); // 1, 2, 3
}
console.log("-----------------------------------------------")

/* Перебор элементов строки */
const str = "Hello";
for (let char of str) {
    console.log(char); // H, e, l, l, o
}
console.log("-----------------------------------------------")

/* Управление циклом */
const gameForArray = new Array();
const elements = 18;

for (let i = 0; i <= elements; i++){
     gameForArray[i] = i;
}
console.log(gameForArray);
console.log("-----------------------------------------------")

for (let value of gameForArray) {
    if (value % 2 !== 0) continue;
    console.log(value);
    if (value === 14) break;
}