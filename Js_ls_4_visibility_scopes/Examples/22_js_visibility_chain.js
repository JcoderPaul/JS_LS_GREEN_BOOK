function createCounter() {      // Объявили функцию
  let count = 0;        // Объявили переменную видимую внутри createCounter, и не видимую, но доступную в return функции          
  return function() {   // Return функция
    count++;    // Обращается к внешней переменной и инкрементит ее
    console.log(count); // Выводим в консоль результат инкремента
  };
}

const counter = createCounter();        // Переменной присваиваем значение функции
counter(); // 1
counter(); // 2
