### Цикл `for...of` в JavaScript

!!! НЕ ДЛЯ ОБЪЕКТОВ !!!

#### Синтаксис
Цикл `for...of` используется для перебора элементов **итерируемых объектов** (массивов, строк, Map, Set, NodeList и т.д.).  
```javascript
for (let value of iterable) {
    // тело цикла
}
```
- `value` — текущий элемент итерируемого объекта.
- `iterable` — объект, поддерживающий протокол итерации (имеющий метод `Symbol.iterator`).

**Пример:**
```javascript
const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value); // 1, 2, 3
}
```

#### Где применяют
Цикл `for...of` используется для:
1. Перебора элементов массивов:
   ```javascript
   const numbers = [10, 20, 30];
   for (let num of numbers) {
       console.log(num); // 10, 20, 30
   }
   ```
2. Обработки строк (перебор символов):
   ```javascript
   const str = "Hello";
   for (let char of str) {
       console.log(char); // H, e, l, l, o
   }
   ```
3. Работы с итерируемыми объектами, такими как `Map` и `Set`:
   ```javascript
   const set = new Set([1, 2, 2, 3]);
   for (let value of set) {
       console.log(value); // 1, 2, 3
   }
   ```
   ```javascript
   const map = new Map([['a', 1], ['b', 2]]);
   for (let [key, value] of map) {
       console.log(key, value); // a 1, b 2
   }
   ```
4. Перебора DOM-коллекций (например, `NodeList`):
   ```javascript
   const items = document.querySelectorAll('.item');
   for (let item of items) {
       item.style.color = 'blue';
   }
   ```

#### Особенности
1. **Работает только с итерируемыми объектами**: Объект должен иметь метод `Symbol.iterator`. Обычные объекты `{}` не поддерживаются.
   ```javascript
   const obj = { a: 1, b: 2 };
   for (let value of obj) { // Ошибка: obj is not iterable
       console.log(value);
   }
   ```
   Для объектов используйте `for...in` или `Object.keys/values/entries`.
2. **Простота доступа к значениям**: В отличие от `for...in`, который перебирает ключи, `for...of` даёт прямой доступ к значениям.
3. **Поддержка деструктуризации**: Удобно для работы с `Map` или массивами пар.
   ```javascript
   const map = new Map([['x', 10], ['y', 20]]);
   for (let [key, value] of map.entries()) {
       console.log(`${key}: ${value}`); // x: 10, y: 20
   }
   ```
4. **Управление циклом**:
   - **`break`**: Прерывает цикл.
     ```javascript
     for (let value of [1, 2, 3, 4]) {
         if (value === 3) break;
         console.log(value); // 1, 2
     }
     ```
   - **`continue`**: Пропускает текущую итерацию.
     ```javascript
     for (let value of [1, 2, 3, 4]) {
         if (value % 2 === 0) continue;
         console.log(value); // 1, 3
     }
     ```
5. **Не предоставляет индекс**: Если нужен индекс, используйте `for` или метод `entries()`:
   ```javascript
   const arr = ['a', 'b', 'c'];
   for (let [index, value] of arr.entries()) {
       console.log(`${index}: ${value}`); // 0: a, 1: b, 2: c
   }
   ```

#### Best Practices
1. **Используйте для итерируемых объектов**: `for...of` идеален для массивов, строк, `Map`, `Set` и других итерируемых структур.
   ```javascript
   const arr = [1, 2, 3];
   for (let value of arr) {
       console.log(value);
   }
   ```
2. **Предпочитайте методы массива для функционального стиля**: Если логика простая, используйте `forEach`, `map`, `filter` вместо `for...of`.
   ```javascript
   // Вместо:
   for (let value of arr) {
       console.log(value);
   }
   // Лучше:
   arr.forEach(value => console.log(value));
   ```
3. **Используйте `let` или `const`**: Переменная `value` должна быть объявлена с `let` или `const` для блочной области видимости.
   ```javascript
   for (let value of arr) {
       console.log(value);
   }
   ```
4. **Избегайте изменения коллекции**: Изменение массива или коллекции во время перебора может привести к непредсказуемому поведению.
   ```javascript
   const arr = [1, 2, 3];
   for (let value of arr) {
       arr.pop(); // Плохо: изменение массива
       console.log(value);
   }
   ```
   Лучше использовать методы вроде `filter` для модификаций.
5. **Используйте `entries()` для индексов**: Если нужны индексы, применяйте метод `entries()`.
   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   for (let [i, fruit] of fruits.entries()) {
       console.log(`${i + 1}: ${fruit}`);
   }
   ```
6. **Читаемость**: Используйте понятные имена переменных вместо абстрактных (например, `item` вместо `x`).
   ```javascript
   for (let item of items) {
       console.log(item);
   }
   ```

#### Когда не использовать
- Для обычных объектов `{}`: используйте `for...in` или `Object.keys/values/entries`.
- Если нужен сложный контроль над индексами или шагом: используйте `for`.
- Для функциональных операций (преобразование, фильтрация): предпочтите `map`, `filter`, `forEach`.

#### Пример с Best Practices
```javascript
const colors = ['red', 'green', 'blue'];
for (let [index, color] of colors.entries()) {
    if (color === 'green') continue;
    console.log(`${index + 1}: ${color}`); // 1: red, 3: blue
}
```