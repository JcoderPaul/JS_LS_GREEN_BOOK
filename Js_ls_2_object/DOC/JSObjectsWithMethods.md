Объекты в JavaScript могут содержать функции (методы), которые позволяют выполнять действия или вычисления. Вот несколько примеров объектов с функциями:

### Пример 1: Простой объект с методом
```javascript
const person = {
  name: "Алексей",
  age: 30,
  greet: function() {
    return `Привет, меня зовут ${this.name}!`;
  }
};

console.log(person.greet()); // Привет, меня зовут Алексей!
```

### Пример 2: Объект с несколькими методами
```javascript
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: (a, b) => a * b // Стрелочная функция как метод
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
```

### Пример 3: Объект с методом, использующим свойства
```javascript
const car = {
  brand: "Toyota",
  speed: 0,
  accelerate: function(increase) {
    this.speed += increase;
    return `${this.brand} движется со скоростью ${this.speed} км/ч`;
  },
  brake: function(decrease) {
    this.speed = Math.max(0, this.speed - decrease);
    return `${this.brand} движется со скоростью ${this.speed} км/ч`;
  }
};

console.log(car.accelerate(50)); // Toyota движется со скоростью 50 км/ч
console.log(car.accelerate(30)); // Toyota движется со скоростью 80 км/ч
console.log(car.brake(20));      // Toyota движется со скоростью 60 км/ч
```

### Пример 4: Использование `this` и сокращённый синтаксис
```javascript
const user = {
  name: "Мария",
  score: 0,
  addScore(points) { // Сокращённый синтаксис метода
    this.score += points;
    return `Очки ${this.name}: ${this.score}`;
  }
};

console.log(user.addScore(10)); // Очки Мария: 10
console.log(user.addScore(5));  // Очки Мария: 15
```

### Пример 5: Объект с методом, возвращающим другой объект
```javascript
const factory = {
  createUser: function(name, role) {
    return {
      name: name,
      role: role,
      describe: function() {
        return `${this.name} - ${this.role}`;
      }
    };
  }
};

const newUser = factory.createUser("Иван", "Админ");
console.log(newUser.describe()); // Иван - Админ
```

### Ключевые моменты:
- **Методы** — это функции, которые являются свойствами объекта.
- **this** ссылается на текущий объект, позволяя обращаться к его свойствам.
- Можно использовать **обычные функции**, **стрелочные функции** или **сокращённый синтаксис** (в ES6).
- Методы могут возвращать значения, изменять свойства объекта или создавать новые объекты.

Если нужен более сложный пример или конкретное применение, напишите!Объекты в JavaScript могут содержать функции (методы), которые позволяют выполнять действия или вычисления. 

Примеры:

### Пример 1: Простой объект с методом
```javascript
const person = {
  name: "Алексей",
  age: 30,
  greet: function() {
    return `Привет, меня зовут ${this.name}!`;
  }
};

console.log(person.greet()); // Привет, меня зовут Алексей!
```

### Пример 2: Объект с несколькими методами
```javascript
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: (a, b) => a * b // Стрелочная функция как метод
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
```

### Пример 3: Объект с методом, использующим свойства
```javascript
const car = {
  brand: "Toyota",
  speed: 0,
  accelerate: function(increase) {
    this.speed += increase;
    return `${this.brand} движется со скоростью ${this.speed} км/ч`;
  },
  brake: function(decrease) {
    this.speed = Math.max(0, this.speed - decrease);
    return `${this.brand} движется со скоростью ${this.speed} км/ч`;
  }
};

console.log(car.accelerate(50)); // Toyota движется со скоростью 50 км/ч
console.log(car.accelerate(30)); // Toyota движется со скоростью 80 км/ч
console.log(car.brake(20));      // Toyota движется со скоростью 60 км/ч
```

### Пример 4: Использование `this` и сокращённый синтаксис
```javascript
const user = {
  name: "Мария",
  score: 0,
  addScore(points) { // Сокращённый синтаксис метода
    this.score += points;
    return `Очки ${this.name}: ${this.score}`;
  }
};

console.log(user.addScore(10)); // Очки Мария: 10
console.log(user.addScore(5));  // Очки Мария: 15
```

### Пример 5: Объект с методом, возвращающим другой объект
```javascript
const factory = {
  createUser: function(name, role) {
    return {
      name: name,
      role: role,
      describe: function() {
        return `${this.name} - ${this.role}`;
      }
    };
  }
};

const newUser = factory.createUser("Иван", "Админ");
console.log(newUser.describe()); // Иван - Админ
```

### Ключевые моменты:
- **Методы** — это функции, которые являются свойствами объекта.
- **this** ссылается на текущий объект, позволяя обращаться к его свойствам.
- Можно использовать **обычные функции**, **стрелочные функции** или **сокращённый синтаксис** (в ES6).
- Методы могут возвращать значения, изменять свойства объекта или создавать новые объекты.