import brLine from "./js_border_line.js";

/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3];
const b = [1, 2, 3];
const g = ['ab', 'cd', 'ef'];
const k = ['ab', 'cd', 'ef'];

console.log(a == b); // false - объекты сравниваются по ссылке, а не по значению, даже с `==`.
console.log(a === b); // false см. выше, используте в большинстве случаев для строгого сравнения значений и типов. 
brLine();

const c = [2, 1, 3];
const d = [1, 2, 3, 4];
const l = ['ab', 1, true];
const m = ['ef', 'ab', 'cd'];

function areArraysEqual(firstArray, secondArray){
        let isEqual = false;
        let expectedLength = firstArray.length;

        if(expectedLength === secondArray.length) {
                return isEqual = firstArray.every((elem, index) => elem === secondArray[index] ? true : false);
        }

        return isEqual;
}

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
brLine();

console.log(areArraysEqual(g, k)) // true
console.log(areArraysEqual(k, l)) // false
console.log(areArraysEqual(k, m)) // false
