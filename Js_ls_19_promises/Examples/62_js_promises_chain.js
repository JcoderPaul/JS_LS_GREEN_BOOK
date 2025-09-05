function asyncOperation(value) {
    return new Promise(
        function(resolve, reject) {
                setTimeout(() => {
                        if (value > 0) {
                                resolve(value * 2);
                        } else {
                                reject("Значение должно быть положительным!");
            }
        }, 1000);
    });
}

const fullRes = asyncOperation(5)
    .then(result => {
        console.log("Результат через секунду: ", result); // Результат: 10
        return asyncOperation(result); // Вернем результат работы метода
    })
    .then(result => {
        console.log("Результат через 2-е сек.: ", result); // Следующий результат: 20
        return asyncOperation(result); // Вернем результат работы метода
    })
    .then(result => {
        console.log("Результат через 3-и сек.: ", result); // Следующий результат: 40
        // Забыли вернуть результат работы метода поэтому ->
    })
    .then(result => {
        console.log("Результат через 4-e сек.: ", result); // -> undefuned
        return asyncOperation(-15);
    })
    .catch(error => console.error("Ошибка:", error)) // Ошибка: Значение должно быть положительным!
    .finally(() => {
        console.log("Операция завершена"); // "Операция завершена" 
        console.log("---------------------------------------------------------");
});

console.log("---------------------------------------------------------");
setTimeout(() => console.log(fullRes), 900);
setTimeout(() => console.log(fullRes), 1900);
setTimeout(() => console.log(fullRes), 2900);
setTimeout(() => {
        console.log(fullRes);
        console.log("---------------------------------------------------------");
}, 4100);

/* Не забываем обрабатывать результаты работы промиса */
asyncOperation(-5)
        .then(result => {
                console.log("Результат через секунду: ", result);
        })
        .catch(error => console.error("Ошибка:", error)); // Ошибка: Значение должно быть положительным!