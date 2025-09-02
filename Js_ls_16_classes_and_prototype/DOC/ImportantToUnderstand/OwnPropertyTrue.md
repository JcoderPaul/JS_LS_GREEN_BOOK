### Почему в примере - myCustomArr.hasOwnProperty("length") возвращает true

В примере кода:

```javascript
class CustomArray extends Array {
  sum() {
    return this.reduce((acc, val) => acc + val, 0);
  }
}

const myCustomArr = new CustomArray(1, 2, 3, 5, 8);
console.log(myCustomArr.hasOwnProperty("length")); // true
```

### `hasOwnProperty("length")` возвращает `true`

Метод `hasOwnProperty` возвращает `true`, если указанное свойство является **собственным** (own property) для объекта, то есть определено непосредственно в самом объекте, а не унаследовано из его цепочки прототипов. Давай разберёмся, почему это так для свойства `length` в случае `myCustomArr`.

1. **Что такое `length` в массивах?**
   - Свойство `length` — это **собственное свойство** каждого экземпляра массива в JavaScript. Оно хранит количество элементов в массиве и автоматически обновляется при добавлении или удалении элементов (например, через `push`, `pop`, или прямое присваивание).
   - В случае `myCustomArr`, которое создано как `new CustomArray(1, 2, 3, 5, 8)`, массив содержит 5 элементов, и свойство `length` равно `5`. Это свойство принадлежит непосредственно объекту `myCustomArr`, а не его прототипу.

2. **Почему `length` — собственное свойство?**
   - Когда создаётся экземпляр массива (включая экземпляры классов, унаследованных от `Array`, как `CustomArray`), JavaScript выделяет для него собственное свойство `length`. Это происходит автоматически в конструкторе `Array`, который вызывается через наследование (`CustomArray` использует конструктор `Array`).
   - Проверить это можно так:
     ```javascript
     console.log(myCustomArr.length); // 5
     console.log(myCustomArr.hasOwnProperty("length")); // true
     ```
   - Свойство `length` создаётся в самом объекте `myCustomArr`, а не в `CustomArray.prototype` или `Array.prototype`.

3. **Сравнение с `sum`**
   - В отличие от метода `sum`, который определён в `CustomArray.prototype` (и поэтому не является собственным свойством `myCustomArr`, как обсуждалось ранее), свойство `length` принадлежит непосредственно экземпляру `myCustomArr`.
   - Проверка прототипа:
     ```javascript
     console.log(CustomArray.prototype.hasOwnProperty("length")); // false
     console.log(Array.prototype.hasOwnProperty("length")); // false
     ```
     Это подтверждает, что `length` **не находится** в цепочке прототипов (`CustomArray.prototype` или `Array.prototype`). Оно создаётся для каждого экземпляра массива отдельно.

4. **Как работает наследование от `Array`?**
   - Поскольку `CustomArray` наследует от `Array`, экземпляры `CustomArray` (как `myCustomArr`) создаются с использованием конструктора `Array`. Этот конструктор инициализирует массив с элементами `[1, 2, 3, 5, 8]` и добавляет собственное свойство `length` (равное `5`).
   - Кроме того, элементы массива (`0: 1`, `1: 2`, `2: 3`, `3: 5`, `4: 8`) также являются собственными свойствами объекта `myCustomArr`. Например:
     ```javascript
     console.log(myCustomArr.hasOwnProperty("0")); // true
     console.log(myCustomArr.hasOwnProperty("1")); // true
     ```
     Это подтверждает, что массивные элементы и `length` — это собственные свойства экземпляра.

5. **Проверка структуры объекта**
   - Чтобы увидеть собственные свойства `myCustomArr`, можно использовать `Object.getOwnPropertyNames`:
     ```javascript
     console.log(Object.getOwnPropertyNames(myCustomArr)); // ["0", "1", "2", "3", "4", "length"]
     ```
     Это показывает, что `myCustomArr` имеет собственные свойства для индексов (`0`, `1`, `2`, `3`, `4`) и `length`. Свойство `sum` отсутствует, так как оно находится в прототипе.

6. **Почему это важно?**
   - Свойство `length` — это ключевая часть функциональности массивов. Оно не наследуется из прототипа, так как каждый массив должен иметь своё собственное значение `length`, зависящее от его содержимого.
   - Например, если добавить элемент:
     ```javascript
     myCustomArr.push(13);
     console.log(myCustomArr.length); // 6
     console.log(myCustomArr.hasOwnProperty("length")); // true
     ```
     Свойство `length` обновляется, оставаясь собственным свойством экземпляра.

### Итог
`myCustomArr.hasOwnProperty("length")` возвращает `true`, потому что `length` — это **собственное свойство** экземпляра `myCustomArr`, созданное автоматически при инициализации массива конструктором `Array`. В отличие от метода `sum`, который находится в прототипе `CustomArray.prototype`, `length` принадлежит непосредственно объекту `myCustomArr`, как и сами элементы массива (`0`, `1`, и т.д.).