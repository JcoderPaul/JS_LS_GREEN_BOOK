/* 
Рекомендуется не "мутировать" - не изменять внешние объекты внутри функций.
Пример с простым объектом, без вложенных объектов 
*/

const userOne = {
        userName: "Paul",
        userAge: 449
}

function divideAge(user) {
        const newUser = {...user}       // Делаем копию "прилетевшего" в функцию объекта
        newUser.userAge /= 2    // Ох и синтаксис, более понятно будет: newUser.userAge = newUser.userAge / 2  
        return newUser
}

const userFromFun = divideAge(userOne)

console.log(userOne)    // Исходный объект остался неизменным
console.log("-------------------------------------------------")
console.log(userFromFun)        // Получаем объект из функции см. рез.
