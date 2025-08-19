### Глубокое копирование объектов в JavaScript

Глубокое копирование в JavaScript — это создание нового объекта, где все вложенные объекты также копируются, а не просто передаются по ссылке. Это важно, потому что при поверхностном копировании, если вы меняете свойство вложенного объекта в копии, это изменение отразится и в оригинальном объекте. Глубокое копирование позволяет избежать таких нежелательных побочных эффектов.

-----

### Примеры глубокого копирования

#### 1\. `JSON.parse(JSON.stringify(object))`

Это самый простой и часто используемый метод. Он сериализует объект в JSON-строку, а затем парсит её обратно в новый объект.

```javascript
const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

const deepCopy = JSON.parse(JSON.stringify(originalObject));

deepCopy.b.c = 99;
deepCopy.b.d.push(5);

console.log(originalObject.b.c); // 2
console.log(deepCopy.b.c); // 99

console.log(originalObject.b.d); // [3, 4]
console.log(deepCopy.b.d); // [3, 4, 5]
```

**Ограничения:**

  * Не работает с функциями, `undefined`, `Symbol` и `BigInt` — они будут потеряны.
  * Дата (`Date`) объекты станут строками.
  * Циклические ссылки вызовут ошибку.

-----

#### 2\. Рекурсивная функция

Вы можете написать свою собственную функцию для глубокого копирования, которая рекурсивно проходит по всем свойствам объекта.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}

const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

const deepCopy = deepClone(originalObject);

deepCopy.b.c = 99;
deepCopy.b.d.push(5);

console.log(originalObject.b.c); // 2
console.log(deepCopy.b.c); // 99
```

Этот метод более гибкий и позволяет обрабатывать специальные типы данных, такие как `Date` объекты, но он сложнее в реализации.

-----

#### 3\. Использование библиотек

Для сложных случаев и production-кода, лучше использовать проверенные библиотеки. Например, `lodash` имеет метод `_.cloneDeep()`.

```javascript
// Необходимо установить lodash: npm install lodash
import _ from 'lodash';

const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  },
  e: new Date()
};

const deepCopy = _.cloneDeep(originalObject);

deepCopy.b.c = 99;

console.log(originalObject.b.c); // 2
console.log(deepCopy.b.c); // 99
```

**Преимущества:**

  * Полная поддержка различных типов данных (включая `Date`, `RegExp`, `Map`, `Set`).
  * Обработка циклических ссылок.
  * Оптимизированная и протестированная реализация.

-----

### Best practice

1.  **Простой случай**: Если в объекте нет функций, `undefined` или циклических ссылок, используйте **`JSON.parse(JSON.stringify(object))`**. Это самый быстрый и простой способ.
2.  **Сложный случай**: Если объект содержит функции, `Date` или другие сложные типы, используйте **библиотеку** (`lodash.cloneDeep`) или напишите свою **рекурсивную функцию**.
3.  **Производительность**: При работе с очень большими объектами или в высокопроизводительных приложениях, стоит помнить, что `JSON` и рекурсивные методы могут быть медленнее, чем специализированные библиотеки.
4.  **`structuredClone()`**: В современных браузерах появился встроенный метод `structuredClone()`, который является идеальным решением для глубокого копирования и поддерживает большинство типов данных, включая `Date`, `Map`, `Set` и циклические ссылки.

<!-- end list -->

```javascript
const originalObject = {
  a: 1,
  b: {
    c: 2
  },
  d: new Date(),
  e: new Set([1, 2])
};

const deepCopy = structuredClone(originalObject);

deepCopy.b.c = 99;
deepCopy.e.add(3);

console.log(originalObject.b.c); // 2
console.log(deepCopy.b.c); // 99

console.log(originalObject.e); // Set { 1, 2 }
console.log(deepCopy.e); // Set { 1, 2, 3 }
```

Этот метод пока не поддерживается в старых браузерах и Node.js версий до 17.0.0, поэтому всегда проверяйте совместимость.