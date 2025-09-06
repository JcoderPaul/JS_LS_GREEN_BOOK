'use strict'
/* Задаем 'руками', что будет выступать в качестве this, связывая объект и 'самостоятельную функцию' */

/* Создали объект */
const car = {
        make: 'KAMAZ',
        model: 'PARTIZAN',
        year: 2034,
        damages: [],
        tuning: [],
}

/* Создаем объект с набором методов */
const carManipulations = {
        addDamage(part, rate) {
                this.damages.push({part, rate});
                console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено повреждение`);
        },
        addImprovement(part){
                this.tuning.push({part});
                console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено улучшение`);
        }
}

/**
 * Задача - связать два объекта, наш конкретный 'car' и объект с набором функций 
 * 'carManipulations' для манипуляции объектом 'car'. При этом мы хотим использовать
 * методы: 'addDamage' и 'addImprovement' на нашем объекте 'car' не прямо сейчас, а 
 * когда то в будущем. 
 */

/* 
Выделяем переменные куда попадут функции от  
связывания 'car' и методов из 'carManipulations' 
*/
const canDamageCar = carManipulations.addDamage.bind(car);
const canTuningCar = carManipulations.addImprovement.bind(car);

/* Теперь вызовем связанные с 'car', через BIND, функции carManipulations */
canDamageCar('Компрессор', 6); // У авто KAMAZ PARTIZAN 2034 добавлено повреждение
canTuningCar('Автопилот'); // У авто KAMAZ PARTIZAN 2034 добавлено улучшение

console.log(car.damages.length); // 1
console.log(car.tuning.length); // 1

console.table(car);
/*
┌─────────┬─────────────────────────────────┬────────────┐
│ (index) │ 0                               │ Values     │
├─────────┼─────────────────────────────────┼────────────┤
│ make    │                                 │ 'KAMAZ'    │
│ model   │                                 │ 'PARTIZAN' │
│ year    │                                 │ 2034       │
│ damages │ { part: 'Компрессор', rate: 6 } │            │
│ tuning  │ { part: 'Автопилот' }           │            │
└─────────┴─────────────────────────────────┴────────────┘
*/

/* Фиксация одного аргумента */
const damageCarRoof = carManipulations.addDamage.bind(car, 'Крыша'); // Передаем что повредили
/* И тогда ↓ */
damageCarRoof(5); // Передаем только масштаб повреждений, раз ...
damageCarRoof(8); // А теперь, добьем бедную крышу! 
console.log(car.damages.length); // 3