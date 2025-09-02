/* 
Некий класс расширяет уже существующий прототип массива, для более
полного понимания происходящего см. JavaScriptInheritingFromArray.md
*/
class CustomArray extends Array {
        /* Тут будет использоваться конструктор Array, если мы его не переопределим в наследнике, т.е. тут */
  sum() {
        /* 
        Функция reduce проходит по массиву слева направо, применяя callback-функцию, и возвращает одно значение, 
        которое может быть любого типа (число, строка, объект, массив и т.д.). У нас стрелочная функция, не явно 
        возвращающая сумму всех элементов массива. В стандартном массиве функции sum нет, 
        см. DOC\ImportantToUnderstand\ReduceMethod.md
        */
    return this.reduce((acc, val) => acc + val, 0);
  }
}

const myCustomArr = new CustomArray(1, 2, 3, 5, 8);

console.log(myCustomArr.hasOwnProperty("sum")); // false - см. OwnPropertyFalse.md
console.log(myCustomArr.hasOwnProperty("length")); // true - см. OwnPropertyTrue.md
console.log("-------------------------------------------------------------")

if (!myCustomArr.hasOwnProperty("sum")){
        console.log(myCustomArr.sum()); // 19
} else {
        console.log("Has no property!")
}

if (myCustomArr.hasOwnProperty("length")){
        console.log("Use the parent method, res: " + myCustomArr.length); // 5 
}
