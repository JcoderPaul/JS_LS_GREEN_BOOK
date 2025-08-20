/* Ситуация при которой одна функция вызывает внутри себя другую функцию - CallBack */

function processData(data, callBackFun) {       // Предполагается, что мы знаем, как ведет себя прилетевшая функция
        const result = data.toUpperCase();
        callBackFun(result);
}

function printResult(text) {
        console.log("Результат: " + text);
}

function prnRes(data) {
        data = data.toLowerCase()
        console.log("Другая функция и результат: " + data + "!")
}

/* Во всех случаях у нас нет return - есть только вывод в консоль */
processData("привет", printResult); // Вывод: Результат: ПРИВЕТ
processData("привет", prnRes);  // Другая функция и результат: привет!