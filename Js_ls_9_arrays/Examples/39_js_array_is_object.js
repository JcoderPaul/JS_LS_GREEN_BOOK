const myArrayOne = [1, true, "Malcolm Stone"]; // Первый вариант создания массива

const myArrayTwo = new Array(1, true, "Malcolm Stone"); // Второй вариант создания массива

/* Массив это объект объектов */
console.log(myArrayOne === myArrayTwo); // false, т.к. '===' объекты сравниваются по ссылке, не по содержанию (см. место в памяти)

const myArrayLinkOne = myArrayTwo;
const myArrayLinkTwo = myArrayLinkOne;

console.log(myArrayLinkTwo === myArrayTwo); // true, т.к. ссылаются на один и тот же объект в итоге