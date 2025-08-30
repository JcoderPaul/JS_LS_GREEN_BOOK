В JavaScript метод `includes` используется для проверки, содержит ли строка указанную подстроку, возвращая `true` или `false`. Он чувствителен к регистру и работает с любыми строками, включая пустые. У метода `includes` нет прямых разновидностей, как у `trim` (например, `trimStart`/`trimEnd`), но его функциональность пересекается с другими методами, такими как `indexOf`, `startsWith` и `endsWith`, которые можно рассматривать как связанные инструменты для поиска подстрок. 

Ниже описан метод `includes` и эти связанные методы с примерами.

### 1. `includes()`
Проверяет, содержится ли подстрока в строке, возвращая `true` или `false`.

**Синтаксис**:
```javascript
string.includes(searchString, position)
```
- `searchString` — подстрока для поиска.
- `position` (необязательный) — индекс, с которого начинается поиск (по умолчанию 0).

**Пример**:
```javascript
let str = "Hello, world!";
console.log(str.includes("world")); // true
console.log(str.includes("World")); // false (чувствительно к регистру)
console.log(str.includes("o", 5)); // true (поиск начинается с индекса 5)
console.log(str.includes("")); // true (пустая строка всегда содержится)
```

**Особенности**:
- Чувствителен к регистру.
- Возвращает `true` для пустой подстроки.
- Если `position` больше длины строки, возвращается `false`.

**Пример с пустой строкой**:
```javascript
let str = "test";
console.log(str.includes("")); // true
```

**Пример с позицией**:
```javascript
let str = "hello hello";
console.log(str.includes("hello", 6)); // true (находит второе "hello")
console.log(str.includes("hello", 10)); // false (поиск начинается после последнего "hello")
```

### 2. `startsWith()`
Проверяет, начинается ли строка с указанной подстроки.

**Синтаксис**:
```javascript
string.startsWith(searchString, position)
```
- `searchString` — подстрока для проверки.
- `position` (необязательный) — индекс, с которого начинается проверка (по умолчанию 0).

**Пример**:
```javascript
let str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world", 7)); // true
console.log(str.startsWith("HELLO")); // false (чувствительно к регистру)
```

**Особенности**:
- Проверяет только начало строки или подстроку с указанной позиции.
- Пустая строка на любом индексе возвращает `true`.

**Пример**:
```javascript
let str = "hello";
console.log(str.startsWith("", 2)); // true
console.log(str.startsWith("he")); // true
```

### 3. `endsWith()`
Проверяет, заканчивается ли строка указанной подстрокой.

**Синтаксис**:
```javascript
string.endsWith(searchString, length)
```
- `searchString` — подстрока для проверки.
- `length` (необязательный) — длина строки, которая рассматривается для проверки (по умолчанию длина всей строки).

**Пример**:
```javascript
let str = "Hello, world!";
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("world", 11)); // true (проверяет до индекса 11)
console.log(str.endsWith("WORLD!")); // false (чувствительно к регистру)
```

**Особенности**:
- Проверяет только конец строки.
- Параметр `length` позволяет ограничить проверяемую часть строки.
- Пустая строка возвращает `true`.

**Пример**:
```javascript
let str = "hello";
console.log(str.endsWith("", 3)); // true
console.log(str.endsWith("lo")); // true
```

### Подводные камни:

1. **Чувствительность к регистру**:
   - Все методы (`includes`, `startsWith`, `endsWith`) чувствительны к регистру. Если нужно игнорировать регистр, преобразуйте строки в один регистр перед проверкой.
   - Пример:

     ```javascript
     let str = "Hello, world!";
     console.log(str.toLowerCase().includes("world")); // true
     ```

2. **Пустая строка**:
   - `includes`, `startsWith` и `endsWith` возвращают `true` для пустой подстроки, что может быть неожиданным.
   - Пример:

     ```javascript
     let str = "test";
     console.log(str.includes("")); // true
     ```

3. **Некорректные входные данные**:
   - Вызов методов на `null` или `undefined` вызовет ошибку. Используйте проверки или опциональную цепочку.
   - Пример:

     ```javascript
     let str = null;
     console.log(str?.includes("test")); // undefined
     ```

4. **Ограничения `indexOf` как альтернативы**:
   - До появления `includes`, часто использовался `indexOf !== -1`. Однако `includes` более читаем и понятен.
   - Пример:

     ```javascript
     let str = "hello";
     console.log(str.indexOf("ll") !== -1); // true (эквивалентно includes("ll"))
     ```

5. **Работа с эмодзи**:
   - Методы корректно работают с эмодзи, но будьте осторожны с позицией, так как эмодзи могут занимать несколько кодовых единиц.
   - Пример:

     ```javascript
     let str = "hello 😊 world";
     console.log(str.includes("😊")); // true
     console.log(str.startsWith("hello", 0)); // true
     ```

### Best Practices:

1. **Используйте `includes` для простоты**:
   - Предпочитайте `includes` вместо `indexOf !== -1` для лучшей читаемости.
   - Пример:

     ```javascript
     let str = "hello world";
     if (str.includes("world")) { // Лучше, чем str.indexOf("world") !== -1
       console.log("Found!");
     }
     ```

2. **Игнорирование регистра**:
   - Если регистр не важен, преобразуйте строки в нижний или верхний регистр.
   - Пример:
     ```javascript
     let str = "Hello, World!";
     let search = "world";
     console.log(str.toLowerCase().includes(search.toLowerCase())); // true
     ```

3. **Проверяйте тип данных**:
   - Убедитесь, что работаете со строкой, чтобы избежать ошибок.
   - Пример:
     ```javascript
     function hasSubstring(str, search) {
       if (typeof str !== "string") return false;
       return str.includes(search);
     }
     ```

4. **Используйте `startsWith`/`endsWith` для специфичных проверок**:
   - Эти методы лучше подходят, если нужно проверить начало или конец строки, а не просто наличие подстроки.
   - Пример:
     ```javascript
     let url = "https://example.com";
     if (url.startsWith("https")) {
       console.log("Secure URL");
     }
     ```

### Итог
- `includes` — проверяет наличие подстроки в строке.
- `startsWith` — проверяет, начинается ли строка с подстроки.
- `endsWith` — проверяет, заканчивается ли строка подстрокой.
- Все методы просты в использовании, чувствительны к регистру и безопасны для работы с Unicode (включая эмодзи). Используйте их вместо `indexOf` для большей ясности, проверяйте входные данные и учитывайте регистр при необходимости.