### Как в JavaScript переменную String преобразовать в Int?

В JavaScript есть несколько способов преобразовать строку (`String`) в целое число (`Int`):

1. **`parseInt(string, radix)`**:
   - Преобразует строку в целое число.
   - `radix` — необязательный параметр, указывающий систему счисления (обычно 10 для десятичной).
   - Игнорирует нечисловые символы после числа.
   - Пример:
     ```javascript
     const str = "123";
     const num = parseInt(str, 10); // 123
     console.log(typeof num); // "number"
     console.log(parseInt("123.45", 10)); // 123
     console.log(parseInt("abc")); // NaN
     ```

2. **`Number(string)`**:
   - Преобразует строку в число (может быть не целым).
   - Для получения целого числа можно использовать с `Math.floor()`, `Math.ceil()` или `Math.round()`.
   - Пример:
     ```javascript
     const str = "123";
     const num = Number(str); // 123
     console.log(typeof num); // "number"
     console.log(Number("123.45")); // 123.45
     console.log(Number("abc")); // NaN
     ```

3. **Унарный оператор `+`**:
   - Быстрый способ преобразовать строку в число.
   - Работает аналогично `Number()`, но короче.
   - Пример:
     ```javascript
     const str = "123";
     const num = +str; // 123
     console.log(typeof num); // "number"
     console.log(+"123.45"); // 123.45
     console.log(+"abc"); // NaN
     ```

4. **`Math.floor(Number(string))`**:
   - Если нужно гарантированно получить целое число, используйте `Math.floor()` после преобразования.
   - Пример:
     ```javascript
     const str = "123.45";
     const num = Math.floor(Number(str)); // 123
     console.log(typeof num); // "number"
     ```

### Важные замечания:
- Если строка не содержит валидное число, результат будет `NaN` (например, `parseInt("abc")` или `Number("abc")`).
- Проверяйте результат с помощью `isNaN()`:
  ```javascript
  const result = parseInt("abc", 10);
  if (isNaN(result)) {
    console.log("Не удалось преобразовать");
  }
  ```
- `parseInt` предпочтительнее для целых чисел, так как явно обрезает дробную часть.

### Рекомендация:
- Используйте `parseInt(string, 10)` для целых чисел — это наиболее читаемый и надёжный способ.
- Если нужны дробные числа, используйте `Number()` или унарный `+`.