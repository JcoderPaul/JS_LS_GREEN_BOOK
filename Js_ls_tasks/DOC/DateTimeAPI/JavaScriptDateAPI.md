### Переменные и функции даты в JavaScript

В JavaScript для работы со временем и датами используется встроенный объект `Date`, а также современные API, такие, 
как `Temporal` (на стадии предложения, но уже частично доступен). 

Кроме того, существуют сторонние библиотеки, такие как Moment.js или date-fns, для упрощения работы с датами. 
Рассмотрим основные переменные, функции, их использование, особенности и лучшие практики.

---

### 1. Объект `Date`
Объект `Date` — основной инструмент для работы с датами и временем в JavaScript.

#### Создание объекта `Date`
```javascript
// Текущая дата и время
const now = new Date();
console.log(now); // Пример: 2025-08-12T06:50:00.000Z (в UTC)

// Дата по строке
const specificDate = new Date('2025-08-12T08:50:00');
console.log(specificDate); // 2025-08-12T06:50:00.000Z (в UTC)

// Дата по компонентам (год, месяц (0-11), день, часы, минуты, секунды, миллисекунды)
const customDate = new Date(2025, 7, 12, 8, 50, 0);
console.log(customDate); // 2025-08-12T06:50:00.000Z (в UTC)
```

**Особенности:**
- Месяцы в `Date` начинаются с **0** (январь = 0, декабрь = 11).
- Время по умолчанию в UTC, но отображается в локальной зоне при выводе.
- `new Date()` без аргументов возвращает текущую дату и время.

#### Основные методы `Date`
- **Получение компонентов времени:**
  ```javascript
  const date = new Date();
  console.log(date.getFullYear());    // 2025
  console.log(date.getMonth());       // 7 (август, 0-11)
  console.log(date.getDate());        // 12 (день месяца)
  console.log(date.getHours());       // 8 (локальное время)
  console.log(date.getMinutes());     // 50
  console.log(date.getSeconds());     // 0
  console.log(date.getMilliseconds());// 0
  console.log(date.getTime());        // 1746762600000 (timestamp в миллисекундах с 1970-01-01)
  ```
- **Установка компонентов времени:**
  ```javascript
  const date = new Date();
  date.setFullYear(2026);             // Установить год
  date.setMonth(11);                  // Установить декабрь
  date.setDate(25);                   // Установить день
  console.log(date);                  // 2026-12-25T06:50:00.000Z
  ```
- **Форматирование и преобразование:**
  ```javascript
  console.log(date.toDateString());   // Tue Aug 12 2025
  console.log(date.toTimeString());   // 08:50:00 GMT+0200 (CEST)
  console.log(date.toISOString());    // 2025-08-12T06:50:00.000Z
  console.log(date.toLocaleString()); // 12.08.2025, 08:50:00 (зависит от локали)
  ```

**Особенности:**
- Методы `get` возвращают локальное время, если не указано иное (например, `getUTC*` для UTC).
- `toISOString()` всегда возвращает строку в формате ISO (UTC).
- Работа с часовыми поясами может быть сложной, так как `Date` не предоставляет встроенных инструментов для управления ими.

#### Получение текущего времени (timestamp)
```javascript
const timestamp = Date.now(); // Текущее время в миллисекундах с 1970-01-01
console.log(timestamp); // Пример: 1746762600000
```

---

### 2. Работа с временными интервалами
Для выполнения задач по расписанию или с задержкой используются функции `setTimeout` и `setInterval`.

#### `setTimeout`
Выполняет функцию один раз после указанной задержки (в миллисекундах).

```javascript
setTimeout(() => {
  console.log('Прошло 2 секунды');
}, 2000);
```

#### `setInterval`
Выполняет функцию многократно с заданным интервалом.

```javascript
const intervalId = setInterval(() => {
  console.log('Тик каждые 1 секунду');
}, 1000);

// Остановка интервала
setTimeout(() => clearInterval(intervalId), 5000); // Остановить через 5 секунд
```

**Особенности:**
- Возвращают ID, который можно использовать для отмены (`clearTimeout`, `clearInterval`).
- Задержка не гарантирует точное время выполнения из-за однопоточной природы JS.

---

### 3. Современный API: `Temporal` (экспериментальный)
`Temporal` — новое предложение для работы с датами и временем, устраняющее недостатки `Date`. На август 2025 года оно всё ещё на стадии Stage 3, но доступно через полифиллы (например, `@js-temporal/polyfill`).

```javascript
import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString()); // 2025-08-12T08:50:00

const zonedDate = Temporal.Now.zonedDateTimeISO('Europe/Paris');
console.log(zonedDate.toString()); // 2025-08-12T08:50:00+02:00[Europe/Paris]
```

**Особенности:**
- Удобная работа с часовыми поясами и локалями.
- Иммутабельные объекты (не изменяются, а возвращают новые).
- Более интуитивный API, чем `Date`.

**Когда использовать:**
- Если нужна точная работа с датами и часовыми поясами.
- Требуется установка полифилла для полной поддержки в 2025 году.

---

### 4. Сторонние библиотеки
Для сложных задач с датами часто используют библиотеки:
- **Moment.js** (устаревает, не рекомендуется для новых проектов).
- **date-fns** (современная, модульная, легковесная).
- **Luxon** (основана на Moment.js, но современнее).

Пример с **date-fns**:
```javascript
import { format, addDays } from 'date-fns';

const date = new Date();
console.log(format(date, 'dd.MM.yyyy')); // 12.08.2025
console.log(format(addDays(date, 5), 'dd.MM.yyyy')); // 17.08.2025
```

**Особенности:**
- `date-fns` модульный, импортируйте только нужные функции.
- Поддерживает локализацию и часовые пояса (через `luxon` или дополнительные модули).
- Легче, чем Moment.js, и активно поддерживается.

---

### Особенности работы с временем
1. **Часовые пояса**:
   - Объект `Date` работает с локальным временем или UTC, но не поддерживает сложные манипуляции с часовыми поясами.
   - Для работы с часовыми поясами используйте `toLocaleString()` с опциями или библиотеки (например, Luxon).

   ```javascript
   const date = new Date();
   console.log(date.toLocaleString('ru-RU', { timeZone: 'Asia/Tokyo' }));
   // Пример: 12.08.2025, 15:50:00
   ```

2. **Иммутабельность**:
   - Объект `Date` мутабелен (методы `set*` изменяют его).
   - Для иммутабельности создавайте новый объект `Date` или используйте `Temporal`.

3. **Точность времени**:
   - `Date.now()` и `setTimeout` не гарантируют высокой точности (зависит от событийного цикла JS).
   - Для высокоточных таймеров (например, в играх) используйте `performance.now()`.

   ```javascript
   const start = performance.now();
   setTimeout(() => {
     const end = performance.now();
     console.log(`Прошло: ${end - start} мс`);
   }, 1000);
   ```

4. **Форматирование**:
   - Встроенные методы `toLocaleString()` и `toISOString()` подходят для большинства случаев.
   - Для кастомного формата используйте библиотеки (`date-fns`, `Luxon`).

---

### Best Practices

1. **Используйте `Date.now()` для текущего времени**:
   - Быстрее и проще, чем создавать `new Date().getTime()`.

2. **Обрабатывайте часовые пояса явно**:
   - Указывайте часовой пояс в `toLocaleString()` или используйте библиотеки для сложных случаев.
   - Избегайте предположений о локальном времени пользователя.

3. **Проверяйте валидность дат**:
   - Неверные даты возвращают `Invalid Date`:
     ```javascript
     const date = new Date('неверная дата');
     if (isNaN(date)) {
       console.log('Некорректная дата');
     }
     ```

4. **Избегайте Moment.js в новых проектах**:
   - Moment.js официально устарел (с 2020 года). Используйте `date-fns` или `Luxon` для современных приложений.

5. **Используйте `Temporal` для будущих проектов**:
   - Если поддержка браузеров позволяет или вы используете полифилл, `Temporal` — лучший выбор для работы с датами.

6. **Минимизируйте мутации**:
   - Вместо изменения объекта `Date` создавайте новый:
     ```javascript
     const date = new Date();
     const newDate = new Date(date);
     newDate.setDate(date.getDate() + 1);
     ```

7. **Оптимизируйте `setInterval` и `setTimeout`**:
   - Всегда сохраняйте ID таймера для возможности отмены.
   - Избегайте вложенных `setInterval`, используйте рекурсивный `setTimeout` для сложной логики:
     ```javascript
     function repeat() {
       console.log('Тик');
       setTimeout(repeat, 1000);
     }
     repeat();
     ```

8. **Локализация**:
   - Используйте `toLocaleString()` с указанием локали и часового пояса для отображения дат пользователю:
     ```javascript
     const date = new Date();
     console.log(date.toLocaleString('ru-RU', { dateStyle: 'full', timeStyle: 'short' }));
     // Пример: вторник, 12 августа 2025 г., 08:50
     ```

9. **Тестирование**:
   - Тестируйте код с датами в разных часовых поясах и локалях.
   - Используйте библиотеки вроде `jest-date-mock` для стабилизации времени в тестах.

---

### Пример: Реализация таймера
```javascript
function startTimer(duration, callback) {
  const start = Date.now();
  const timer = setInterval(() => {
    const elapsed = Date.now() - start;
    if (elapsed >= duration) {
      clearInterval(timer);
      callback();
    } else {
      console.log(`Осталось: ${Math.ceil((duration - elapsed) / 1000)} сек`);
    }
  }, 1000);
}

startTimer(5000, () => console.log('Таймер завершён!'));
```

---

### Когда что использовать
- **Простые задачи с датами**: Объект `Date` и его методы.
- **Форматирование и локализация**: `toLocaleString()` или `date-fns`.
- **Сложные манипуляции с датами/часовыми поясами**: `Temporal` (если доступно) или `Luxon`.
- **Таймеры и интервалы**: `setTimeout`, `setInterval`, `performance.now` для высокой точности.
- **Модульность и легковесность**: `date-fns` для современных приложений.