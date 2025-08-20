### Метод объекта. 

В JavaScript функция может быть значением свойства объекта.

Пример:

        const person = {
                name: "Алекс",
                sayHello: function() {
                        return "Привет, я " + this.name + "!";
                }
        };

        console.log(person.sayHello()); // Вывод: Привет, я Алекс!

**Объяснение**:
- `sayHello` — свойство объекта `person`, значение которого — функция.
- Внутри функции используется `this` для доступа к свойству `name` объекта.
- Вызов метода: `person.sayHello()`.

**Короткий синтаксис (ES6)**:

        const person = {
                name: "Алекс",
                sayHello() {
                        return "Привет, я " + this.name + "!";
                }
        };

        console.log(person.sayHello()); // Вывод: Привет, я Алекс!

Здесь `sayHello` записан без ключевого слова `function`, что является более лаконичным способом в ES6.
