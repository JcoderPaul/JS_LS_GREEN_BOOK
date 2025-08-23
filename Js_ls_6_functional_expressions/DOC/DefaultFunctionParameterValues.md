### Значения параметров функций по умолчанию в JavaScript.

В JavaScript значения параметров функций по умолчанию позволяют задавать значения, которые будут использоваться, если 
аргумент не передан или равен `undefined`. Эта возможность появилась в ECMAScript 2015 (ES6). 

Подобнее:

### 1. **Синтаксис**
Параметры по умолчанию задаются в определении функции с помощью знака `=`:

```javascript
function example(a = 1, b = "default") {
  console.log(a, b);
}

example();          // 1, "default"
example(5);        // 5, "default"
example(5, "test"); // 5, "test"
```

### 2. **Особенности работы**
- **Не передан аргумент или `undefined`:** Используется значение по умолчанию.
  ```javascript
  function test(x = 10) {
    console.log(x);
  }
  test();        // 10
  test(undefined); // 10
  test(null);    // null (не undefined, поэтому значение по умолчанию не используется)
  ```
- **Значения по умолчанию для любых типов данных:** Можно задавать числа, строки, объекты, массивы, функции и т.д.
  ```javascript
  function greet(name = "Guest", settings = { lang: "en" }) {
    console.log(`Hello, ${name}!`, settings);
  }
  greet(); // Hello, Guest! { lang: "en" }
  ```

- **Выражения как значения по умолчанию:** Можно использовать выражения или функции.
  ```javascript
  function getDefault() {
    return "Default Value";
  }
  function example(value = getDefault()) {
    console.log(value);
  }
  example(); // Default Value
  ```

- **Параметры по умолчанию и деструктурирование:**
  ```javascript
  function draw({ x = 0, y = 0 } = {}) {
    console.log(`x: ${x}, y: ${y}`);
  }
  draw();           // x: 0, y: 0
  draw({ x: 10 }); // x: 10, y: 0
  ```

### 3. **Порядок параметров**
Параметры со значениями по умолчанию обычно ставят в конец списка, чтобы избежать путаницы:
```javascript
function example(a, b = 2, c = 3) {
  console.log(a, b, c);
}
example(1); // 1, 2, 3
```
Если параметр со значением по умолчанию стоит в начале, это может привести к неожиданным результатам:
```javascript
function example(a = 1, b) {
  console.log(a, b);
}
example(undefined, 2); // 1, 2
example(5);           // 5, undefined
```

### 4. **Взаимодействие с `arguments`**
Объект `arguments` содержит все переданные аргументы, но не учитывает значения по умолчанию:
```javascript
function example(a = 1, b = 2) {
  console.log(arguments);
}
example(10); // [10]
```

### 5. **Ограничения и нюансы**
- **Значения по умолчанию не применяются к `null`:** Если передать `null`, оно будет использовано вместо значения по умолчанию.
  ```javascript
  function test(x = 10) {
    console.log(x);
  }
  test(null); // null
  ```
- **Ленивая инициализация:** Выражения для значений по умолчанию вычисляются только при вызове функции, если аргумент не передан.
  ```javascript
  function heavyComputation() {
    console.log("Computing...");
    return 42;
  }
  function example(x = heavyComputation()) {
    console.log(x);
  }
  example(5); // 5 (heavyComputation не вызывается)
  example();  // Computing... 42
  ```

### 6. **Практическое использование**
- **Упрощение кода:** Уменьшает необходимость проверки `undefined` внутри функции.
- **API-функции:** Удобно для функций с опциональными параметрами.
- **Конфигурации по умолчанию:** Например, задание стандартных настроек для объекта.

### Пример из практики
```javascript
function fetchData(url, options = { method: "GET", headers: {} }) {
  console.log(`Fetching ${url} with`, options);
}
fetchData("https://api.example.com"); // Fetching https://api.example.com with { method: "GET", headers: {} }
fetchData("https://api.example.com", { method: "POST" }); // Fetching https://api.example.com with { method: "POST" }
```