Вот несколько примеров использования Promises в JavaScript без применения стрелочных функций, с использованием обычных функций (`function`). Примеры демонстрируют создание и обработку Promises для асинхронных операций, таких как задержки с `setTimeout`.

---

### 1. **Базовый пример Promise**
```javascript
var myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Успех! Число: " + randomNumber);
        } else {
            reject("Ошибка! Число: " + randomNumber);
        }
    }, 1000);
});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });
```

- **Описание**: Promise создаётся с функцией-исполнителем, которая через 1 секунду генерирует случайное число. Если число больше 0.5, Promise завершается успешно (`resolve`), иначе — с ошибкой (`reject`). Обработка результата и ошибки выполняется обычными функциями в `.then` и `.catch`.

---

### 2. **Имитация асинхронной операции**
```javascript
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Завершено через " + ms + " мс");
        }, ms);
    });
}

delay(2000)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });
```

- **Описание**: Функция `delay` возвращает Promise, который завершается через указанное количество миллисекунд. Обработка результата выполняется обычной функцией в `.then`.

---

### 3. **Цепочка Promise**
```javascript
var processData = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(5);
    }, 1000);
});

processData
    .then(function(num) {
        console.log("Шаг 1: " + num);
        return num * 2;
    })
    .then(function(num) {
        console.log("Шаг 2: " + num);
        return num + 10;
    })
    .then(function(result) {
        console.log("Финал: " + result);
    })
    .catch(function(error) {
        console.error(error);
    });
```

- **Описание**: Promise возвращает начальное значение 5, затем в цепочке `.then` выполняются последовательные операции: умножение на 2 и прибавление 10. Каждая функция в `.then` возвращает значение для следующего шага.

---

### 4. **Promise с проверкой условия**
```javascript
function checkValue(value) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof value === "number") {
                resolve("Значение " + value + " - число!");
            } else {
                reject("Значение не является числом!");
            }
        }, 500);
    });
}

checkValue(42)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });

checkValue("текст")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    });
```

- **Описание**: Promise проверяет, является ли переданное значение числом. Если да — успешно завершается, если нет — отклоняется. Обработка результата и ошибки выполняется обычными функциями.

---

### 5. **Promise.all для параллельного выполнения**
```javascript
var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Задача 1");
    }, 1000);
});

var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Задача 2");
    }, 2000);
});

var promise3 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Задача 3");
    }, 500);
});

Promise.all([promise1, promise2, promise3])
    .then(function(results) {
        console.log("Все задачи выполнены: ", results);
    })
    .catch(function(error) {
        console.error("Ошибка: ", error);
    });
```

- **Описание**: `Promise.all` ждёт завершения всех трёх Promise, которые выполняются параллельно с разными задержками. Результаты собираются в массив и обрабатываются обычной функцией в `.then`.

---

### Заключение
Эти примеры показывают, как использовать Promises без стрелочных функций, применяя стандартный синтаксис `function`. Каждый пример включает:
- Создание Promise с функцией-исполнителем, использующей `resolve` и `reject`.
- Обработку результатов и ошибок через `.then`, `.catch` с обычными функциями.
- Различные сценарии: базовые операции, цепочки, проверку условий и параллельное выполнение.