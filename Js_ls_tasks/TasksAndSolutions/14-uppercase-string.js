import brLine from "./js_border_line.js";

/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String - используйте для этого оператор "instanceof"
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 * 4. Создайте другую переменную и ее значением должно быть значение первой переменной заглавными буквами
 * 5. Выведите в консоль значение второй переменной
 */

const anyLine = "Hello, mad, mad, mad, mad world!"

if(!(anyLine instanceof String)){
        console.log("anyLine is not a String instance!")
}

if(typeof anyLine == "string"){
        console.log("anyLine is a string type!")
}

const upAnyLine = anyLine.toUpperCase();
brLine();

console.log(upAnyLine);