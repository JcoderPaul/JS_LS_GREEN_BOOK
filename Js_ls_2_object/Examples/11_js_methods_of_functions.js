/* Добавляем в объект некую функцию - первый вариант записи */
const myCity = {
        city: "Ufa",
        info: {
                state: "RB",
                status: "state capital",
                square: 708
        },
        /* Методы объекта - это свойства объекта, которые содержат функции */
        getAllInfoToConsole: function() {
                console.log(this.city)
                console.log(this.info)
        }
}

/* Обращаемся к функции */

myCity.getAllInfoToConsole() // Точечная запись и скобки в конце для вызова метода
console.log("------------------------------------------------------")

/* Добавляем в объект некую функцию - второй "сокрощенный" вариант записи */
const hisCity = {
        city: "Surjatan",
        info: {
                country: "Bantuly",
                status: "state capital",
                square: 342
        },
        /* 
        Методы объекта - это свойства объекта, которые содержат функции.
        Запись метода объекта без объявления ключа - все и сразу. 
        */
        getAllInfoToConsole() {
                console.log(this.city)
                console.log(this.info)
        }
}

/* 
Обращаемся к свойству объекта и выводим на консоль, т.е. обращение 
к свойству не содержащему функцию использовать скобки не нужно 
*/
console.log(hisCity.city) 

/* 
Показываем, что обращаемся к функции, интересно, то, что мы можем 
обратиться к свойству, но без указания ничего не произойдет, даже 
броска исключения 
*/
hisCity.getAllInfoToConsole()
console.log("------------------------------------------------------")

/* Получим просто описание функции */
console.log(hisCity.getAllInfoToConsole)