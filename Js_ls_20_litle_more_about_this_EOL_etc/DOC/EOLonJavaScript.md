Enhanced object literals (улучшенные объектные литералы) в JavaScript — это синтаксические улучшения, введённые в ECMAScript 2015 (ES6), которые упрощают создание объектов. Они делают код более компактным и читаемым. Вот основные возможности enhanced object literals:

1. **Сокращённая запись свойств**:
   Если имя свойства совпадает с именем переменной, можно указать только имя переменной, без явного указания ключа и значения.

   ```javascript
   const name = "Alice";
   const age = 25;

   // До ES6
   const person = { name: name, age: age };

   // С ES6
   const person = { name, age };
   ```

2. **Сокращённая запись методов**:
   Методы в объекте можно определять без ключевого слова `function`.

   ```javascript
   // До ES6
   const obj = {
     sayHello: function() {
       console.log("Hello!");
     }
   };

   // С ES6
   const obj = {
     sayHello() {
       console.log("Hello!");
     }
   };
   ```

3. **Динамические имена свойств**:
   Имена свойств можно задавать динамически, используя выражения в квадратных скобках.

   ```javascript
   const propName = "dynamicKey";

   const obj = {
     [propName]: "value",
     ["prefix_" + propName]: "another value"
   };

   console.log(obj); // { dynamicKey: "value", prefix_dynamicKey: "another value" }
   ```

4. **Вычисляемые имена методов**:
   Аналогично свойствам, имена методов тоже могут быть вычисляемыми.

   ```javascript
   const methodName = "action";

   const obj = {
     [methodName]() {
       return "This is an action";
     }
   };

   console.log(obj.action()); // "This is an action"
   ```

### Преимущества
- **Краткость**: Меньше кода для написания и чтения.
- **Гибкость**: Динамические имена свойств и методов упрощают создание объектов на основе переменных или вычислений.
- **Читаемость**: Код становится более понятным и выразительным.

### Пример комплексного использования

```javascript
const prefix = "user";
const id = 123;

const user = {
  [prefix + "_name"]: "Bob",
  [prefix + "_id"]: id,
  greet() {
    return `Hello, ${this.user_name}!`;
  }
};

console.log(user); // { user_name: "Bob", user_id: 123 }
console.log(user.greet()); // "Hello, Bob!"
```

Эти улучшения делают работу с объектами в JavaScript более удобной и интуитивной.