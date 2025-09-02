### Почему в примере - myCustomArr.hasOwnProperty("sum") возвращает false?

В случае с кодом:

```javascript
class CustomArray extends Array {
  sum() {
    return this.reduce((acc, val) => acc + val, 0);
  }
}

const myCustomArr = new CustomArray(1, 2, 3, 5, 8);
console.log(myCustomArr.hasOwnProperty("sum")); // false
```

### `hasOwnProperty("sum")` возвращает `false`

Метод `hasOwnProperty` проверяет, есть ли указанное свойство **непосредственно** у объекта (`myCustomArr`), а не в его цепочке прототипов. Давай разберёмся пошагово:

1. **Где определён метод `sum`?**
   - Метод `sum` определён в **прототипе** класса `CustomArray`, то есть в `CustomArray.prototype`. Это значит, что `sum` — это свойство прототипа, а не свойство конкретного экземпляра `myCustomArr`.
   - Когда ты вызываешь `myCustomArr.sum()`, JavaScript ищет метод `sum` сначала в самом объекте `myCustomArr`. Если его там нет (а его там нет), он смотрит в прототипе (`CustomArray.prototype`), где метод `sum` и находится. Поэтому вызов `sum()` работает.

2. **Что проверяет `hasOwnProperty`?**
   - Метод `hasOwnProperty` возвращает `true`, только если свойство (в данном случае `sum`) является **собственным** (own property) для объекта `myCustomArr`. Собственные свойства — это те, которые добавлены непосредственно в объект, например, через `myCustomArr.sum = ...` или при создании объекта с данными.
   - Поскольку `sum` находится в `CustomArray.prototype`, а не в самом `myCustomArr`, `myCustomArr.hasOwnProperty("sum")` возвращает `false`.

3. **Проверка цепочки прототипов**
   - Чтобы убедиться, что метод `sum` доступен, можно использовать оператор `in`, который проверяет наличие свойства в объекте и его цепочке прототипов:
     ```javascript
     console.log("sum" in myCustomArr); // true
     ```
     Это возвращает `true`, потому что `sum` есть в прототипе (`CustomArray.prototype`).
   - Также можно проверить сам прототип:
     ```javascript
     console.log(CustomArray.prototype.hasOwnProperty("sum")); // true
     ```
     Это вернёт `true`, так как `sum` — собственное свойство `CustomArray.prototype`.

4. **Почему `sum` не в `myCustomArr`?**
   - Экземпляр `myCustomArr` содержит только свои элементы (например, `[1, 2, 3, 5, 8]`) и свойство `length`. Остальные методы, включая `sum`, наследуются через прототип.
   - Если бы ты добавил метод `sum` напрямую в экземпляр, например:
     ```javascript
     myCustomArr.sum = () => 42;
     console.log(myCustomArr.hasOwnProperty("sum")); // true
     ```
     Тогда `hasOwnProperty("sum")` вернул бы `true`, но это переопределило бы прототипный метод.

5. **Подтверждение структуры**
   - Давай проверим, что у `myCustomArr` есть доступ к `sum` через прототип:
     ```javascript
     console.log(myCustomArr.__proto__ === CustomArray.prototype); // true
     console.log(CustomArray.prototype.hasOwnProperty("sum")); // true
     console.log(myCustomArr.sum()); // 19 (метод работает)
     ```
   - Это показывает, что `sum` живёт в прототипе, а не в самом объекте.

### Итог
`myCustomArr.hasOwnProperty("sum")` возвращает `false`, потому что метод `sum` определён в `CustomArray.prototype`, а не непосредственно в объекте `myCustomArr`. Метод `hasOwnProperty` не проверяет свойства в цепочке прототипов. Чтобы проверить наличие свойства, включая прототипы, используй оператор `in` или вызови `hasOwnProperty` на `CustomArray.prototype`.