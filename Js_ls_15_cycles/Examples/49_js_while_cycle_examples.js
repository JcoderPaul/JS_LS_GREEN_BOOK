/* Автоугадыватель случайных чисел от 1 до 10 */
let number = Math.floor(Math.random() * 10);

while (number !== 5) {
    console.log("Попробуем ещё раз:", number);
    number = Math.floor(Math.random() * 10);
}
console.log("-----------------------------------------------")

/* Управление циклом */
let i = 0;

while (i < 20) {
        i++;
        if (i % 2 === 0) continue;
        console.log(i); // нечет.
        if (i === 17) break;
}
console.log("-----------------------------------------------")