JSON (JavaScript Object Notation) — это формат обмена данными, который в JavaScript представлен в виде строкового представления объекта. 

В JavaScript JSON-объект можно создать, парсить или преобразовывать с помощью встроенных методов. 

Рассмотрим ключевые аспекты работы с JSON в JavaScript.

### 1. **Что такое JSON-объект?**

JSON-объект — это строка в формате JSON, которая описывает структуру данных, похожую на объект JavaScript. Пример JSON-строки:

```javascript
{
  "name": "Alex",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "gaming"],
  "address": {
    "city": "Moscow",
    "zip": 123456
  }
}
```
Эта строка может быть преобразована в полноценный JavaScript-объект для работы в коде.

### 2. **Основные методы для работы с JSON**
JavaScript предоставляет два основных метода для работы с JSON через объект `JSON`:

- **`JSON.parse(string)`** — преобразует JSON-строку в JavaScript-объект.

  ```javascript
  const jsonString = '{"name": "Alex", "age": 30}';
  const obj = JSON.parse(jsonString);
  console.log(obj.name); // Alex
  console.log(obj.age);  // 30
  ```
  **Важно**: Если строка JSON некорректна, метод вызовет ошибку `SyntaxError`.

- **`JSON.stringify(value)`** — преобразует JavaScript-объект в JSON-строку.

  ```javascript
  const obj = { name: "Alex", age: 30 };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // '{"name":"Alex","age":30}'
  ```

### 3. **Работа с Local Storage**
JSON часто используется для хранения данных в `localStorage`, так как оно принимает только строки. 

Пример:

```javascript
// Сохранение объекта в Local Storage
const user = { name: "Alex", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Получение объекта из Local Storage
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Alex
```

### 4. **Особенности JSON.stringify**
- Можно настроить форматирование с отступами:

  ```javascript
  const obj = { name: "Alex", age: 30 };
  console.log(JSON.stringify(obj, null, 2));
  // Вывод:
  // {
  //   "name": "Alex",
  //   "age": 30
  // }
  ```
- Функция `replacer` позволяет фильтровать данные:

  ```javascript
  const obj = { name: "Alex", age: 30, secret: "hidden" };
  const json = JSON.stringify(obj, (key, value) => (key === "secret" ? undefined : value));
  console.log(json); // '{"name":"Alex","age":30}'
  ```

### 5. **Обработка ошибок**
При парсинге JSON-строки рекомендуется использовать `try-catch`, чтобы избежать сбоев:

```javascript
try {
  const obj = JSON.parse('{"name": "Alex", "age": 30,}'); // Ошибка: некорректный JSON
} catch (e) {
  console.error("Ошибка парсинга JSON:", e.message);
}
```

### 6. **Ограничения JSON**
- JSON поддерживает только простые типы данных: строки, числа, булевы значения, массивы, объекты и `null`.
- Не поддерживаются: функции, `undefined`, `NaN`, `Date`, регулярные выражения.
- Пример:

  ```javascript
  const obj = { date: new Date(), value: undefined, num: NaN };
  console.log(JSON.stringify(obj)); // '{"date":"2025-08-30T08:29:00.000Z","num":null}'
  ```

### 7. **Пример: Работа с JSON и Local Storage**

```javascript
// Создаём объект
const user = {
  name: "Maria",
  preferences: { theme: "dark", language: "ru" }
};

// Сохраняем в Local Storage
localStorage.setItem("userSettings", JSON.stringify(user));

// Получаем и используем
const settings = JSON.parse(localStorage.getItem("userSettings"));
console.log(settings.preferences.theme); // dark
```