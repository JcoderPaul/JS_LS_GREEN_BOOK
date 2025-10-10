import brLine from "./js_border_line.js";

/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

class Car {
        constructor(carBrand, price, isAvailableForSale){
                this._carBrand = carBrand;
                this._price = price;
                this._isAvailableForSale = isAvailableForSale;
        }
}

/* Передадим параметры через конструктор */
const tyCar = new Car("Toyota", 12400, true);
const mzdCar = new Car("Mazda", 8300, false);
const hndCar = new Car("Honda", 16400, true);

const myCarBase = [tyCar, mzdCar, hndCar];
console.log(myCarBase);

brLine();

myCarBase.push(new Car("Lada", 1300, true));
console.log(myCarBase);
