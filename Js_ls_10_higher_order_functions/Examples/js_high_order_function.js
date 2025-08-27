/* Стандартная функция */
a = 4;
b = 6;

function add(a, b){
        return a + b;
}

function subtrack(a, b){
        return a - b;
}

/* Функция высшего порядка - принимает функцию в качестве аргумента */
function calculate(a, b, calcFn){
        console.log(calcFn.name + ":");
        return calcFn(a, b);
}

console.log(`Переменные: a - ${a}, b - ${b}`);
console.log("_______________________________________");

const sum = calculate(4, 6, add);
console.log(sum);

console.log("_______________________________________");

const minus = calculate(4, 6, subtrack);
console.log(minus);