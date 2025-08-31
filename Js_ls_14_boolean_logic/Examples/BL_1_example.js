function brLine(){
        console.log("_____________________________________________")
}

const isAdmin = true;
const canWrite = true;

console.log(`Я могу изменять системный файл: ${isAdmin && canWrite}`); // true
console.log(`Я могу изменять обычный файл: ${isAdmin || canWrite}`); // true
brLine();

/* '!true' это 'false' */
const notAdmin = !isAdmin; // false
const canNotWrite = !canWrite; // false

console.log(`Я админ? - ${!isAdmin}`);

console.log(`Я могу изменять системный файл: ${isAdmin && canNotWrite}`); // false
console.log(`Я могу изменять обычный файл: ${notAdmin || canWrite}`); // true
console.log(`Могу ли я изменять системные файлы: ${notAdmin || canNotWrite}`); // false
brLine();

let avr = 34;

console.log(avr === 23); // false
console.log(avr !== 23); // true


