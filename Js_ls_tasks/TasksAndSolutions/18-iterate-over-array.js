import brLine from "./js_border_line.js";

/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 * 2. Используя один из методов массивов, переберите все элементы и выведите каждый элемент в консоль
 */

const myArray = [3, 7, 1, 34, 63, 21];

/* 1 - Простой цикл for */

for(let i = 0; i < myArray.length; i++){
        console.log(myArray[i]);
}
brLine();

/* 2 - Цикл for ... of */

for (const j of myArray){
        console.log(j);
}
brLine();

/* 3 - Цикл forEach */

myArray.forEach((e)=> console.log(e));
brLine();

/* 4 - Цикл while */

let positionElem = 0;
while(positionElem < myArray.length){
        console.log(myArray[positionElem]);
        positionElem++ ;
}
brLine();

/* 5 - Цикл do ... while */

let posElem = 0;
do{
        console.log(myArray[posElem]);
        ++posElem ;
} while(posElem < myArray.length);