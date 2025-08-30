/* Удаление пробелов с краев строки */
const userName = "  Malcolm Stone   ";

console.log(userName); //   Malcolm Stone - вывод в консоль явно со смещением
console.log(userName.trim()); // Malcolm Stone - 'срезали' краевые пробелы
console.log(userName.trimStart()); // Malcolm Stone - 'срезали' пробелы в начале строки
console.log(userName.trimEnd()); //    Malcolm Stone - вывод в консоль явно со смещением, 'срезали' пробелы в конце строки