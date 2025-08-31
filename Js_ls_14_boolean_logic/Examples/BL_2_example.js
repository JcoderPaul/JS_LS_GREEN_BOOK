function brLine(){
        console.log("________________________________________");
}

/* Помним, что не пустая строка - true */

console.log("Malcolm" || "Duglas"); // "Malcolm" - true и он идет в консоль, при ИЛИ выбирается первый true элемент цепочки
console.log(false || "Duglas"); // "Duglas" теперь второй элемент true и он 'идет в консоль', как и в первом случае true - элемент идет 'в консоль'
console.log(false || "Duglas" || false); // "Duglas"
console.log("Malcolm" || "Duglas" || false); // "Malcolm"
brLine();

console.log("Malcolm" && "Duglas"); // "Duglas" - в данном случае оба возвращают 'true' и в консоль идет последний операнд
console.log(false && "Duglas"); // false - как только один из операндов false вся цепочка - false
console.log("Malcolm" && false); // false
brLine();

/* 'Возврат по умолчанию' */

let userName; // undefined и значит - false

const isAuth = userName || 'Sanara'; // первый false, второй true, см. выше
console.log(isAuth); // Sanara
brLine();

const isAdmin = true;
let getFileName = isAdmin && 'TheShawshankRedemption.mkv';
console.log(getFileName);
