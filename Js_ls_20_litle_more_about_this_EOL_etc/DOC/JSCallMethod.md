Метод `call` в JavaScript используется для вызова функции с указанным значением `this` и передачей аргументов по отдельности. 

Это один из способов управления контекстом выполнения функции.

### Синтаксис:

```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

- **`thisArg`**: Объект, который будет использоваться в качестве `this` внутри функции.
- **`arg1, arg2, ...`**: Аргументы, передаваемые в функцию по одному.

### Как работает:

`call` немедленно вызывает функцию, задавая контекст `this` и передавая аргументы. Это полезно, когда нужно явно указать, к какому объекту привязать `this`, или использовать функцию с другим контекстом.

### Примеры:

1. **Вызов функции с явным контекстом**:

```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // "Hello, Alice!"
```

2. **Использование с объектами**:

```javascript
const person1 = { name: "Bob" };
const person2 = { name: "Charlie" };

function introduce(role) {
  console.log(`I'm ${this.name}, a ${role}.`);
}

introduce.call(person1, "developer"); // "I'm Bob, a developer."
introduce.call(person2, "designer"); // "I'm Charlie, a designer."
```

3. **Вызов метода другого объекта**:

```javascript
const obj1 = {
  name: "Dave",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

const obj2 = { name: "Eve" };
obj1.sayHello.call(obj2); // "Hello, Eve!"
```

4. **Передача нескольких аргументов**:

```javascript
function sum(a, b, c) {
  console.log(this.value + a + b + c);
}

const context = { value: 10 };
sum.call(context, 1, 2, 3); // 16 (10 + 1 + 2 + 3)
```

### Отличия от `apply` и `bind`
- **`apply`**: Похож на `call`, но аргументы передаются в виде массива: `functionName.apply(thisArg, [arg1, arg2, ...])`.
- **`bind`**: Создаёт новую функцию с привязанным `this` и аргументами, но не вызывает её сразу: `functionName.bind(thisArg, arg1, arg2, ...)`.

### Практическое применение:

- **Переиспользование методов**: Позволяет использовать метод одного объекта для другого.
- **Контроль контекста**: Полезно в обработчиках событий, callback-функциях или асинхронных операциях, где `this` может потеряться.
- **Функциональное программирование**: Используется для вызова функций с динамическим контекстом.

### Примечания:

- В строгом режиме (`"use strict"`) `thisArg` может быть `undefined` или `null`, и `this` не будет привязан к глобальному объекту.
- Если `thisArg` не передан или равно `null`/`undefined` в нестрогом режиме, `this` будет указывать на глобальный объект (`window` в браузере).

### Пример с заимствованием метода:

```javascript
const arrayLike = { 0: "a", 1: "b", length: 2 };
const result = Array.prototype.join.call(arrayLike, ",");
console.log(result); // "a,b"
```
Здесь метод `join` массива используется для объекта, похожего на массив, с помощью `call`.

`call` — мощный инструмент для управления контекстом и передачи аргументов, широко применяемый в ситуациях, где требуется гибкость в работе с `this`.