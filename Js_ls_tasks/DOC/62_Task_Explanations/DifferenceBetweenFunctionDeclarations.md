### 1. Разница между двумя вариантами объявления функций:

```javascript
function firstFunction(a, b) {
  return a + b
}

const secondFunction = function (a, b) {
  return a + b
}
```

В JavaScript существует несколько способов объявления функций, и в вашем примере показаны два из них: 
- **Function Declaration** (объявление функции)
- **Function Expression** (функциональное выражение). 

Вот основные различия:

#### **Function Declaration (Объявление функции): `function firstFunction(a, b)`**
- **Синтаксис**: Используется ключевое слово `function`, за которым следует имя функции и её параметры.
- **Хойстинг (Hoisting)**: Функция, объявленная через `function declaration`, поднимается (hoisted) в начало своей области видимости. Это значит, что вы можете вызывать функцию до её объявления в коде, и она будет работать.
- **Область видимости**: Имя функции становится доступным в той области видимости, где она объявлена.
- **Пример хойстинга**:
  ```javascript
  console.log(firstFunction(2, 3)); // Работает, возвращает 5
  function firstFunction(a, b) {
    return a + b;
  }
  ```

#### **Function Expression (Функциональное выражение): `const secondFunction = function (a, b)`**
- **Синтаксис**: Функция создаётся как выражение и присваивается переменной (в данном случае `const secondFunction`).
- **Хойстинг**: Переменная, которой присваивается функция (например, `secondFunction`), поднимается, но её значение (функция) не инициализируется до момента выполнения строки с присваиванием. Поэтому вызов функции до её объявления приведёт к ошибке.
- **Область видимости**: Функция доступна только через переменную, которой она присвоена (`secondFunction` в данном случае).
- **Пример ошибки при хойстинге**:
  ```javascript
  console.log(secondFunction(2, 3)); // Ошибка: Cannot access 'secondFunction' before initialization
  const secondFunction = function (a, b) {
    return a + b;
  };
  ```
- **Гибкость**: Функциональные выражения часто используются в ситуациях, где функция нужна как значение (например, передача в качестве аргумента другой функции или использование в замыканиях).

#### Основные различия в таблице:
| Характеристика            | Function Declaration                     | Function Expression                     |
|---------------------------|-----------------------------------------|-----------------------------------------|
| **Синтаксис**             | `function имя(параметры) { ... }`       | `const имя = function(параметры) { ... }` |
| **Хойстинг**              | Полный (функция доступна до объявления) | Только переменная поднимается, но не инициализируется |
| **Использование**         | Обычно для основных функций             | Для анонимных функций, коллбэков, замыканий |
| **Объявление в коде**     | Самостоятельная инструкция             | Присваивается переменной                |

### 2. Демонстрация разницы с дополнительным кодом

Ниже приведён пример кода, который демонстрирует разницу между `Function Declaration` и `Function Expression`, включая их поведение с хойстингом и вызовом функций.

```javascript
// Попытка вызвать функции до их объявления
console.log("Попытка вызвать firstFunction до объявления:", firstFunction(2, 3)); // Работает, выводит 5
try {
  console.log("Попытка вызвать secondFunction до объявления:", secondFunction(2, 3)); // Ошибка
} catch (e) {
  console.log("Ошибка при вызове secondFunction:", e.message); // Cannot access 'secondFunction' before initialization
}

// Объявление функций
function firstFunction(a, b) {
  return a + b;
}

const secondFunction = function (a, b) {
  return a + b;
};

// Дополнительный код: вызов функций после их объявления
console.log("Вызов firstFunction после объявления:", firstFunction(5, 10)); // Выводит 15
console.log("Вызов secondFunction после объявления:", secondFunction(5, 10)); // Выводит 15

// Дополнительный код: проверка типа и имени функции
console.log("Тип firstFunction:", typeof firstFunction); // function
console.log("Имя firstFunction:", firstFunction.name); // firstFunction
console.log("Тип secondFunction:", typeof secondFunction); // function
console.log("Имя secondFunction:", secondFunction.name); // secondFunction
```

### 3. Вызов обеих функций

В приведённом выше коде обе функции уже вызываются:
- `firstFunction(2, 3)` и `firstFunction(5, 10)` возвращают сумму `5` и `15` соответственно.
- `secondFunction(5, 10)` возвращает `15`, но вызов `secondFunction(2, 3)` до объявления вызывает ошибку из-за отсутствия хойстинга.

### Итоговый вывод программы:
```
Попытка вызвать firstFunction до объявления: 5
Ошибка при вызове secondFunction: Cannot access 'secondFunction' before initialization
Вызов firstFunction после объявления: 15
Вызов secondFunction после объявления: 15
Тип firstFunction: function
Имя firstFunction: firstFunction
Тип secondFunction: function
Имя secondFunction: secondFunction
```

### Заключение
- **Function Declaration** удобна, когда функция должна быть доступна везде в своей области видимости, благодаря хойстингу.
- **Function Expression** даёт больше гибкости, особенно для динамического создания функций или их передачи в другие функции, но требует объявления перед использованием.