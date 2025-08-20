### Что такое параметры функции по умолчанию в JavaScript?

Параметры по умолчанию в JavaScript — это значения, которые автоматически присваиваются параметрам функции, если при вызове функции соответствующий аргумент не передан или передан как `undefined`. Эта возможность была введена в ECMAScript 2015 (ES6) и упрощает написание функций, делая код более читаемым и надёжным.

### Синтаксис
```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
    // Тело функции
}
```
- Если аргумент для `param1` не передан или равен `undefined`, используется `defaultValue1`.
- Параметры по умолчанию могут быть любыми выражениями, включая константы, вычисления или даже другие функции.

### Где применяются параметры по умолчанию?

1. **Обработка отсутствующих аргументов**:
   Позволяют избежать необходимости проверки `undefined` внутри функции.
   ```javascript
   function greet(name = "Guest") {
       return `Hello, ${name}!`;
   }
   console.log(greet()); // Hello, Guest!
   console.log(greet("Alice")); // Hello, Alice!
   ```

2. **Упрощение конфигураций**:
   Используются для задания стандартных настроек объектов или параметров.
   ```javascript
   function fetchData(url, options = { method: "GET", headers: {} }) {
       console.log(`Fetching ${url} with options:`, options);
   }
   fetchData("/api/data"); // Fetching /api/data with options: { method: "GET", headers: {} }
   ```

3. **Гибкость в функциях с множеством параметров**:
   Позволяют задавать значения по умолчанию для необязательных параметров.
   ```javascript
   function drawRectangle(width = 100, height = 50, color = "black") {
       console.log(`Drawing rectangle: ${width}x${height}, color: ${color}`);
   }
   drawRectangle(200); // Drawing rectangle: 200x50, color: black
   ```

4. **Работа с деструктуризацией**:
   Параметры по умолчанию можно использовать с деструктурированными объектами или массивами.
   ```javascript
   function setUser({ name = "Anonymous", age = 18 } = {}) {
       console.log(`Name: ${name}, Age: ${age}`);
   }
   setUser(); // Name: Anonymous, Age: 18
   setUser({ name: "Bob" }); // Name: Bob, Age: 18
   ```

### Особенности параметров по умолчанию

1. **Только для `undefined`**:
   - Параметры по умолчанию срабатывают, если аргумент не передан или передан как `undefined`.
   - Если передан `null` или другое значение (например, `0`, `false`, `""`), параметр по умолчанию игнорируется.
   ```javascript
   function test(param = "default") {
       console.log(param);
   }
   test(undefined); // default
   test(null); // null
   test(0); // 0
   ```

2. **Вычисление значений по умолчанию**:
   - Значения по умолчанию могут быть выражениями, которые вычисляются при вызове функции, если аргумент отсутствует.
   ```javascript
   function getTimestamp(time = Date.now()) {
       return time;
   }
   console.log(getTimestamp()); // Текущее время в миллисекундах
   ```

3. **Порядок параметров**:
   - Параметры с значениями по умолчанию обычно размещаются после параметров без значений по умолчанию, чтобы избежать путаницы.
   ```javascript
   function example(a, b = 10) {
       console.log(a, b);
   }
   example(5); // 5, 10
   ```

4. **Использование предыдущих параметров**:
   - Значения по умолчанию могут зависеть от других параметров функции.
   ```javascript
   function multiply(a, b = a) {
       return a * b;
   }
   console.log(multiply(5)); // 25 (b = 5)
   console.log(multiply(5, 2)); // 10
   ```

5. **Совместимость с rest-параметрами**:
   - Параметры по умолчанию могут использоваться до rest-параметров.
   ```javascript
   function collect(first = "None", ...rest) {
       console.log(first, rest);
   }
   collect(); // None, []
   collect("Alice", "Bob", "Charlie"); // Alice, ["Bob", "Charlie"]
   ```

6. **Деструктуризация и значения по умолчанию**:
   - При деструктуризации можно задавать значения по умолчанию как для отдельных свойств, так и для всего объекта.
   ```javascript
   function process({ x = 0, y = 0 } = {}) {
       console.log(`x: ${x}, y: ${y}`);
   }
   process(); // x: 0, y: 0
   process({ x: 10 }); // x: 10, y: 0
   ```

### Best Practices

1. **Используйте для необязательных параметров**:
   - Задавайте параметры по умолчанию только для необязательных аргументов, чтобы код был интуитивно понятным.
   ```javascript
   // Хорошо
   function logMessage(message, level = "info") {
       console.log(`[${level}] ${message}`);
   }

   // Плохо (слишком много значений по умолчанию)
   function confusing(a = 1, b = 2, c = 3) {
       console.log(a, b, c);
   }
   ```

2. **Избегайте сложных выражений в значениях по умолчанию**:
   - Простые значения (числа, строки, объекты) предпочтительнее сложных вычислений, чтобы код оставался читаемым.
   ```javascript
   // Плохо
   function complex(a = someHeavyComputation()) {
       // ...
   }

   // Хорошо
   function simple(a = 42) {
       // ...
   }
   ```

3. **Используйте логичные значения по умолчанию**:
   - Значения по умолчанию должны быть осмысленными и соответствовать контексту функции.
   ```javascript
   function setVolume(level = 50) {
       console.log(`Volume set to ${level}%`);
   }
   ```

4. **Проверяйте совместимость с `null`**:
   - Если функция должна обрабатывать `null` как валидное значение, добавьте явную проверку, так как `null` не вызывает использование значения по умолчанию.
   ```javascript
   function processValue(value = "default") {
       if (value === null) return "null handled";
       return value;
   }
   ```

5. **Используйте с деструктуризацией для гибкости**:
   - Деструктуризация с параметрами по умолчанию упрощает работу с объектами и делает код более декларативным.
   ```javascript
   function configure({ host = "localhost", port = 8080 } = {}) {
       console.log(`Connecting to ${host}:${port}`);
   }
   ```

6. **Не злоупотребляйте зависимостью от других параметров**:
   - Использование предыдущих параметров в значениях по умолчанию может сделать функцию менее предсказуемой. Используйте только при необходимости.
   ```javascript
   // Осторожно
   function tricky(a, b = a * 2) {
       console.log(a, b);
   }
   ```

7. **Документируйте значения по умолчанию**:
   - В документации указывайте, какие параметры имеют значения по умолчанию и их смысл.
   ```javascript
   /**
    * Sends a request to the specified URL.
    * @param {string} url - The target URL.
    * @param {Object} [options={method: "GET"}] - Request options.
    */
   function sendRequest(url, options = { method: "GET" }) {
       // ...
   }
   ```

### Примеры реального использования

1. **Функция с настройками по умолчанию**:
   ```javascript
   function animate(element, duration = 1000, easing = "linear") {
       console.log(`Animating ${element} for ${duration}ms with ${easing} easing`);
   }
   animate("div"); // Animating div for 1000ms with linear easing
   animate("div", 500, "ease-in"); // Animating div for 500ms with ease-in easing
   ```

2. **Обработка опциональных параметров в API**:
   ```javascript
   function fetchUser(id, fields = ["name", "email"]) {
       console.log(`Fetching user ${id} with fields: ${fields.join(", ")}`);
   }
   fetchUser(123); // Fetching user 123 with fields: name, email
   fetchUser(123, ["id", "role"]); // Fetching user 123 with fields: id, role
   ```

3. **Деструктуризация с параметрами по умолчанию**:
   ```javascript
   function updateProfile({ id, name = "Unknown", age = 0 } = {}) {
       console.log(`Updating profile ${id}: ${name}, ${age}`);
   }
   updateProfile({ id: 1 }); // Updating profile 1: Unknown, 0
   updateProfile({ id: 2, name: "Alice" }); // Updating profile 2: Alice, 0
   ```

### Заключение

Параметры по умолчанию в JavaScript — это мощный инструмент, который упрощает обработку отсутствующих аргументов, делает функции более гибкими и улучшает читаемость кода. Они особенно полезны при работе с необязательными параметрами и деструктуризацией. Следуя best practices, можно избежать путаницы, обеспечить предсказуемость и повысить надёжность кода.