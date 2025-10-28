import brLine from "./js_border_line.js";

/** ЗАДАЧА 52 - Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 * 2. Если второй аргумент отсутствует, параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ: Внимательно сравните свои результаты с результатами тестовых вызовов
 */

/* 1. Решение в теле функции */
function weatherForecast(city, weather){
     weather = weather !== undefined ? weather : "Отличная погода!";   
     return `Прогноз погоды для города ${city}: ${weather}`;   
}

/* 2. Решение с параметром функции по умолчанию */
function shortWeatherForecast(city, weather = "Отличная погода!") {
     return `Прогноз погоды для города ${city}: ${weather}`;   
}

console.log(weatherForecast('Dubai', 'Солнечно')) // Прогноз погоды для города Dubai: Солнечно
console.log(weatherForecast('London', 'Небольшой дождь')) // Прогноз погоды для города London: Небольшой дождь
console.log(weatherForecast('Paris')) // Прогноз погоды для города Paris: Отличная погода!
console.log(weatherForecast('Miami', '')) // Прогноз погоды для города Miami:
console.log(weatherForecast('Las Vegas', undefined)) // Прогноз погоды для города Las Vegas: Отличная погода!

brLine();

console.log(shortWeatherForecast('Dubai', 'Солнечно')) // Прогноз погоды для города Dubai: Солнечно
console.log(shortWeatherForecast('London', 'Небольшой дождь')) // Прогноз погоды для города London: Небольшой дождь
console.log(shortWeatherForecast('Paris')) // Прогноз погоды для города Paris: Отличная погода!
console.log(shortWeatherForecast('Miami', '')) // Прогноз погоды для города Miami:
console.log(shortWeatherForecast('Las Vegas', undefined)) // Прогноз погоды для города Las Vegas: Отличная погода!