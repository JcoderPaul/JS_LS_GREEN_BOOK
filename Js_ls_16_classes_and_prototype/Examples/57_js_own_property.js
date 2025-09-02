/* Возьмем пример из документации внимательно изучить раздел см. /DOC/ImportantToUnderstand/ */

/**
 * Represents a user
 * @param {string} name - User's name
 */
function User(name) {
  this.name = name;
  Object.defineProperty(this, "id", {
    value: Math.random().toString(36).slice(2),
    enumerable: false // Неперечисляемое свойство
  });
}

User.prototype.greet = function() {
  return `Hello, ${this.name}!`;
}; // Назначаем функцию "через" прототип

const user = new User("Alice"); // Создаем объект
const userTwo = new User("PainHad");
user.age = 23; // Добавим в него возраст

// Проверка свойств
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("age")); // true - задали руками 
console.log("age" in userTwo); // false - не задавали, как в user
console.log("-------------------------------------------------");

console.log(user.hasOwnProperty("greet")); // false (из прототипа)
console.log("greet" in user); // true
console.log("greet" in userTwo); // true
console.log("-------------------------------------------------");

console.log(user.propertyIsEnumerable("name")); // true
console.log(user.propertyIsEnumerable("id")); // false (неперечисляемое)
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.getOwnPropertyNames(user)); // ["name", "id", "age"]

// Безопасная итерация
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`); // name: Alice, age: 23
}