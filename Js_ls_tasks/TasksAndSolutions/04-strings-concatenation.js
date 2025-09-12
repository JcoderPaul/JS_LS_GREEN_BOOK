/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = "Old";
const surName = "Boy";
let profession = "programmer";

function whoAmI(myName, surName, prof){
        return `My name is ${myName} ${surName} and i am a ` + prof;
}

let prnResConcat = whoAmI(myName, surName, profession);
console.log(prnResConcat);