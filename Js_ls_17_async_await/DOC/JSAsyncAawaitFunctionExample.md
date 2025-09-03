Повторим, `async/await` — это синтаксический сахар в JavaScript для работы с Promises, который делает асинхронный код более читаемым и похожим на синхронный. В отличие от цепочек `.then`, `async/await` позволяет писать асинхронные операции последовательно, используя `try/catch` для обработки ошибок. 

Ниже приведены примеры использования `async/await`, для наглядности и автономного тестирования, без HTTP-запросов, с обычными функциями (без стрелочных) для лучшего понимания сути, с имитацией асинхронных операций, таких как задержки (`setTimeout`) и т.д.

---

### 1. **Простая асинхронная функция с задержкой**
```javascript
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Завершено через " + ms + " мс");
        }, ms);
    });
}

async function example() {
    try {
        var result = await delay(1000);
        console.log(result); // Завершено через 1000 мс
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

example();
```
- **Описание**: 
  - Функция `delay` возвращает Promise, который разрешается через указанное время. 
  - Помеченная как `async` функция `example` использует `await` для ожидания результата и обрабатывает возможные ошибки в блоке `try/catch`.

---

### 2. **Проверка условия с ошибкой**
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

async function testValue() {
    try {
        var result1 = await checkValue(42);
        console.log(result1); // Значение 42 - число!
        var result2 = await checkValue("текст");
        console.log(result2); // Не выполнится, так как произойдёт ошибка
    } catch (error) {
        console.error("Ошибка:", error); // Ошибка: Значение не является числом!
    }
}

testValue();
```
- **Описание**: 
  - Функция `checkValue` проверяет, является ли переданное значение числом, и возвращает Promise. 
  - Помеченная как `async` функция `testValue` последовательно вызывает `checkValue` с разными входными данными, обрабатывая ошибки через `try/catch`.

---

### 3. **Последовательное выполнение нескольких асинхронных операций**
```javascript
function step1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(5);
        }, 1000);
    });
}

function step2(value) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(value * 2);
        }, 1000);
    });
}

async function processSteps() {
    try {
        var result1 = await step1();
        console.log("Шаг 1:", result1); // Шаг 1: 5
        var result2 = await step2(result1);
        console.log("Шаг 2:", result2); // Шаг 2: 10
        var finalResult = result2 + 10;
        console.log("Финал:", finalResult); // Финал: 20
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

processSteps();
```
- **Описание**: 
  - Две функции (`step1` и `step2`) возвращают Promise с задержкой, имитируя последовательные асинхронные операции. 
  - Помеченная как `async` функция `processSteps` ожидает каждую операцию с помощью `await` и выполняет вычисления.

---

### 4. **Параллельное выполнение с `Promise.all`**
```javascript
function task1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Задача 1 завершена");
        }, 2000);
    });
}

function task2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Задача 2 завершена");
        }, 1000);
    });
}

function task3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("Задача 3 провалилась");
        }, 500);
    });
}

async function runTasks() {
    try {
        var results = await Promise.all([task1(), task2(), task3()]);
        console.log("Все результаты:", results);
    } catch (error) {
        console.error("Ошибка:", error); // Ошибка: Задача 3 провалилась
    }
}

runTasks();
```
- **Описание**: `Promise.all` используется для параллельного выполнения нескольких Promise. Если хотя бы один Promise отклоняется (как `task3`), выполнение переходит в блок `catch`. Без `Promise.all` пришлось бы ждать каждую задачу последовательно.

---

### 5. **Имитация асинхронной обработки массива**
```javascript
function processItem(item) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Обработан элемент: " + item);
        }, Math.random() * 1000);
    });
}

async function processArray(items) {
    try {
        for (var i = 0; i < items.length; i++) {
            var result = await processItem(items[i]);
            console.log(result);
        }
        console.log("Все элементы обработаны");
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

processArray([1, 2, 3]);
```
- **Описание**: 
  - Функция `processItem` имитирует асинхронную обработку элемента с случайной задержкой. 
  - Помеченная как `async` функция `processArray` последовательно обрабатывает массив, ожидая завершения каждой операции.

---

### 6. **Параллельная обработка массива с `Promise.all`**
```javascript
function processItem(item) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Обработан элемент: " + item);
        }, Math.random() * 1000);
    });
}

async function processArrayParallel(items) {
    try {
        var promises = items.map(function(item) {
            return processItem(item);
        });
        var results = await Promise.all(promises);
        console.log("Результаты:", results);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

processArrayParallel([1, 2, 3]);
```

- **Описание**: В отличие от предыдущего примера, здесь элементы массива обрабатываются параллельно с помощью `Promise.all`, что быстрее, чем последовательное ожидание.

---

### Best Practices для `async/await` без HTTP
1. **Всегда используйте `try/catch`**:
   - Обрабатывайте возможные ошибки в асинхронных операциях, чтобы избежать необработанных отклонений Promise.
   ```javascript
   async function example() {
       try {
           var result = await somePromise();
           console.log(result);
       } catch (error) {
           console.error("Ошибка:", error);
       }
   }
   ```

2. **Избегайте лишних `async/await`**:
   - Если функция не использует `await`, не делайте её `async`, чтобы избежать ненужного оборачивания в Promise.
   ```javascript
   // Плохо
   async function noAwait() {
       return 42;
   }

   // Хорошо
   function noAwait() {
       return 42;
   }
   ```

3. **Используйте `Promise.all` для параллельного выполнения**:
   - Если задачи независимы, выполняйте их параллельно с `Promise.all` вместо последовательного ожидания.

   ```javascript
   async function parallel() {
       var results = await Promise.all([task1(), task2()]);
       console.log(results);
   }
   ```

4. **Не смешивайте `.then` и `await`**:
   - Для единообразия используйте `async/await` вместо цепочек `.then`, если это возможно.

   ```javascript
   // Плохо
   async function mixed() {
       return somePromise().then(function(result) {
           return result + 1;
       });
   }

   // Хорошо
   async function clean() {
       var result = await somePromise();
       return result + 1;
   }
   ```

5. **Обрабатывайте возвращаемое значение**:
   - Помните, что `async` функции всегда возвращают Promise, даже если внутри возвращается обычное значение.

   ```javascript
   async function getValue() {
       return 42;
   }
   getValue().then(function(value) {
       console.log(value); // 42
   });
   ```

6. **Ограничивайте параллелизм при необходимости**:
   - Для большого числа задач используйте ограничение параллелизма, чтобы не перегружать систему. Например, можно разбить задачи на группы:

   ```javascript
   async function processInBatches(items, batchSize) {
       for (var i = 0; i < items.length; i += batchSize) {
           var batch = items.slice(i, i + batchSize);
           var promises = batch.map(function(item) {
               return processItem(item);
           });
           var results = await Promise.all(promises);
           console.log("Партия обработана:", results);
       }
   }

   processInBatches([1, 2, 3, 4, 5], 2);
   ```

---

### Заключение
Применение `async/await` упрощает работу с Promises, делая асинхронный код более читаемым и линейным. Примеры выше показывают, как использовать `async/await` для имитации асинхронных операций без HTTP-запросов, включая задержки, обработку условий, последовательное и параллельное выполнение. Следуя best practices, таким как использование `try/catch`, `Promise.all` для параллелизма и избегание лишних `async`, можно писать эффективный и надёжный код.