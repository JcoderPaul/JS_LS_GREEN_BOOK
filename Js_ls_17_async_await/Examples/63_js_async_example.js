/* ----- Асинхронные функции ----- */

async function getValue(val) { // Всегда получаем promise из async
    return val;
}

/* И если нам нужен возвращаемый результат то используем .then .catch и .finally */
getValue(126)
        .then(function(value) {
                console.log(value); // 126
});

/* ----- Имитируем задержку ----- */
function delay(ms) {
        setTimeout(function() {
                return(console.log("Завершено через " + ms + " мс"));
        }, ms);
}

/* Возвращает всегда promise, хотя явное создание не происходит */
async function example(ms) {
        delay(ms);
}

console.log(example(3000)); // Promise { undefined }

/* ----- Пример использования await ----- */
function delayMs(ms) {
    return new Promise(function(resolve) { // Функция явно возвращает promise, некий resolve
        setTimeout(function() {
            resolve("Завершено через " + ms + " мс");
        }, ms);
    });
}

async function exampleTwo(delay) {
    try {
        var result = await delayMs(delay); // exampleTwo использует await для ожидания результата и только затем...
        console.log(result); // Завершено через "delay" мс
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

exampleTwo(4000);