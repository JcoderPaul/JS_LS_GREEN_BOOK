// А теперь бойтесь - объявляем функцию:
function may_be_problem() {
        console.log("Hello world!")
}

may_be_problem() // Вызов, вывод - Hello world!

may_be_problem = 10 // Пока все нормально

// may_be_problem() // А вот тут уже будут проблемы: TypeError: a is not a function

// ------ Частичным "решением" может быть - "стрелочная функция" ------ //

// Рекомендованное оформление функции, хотя и вышеуказанное будет работать
const not_a_problem = () => {
        console.log("Hello world again!")
}

not_a_problem() // Вызов, вывод.

not_a_problem = 10 // Бросок исключения уже тут - TypeError: Assignment to constant variable.