### Как в JS определяют тип переменой?

В JavaScript тип переменной можно определить несколькими способами. 

Основные подходы:

### 1. **Оператор `typeof`**
Самый распространённый способ — использовать оператор `typeof`, который возвращает строку с типом данных.

```javascript
console.log(typeof 42);          // "number"
console.log(typeof "Привет");    // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (историческая ошибка в JS)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (массивы тоже возвращают "object")
console.log(typeof function(){}); // "function"
console.log(typeof Symbol());    // "symbol"
console.log(typeof BigInt(123)); // "bigint"
```

**Особенности `typeof`:**
- Для `null` возвращается `"object"` (это баг в языке, сохранившийся для обратной совместимости).
- Массивы, объекты и `null` возвращают `"object"`, поэтому для более точной проверки нужны другие методы.

### 2. **instanceof**
Оператор `instanceof` проверяет, является ли объект экземпляром определённого конструктора (класса).

```javascript
const arr = [1, 2, 3];
console.log(arr instanceof Array);     // true
console.log(arr instanceof Object);    // true (массивы наследуются от Object)

const date = new Date();
console.log(date instanceof Date);     // true
console.log(date instanceof Object);   // true

console.log(42 instanceof Number);     // false (примитивы не являются экземплярами)
```

**Особенности `instanceof`:**
- Работает только с объектами, а не с примитивами (например, `42` не считается экземпляром `Number`).
- Полезен для проверки конкретных типов объектов, таких как `Array`, `Date` и т.д.

### 3. **Array.isArray()**
Для точной проверки, является ли переменная массивом, используется `Array.isArray()`.

```javascript
const arr = [1, 2, 3];
console.log(Array.isArray(arr));       // true
console.log(Array.isArray({}));        // false
console.log(Array.isArray("строка"));  // false
```

**Особенности:**
- Используется, чтобы отличить массивы от других объектов, так как `typeof []` возвращает `"object"`.

### 4. **Object.prototype.toString.call()**
Этот метод даёт более точное определение типа, особенно для объектов.

```javascript
console.log(Object.prototype.toString.call(42));          // "[object Number]"
console.log(Object.prototype.toString.call("Привет"));    // "[object String]"
console.log(Object.prototype.toString.call([]));          // "[object Array]"
console.log(Object.prototype.toString.call({}));          // "[object Object]"
console.log(Object.prototype.toString.call(null));        // "[object Null]"
console.log(Object.prototype.toString.call(undefined));   // "[object Undefined]"
```

**Особенности:**
- Возвращает строку вида `[object Тип]`.
- Более надёжен, чем `typeof`, для определения специфичных типов, таких как `Array`, `Null`, `Date` и т.д.

### 5. **Конструктор (`constructor`)**
Можно проверить свойство `constructor` у переменной, чтобы узнать её тип.

```javascript
const num = 42;
const str = "Привет";
console.log(num.constructor === Number); // true
console.log(str.constructor === String); // true
console.log([].constructor === Array);   // true
```

**Особенности:**
- Не работает с `null` и `undefined`, так как у них нет свойства `constructor`.
- Может быть ненадёжным, если свойство `constructor` было переопределено.

### 6. **Проверка на `NaN`**
Для проверки, является ли значение `NaN`, используется `Number.isNaN()`.

```javascript
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN(42));        // false
console.log(Number.isNaN("строка"));  // false
```

**Особенности:**
- `isNaN()` (без `Number.`) менее надёжен, так как приводит значение к числу перед проверкой.

### Резюме
- **Основной способ**: `typeof` для быстрой проверки примитивов.
- **Для массивов**: `Array.isArray()`.
- **Для объектов**: `Object.prototype.toString.call()` или `instanceof`.
- **Для `NaN`**: `Number.isNaN()`.
- **Для специфичных случаев**: `constructor` или дополнительные проверки.