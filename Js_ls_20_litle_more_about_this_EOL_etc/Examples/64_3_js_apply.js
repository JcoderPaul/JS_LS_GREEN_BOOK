'use strict'
/* Задаем 'руками', что будет выступать в качестве this - [мас, сив, ом] */

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

const car2 = {
        make: 'Lada',
        model: 'Phaeton',
        year: 2085,
        damages: [],
}

/* Выделяем метод объекта в отдельную функцию - присваиванием */
const addDamFun = car.addDamage;

/* 
А теперь вызовем выделенную функцию через APPLY на выбранном объекте car2 
('в контексте объекта') с заданными аргументами ('массивом') → 
*/
addDamFun.apply(car2, ['Закрылок передний', 23]); 
/*
и в консоли → 'У авто Lada Phaeton 2085 добавлено повреждение: Закрылок передний со степенью 23'
*/