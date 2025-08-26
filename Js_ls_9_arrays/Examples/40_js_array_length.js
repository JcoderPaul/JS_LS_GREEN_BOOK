const myTestArray = [1, 3, 6];
console.log(myTestArray.length); // 3
console.log("--------------------------------------------");

myTestArray.push(13);
console.log(myTestArray.length); // 4
console.log(myTestArray);
console.log("--------------------------------------------");

let last = myTestArray.pop(); // Извлекает и удаляет последний элемент массива
let first = myTestArray.shift(); // Извлекает и удаляет первый элемент массива
console.log("Размер массива :" + myTestArray.length); // Размер массива :2
console.log(myTestArray);
console.log("--------------------------------------------");

console.log("Был первым элементом массива перед удалением: " + first);
console.log("Был последним элементом массива перед удалением: " + last);
console.log("--------------------------------------------");

/* Можно НО не рекомендуется! */
myTestArray.length = 6; // Руками расширяем размер массива - лучше так, не делать и позволить интерпретатору все делать самому

console.log(myTestArray); // [ 3, 6, <4 empty items> ]
console.log(myTestArray[5]); // undefined, т.е. ячейка заполненна неопределенным элементом