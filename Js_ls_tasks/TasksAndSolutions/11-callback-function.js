import brLine from "./js_border_line.js";

/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 * 2. Используйте стрелочную функцию
 */

/* 1 - Simple solution one */
setTimeout(() => console.log("Hello, world!"), 5000);

/* 2 - Simple solution two */
const helloWorld = () => console.log("Hello, world again!");
setTimeout(helloWorld, 5050);

/* 3 - Another solution */

/**
 * Print text to console with a specified delay
 * @param {String} txt 
 * @param {Integer} delay 
 */
const prnTxtWithDelay = (txt, delay) => {
        setTimeout(() => {
                console.log(txt);
                brLine();
        }, delay);
}

prnTxtWithDelay("Hi, bro...", 2000);