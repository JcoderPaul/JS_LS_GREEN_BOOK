import brLine from "./js_border_line.js";

/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

/* 1 - Simple solution */
const objWithThreeProp = {
        userName: "Duglas",
        userSurname: "Lind",
        favoriteNumber: 318
}
console.log(`My name is ${objWithThreeProp.userName} ${objWithThreeProp.userSurname} and my favorite number is ${objWithThreeProp.favoriteNumber}`);
brLine();

/* 2 - Object with function */
const newObjWithFun = {
        userName: "Malcolm",
        userSurname: "Stone",
        favoriteNumber: 524,
        prnHi: function() {
                return `My name is ${this.userName} ${this.userSurname} and my favorite number is ${this.favoriteNumber}`;
        }
}
console.log(newObjWithFun.prnHi());