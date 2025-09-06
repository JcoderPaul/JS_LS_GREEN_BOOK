'use strict'
/* Задаем 'руками', что будет выступать в качестве this - 'поштучно' */

/* Создали объект с методом */
const car = {
        make: 'AUDI',
        model: 'A3',
        year: 2021,
        damages: [],
        addDamage(part, rate) {
                console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено повреждение: ` +
                        `${part} со степенью ${rate}`
                );
                this.damages.push({
                        part, 
                        rate
                });
        }
}

/* Пока все нормально */

car.addDamage("Капот", 1); // У авто AUDI A3 2021 добавлено повреждение: Капот со степенью 1

const car2 = {
        make: 'Mazda',
        model: 'Q7',
        year: 2018,
        damages: [],
}

car2.addDamage = car.addDamage; // Придаем (присваиваем) новому объекту метод уже существующего 
console.table(car2); 
/* И видим:
┌───────────┬─────────┐
│ (index)   │ Values  │
├───────────┼─────────┤
│ make      │ 'Mazda' │
│ model     │ 'Q7'    │
│ year      │ 2018    │
│ damages   │         │
│ addDamage │         │
└───────────┴─────────┘

Теперь добавляем поврежление в car2:
*/

car2.addDamage("Богажник", 3); // У авто Mazda Q7 2018 добавлено повреждение: Богажник со степенью 3 

const car3 = {
        make: 'Lada',
        model: 'Phaeton',
        year: 2085,
        damages: [],
}

/* Выделяем метод объекта в отдельную функцию - присваиванием */
const addDamFun = car.addDamage;

/* 
А теперь вызовем выделенную функцию через CALL на выбранном объекте car3 
('в контексте объекта') с заданными аргументами ('через запятую') → 
*/
addDamFun.call(car3, 'Закрылок передний', 23); 
/*
и в консоли → 'У авто Lada Phaeton 2085 добавлено повреждение: Закрылок передний со степенью 23'
*/

/* !!! Spred от массива - тоже вариант !!! */
addDamFun.call(car3, ...['Впускная заслонка', 9]); 

console.log(car3.damages.length); // 2