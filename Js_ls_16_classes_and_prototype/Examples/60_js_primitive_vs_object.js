const strPrimitive = 'hello'; // Примитив
const strObject = new String("bye"); // Объект

console.log(typeof strPrimitive); // "string"
console.log(typeof strObject); // "object"
console.log("------------------------------------------------------")

try {
        console.log("length" in strPrimitive);
} catch(ex){
        console.log("Строгие настройки");
        console.log(ex.message)
}
console.log("------------------------------------------------------")

try {
        console.log(strPrimitive.hasOwnProperty("length"));
} catch(ex) {
        console.log("Все еще строгие настройки");
        console.log(ex.message)
} finally {
        console.log("Ожидалась ошибка, но увы 'успели обернуть'")
        console.log("------------------------------------------------------")
}


if(strPrimitive.hasOwnProperty("length")){
        console.log("After autoboxing: " + strPrimitive.length); // 5 (автоупаковка, свойство length есть в String.prototype)
}

console.log(strObject.length); // 3 (свойство объекта)