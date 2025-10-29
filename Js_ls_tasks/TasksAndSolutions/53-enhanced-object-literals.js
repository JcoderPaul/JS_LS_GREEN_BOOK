import brLine from "./js_border_line.js";

/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 * 
 * 1. Исправьте все ошибки в коде.
 * 
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта и сделать его вычисляемым свойством
 * 
 * 3. Сообщения в консоли должны быть точно такими же, как и в конце этой задачи
 * 
 * См.док.: 
 * - Динамически вычисляемые свойства: ..\JS_LS\Js_ls_2_object\DOC\DynamicallyPropertyOfObject.md
 * - Сокращенные имена свойств и методов: ..\JS_LS\Js_ls_2_object\DOC\ShortPropertyAndMethodNamesOnJS.md
 * 
 * Окончательное решение см. комментарии в самом низу проекта.
 */

/* 
Шаг 1 - Сначала проведем рефакторинг и выделим свойства возвращаемого объекта комментариями для наглядности.
Шаг 2 - Анализируем код еще раз и сравниваем выводимые сообщения в консоль с ожидаемыми - исправляем ошибки.
*/
const photosGallery = (title, dimensions, date) => {
  return {
    /* Первое свойство */
    title: title,

    /* Второе свойство, исправляем выводимую строку в консоль */
    info: function () {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
    },

    /* Третье свойство - вот оно должно быть вычисляемым */
    [dimensions]: true,

    /* Четвертое свойство */
    publishInfo: () => {
      console.log(
        `Фото "${title}" было опубликовано ${Math.floor((new Date().getTime() - date.getTime()) / 1000)} секунды назад`
      );
    },

    /* Пятое свойство */
    date: date
  }
}

/* Тут мы объект создали и добавили в него значение динамически вычисляемой составляющей ["1920x1080"]: true */
const myDogPhoto = photosGallery("My dog", "1920x1080", new Date());
console.log(myDogPhoto);
/*
Выведем созданный объект в консоль и видим 'динамически созданное разрешение':
{
  title: 'My dog',
  info: [Function: info],
  '1920x1080': true,
  publishInfo: [Function: publishInfo],
  date: 2025-08-15T12:41:34.760Z
}
*/
brLine();

const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";

myDogPhoto.info(); // Фото "My dog" имеет разрешение 1920x1080

setTimeout(() => myDogPhoto.publishInfo(), 2000); // Фото "My dog" было опубликовано 2 секунды назад

/* 
ВОПРОС: Почему метод "publishInfo" все еще имеет доступ к 
        параметрам функции "photosGallery" (например "date")?
*/

console.log(myDogPhoto[testDimension1]); // true - при создании было определено "1920x1080"
console.log(myDogPhoto[testDimension2]); // undefined - "1080x720" в выбранном объекте нет

/* Для закрепелния понимания момента обращения к элементу объекта */
console.log(myDogPhoto["format_pictures"]); // undefined - свойства 'format_pictures' в myDogPhoto нет в принципе

/* Шаг 3 - Окончательное решение после всех сокращений:

const photosGallery = (title, dimensions, date) => {
  return {
    title,
    
    info() {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
    },
    
    [dimensions]: true,
    
    publishInfo() {
      console.log(
        `Фото "${title}" было опубликовано ${Math.floor((new Date().getTime() - date.getTime()) / 1000)} секунды назад`
      );
    },
    
    date
  }
}

*/