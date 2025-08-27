const myNumberArray = new Array(1, 3, 5);
console.log(myNumberArray); // [ 1, 3, 5 ]
console.log("-----------------------------------------------------------------")

/* Используем foreach с callback функцией увеличивающей каждый элемент в n */
const factor = 3; // Задаем множитель
let myNewArray = new Array(); // Новый пустой массив

/* Перебираем исходный массив, умножаем на factor и помещаем в новый массив */
let res = myNumberArray.forEach(element => myNewArray.push(element * factor));

console.log("ForEach work resault: " + res); // undefined - forEach ничего не возвращает,
console.log("Source array: " + myNumberArray); // и не меняет исходный массив [ 1, 3, 5 ]
console.log("New array (after multiplication): " + myNewArray); // [ 3, 9, 15 ]