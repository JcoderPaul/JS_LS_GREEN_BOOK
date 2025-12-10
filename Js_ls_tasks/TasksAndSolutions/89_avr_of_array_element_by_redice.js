/* Задача 89 - Найти среднее значение последовательности (всех элементов массива) чисел используя .reduce() */

const arr = [1, 4, 4, 10];

const avr = arr.reduce((acc, elem, i) => {
        if(i !== arr.length - 1){
                return acc + elem;
        } else {
                return (acc + elem) / arr.length;
        }
}, 0);

console.log(avr);