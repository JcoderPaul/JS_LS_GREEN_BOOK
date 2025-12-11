/**
 * Задача 90 - Написать функцию mySome.
 * 
 * Она должна возвращать true если элемент есть в массиве, и false если нет.
 */

const arr = [2 ,6, 8, 10, 23];

function mySome(array, elem){
        const res = array.find(e => e === elem);
        return res == undefined ? false : true;
}

console.log(mySome(arr, 8)); // true
console.log(mySome(arr, 28)); // false

/* В массивах есть реализация метода *.some() */

console.log(arr.some(e => e === 10)); // true
console.log(arr.some(e => e === 103)); // false