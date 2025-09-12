#### Еще раз о работе со временем в JS (пример таймера).

В JavaScript работа со временем (без привязки к датам) в основном осуществляется через объект `Date` для получения 
и управления временем, а также через функции вроде `setTimeout`, `setInterval` и `performance.now()` для измерения 
и контроля временных интервалов. 

---

### 1. Методы объекта `Date` для работы со временем
Объект `Date` предоставляет методы для получения и установки компонентов времени (часы, минуты, секунды, миллисекунды).

#### Создание объекта `Date` для работы со временем
Для работы только со временем можно игнорировать дату, используя текущую дату или произвольную.

```javascript
const now = new Date();
console.log(now.getHours()); // Например, 8 (локальное время, 08:57 AM CEST)
console.log(now.getMinutes()); // 57
console.log(now.getSeconds()); // 0
console.log(now.getMilliseconds()); // Например, 123
```

#### Основные методы для времени
- **Получение компонентов времени:**
  ```javascript
  const time = new Date();
  console.log(time.getHours());        // Часы (0-23, локальное время)
  console.log(time.getMinutes());      // Минуты (0-59)
  console.log(time.getSeconds());      // Секунды (0-59)
  console.log(time.getMilliseconds()); // Миллисекунды (0-999)
  console.log(time.getUTCHours());     // Часы в UTC
  console.log(time.getUTCMinutes());   // Минуты в UTC
  console.log(time.getUTCSeconds());   // Секунды в UTC
  console.log(time.getUTCMilliseconds()); // Миллисекунды в UTC
  ```

- **Установка компонентов времени:**
  ```javascript
  const time = new Date();
  time.setHours(15);          // Установить 15:00 (локальное время)
  time.setMinutes(30);        // Установить минуты
  time.setSeconds(0);         // Установить секунды
  time.setMilliseconds(500);  // Установить миллисекунды
  console.log(time.toTimeString()); // Например, 15:30:00 GMT+0200 (CEST)
  ```

**Особенности:**
- Методы `getHours()` и `setHours()` работают с локальным временем, а `getUTCHours()` и `setUTCHours()` — с UTC.
- `toTimeString()` возвращает только временную часть строки, например: `08:57:00 GMT+0200 (CEST)`.
- Объект `Date` мутабелен, поэтому методы `set*` изменяют исходный объект.

**Использование для времени:**
Если вам нужно работать только с временем, можно игнорировать дату, но `Date` всё равно хранит её. Для чистой работы с временем (без даты) лучше использовать строки или сторонние библиотеки.

```javascript
const time = new Date();
const timeString = time.toLocaleTimeString('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
console.log(timeString); // 08:57:00
```

---

### 2. Таймеры: `setTimeout` и `setInterval`
Эти функции используются для управления временными интервалами и выполнения задач через заданное время.

#### `setTimeout`
Запускает функцию один раз после указанной задержки (в миллисекундах).

```javascript
setTimeout(() => {
  console.log('Прошло 2 секунды');
}, 2000);
```

**Особенности:**
- Задержка указывается в миллисекундах.
- Возвращает ID таймера, который можно использовать для отмены:
  ```javascript
  const timeoutId = setTimeout(() => console.log('Не выполнится'), 2000);
  clearTimeout(timeoutId); // Отмена таймера
  ```

#### `setInterval`
Повторяет выполнение функции с заданным интервалом.

```javascript
const intervalId = setInterval(() => {
  console.log('Тик каждую секунду');
}, 1000);

// Остановка через 5 секунд
setTimeout(() => clearInterval(intervalId), 5000);
```

**Особенности:**
- Запускается до явной остановки с помощью `clearInterval`.
- Задержка между вызовами не всегда точна из-за однопоточной природы JS.

**Использование:**
- `setTimeout` подходит для одноразовых задержек (например, отложенное выполнение).
- `setInterval` — для периодических задач (например, обновление таймера).

---

### 3. `performance.now()` для измерения времени
Для высокоточных измерений времени (например, для профилирования или таймеров) используется `performance.now()`.

```javascript
const start = performance.now();
setTimeout(() => {
  const end = performance.now();
  console.log(`Прошло: ${end - start} мс`); // Например, 2001.234 мс
}, 2000);
```

**Особенности:**
- Возвращает время в миллисекундах с высокой точностью (включая доли миллисекунд).
- Отсчёт начинается с момента загрузки страницы, а не от 1970 года (как `Date.now()`).
- Не зависит от системных часов, что делает его надёжным для измерений.

**Использование:**
- Для измерения времени выполнения кода или интервалов.
- Полезно в играх, анимациях или профилировании.

---

### 4. Форматирование времени
Для отображения времени в читаемом формате используется `toLocaleTimeString()`.

```javascript
const time = new Date();
console.log(time.toLocaleTimeString('ru-RU')); // 08:57:00
console.log(time.toLocaleTimeString('en-US', { hour12: true })); // 8:57:00 AM
console.log(time.toLocaleTimeString('ru-RU', {
  hour: '2-digit',
  minute: '2-digit'
})); // 08:57
```

**Особенности:**
- Поддерживает настройку формата через опции (например, 12/24-часовой формат, часовой пояс).
- Зависит от локали пользователя или указанной локали.

---

### 5. Сторонние библиотеки для работы со временем
Для более удобной работы с временем (без дат) можно использовать библиотеки, такие как **date-fns** или **Luxon**.

#### Пример с `date-fns`
```javascript
import { format, setHours, setMinutes } from 'date-fns';

const time = new Date();
const formatted = format(time, 'HH:mm:ss'); // 08:57:00
console.log(formatted);

const newTime = setHours(setMinutes(time, 30), 15); // Установить 15:30
console.log(format(newTime, 'HH:mm:ss')); // 15:30:00
```

#### Пример с `Luxon`
```javascript
import { DateTime } from 'luxon';

const time = DateTime.now();
console.log(time.toFormat('HH:mm:ss')); // 08:57:00

const newTime = time.set({ hour: 15, minute: 30, second: 0 });
console.log(newTime.toFormat('HH:mm:ss')); // 15:30:00
```

**Особенности:**
- `date-fns` лёгкий и модульный, импортируйте только нужные функции.
- `Luxon` удобен для работы с часовыми поясами и форматированием.
- Обе библиотеки проще в использовании, чем встроенный `Date` для сложных задач.

---

### 6. Экспериментальный API: `Temporal`
`Temporal` (на стадии предложения в 2025 году) предоставляет удобные методы для работы с временем без дат через `Temporal.PlainTime`.

```javascript
import { Temporal } from '@js-temporal/polyfill';

const time = Temporal.Now.plainTimeISO();
console.log(time.toString()); // 08:57:00

const newTime = time.with({ hour: 15, minute: 30 });
console.log(newTime.toString()); // 15:30:00
```

**Особенности:**
- `Temporal.PlainTime` предназначен именно для времени (без даты).
- Иммутабельный API, возвращает новые объекты.
- Поддерживает точную работу с часовыми поясами.
- Требуется полифилл для полной поддержки.

---

### Особенности работы со временем
1. **Часовые пояса**:
   - Методы `Date` (например, `getHours()`) возвращают локальное время, а `getUTCHours()` — UTC.
   - Для явной работы с часовыми поясами используйте `toLocaleTimeString()` с опцией `timeZone` или библиотеки (`Luxon`, `Temporal`).

2. **Точность таймеров**:
   - `setTimeout` и `setInterval` не гарантируют точности из-за событийного цикла JS.
   - Для высокой точности используйте `performance.now()`.

3. **Мутабельность**:
   - `Date` изменяется методами `set*`. Для иммутабельности создавайте новый объект:
     ```javascript
     const time = new Date();
     const newTime = new Date(time);
     newTime.setHours(15);
     ```

4. **Форматирование**:
   - `toLocaleTimeString()` — лучший встроенный способ для отображения времени.
   - Для сложных форматов используйте `date-fns` или `Luxon`.

---

### Best Practices

1. **Используйте `toLocaleTimeString()` для вывода времени**:
   - Указывайте локаль и опции для нужного формата:
     ```javascript
     const time = new Date();
     console.log(time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
     ```

2. **Избегайте прямых манипуляций с `Date` для сложных задач**:
   - Для работы с временем (особенно с часовыми поясами) предпочтите `Luxon` или `Temporal`.

3. **Храните ID таймеров**:
   - Всегда сохраняйте ID от `setTimeout`/`setInterval` для возможности отмены:
     ```javascript
     const timerId = setTimeout(() => console.log('Таймер'), 1000);
     clearTimeout(timerId);
     ```

4. **Используйте `performance.now()` для измерений**:
   - Для точного замера времени выполнения кода предпочтите `performance.now()` над `Date.now()`.

5. **Проверяйте валидность времени**:
   - Убедитесь, что время корректно, особенно при установке:
     ```javascript
     const time = new Date();
     time.setHours(25); // Неверное значение, корректируется
     console.log(time.getHours()); // 1 (25 - 24 = 1)
     ```

6. **Избегайте Moment.js**:
   - Moment.js устарел, используйте `date-fns` или `Luxon` для современных проектов.

7. **Минимизируйте вложенные таймеры**:
   - Для повторяющихся задач используйте рекурсивный `setTimeout` вместо `setInterval` для большей гибкости:
     ```javascript
     function tick() {
       console.log('Тик');
       setTimeout(tick, 1000);
     }
     tick();
     ```

8. **Локализация времени**:
   - Используйте `toLocaleTimeString()` с указанием локали и часового пояса:
     ```javascript
     const time = new Date();
     console.log(time.toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));
     ```

---

### Пример: Простой таймер времени

```javascript
function startTimer(seconds) {

  const start = performance.now();
  
  const intervalId = setInterval(() => {
    const elapsed = Math.floor((performance.now() - start) / 1000);
    if (elapsed >= seconds) {
      clearInterval(intervalId);
      console.log('Таймер завершён!');
    } else {
      const timeLeft = seconds - elapsed;
      console.log(`Осталось: ${timeLeft} сек`);
    }
  }, 1000);
}

startTimer(5);
```

---

### Когда что использовать
- **Получение/установка времени**: Методы `getHours()`, `setHours()` и т.д. в `Date`.
- **Форматирование времени**: `toLocaleTimeString()` или `date-fns`/`Luxon`.
- **Таймеры и интервалы**: `setTimeout`, `setInterval`, `performance.now` для точности.
- **Сложные задачи с временем**: `Temporal.PlainTime` или `Luxon`.