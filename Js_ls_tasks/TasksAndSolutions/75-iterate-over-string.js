import brLine from "./js_border_line.js";

/** ЗАДАЧА 75 - Перебор символов строки
 *
 * 1 - Подсчитайте количество строчных гласных букв в строке.
 * 
 * Гласные буквы - a, e, i, o, u
 * 
 * См. комментарии: ..\JS_LS\Js_ls_tasks\DOC\75_Task_Explanations\75_Task_extra_explanations.md
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

/* ----- 1 - Решение ----- */
for (let char of str.toLowerCase()) {
  if (vowels.includes(char)) {
    vowelsCount++;
  }
}

/* Тест: */
console.log(vowelsCount) // 9
vowelsCount = 0; // Обнулим перед вторымрешением
brLine();

/* ----- 2 - Решение ----- */
str.split('').forEach((char) => {
  if (vowels.includes(char)) vowelsCount += 1;
});

/* Тест: */
console.log(vowelsCount) // 9