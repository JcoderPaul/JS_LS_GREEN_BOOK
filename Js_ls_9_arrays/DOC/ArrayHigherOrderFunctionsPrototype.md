### Функции высшего порядка массивов в JavaScript

Функции высшего порядка в JavaScript — это функции, которые принимают другие функции в качестве аргументов или 
возвращают функции. Для массивов такие функции широко используются, так как многие методы массивов принимают 
callback-функции для обработки элементов. Основные методы массивов, которые являются функциями высшего порядка:

### 1. **`forEach(callback)`**
- **Описание**: Выполняет указанную функцию для каждого элемента массива. Не создаёт новый массив и не возвращает ничего (`undefined`).
- **Синтаксис**: `array.forEach((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3];
  arr.forEach(num => console.log(num * 2)); // 2, 4, 6
  ```

### 2. **`map(callback)`**
- **Описание**: Создаёт новый массив, применяя функцию к каждому элементу исходного массива.
- **Синтаксис**: `array.map((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3];
  let doubled = arr.map(num => num * 2); // [2, 4, 6]
  ```

### 3. **`filter(callback)`**
- **Описание**: Создаёт новый массив с элементами, для которых callback возвращает `true`.
- **Синтаксис**: `array.filter((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3, 4];
  let evens = arr.filter(num => num % 2 === 0); // [2, 4]
  ```

### 4. **`reduce(callback, initialValue)`**
- **Описание**: Сводит массив к одному значению, применяя функцию к каждому элементу (слева направо).
- **Синтаксис**: `array.reduce((accumulator, element, index, array) => {...}, initialValue)`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3, 4];
  let sum = arr.reduce((acc, num) => acc + num, 0); // 10
  ```

### 5. **`reduceRight(callback, initialValue)`**
- **Описание**: Аналог `reduce`, но работает справа налево.
- **Синтаксис**: `array.reduceRight((accumulator, element, index, array) => {...}, initialValue)`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3];
  let result = arr.reduceRight((acc, num) => acc + num, 0); // 6
  ```

### 6. **`find(callback)`**
- **Описание**: Возвращает первый элемент массива, для которого callback возвращает `true`, или `undefined`.
- **Синтаксис**: `array.find((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3, 4];
  let found = arr.find(num => num > 2); // 3
  ```

### 7. **`findIndex(callback)`**
- **Описание**: Возвращает индекс первого элемента, для которого callback возвращает `true`, или `-1`.
- **Синтаксис**: `array.findIndex((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3, 4];
  let index = arr.findIndex(num => num > 2); // 2
  ```

### 8. **`every(callback)`**
- **Описание**: Проверяет, возвращает ли callback `true` для **всех** элементов массива.
- **Синтаксис**: `array.every((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [2, 4, 6];
  let allEven = arr.every(num => num % 2 === 0); // true
  ```

### 9. **`some(callback)`**
- **Описание**: Проверяет, возвращает ли callback `true` хотя бы для **одного** элемента.
- **Синтаксис**: `array.some((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 3, 4];
  let hasEven = arr.some(num => num % 2 === 0); // true
  ```

### 10. **`flatMap(callback)`**
- **Описание**: Применяет функцию к каждому элементу и "разглаживает" результат в новый массив.
- **Синтаксис**: `array.flatMap((element, index, array) => {...})`
- **Пример**:
  ```javascript
  let arr = [1, 2, 3];
  let result = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6]
  ```

### 11. **`sort(compareFunction)`**
- **Описание**: Сортирует элементы массива, используя функцию сравнения. Изменяет исходный массив.
- **Синтаксис**: `array.sort((a, b) => {...})`
- **Пример**:
  ```javascript
  let arr = [3, 1, 2];
  arr.sort((a, b) => a - b); // [1, 2, 3]
  ```

### Примечания:
- **Callback-аргументы**: Большинство методов принимают callback с параметрами `(element, index, array)`, где:
  - `element` — текущий элемент,
  - `index` — индекс элемента,
  - `array` — исходный массив.
- **Неизменяемость**: `map`, `filter`, `flatMap`, `find`, `findIndex`, `every`, `some` создают новый массив или возвращают значение, не изменяя исходный массив. `forEach`, `sort`, `reduce`, `reduceRight` могут изменять массив (например, `sort` изменяет оригинал).
- **Гибкость**: Эти методы позволяют писать декларативный и функциональный код, упрощая обработку данных.