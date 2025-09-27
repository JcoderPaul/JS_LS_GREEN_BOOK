import brLine from "./js_border_line.js";

/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2". 
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 * 
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = '5';

/* 1 - Вариант с "глобальным кодом" сравнения */
if(myVariable1 <= parseInt(myVariable2)){
        console.log(true);
} else {
        console.log(false);
}

/* 2 - Вариант с выделением отдельного метода */
const compare = (first, second) => {
        let res;
        if (first <= second) {
                res = true;
        } else {
                res = false;
        }
        return res;
}
console.log(compare(myVariable1, parseInt(myVariable2)))
brLine();

myVariable1 = '20';
myVariable2 = 100;

console.log(compare(parseInt(myVariable1), myVariable2));
brLine();

/* 3 - Вариант "без заморочек" */
console.log(parseInt(myVariable1) <= myVariable2);
brLine();

/* 4 - Вариант тернарный оператор */
parseInt(myVariable1) <= myVariable2 ? console.log(true) : console.log(false);

