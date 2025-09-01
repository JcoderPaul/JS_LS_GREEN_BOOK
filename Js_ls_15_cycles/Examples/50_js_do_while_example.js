/* Обработка событий или состояний */
let tries = 0;
let rndGen;

do {
    tries++;
    rndGen = Math.random();
    console.log(`Попытка: ${tries}, сгенерировано: ${rndGen}}`);
} while (rndGen < 0.5 && tries < 5);
console.log("-------------------------------------------------")

/* Выполнение действия с последующей проверкой */
let sum = 0;

do {
    sum += Math.floor(Math.random() * 10);
    console.log("Текущая сумма: ", sum);
} while (sum < 20);