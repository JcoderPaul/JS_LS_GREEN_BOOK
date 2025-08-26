const myTestArray = [1, 3, 6, "Malcolm Stone", true];
console.log(myTestArray.length); // 5
console.log("--------------------------------------------");

/* Посмотрим на элементы без извлечения, мы ранее это делали - повторим */
console.log(myTestArray[2]); // 6
console.log(myTestArray[4]); // true
console.log(myTestArray); // [ 1, 3, 6, 'Malcolm Stone', true ]
console.log("--------------------------------------------");

/* Замена существующих элементов массива */

myTestArray[3] = "Sanarita Cuesta";
myTestArray[4] = -1;
console.log(myTestArray); // [ 1, 3, 6, 'Sanarita Cuesta', -1 ]
console.log(myTestArray.length); // 5
console.log("--------------------------------------------");

/* Добавление элемента по индексу */

myTestArray[6] = false;
console.log(myTestArray); // [ 1, 3, 6, 'Sanarita Cuesta', -1, <1 empty item>, false ]
console.log(myTestArray[5]); // конечно же - undefined
console.log(myTestArray.length); // 7
console.log("--------------------------------------------");