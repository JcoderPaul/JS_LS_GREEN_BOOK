Вот несколько простых примеров использования Promises в JavaScript без HTTP-запросов:

---

1. **Базовый пример Promise**:
```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Успех! Число: ${randomNumber}`);
        } else {
            reject(`Ошибка! Число: ${randomNumber}`);
        }
    }, 1000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

---

2. **Имитация асинхронной операции**:
```javascript
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Завершено через ${ms} мс`), ms);
    });
}

delay(2000)
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

---

3. **Цепочка Promise**:
```javascript
const processData = new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
});

processData
    .then(num => {
        console.log(`Шаг 1: ${num}`);
        return num * 2;
    })
    .then(num => {
        console.log(`Шаг 2: ${num}`);
        return num + 10;
    })
    .then(result => console.log(`Финал: ${result}`))
    .catch(error => console.error(error));
```

---

4. **Promise с проверкой условия**:
```javascript
function checkValue(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === 'number') {
                resolve(`Значение ${value} - число!`);
            } else {
                reject('Значение не является числом!');
            }
        }, 500);
    });
}

checkValue(42)
    .then(result => console.log(result))
    .catch(error => console.error(error));

checkValue("текст")
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

---

5. **Promise.all для параллельного выполнения**:
```javascript
const promise1 = new Promise(resolve => setTimeout(() => resolve('Задача 1'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Задача 2'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Задача 3'), 500));

Promise.all([promise1, promise2, promise3])
    .then(results => console.log('Все задачи выполнены:', results))
    .catch(error => console.error('Ошибка:', error));
```

---

Эти примеры демонстрируют создание и использование Promise для асинхронных операций, таких как задержки с `setTimeout`, без необходимости HTTP-запросов. Promises позволяют управлять асинхронным кодом, обрабатывать успехи и ошибки, а также выполнять задачи последовательно или параллельно.