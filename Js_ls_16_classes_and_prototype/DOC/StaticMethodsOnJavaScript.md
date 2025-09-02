### Статические методы в JavaScript

Статические методы в JavaScript — это методы, которые принадлежат самому классу (или функции-конструктору), а не его экземплярам. Они вызываются напрямую через имя класса, а не через объекты, созданные с помощью этого класса. Статические методы обычно используются для утилитных функций или операций, которые не зависят от состояния конкретного экземпляра.

### Что такое статические методы?

Статические методы определяются с ключевым словом `static` в классах (ES6) или добавляются в свойство `prototype` функции-конструктора. Они:
- Не имеют доступа к данным экземпляра (`this` внутри статического метода указывает на сам класс, а не на экземпляр).
- Используются для операций, связанных с классом в целом, например, для создания вспомогательных функций или фабричных методов.
- Не наследуются экземплярами, но доступны через класс.

### Как создаются статические методы?

#### 1. **В классах (ES6)**
Статические методы определяются с ключевым словом `static` внутри класса:
```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159; // Статическое свойство (ES2022+)
}

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.PI); // 3.14159
```

#### 2. **В функциях-конструкторах**
Статические методы добавляются напрямую в функцию-конструктор:
```javascript
function MathUtils() {}
MathUtils.add = function(a, b) {
  return a + b;
};
MathUtils.PI = 3.14159;

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.PI); // 3.14159
```

#### 3. **Доступ к статическим методам**
Статические методы вызываются через имя класса, а не через экземпляры:
```javascript
class Example {
  static sayHello() {
    return "Hello from class!";
  }
}

const instance = new Example();
console.log(Example.sayHello()); // Hello from class!
console.log(instance.sayHello); // undefined (недоступно через экземпляр)
```

### Где используются статические методы?
Статические методы применяются в следующих случаях:
1. **Утилитные функции**: Для операций, не зависящих от экземпляра, например, математические вычисления или форматирование данных.
   ```javascript
   class StringUtils {
     static capitalize(str) {
       return str.charAt(0).toUpperCase() + str.slice(1);
     }
   }
   console.log(StringUtils.capitalize("hello")); // Hello
   ```
2. **Фабричные методы**: Для создания экземпляров класса с определённой логикой.
   ```javascript
   class User {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     static createGuest() {
       return new User("Guest", 0);
     }
   }
   const guest = User.createGuest();
   console.log(guest); // User { name: "Guest", age: 0 }
   ```
3. **Работа с метаданными класса**: Например, хранение констант или общих данных.
   ```javascript
   class Config {
     static SETTINGS = { theme: "dark", version: "1.0.0" };
     static getVersion() {
       return this.SETTINGS.version;
     }
   }
   console.log(Config.getVersion()); // 1.0.0
   ```
4. **Встроенные примеры**: Многие встроенные объекты JavaScript используют статические методы, например:
   - `Array.isArray([])` — проверяет, является ли аргумент массивом.
   - `Object.keys(obj)` — возвращает массив ключей объекта.

### Особенности статических методов
1. **Отсутствие доступа к `this` экземпляра**: Статические методы не могут обращаться к свойствам или методам экземпляра напрямую.
   ```javascript
   class Example {
     constructor(value) {
       this.value = value;
     }
     static getValue() {
       return this.value; // undefined (this — это класс Example)
     }
   }
   ```
2. **Доступ к другим статическим членам**: Внутри статического метода `this` ссылается на класс, что позволяет вызывать другие статические методы или свойства.
   ```javascript
   class Example {
     static data = 42;
     static getData() {
       return this.data;
     }
   }
   console.log(Example.getData()); // 42
   ```
3. **Наследование**: Статические методы наследуются дочерними классами через `extends`.
   ```javascript
   class Parent {
     static say() {
       return "Hello from Parent";
     }
   }
   class Child extends Parent {}
   console.log(Child.say()); // Hello from Parent
   ```
4. **Ограничения**: Статические методы нельзя переопределить в экземплярах, и они не участвуют в цепочке прототипов экземпляров.
5. **Совместимость**: Статические свойства (с `static` вне методов) официально поддерживаются с ES2022, но до этого использовались как обычные свойства класса.

### Best Practices
1. **Используйте для утилитных функций**:
   Статические методы идеальны для функций, не требующих состояния экземпляра.
   ```javascript
   class DateUtils {
     static formatDate(date) {
       return date.toISOString().split("T")[0];
     }
   }
   console.log(DateUtils.formatDate(new Date())); // 2025-08-09
   ```
2. **Называйте статические методы понятно**: Используйте имена, отражающие их назначение, например, `create`, `parse`, `isValid`.
3. **Избегайте хранения состояния в статических свойствах**: Это может привести к трудно отслеживаемым ошибкам в больших приложениях.
   ```javascript
   // Плохо:
   class Counter {
     static count = 0;
     static increment() {
       return ++this.count;
     }
   }
   // Лучше использовать модули или замыкания для состояния
   ```
4. **Документируйте статические методы**:
   ```javascript
   /**
    * Calculates the square of a number
    * @param {number} num - The number to square
    * @returns {number} The squared value
    */
   class MathUtils {
     static square(num) {
       return num * num;
     }
   }
   ```
5. **Используйте статические методы для фабрик**:
   ```javascript
   class User {
     constructor(name) {
       this.name = name;
     }
     static fromJSON(json) {
       return new User(JSON.parse(json).name);
     }
   }
   const user = User.fromJSON('{"name": "Alice"}');
   ```
6. **Не злоупотребляйте статическими методами**: Если метод зависит от данных экземпляра, сделайте его обычным методом.
7. **Проверяйте входные данные**:
   ```javascript
   class StringUtils {
     static capitalize(str) {
       if (typeof str !== "string") {
         throw new Error("Input must be a string");
       }
       return str.charAt(0).toUpperCase() + str.slice(1);
     }
   }
   ```
8. **Избегайте изменения встроенных классов**: Не добавляйте статические методы в `Array`, `Object` и т.д., чтобы избежать конфликтов.
9. **Тестируйте статические методы**: Поскольку они не зависят от экземпляров, их легко тестировать изолированно.

### Пример с Best Practices
```javascript
/**
 * Utility class for geometric calculations
 */
class Geometry {
  /**
   * Calculates the area of a circle
   * @param {number} radius - The radius of the circle
   * @returns {number} The area
   */
  static circleArea(radius) {
    if (typeof radius !== "number" || radius < 0) {
      throw new Error("Radius must be a non-negative number");
    }
    return this.PI * radius ** 2;
  }

  /**
   * Constant for PI
   * @type {number}
   */
  static PI = 3.14159;

  /**
   * Creates a circle object
   * @param {number} radius - The radius of the circle
   * @returns {Object} Circle object
   */
  static createCircle(radius) {
    return {
      radius,
      getArea: () => Geometry.circleArea(radius)
    };
  }
}

try {
  console.log(Geometry.circleArea(5)); // 78.53975
  console.log(Geometry.PI); // 3.14159
  const circle = Geometry.createCircle(10);
  console.log(circle.getArea()); // 314.159
} catch (error) {
  console.error(error.message);
}
```

### Итог
Статические методы в JavaScript — это мощный инструмент для создания утилитных функций, фабричных методов и работы с общими данными класса. Они не зависят от экземпляров, что делает их подходящими для операций, не требующих состояния объекта. Следуйте лучшим практикам: используйте понятные имена, документируйте код, проверяйте входные данные и избегайте хранения состояния в статических свойствах. Это обеспечит читаемость, надёжность и поддерживаемость кода.