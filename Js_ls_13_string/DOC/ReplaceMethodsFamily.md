В JavaScript метод `replace` используется для замены части строки на другую подстроку или результат выполнения функции. Существует также метод `replaceAll`, введённый в ES2021, который заменяет все вхождения подстроки. Оба метода не изменяют исходную строку, а возвращают новую. Они поддерживают строки и регулярные выражения для поиска заменяемого фрагмента. 

Ниже описаны `replace`, `replaceAll` и их особенности с примерами.

### 1. `replace()`
Заменяет **первое вхождение** подстроки или совпадение с регулярным выражением на указанную строку или результат функции.

**Синтаксис**:
```javascript
string.replace(searchValue, replaceValue)
```
- `searchValue` — строка или регулярное выражение для поиска.
- `replaceValue` — строка для замены или функция, возвращающая замену.

**Пример (с подстрокой)**:
```javascript
let str = "hello world";
console.log(str.replace("world", "JS")); // "hello JS"
console.log(str); // "hello world" (исходная строка не изменилась)
```

**Пример (с регулярным выражением)**:
```javascript
let str = "hello world";
console.log(str.replace(/o/g, "0")); // "hell0 w0rld" (замена всех 'o')
```

**Пример (с функцией)**:
```javascript
let str = "hello world";
console.log(str.replace(/\w+/g, match => match.toUpperCase())); // "HELLO WORLD"
```

**Особенности**:
- Без флага `g` в регулярном выражении заменяется только первое вхождение.
- Если `searchValue` — строка, заменяется только первое совпадение.
- Функция в `replaceValue` получает аргументы: совпадение, группы (если есть), индекс и исходную строку.

**Пример с функцией**:
```javascript
let str = "hello 123";
console.log(str.replace(/\d+/, num => Number(num) * 2)); // "hello 246"
```

### 2. `replaceAll()`
Заменяет **все вхождения** подстроки или совпадения с регулярным выражением. Доступен с ES2021.

**Синтаксис**:
```javascript
string.replaceAll(searchValue, replaceValue)
```
- `searchValue` — строка или регулярное выражение (с флагом `g` для регулярных выражений).
- `replaceValue` — строка или функция, как в `replace`.

**Пример (с подстрокой)**:
```javascript
let str = "hello hello";
console.log(str.replaceAll("hello", "hi")); // "hi hi"
```

**Пример (с регулярным выражением)**:
```javascript
let str = "hello world";
console.log(str.replaceAll(/o/g, "0")); // "hell0 w0rld"
```

**Пример (с функцией)**:
```javascript
let str = "a1 b2 c3";
console.log(str.replaceAll(/\d/g, num => Number(num) + 1)); // "a2 b3 c4"
```

**Особенности**:
- Для строк заменяет все вхождения без необходимости использовать регулярные выражения.
- Если используется регулярное выражение без флага `g`, будет выброшена ошибка.
- Пример ошибки:
  ```javascript
  let str = "hello hello";
  console.log(str.replaceAll(/hello/, "hi")); // TypeError: replaceAll must be called with a global RegExp
  ```

### Подводные камни:

1. **Чувствительность к регистру**:
   - Оба метода чувствительны к регистру. Для игнорирования регистра используйте регулярное выражение с флагом `i`.
   - Пример:

     ```javascript
     let str = "Hello WORLD";
     console.log(str.replace(/world/i, "JS")); // "Hello JS"
     ```

2. **Регулярные выражения без флага `g`**:
   - Для `replace`, без флага `g`, заменяется только первое вхождение.
   - Для `replaceAll`, регулярное выражение **должно** иметь флаг `g`, иначе будет ошибка.
   - Пример:

     ```javascript
     let str = "hello hello";
     console.log(str.replace(/hello/, "hi")); // "hi hello"
     console.log(str.replaceAll(/hello/g, "hi")); // "hi hi"
     ```

3. **Пустая строка**:
   - Замена на пустую строку удаляет совпадения.
   - Пример:

     ```javascript
     let str = "hello world";
     console.log(str.replaceAll(" ", "")); // "helloworld"
     ```

4. **Ошибки с нестроковыми данными**:
   - Вызов методов на `null` или `undefined` вызовет ошибку. Проверяйте тип данных.
   - Пример:

     ```javascript
     let str = null;
     console.log(str?.replace("test", "new")); // undefined
     ```

5. **Экранирование специальных символов**:
   - При использовании строк в `replace` или `replaceAll` специальные символы (например, `$`) обрабатываются буквально. В регулярных выражениях их нужно экранировать.
   - Пример:

     ```javascript
     let str = "cost: $100";
     console.log(str.replaceAll("$100", "€200")); // "cost: €200"
     console.log(str.replace(/\$/, "€")); // "cost: €100"
     ```

6. **Группы в регулярных выражениях**:
   - В `replace` и `replaceAll` можно использовать группы (`$1`, `$2`, и т.д.) для доступа к частям совпадения.
   - Пример:

     ```javascript
     let str = "2025-08-27";
     console.log(str.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1")); // "08/27/2025"
     ```

### Best Practices:

1. **Используйте `replaceAll` для полной замены**:
   - Если нужно заменить все вхождения, предпочтите `replaceAll` вместо `replace` с регулярным выражением для большей читаемости.
   - Пример:
     ```javascript
     let str = "hello hello";
     console.log(str.replaceAll("hello", "hi")); // "hi hi" (проще, чем /hello/g)
     ```

2. **Проверяйте тип данных**:
   - Убедитесь, что входные данные — строка, чтобы избежать ошибок.
   - Пример:
     ```javascript
     function safeReplace(str, search, replacement) {
       if (typeof str !== "string") return "";
       return str.replaceAll(search, replacement);
     }
     ```

3. **Используйте регулярные выражения для сложных замен**:
   - Для динамических или сложных шаблонов используйте регулярные выражения.
   - Пример:
     ```javascript
     let str = "user123, user456";
     console.log(str.replaceAll(/user(\d+)/g, "client$1")); // "client123, client456"
     ```

4. **Игнорирование регистра**:
   - Для поиска без учёта регистра добавляйте флаг `i` к регулярному выражению.
   - Пример:
     ```javascript
     let str = "Hello WORLD";
     console.log(str.replaceAll(/world/gi, "JS")); // "Hello JS"
     ```

5. **Оптимизация производительности**:
   - Для больших строк избегайте многократных вызовов `replace` с разными шаблонами, если можно объединить их в одно регулярное выражение.
   - Пример:
     ```javascript
     let str = "cat dog bird";
     console.log(str.replaceAll(/(cat|dog)/g, "pet")); // "pet pet bird"
     ```

### Итог
- `replace` — заменяет первое вхождение подстроки или совпадение с регулярным выражением.
- `replaceAll` — заменяет все вхождения (требует флаг `g` для регулярных выражений).
- Оба метода поддерживают строки, регулярные выражения и функции для замены.
- Учитывайте регистр, проверяйте тип данных и используйте `replaceAll` для полной замены, чтобы код был проще и понятнее. Регулярные выражения полезны для сложных шаблонов, а функции — для динамических замен.