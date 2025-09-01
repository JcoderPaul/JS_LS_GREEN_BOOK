/* Используйте для объектов: for...in предназначен для перебора свойств объектов */
const firstObj = { x: 1, y: 2 };

/* Итерируемся по свойствам объекта, у нас это key, далее указываем в каком объекте */
for (let key in firstObj) {
    console.log(key, firstObj[key]);
}
console.log("----------------------------------------------")

/* Используйте hasOwnProperty для исключения унаследованных свойств. */
const simpleParent = { inherited: true }
const secondObj = Object.create(simpleParent); // создаёт новый объект, используя в качестве прототипа другой объект.
secondObj.own = 1;

console.log("Heritor with no own param filter: ")
for (let key in secondObj) {
        console.log(key, secondObj[key]); // own 1
}
console.log("----------------------------------------------")
console.log("Heritor with filter: ")
for (let key in secondObj) {
    if (secondObj.hasOwnProperty(key)) {
        console.log(key, secondObj[key]); // own 1
    }
}
console.log("----------------------------------------------")

/* 
Для объектов используйте: Object.keys(), Object.values() или Object.entries(), 
с for...of. Данные методы объектов конвертируют свойства объекта в массив или
map-у - последный из приведенных.
*/
const thirdObj = { a: 1, b: 2 };
for (let key of Object.keys(thirdObj)) {
    console.log(key, thirdObj[key]); // a 1, b 2
}
console.log("----------------------------------------------")

/* Object.entries() - позволяет одновременно получить ключ и значение */
for (let [key, value] of Object.entries(thirdObj)) {
    console.log(key, value); // a 1, b 2
}
console.log("----------------------------------------------")

/* ForEach для объектов со стрелочной функцией (перебор по свойствам) */
Object.keys(thirdObj).forEach(key => {
    console.log("Param: " + key + ", val: " + thirdObj[key]);
});
console.log("----------------------------------------------")

/* Удаление или добавление свойств объекта во время перебора может привести к непредсказуемому поведению. */
const simpleObj = { a: 1, b: 2 };
for (let key in simpleObj) {
    delete simpleObj.b; // Плохо: изменение объекта во время перебора
    console.log(key);
}