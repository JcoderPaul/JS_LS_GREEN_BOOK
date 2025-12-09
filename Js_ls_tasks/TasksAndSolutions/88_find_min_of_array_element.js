/* Задача 88 - Дан массив целых чисел найти минимальное в нем используя .reduce() */

const operations = [120, -80, 30, -20, 320, -10];

const minElement = operations.reduce((accumulator, element) => {
        if (accumulator > element){
                return element;
        } else {
                return accumulator;
        }
}, 0);

console.log(minElement);